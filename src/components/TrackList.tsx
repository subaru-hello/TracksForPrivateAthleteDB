import type { FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

export interface Track {
  id: number;
  name: string;
  address?: string;
  open_hour: string;
  entrance_fee: number;
  site_url: string;
}

type Props = {
  prefecture: string;
  tracks: Track[];
};

const TrackList: FC<Props> = ({ prefecture, tracks }) => {
  return (
    <div>
      <Heading size="md" as="h2">
        {prefecture}
      </Heading>
      <List my={8}>
        {tracks.map((track) => (
          <ListItem key={track.id} m={6}>
            <Flex>
              <Avatar size="md" bg="teal.500" />
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
    </div>
  );
};

export default TrackList;
