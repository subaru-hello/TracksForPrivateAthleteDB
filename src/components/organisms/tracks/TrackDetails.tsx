import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
  Heading,
  Container,
  Stack,
  Button,
  Text,
  Divider,
  ButtonGroup,
} from '@chakra-ui/react';
import { trackData } from 'data';
import ForPublickDate from 'components/templates/tracks/ForPublicDate';
import HomeButton from 'components/organisms/layouts/HomeButton';
import { Card, CardBody, CardFooter } from '@chakra-ui/card';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import TrackImages from 'components/ecosystems/tracks/TrackImages';

const TrackDetail: FC = () => {
  const { trackID = '' } = useParams();
  const trackDetail = trackData.filter((track) => track.id === trackID);

  return (
    <Container centerContent={true}>
      {trackDetail.map((track) => (
        <Card key={track.id}>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md"> {track.name}</Heading>
              <TrackImages />
              <Text as="span">場所{track.address}</Text>

              <Text as="span" ml={2}>
                開放時間 {track.open_hour ?? '不明'}
              </Text>
              <Text as="span" ml={2}>
                入場料: {track.entrance_fee ?? '不明'}円
              </Text>
              <p>
                <a href={track.site_url} target="_blank" rel="noreferrer">
                  サイトURL: {track.site_url}
                  <ExternalLinkIcon mx="2px" />
                </a>
              </p>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="outline" colorScheme="teal">
                よく行く競技場に追加する
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
      <ForPublickDate />
    </Container>
  );
};

export default TrackDetail;
