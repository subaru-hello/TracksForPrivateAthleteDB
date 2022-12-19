import { db } from 'Firebase';
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

const docCommentRef = collection(db, 'comments');

export const querySnapshot = await getDocs(docCommentRef);

export const queryDatas = querySnapshot.docs.map((doc) => doc.data());

export const AddCommentDoc = async (
  title: string,
  body: string,
  user_id: string,
  track_id: string
) => {
  const documentRef = await addDoc(docCommentRef, {
    title: title,
    body: body,
    user_id: user_id,
    track_id: track_id,
    timpstamp: serverTimestamp(),
  });
};
