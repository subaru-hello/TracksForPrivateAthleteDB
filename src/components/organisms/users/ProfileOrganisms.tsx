import { useState, useEffect, FC } from 'react';
import {
  Button,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  Center,
  Container,
  Box,
  Text,
} from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { collection, DocumentData, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth, db } from 'Firebase';
import Profile from 'components/organisms/users/Profile';

const InitialState: DocumentData = {
  id: '',
  name: '',
  email: '',
  admin: false,
};

// type Props = {
//   email: '' | null;
// };

const ProfileOrganism: FC<{ email: string | null | undefined }> = ({
  email,
}) => {
  // const usersCollectionRef = collection(db, 'users');
  const [user, setUser] = useState<DocumentData>(InitialState);
  useEffect(() => {
    const usersCollectionRef = collection(db, 'users');
    // 変更をリアルタイムで検知してusersを変更する
    const unsub = onSnapshot(usersCollectionRef, (querySnapshot) => {
      const queryDatas = querySnapshot.docs.map((doc) => doc.data());
      const matchedUser = queryDatas.filter((data) => data.email === email);
      // usersコレクションを参照する
      setUser(matchedUser[0]);
    });

    return unsub;
  }, []);

  // ログアウトしたらログインページへリダイレクトさせる
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'ログアウトしました',
          showConfirmButton: false,
          timer: 1000,
        });
        navigate('/login');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          <Text align={'center'} p={2}>
            基本情報
          </Text>
        </Heading>
        <Box id="userName">
          <Center>
            <Profile />
          </Center>
        </Box>
        <Flex id="firstName" justifyContent={'center'}>
          <Text as="b" fontSize="2xl" mx={1}>
            {user.firstName}
          </Text>
          <Text as="b" fontSize="2xl" mx={1}>
            {user.lastName}
          </Text>
        </Flex>
        <Container id="Email" centerContent={true}>
          <Box>{user.email}</Box>
        </Container>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'teal.300'}
            colorScheme="teal"
            color={'white'}
            w={'full'}
            _hover={{
              bg: 'teal.400',
            }}
          >
            編集
          </Button>
        </Stack>
        <Button
          bg={'red.400'}
          color={'white'}
          w={'full'}
          _hover={{
            bg: 'red.500',
          }}
          onClick={handleLogout}
        >
          ログアウト
        </Button>
      </Stack>
    </Flex>
  );
};

export default ProfileOrganism;
