import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from 'Firebase';

const docCommentRef = collection(db, 'comments');

export const querySnapshot = await getDocs(docCommentRef);

export const queryDatas = querySnapshot.docs.map((doc) => doc.data());

export const AddCommentDoc = async (
  title: string,
  body: string,
  user_id: string,
  track_id: string
) => {
  await addDoc(docCommentRef, {
    title,
    body,
    user_id,
    track_id,
    timpstamp: serverTimestamp(),
  });
};
