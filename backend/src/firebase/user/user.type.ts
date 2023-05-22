// user/user.type.ts
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field()
  uid: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  displayName?: string;

  @Field({ nullable: true })
  photoURL?: string;
}
