import { useState, useEffect, FC, SyntheticEvent } from 'react';
import {
  Box,
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
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from 'Firebase';

type FirebaseCommentProps = {
  id: string;
  title: string;
  content: string;
};

type UserCollectionProps = {
  user_id?: string;
};

const UserCommentCollection: FC<UserCollectionProps> = ({ user_id = '' }) => {
  const [comments, setComments] = useState<FirebaseCommentProps[]>([]);
  useEffect(() => {
    // usersコレクションを参照する
    const usersCollectionRef = collection(db, 'users', user_id, 'comments');
    // 変更をリアルタイムで検知してusersを変更する
    const unsub = onSnapshot(usersCollectionRef, (querySnapshot) => {
      setComments(
        querySnapshot.docs.map((doc) => ({
          ...(doc.data() as FirebaseCommentProps),
          id: doc.id,
        }))
      );
    });

    return unsub;
  }, []);

  const handleSubmitComment = async (
    event: SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // const target = event.target as typeof event.target & {
    //   title: { value: string };
    //   content: { value: string };
    // };

    // const usersCollectionRef = collection(db, 'users', user_id, 'comments');
    // const documentRef = await addDoc(usersCollectionRef, {
    //   title: target.title.value,
    //   content: target.content.value,
    //   timpstamp: serverTimestamp(),
    // });
  };

  const deleteComment = async (id: string) => {
    const userDocumentRef = doc(db, 'users', user_id, 'comments', id);
    await deleteDoc(userDocumentRef);
  };

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>コメント情報</TableCaption>
          <Thead>
            <Tr>
              <Th>タイトル</Th>
              <Th>内容</Th>
            </Tr>
          </Thead>
          {comments.map((comment) => (
            <Tbody key={comment.id}>
              <Tr>
                <Td>
                  <Link to={comment.id}>{comment.title}</Link>
                </Td>
                <Td>{comment.content}</Td>
                <Td onClick={async () => await deleteComment(comment.id)}>
                  削除
                </Td>
              </Tr>
            </Tbody>
          ))}
          <Tfoot>
            <Tr>
              <Th>タイトル</Th>
              <Th>内容</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <form onSubmit={handleSubmitComment}>
        <div>
          <label>タイトル</label>
          <input name="title" type="text" placeholder="title" />
        </div>
        <div>
          <label>コンテンツ</label>
          <input name="content" type="text" placeholder="content" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </Box>
  );
};

export default UserCommentCollection;
