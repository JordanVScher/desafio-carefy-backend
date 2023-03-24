import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePatientDto } from './dto/update-patient.dto';
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
            findMany: jest.fn().mockImplementation(serviceMock.findMany),
            remove: jest.fn().mockImplementation(serviceMock.remove),
            update: jest.fn().mockImplementation(serviceMock.update),
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

  describe('findMany', () => {
    it('findMany should call service', async () => {
      const data = await controller.findMany({ page: 1, limit: 10 });

      expect(data[0].name).toBe(PatientMock.name);
      expect(data[0].email).toBe(PatientMock.email);
      expect(data[0].createdAt).toBe(PatientMock.createdAt);
      expect(data[0].updatedAt).toBe(PatientMock.updatedAt);
    });
  });

  describe('update', () => {
    it('update should call service', async () => {
      const data = await controller.update('123', {
        name: 'foobar',
        email: 'bar@foo.com',
      });

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
