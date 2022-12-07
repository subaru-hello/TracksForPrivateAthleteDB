import type { FC } from 'react';
import { Container, Box } from '@chakra-ui/react';
import { prefectureData } from 'data';
import { Helmet } from 'react-helmet-async';
import TrackIndex from 'components/organisms/tracks/TrackIndex';
import SiteOutline from 'components/organisms/layouts/SiteOutline';
import Calender from 'components/organisms/Calender';
const title = '競技場検索';

const Home: FC = () => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box>
        <SiteOutline my={10} />
        <TrackIndex prefectures={prefectureData} />
      </Box>
      <Calender />
    </Container>
  );
};

export default Home;
