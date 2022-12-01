import { useState, useEffect, FC } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from 'Firebase';
// import { Link, useParams } from 'react-router-dom';
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
// } from '@chakra-ui/react';

type Props = {
  id: string;
};

// // useParamを使ってidへ流し込む作業を親ファイルで行う

const UserCollectionShow: FC<Props> = () => {
  //   const [user, setUser] = useState({});
  //   const { userID = ' ' } = useParams();
  //   useEffect(() => {
  //     const usersCollectionRef = collection(db, 'users', userID);
  //     console.log(userID);
  //     getDocs(usersCollectionRef).then((documentSnapshot) => {
  //       if (documentSnapshot.exists()) {
  //         setUser(documentSnapshot.data());
  //       } else {
  //         console.log('No such document!');
  //       }
  //     });
  //   }, []);

  return (
    <></>
    //     <TableContainer>
    //       <Table variant="simple">
    //         <TableCaption>ユーザー情報</TableCaption>
    //         <Thead>
    //           <Tr>
    //             <Th>名前</Th>
    //             <Th>メールアドレス</Th>
    //           </Tr>
    //         </Thead>
    //         <Tbody>
    //           <Tr>
    //             <Td>{user.name}</Td>
    //             <Td>{user.email}</Td>
    //           </Tr>
    //         </Tbody>
    //         <Tfoot>
    //           <Tr>
    //             <Th>name</Th>
    //             <Th>email</Th>
    //           </Tr>
    //         </Tfoot>
    //       </Table>
    //     </TableContainer>
  );
};

export default UserCollectionShow;
