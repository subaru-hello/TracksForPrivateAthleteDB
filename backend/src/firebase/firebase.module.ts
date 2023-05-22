// firebase.module.ts
import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { UserResolver } from './user/user.service';

@Module({
  providers: [FirebaseService, UserResolver],
  exports: [FirebaseService, UserResolver],
})
export class FirebaseModule {}
