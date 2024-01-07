import type { FC } from 'react';
import { ListItem, List, Button, ButtonGroup, Box } from '@chakra-ui/react';
import type { Prefecture } from 'domains';
import { Link } from 'react-router-dom';

type Props = { prefectures: Prefecture[]; my?: number | string };

const TrackIndex: FC<Props> = ({ prefectures }) => {
  return (
    <Box textAlign="center">
      <List mt={8} spacing={2}>
        <ListItem>
          <Link to={`/tracks`}>
            <Button colorScheme="teal" variant="outline">
              全国の競技場
            </Button>
          </Link>
        </ListItem>
        {prefectures.map((prefecture) => (
          <ButtonGroup gap="2" key={prefecture.id} p={1}>
            <Link to={`/tracks/${prefecture.id}`}>
              <Button colorScheme="teal" variant="outline">
                {prefecture.name}
              </Button>
            </Link>
          </ButtonGroup>
        ))}
      </List>
    </Box>
  );
};

export default TrackIndex;
