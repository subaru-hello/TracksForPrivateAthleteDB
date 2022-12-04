import type { FC } from 'react';
import { useState } from 'react';
import { Container, Box, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from 'Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthProvider } from 'auth/AuthProvider';

export const Login: FC = () => {
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
        console.log(result);
        navigate('/');
      })
      .catch((error) => {
        setAuthenticating(false);
        setError(error.mesasage);
      });
  };

  return (
    <AuthProvider>
      <Container>
        <Box>Login</Box>
        <form onSubmit={SignInWithEmailAndPassword}>
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input
              id="emailSignIn"
              name="email"
              type="email"
              placeholder="email"
              autoComplete="on"
            />
          </div>
          <div>
            <label htmlFor="password">パスワード</label>
            <input
              id="passwordSignIn"
              name="password"
              type="password"
              autoComplete="on"
            />
          </div>
          <div>
            <button disabled={authenticating}>ログイン</button>
          </div>
        </form>
        <Link to="/signup">アカウントを持っていない方はこちら</Link>
        <Button>パスワードを忘れた方はこちら</Button>
      </Container>
    </AuthProvider>
  );
};

export default Login;
