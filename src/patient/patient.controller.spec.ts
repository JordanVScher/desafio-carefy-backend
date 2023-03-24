import { Test, TestingModule } from '@nestjs/testing';
import { PatientServiceInterface } from './interfaces/patient.service.interface';
import { createPatientMock } from './mocks/create-patient.mock';
import { PatientMock } from './mocks/patient.mock';
import { PatientServiceMock } from './mocks/patient.service.mock';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';

describe('PatientController', () => {
  let controller: PatientController;
  let service: PatientServiceInterface;
  const serviceMock = new PatientServiceMock();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PatientService,
          useValue: {
            create: jest.fn().mockImplementation(serviceMock.create),
            findOne: jest.fn().mockImplementation(serviceMock.findOne),
            remove: jest.fn().mockImplementation(serviceMock.remove),
          },
        },
      ],
      controllers: [PatientController],
    }).compile();

    controller = module.get<PatientController>(PatientController);
    service = new PatientServiceMock();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('create should call service', async () => {
      const data = await controller.create(createPatientMock);

      expect(data.name).toBe(PatientMock.name);
      expect(data.email).toBe(PatientMock.email);
      expect(data.createdAt).toBe(PatientMock.createdAt);
      expect(data.updatedAt).toBe(PatientMock.updatedAt);
    });
  });

  describe('findOne', () => {
    it('findOne should call service', async () => {
      const data = await controller.findOne('123');

      expect(data.name).toBe(PatientMock.name);
      expect(data.email).toBe(PatientMock.email);
      expect(data.createdAt).toBe(PatientMock.createdAt);
      expect(data.updatedAt).toBe(PatientMock.updatedAt);
    });
  });

  describe('remove', () => {
    it('remove should call service', async () => {
      const data = await controller.remove('123');

      expect(data.name).toBe(PatientMock.name);
      expect(data.email).toBe(PatientMock.email);
      expect(data.createdAt).toBe(PatientMock.createdAt);
      expect(data.updatedAt).toBe(PatientMock.updatedAt);
    });
  });
});
