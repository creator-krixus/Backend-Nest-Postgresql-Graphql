import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(() => Int)
  code: number;
}
