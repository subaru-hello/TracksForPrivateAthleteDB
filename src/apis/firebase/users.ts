import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'Firebase';
import { User } from 'domains';

// query用のコレクション
const q = collection(db, 'users');
// mutation用のコレクション
// const m = (id: string) => collection(db, 'users', id);

const mutateDoc = (id: string) => doc(db, 'users', id);

const getUser = (email?: string | null | undefined) =>
  query(q, where('email', '==', email));

export const getCurrentUser = async (email?: string | null | undefined) =>
  await getDocs(getUser(email));

/**
 * プロフィール画像を紐付ける
 */
export const updateProfileImage = async ({
  id,
  name,
  key,
}: {
  id: string;
  key: string;
  name: string;
}) =>
  await updateDoc(mutateDoc(id), {
    profileImg: {
      key: key,
      fileName: name,
    },
  });

export const updateProfile = async ({
  id,
  firstName,
  lastName,
}: {
  id: string;
  firstName: string;
  lastName: string;
}) =>
  await updateDoc(mutateDoc(id), {
    firstName: firstName,
    lastName: lastName,
  });
