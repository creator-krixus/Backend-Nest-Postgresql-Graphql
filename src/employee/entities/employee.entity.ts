import { Project } from './../../project/entities/project.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee {
  @Field(() => String, { description: 'id of the user' })
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  firstName: string;
  @Field()
  @Column()
  lastName: string;
  @Field()
  @Column()
  designation: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;

  @ManyToOne(() => Project, (project) => project.employees)
  @Field(() => Project, { nullable: true })
  project: Project;

  @Column({ nullable: true })
  @Field({ nullable: true })
  projectId: string;
}
