import type { FC } from 'react';
import {
  Box,
  Flex,
  List,
  ListItem,
  Spinner,
  Text,
  Input,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import TrackImages from 'components/ecosystems/tracks/TrackImages';
import type { Track } from 'domains';

import { useState } from 'react';
import escapeStringRegexp from 'escape-string-regexp';

type Props = {
  tracks: Track[];
  color?: string;
  isLoading?: boolean;
};

const TrackList: FC<Props> = ({
  tracks = [],
  color = 'teal.500',
  isLoading = false,
}) => {
  // ユーザーの入力キーワードをState化する
  const [searchKeyword, updateSearchKeyword] = useState('');

  // 入力イベントに反応してStateを更新する
  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    // 入力キーワードをstateに格納する
    updateSearchKeyword(event.currentTarget.value);
  };

  const filteredTracks = tracks.filter((item) => {
    // ユーザー入力を安全に正規表現にする（このときすべて小文字化で正規化する）
    const escapedText = escapeStringRegexp(searchKeyword.toLowerCase());
    // 小文字で比較して部分一致するものだけを残す
    return new RegExp(escapedText).test(item.furigana.toLowerCase());
  });

  return (
    <>
      <Search2Icon />
      <Input
        width="auto"
        type="text"
        onInput={onInput}
        placeholder="競技場名を入れて下さい"
      />
      {isLoading ? (
        <Flex my={14} h="20rem" justify="center" align="center">
          <Spinner size="xl" color={color} />
        </Flex>
      ) : (
        <List my={10}>
          {filteredTracks.map((track) => (
            <ListItem key={track.id} m={6}>
              <Flex>
                <TrackImages />
                <Box textAlign="left" ml={3}>
                  <Text>{track.name}</Text>
                  <Text as="span">場所{track.address}</Text>

                  <Text as="span" ml={2}>
                    {track.open_hour ?? '不明'}
                  </Text>
                  <Text as="span" ml={2}>
                    {track.entrance_fee ?? '不明'}円
                  </Text>
                  <Text as="span" ml={2}>
                    {track.site_url ?? '不明'}
                  </Text>
                </Box>
              </Flex>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default TrackList;
