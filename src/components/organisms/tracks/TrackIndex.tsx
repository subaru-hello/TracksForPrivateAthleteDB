import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, List, Box, Button } from '@chakra-ui/react';
import type { Prefecture } from 'domains';

type Props = { prefectures: Prefecture[]; my?: number | string };

const TrackIndex: FC<Props> = ({ prefectures }) => {
  return (
    <Box display="flex" alignItems="center">
      <List mt={8} spacing={2}>
        <ListItem>
          <Link to={`/tracks`}>
            <Button colorScheme="teal" variant="outline">
              全国の競技場
            </Button>
          </Link>
        </ListItem>
        {prefectures.map((prefecture) => (
          <ListItem key={prefecture.id}>
            <Link to={`/tracks/${prefecture.id}`}>
              <Button colorScheme="teal" variant="outline">
                {prefecture.name}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TrackIndex;
