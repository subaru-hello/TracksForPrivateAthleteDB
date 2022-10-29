import type { FC } from 'react';
import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  Text,
  Flex,
  Container,
  List,
} from '@chakra-ui/react';
// import type { Track } from 'domains';
import { Track } from 'domains';
import { trackData } from 'data';
type Props = {
  track_mock: Track[];
  color?: string;
  isLoading?: boolean;
};

// useEffectでデータを取得するモックを作成した
const TrackMockList: FC<Props> = ({ track_mock = [] }) => {
  console.log([track_mock]);
  return (
    <Box>
      <Heading as="h2" size="lg">
        全国の競技場(外部APIからデータをフェッチ)
      </Heading>
      <UnorderedList mt={8} spacing={2}>
        {trackData.map((track) => {
          return (
            <List my={10}>
              <ListItem key={track.id}>
                <Flex>
                  <Container>
                    <Text>{track.name}</Text>
                    <Text>{track.address}</Text>
                  </Container>
                </Flex>
              </ListItem>
            </List>
          );
        })}
      </UnorderedList>
    </Box>
  );
};

export default TrackMockList;
