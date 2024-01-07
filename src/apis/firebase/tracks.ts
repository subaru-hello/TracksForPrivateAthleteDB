import { collection, getDocs } from 'firebase/firestore';
import { db } from 'Firebase';

const docCommentRef = collection(db, 'tracks');
export const querySnapshot = await getDocs(docCommentRef);
