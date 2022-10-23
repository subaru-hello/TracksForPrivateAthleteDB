import type { FC } from 'react';
import { useState } from 'react';
import escapeStringRegexp from 'escape-string-regexp';
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
import { Link } from 'react-router-dom';
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import { trackData } from 'data';
import { Track } from 'domains';

type Props = { lists: string[] };

const HeaderLinks: FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

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
          <Link to="/">競技場検索</Link>
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
        <Link to="/tracks">競技場一覧</Link>
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
        <Button
          variant="outline"
          _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
        >
          アカウント登録
        </Button>
      </Box>
    </Flex>
  );
};

export default HeaderLinks;
