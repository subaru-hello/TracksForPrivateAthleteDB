import * as admin from 'firebase-admin';
import serviceAccountJson from './keys/Firebase.json';
const serviceAccount = serviceAccountJson as admin.ServiceAccount;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
