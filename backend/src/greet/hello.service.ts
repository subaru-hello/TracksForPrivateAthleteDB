import { Query, Resolver } from '@nestjs/graphql';
import { HelloModel } from './hello.model';
@Resolver(() => HelloModel)
export class HelloService {
  @Query(() => [HelloModel], { name: 'GetHello', nullable: true })
  async getFixedhello() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }
}
