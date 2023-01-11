import { db } from 'Firebase';
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

const docCommentRef = (id: string) => collection(db, 'users', id);

export const querySnapshot = await getDocs(docCommentRef);

export const queryDatas = querySnapshot.docs.map((doc) => doc.data());
