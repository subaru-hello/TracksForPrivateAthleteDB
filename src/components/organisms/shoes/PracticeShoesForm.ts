import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { PracticeShoes } from 'domains';
import { db } from 'Firebase';

interface IShoesProps {
  shoes_id: String;
  user_id: String;
}

const InitialState: PracticeShoes = {
  id: '',
  user_id: '',
  shoes_id: '',
};

export const PracticeShoesForm = async (props: IShoesProps) => {
  console.log(props);

  const commentsCollectionRef = collection(db, 'practice_shoes');
  const documentRef = await addDoc(commentsCollectionRef, {
    user_id: props.user_id,
    shoes_id: props.shoes_id,
    timpstamp: serverTimestamp(),
  });
};
