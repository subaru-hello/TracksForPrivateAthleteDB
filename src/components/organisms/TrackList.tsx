import type { FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import type { Track } from 'domains';

type Props = {
  tracks: Track[];
  color?: string;
  isLoading?: boolean;
};

const TrackList: FC<Props> = ({
  tracks = [],
  color = 'teal.500',
  isLoading = false,
}) => (
  <>
    {isLoading ? (
      <Flex my={14} h="20rem" justify="center" align="center">
        <Spinner size="xl" color={color} />
      </Flex>
    ) : (
      <List my={10}>
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
    )}
  </>
);

export default TrackList;
