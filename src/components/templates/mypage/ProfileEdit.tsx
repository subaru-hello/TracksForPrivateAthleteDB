import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { AuthContext } from 'auth/AuthProvider';
import { useContext, useState, useEffect, useRef } from 'react';
import { db } from 'Firebase';
import {
  collection,
  doc,
  DocumentData,
  onSnapshot,
  QueryDocumentSnapshot,
  updateDoc,
} from 'firebase/firestore';

const InitialState: DocumentData = {
  id: '',
  name: '',
  email: '',
  admin: false,
};

const ProfileEdit = (): JSX.Element => {
  const [user, setUser] = useState<DocumentData>(InitialState);
  const { currentUser } = useContext(AuthContext);
  const refInputFirstName = useRef<HTMLInputElement>(null);
  const refInputLastName = useRef<HTMLInputElement>(null);
  const refInputEmail = useRef<HTMLInputElement>(null);
  const refInputPassword = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const usersCollectionRef = collection(db, 'users');
    // 変更をリアルタイムで検知してusersを変更する
    const unsub = onSnapshot(usersCollectionRef, (querySnapshot) => {
      const queryDatas = querySnapshot.docs.map((doc) => doc.data());
      if (currentUser) {
        const matchedUser = queryDatas.filter(
          (data) => data.email === currentUser.email
        );
        setUser(matchedUser[0]);
      }
      // usersコレクションを参照する
    });
    return unsub;
  }, []);
  const updateUserInfo = (id: string) => {
    console.log(id);
    // const userDocumentRef = doc(db, 'users', id);
    // const firstName = refInputFirstName.current!.value
    // const lastName = refInputLastName.current!.value
    // const email = refInputEmail.current!.value
    // const password = refInputPassword.current!.value
    // console.log(userDocumentRef)
    // console.log(firstName, lastName, email, password)
    // await updateDoc(userDocumentRef, {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password: password,
    // });
  };

  return (
    <Flex
      minH={'100vh'}
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
          User Profile Edit
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="firstName" isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            placeholder={user.firstName}
            _placeholder={{ color: 'gray.500' }}
            type="text"
            ref={refInputFirstName}
          />
        </FormControl>
        <FormControl id="lastName" isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder={user.lastName}
            _placeholder={{ color: 'gray.500' }}
            type="text"
            ref={refInputLastName}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder={user.email}
            _placeholder={{ color: 'gray.500' }}
            type="email"
            ref={refInputEmail}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
            ref={refInputPassword}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}
          >
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            onClick={() => updateUserInfo(user.uid)}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ProfileEdit;
