import { Field, InputType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class EmployeeCreateDTO {
  @Field(() => String, { description: 'id of the user' })
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  designation: string;
  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  projectId: string;
}
