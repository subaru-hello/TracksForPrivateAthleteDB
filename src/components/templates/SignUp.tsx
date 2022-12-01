import type { FC } from 'react';
import { auth } from 'Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Container, Box } from '@chakra-ui/react';

export const SignUp: FC = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value);
  };

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
          <button>登録</button>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
