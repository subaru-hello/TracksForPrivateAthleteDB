import { useState, useEffect, FC, SyntheticEvent } from 'react';
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { Comment } from 'domains';
import { db } from 'Firebase';
import { Link, Outlet } from 'react-router-dom';
import {
  List,
  ListItem,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

interface IFirebaseProps {
  track_id: String;
  user_id: String;
};

const InitialState: Comment = {
  id: '',
  title: '',
  body: '',
  user_id: '',
  track_id: '',
};

const TrackComment: FC<IFirebaseProps> = (props) => {
  console.log(props);
  const [comment, setComment] = useState<Comment>(InitialState);

  // トラックに紐づくコメント一覧を取得する
  // useEffect(() => {}, []);

  // あるユーザーがコメントを作成する
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
        <div>
          <label>タイトル</label>
          <input name="title" type="text" placeholder="title" />
        </div>
        <div>
          <label>内容</label>
          <input name="body" type="text" placeholder="body" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </Box>
  );
};

export default TrackComment;
