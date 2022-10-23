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

type Props = { lists: string[], tracks: Track[] };

const HeaderLinks: FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  // 競技場データを配列に保持する
  const tracks = trackData;

  // ユーザーの入力キーワードをState化する
  const [searchKeyword, updateSearchKeyword] = useState('');

  // 入力イベントに反応してStateを更新する
  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    // 入力キーワードをstateに格納する
    updateSearchKeyword(event.currentTarget.value);
  };

  const filteredList = tracks.filter((item) => {
    // ユーザー入力を安全に正規表現にする（このときすべて小文字化で正規化する）
    const escapedText = escapeStringRegexp(searchKeyword.toLowerCase());
    // 小文字で比較して部分一致するものだけを残す
    return new RegExp(escapedText).test(item.name.toLowerCase());
  });

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
          競技場検索
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
          onInput={onInput}
          placeholder="競技場名を入れて下さい"
        />
        
          {filteredList.map((track) => {
            return track && <ul key={track.id} className="list">
                <li >{track.name}</li>
                <li >{track.site_url}</li>
                <li >{track.entrance_fee}</li>
        </ul>
          })}
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
