// user/user.resolver.ts
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserType } from './user.type';
import { FirebaseService } from '../firebase.service';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

@Resolver((of) => UserType)
export class UserResolver {
  constructor(private firebaseService: FirebaseService) {}

  private toUserType(userRecord: UserRecord): UserType {
    return {
      uid: userRecord.uid,
      email: userRecord.email,
    };
  }

  @Query((returns) => UserType)
  async getUserDataByUid(@Args('uid') uid: string): Promise<UserType> {
    try {
      const userRecord = await this.firebaseService.getUserDataByUid(uid);
      return this.toUserType(userRecord);
    } catch (error) {
      throw new Error(`Error fetching user data: ${error.message}`);
    }
  }

  // New query to fetch all user data
  @Query((returns) => [UserType])
  async getAllUsers(): Promise<UserType[]> {
    try {
      const allUserRecords = await this.firebaseService.getAllUsers();
      return allUserRecords.map((userRecord) => this.toUserType(userRecord));
    } catch (error) {
      throw new Error(`Error fetching all user data: ${error.message}`);
    }
  }
}
