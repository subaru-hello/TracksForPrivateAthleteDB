import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, List, Flex, Button, ButtonGroup } from '@chakra-ui/react';
import type { Prefecture } from 'domains';

type Props = { prefectures: Prefecture[]; my?: number | string };

const TrackIndex: FC<Props> = ({ prefectures }) => {
  return (
    <Flex alignItems="center">
      <List mt={8} spacing={2}>
        <ListItem>
          <Link to={`/tracks`}>
            <Button colorScheme="teal" variant="outline">
              全国の競技場
            </Button>
          </Link>
        </ListItem>
        {prefectures.map((prefecture) => (
          <ButtonGroup gap="2" key={prefecture.id} p={2}>
            <Link to={`/tracks/${prefecture.id}`}>
              <Button colorScheme="teal" variant="outline">
                {prefecture.name}
              </Button>
            </Link>
          </ButtonGroup>
        ))}
      </List>
    </Flex>
  );
};

export default TrackIndex;
