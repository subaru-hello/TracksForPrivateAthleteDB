import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, ListItem, List } from '@chakra-ui/react';
import type { Prefecture } from 'domains';

type Props = { prefectures: Prefecture[]; my?: number | string };

const TrackIndex: FC<Props> = ({ prefectures, my = 0 }) => {
  return (
    <Box my={my}>
      <Heading as="h2" size="lg">
        全国の競技場
      </Heading>
      <List mt={8} spacing={2}>
        {prefectures.map((prefecture) => (
          <ListItem key={prefecture.id}>
            <Link to={`/tracks/${prefecture.id}`}>
              {prefecture.name}の競技場
            </Link>
          </ListItem>
        ))}
        <ListItem>
          <Link to={`/tracks`}>すべての競技場（料金順）</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default TrackIndex;
