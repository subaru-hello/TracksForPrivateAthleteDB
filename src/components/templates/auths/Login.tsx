import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import type { FC } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from 'Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login: FC = () => {
  const [error, setError] = useState<string>('');
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const navigate = useNavigate();

  const SignInWithEmailAndPassword = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    if (error !== '') setError('');
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;
    setAuthenticating(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate('/');
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'ログインしました',
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        setAuthenticating(false);
        setError(error.mesasage);
      });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool{' '}
            <Link color={'blue.400'} to="/">
              features
            </Link>{' '}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={SignInWithEmailAndPassword}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  id="emailSignIn"
                  name="email"
                  placeholder="email"
                  autoComplete="on"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  id="passwordSignIn"
                  name="password"
                  type="password"
                  autoComplete="on"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'} to="/">
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  type="submit"
                  _hover={{
                    bg: 'blue.500',
                  }}
                  disabled={authenticating}
                >
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
