import { FC, useContext } from 'react';
// import escapeStringRegexp from 'escape-string-regexp';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import { AuthContext } from 'auth/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from 'Firebase';

const HeaderLinks: FC = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  //ログアウトしたらログインページへリダイレクトさせる
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/login', { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <Link to="/">個人開放競技場検索</Link>
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        p={4}
        mt={{ base: 4, md: 0 }}
      >
        <Link to="/mock/new">競技場作成</Link>
        <Link to="/tracks/kanagawa/calender">個人開放状況</Link>
        <Link to="/tracks">競技場一覧</Link>
        <Link to="/users">ユーザー一覧</Link>
        <Search2Icon />
        <Input
          htmlSize={30}
          width="auto"
          type="text"
          placeholder="競技場名を入れて下さい"
        />
      </Stack>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          p={4}
          mt={{ base: 4, md: 0 }}
        >
          {currentUser ? (
            <Button onClick={handleLogout}>ログアウト</Button>
          ) : (
            <>
              <Link to="signup">アカウント登録</Link>
              <Link to="login">ログイン</Link>
            </>
          )}
        </Stack>
      </Box>
    </Flex>
  );
};

export default HeaderLinks;
