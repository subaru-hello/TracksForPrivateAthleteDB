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
import type { Track } from 'domains';

type Props = {
  trackData: Track[];
};

const TrackMockList: FC<Props> = ({ trackData = [] }) => {
  return (
    <Box>
      <Heading as="h2" size="lg">
        全国の競技場(外部APIからデータをフェッチ)
      </Heading>

      <Flex>
        <Container>
          <UnorderedList mt={8} spacing={2}>
            {trackData.map((track) => (
              <List my={10} key={track.id}>
                <ListItem>
                  <Text>{track.name}</Text>
                  <Text>{track.address}</Text>
                </ListItem>
              </List>
            ))}
          </UnorderedList>
        </Container>
      </Flex>
    </Box>
  );
};

export default TrackMockList;
