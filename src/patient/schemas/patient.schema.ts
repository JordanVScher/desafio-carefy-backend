import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type PatientDocument = HydratedDocument<Patient>;

@Schema({ timestamps: true })
export class Patient {
  @ApiProperty({ description: 'Patient document id', type: 'string' })
  _id: MongooseSchema.Types.ObjectId;

  @ApiProperty({ description: 'Patient name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ description: 'Patient email' })
  @Prop({ required: true })
  email: string;

  @ApiProperty({ description: 'Patient creation date' })
  @Prop()
  createdAt?: Date;

  @ApiProperty({ description: 'Patient last update date' })
  @Prop()
  updatedAt?: Date;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
