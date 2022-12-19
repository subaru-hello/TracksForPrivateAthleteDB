import { db } from 'Firebase';
import { collection, getDocs } from 'firebase/firestore';

const docCommentRef = collection(db, 'tracks');
export const querySnapshot = await getDocs(docCommentRef);
