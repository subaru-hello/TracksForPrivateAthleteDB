// firebase.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../keys/Firebase.json';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private firebaseApp: admin.app.App;

  onModuleInit() {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }

  getAdminInstance() {
    return this.firebaseApp;
  }

  async getUserDataByUid(uid: string): Promise<admin.auth.UserRecord> {
    try {
      const userRecord = await this.firebaseApp.auth().getUser(uid);
      return userRecord;
    } catch (error) {
      throw new Error(`Error fetching user data: ${error.message}`);
    }
  }
  // New method to fetch all user data
  async getAllUsers(): Promise<admin.auth.UserRecord[]> {
    const allUsers: admin.auth.UserRecord[] = [];
    let nextPageToken: string | undefined;

    do {
      const result = await this.firebaseApp
        .auth()
        .listUsers(1000, nextPageToken);
      allUsers.push(...result.users);
      nextPageToken = result.pageToken;
    } while (nextPageToken);

    return allUsers;
  }
}
