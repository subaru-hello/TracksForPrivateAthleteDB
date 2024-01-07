// import { PracticeShoes } from 'domains';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from 'Firebase';

interface IShoesProps {
  shoes_id: string;
  user_id: string;
}

// const InitialState: PracticeShoes = {
//   id: '',
//   user_id: '',
//   shoes_id: '',
// };

export const PracticeShoesForm = async (props: IShoesProps) => {
  console.log(props);

  const commentsCollectionRef = collection(db, 'practice_shoes');
  await addDoc(commentsCollectionRef, {
    user_id: props.user_id,
    shoes_id: props.shoes_id,
    timpstamp: serverTimestamp(),
  });
};
