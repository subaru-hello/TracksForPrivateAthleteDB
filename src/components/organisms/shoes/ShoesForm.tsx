import { useState, FC, SyntheticEvent } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Shoes } from 'domains';
import { db } from 'Firebase';
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';

interface IFirebaseProps {
  track_id: String;
  user_id: String;
}

const InitialState: Shoes = {
  id: '',
  name: '',
  url: '',
};

const ShoesForm: FC<IFirebaseProps> = (props) => {
  console.log(props);
  const [comment, setComment] = useState<Shoes>(InitialState);

  // あるユーザーが練習靴を作成する
  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      title: { value: string };
      body: { value: string };
    };
    const commentsCollectionRef = collection(db, 'comments');
    const documentRef = await addDoc(commentsCollectionRef, {
      title: target.title.value,
      body: target.body.value,
      user_id: props.user_id,
      track_id: props.track_id,
      timpstamp: serverTimestamp(),
    });
  };

  //あるユーザーのコメントを削除する

  //あるユーザーのコメントを更新する

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <div>
          <label>名前</label>
          <input name="title" type="text" placeholder="title" />
        </div>
        <div>
          <label>URL</label>
          <input name="body" type="text" placeholder="body" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </Box>
  );
};

export default ShoesForm;
