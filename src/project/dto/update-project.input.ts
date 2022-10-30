// import { CreateProjectInput } from './create-project.input';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateProjectInput {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  code: number;
}
