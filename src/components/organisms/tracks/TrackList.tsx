import { FC, useEffect } from 'react';
import {
  Box,
  Flex,
  List,
  ListItem,
  Spinner,
  Text,
  Input,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Card, CardFooter, CardBody } from '@chakra-ui/card';
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

const CheckLocationAndCreateLink = (track: Track) => (
  <CardFooter>
    {window.location.href.includes(track.prefectureID) ? (
      <Button colorScheme="teal" variant="outline">
        <Link to={track.id}> 詳細</Link>
      </Button>
    ) : (
      <Button colorScheme="teal" variant="outline">
        <Link to={track.prefectureID + '/' + track.id}>詳細</Link>
      </Button>
    )}
  </CardFooter>
);

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
    <Box>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width={{ base: 'full' }}
        alignItems="center"
        mt={{ base: 4, md: 0 }}
      >
        <Search2Icon />
        <Input
          type="text"
          onInput={onInput}
          placeholder="競技場名を入れて下さい"
        />
      </Stack>

      {isLoading ? (
        <Flex my={14} h="20rem" justify="center" align="center">
          <Spinner size="xl" color={color} />
        </Flex>
      ) : (
        <List>
          {filteredTracks.map((track) => (
            <ListItem key={track.id} m={6}>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
              >
                <TrackImages />

                <Stack>
                  <CardBody>
                    <Heading size="md" my={4}>
                      {track.name}
                    </Heading>
                    <Stack>
                      <Text as="span">場所{track.address}</Text>

                      <Text as="span" ml={2}>
                        {track.open_hour ?? '不明'}
                      </Text>
                      <Text as="span" ml={2}>
                        {track.entrance_fee ?? '不明'}円
                      </Text>
                      <p>
                        <a
                          href={track.site_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {track.site_url}
                          <ExternalLinkIcon mx="2px" />
                        </a>
                      </p>
                    </Stack>
                  </CardBody>

                  {CheckLocationAndCreateLink(track)}
                </Stack>
              </Card>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default TrackList;
