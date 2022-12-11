import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { db } from 'Firebase';
import type { FC, SyntheticEvent } from 'react';
import { AuthContext } from 'auth/AuthProvider';
import { useContext, useState, useEffect } from 'react';
import { auth } from 'Firebase';
import { Link, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import Swal from 'sweetalert2';

const SignUp: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>('');
  const [emailAlreadyUsed, setEmailAlreadyUsed] = useState<string>('');
  const [invalidEmail, setInvalidEmail] = useState<string>('');
  const [weakPassword, setWeakPassword] = useState<string>('');
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const navigate = useNavigate();

  console.log(error);
  useEffect(() => {}, [error]);
  const createUserAndSignUpWithEmailAndPassword = async (
    event: SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      displayName: { value: string };
      email: { value: string };
      password: { value: string };
    };
    const usersCollectionRef = collection(db, 'users');

    const displayName = target.displayName.value;
    const email = target.email.value;
    const password = target.password.value;

    // validationの追加

    await createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (currentUser) {
          updateProfile(currentUser, {
            displayName: displayName,
            photoURL: 'https://example.com/jane-q-user/profile.jpg',
          });
        }
        navigate('/');
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: '登録しました',
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        setAuthenticating(false);
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert(errorMessage);
          // setWeakPassword('パスワードは6文字以上にしてください');
        } else if (errorCode == 'auth/email-already-in-use') {
          alert('すでに使われているメールアドレスです');
          // setEmailAlreadyUsed('すでに使われているメールアドレスです');
        } else if (errorCode == 'auth/invalid-email') {
          alert('無効なメールアドレスです');
          // setInvalidEmail('無効なメールアドレスです');
        } else {
          alert(errorMessage);
          // setError('再度やり直してください');
        }
      });
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    console.log(currentUser.uid);
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            アカウント作成
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          {error}
          <form onSubmit={createUserAndSignUpWithEmailAndPassword}>
            <Stack spacing={4}>
              {/* <HStack> */}
              <Box>
                <FormControl id="lastName">
                  <FormLabel>名前</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              {/* </HStack> */}
              <FormControl id="email" isRequired>
                <FormLabel>メールアドレス</FormLabel>
                {invalidEmail}
                {emailAlreadyUsed}
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>パスワード</FormLabel>
                {weakPassword}
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'teal.400'}
                  color={'white'}
                  _hover={{
                    bg: 'teal.500',
                  }}
                  type="submit"
                  disabled={authenticating}
                >
                  新規作成
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  <Link color={'teal.400'} to="/login">
                    既に作成済みの方はこちら
                    <br />
                    ログイン
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
