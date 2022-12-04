import type { FC } from 'react';
import { useContext, useState } from 'react';
import { AuthContext } from 'auth/AuthProvider';
import { auth } from 'Firebase';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, User } from 'firebase/auth';
import { Container, Box } from '@chakra-ui/react';
export const SignUp: FC = () => {
  const [error, setError] = useState<string>('');
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate('/');
      })
      .catch((error) => {
        setAuthenticating(false);
        setError(error.mesasage);
      });
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    console.log(currentUser.uid);
  }
  return (
    <Container>
      <Box>SignUp</Box>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" name="password" type="password" />
        </div>
        <div>
          <button disabled={authenticating}>新規登録</button>
        </div>
      </form>
      <Link to="/login">既にアカウントをお持ちの方はこちら</Link>
    </Container>
  );
};

export default SignUp;
