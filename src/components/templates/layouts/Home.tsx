import type { FC } from 'react';
import { Heading, Container, Box } from '@chakra-ui/react';
import { prefectureData } from 'data';
import { Helmet } from 'react-helmet-async';
import TrackIndex from 'components/organisms/tracks/TrackIndex';
import SiteOutline from 'components/organisms/layouts/SiteOutline';
import PrefectureImage from 'components/organisms/global/PrefectureImage';
const title = '競技場検索';

const Home: FC = () => {
  return (
    <Container centerContent={true}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box>
        <SiteOutline my={10} />
        <TrackIndex prefectures={prefectureData} />
      </Box>
      <Box>
        <PrefectureImage props={{ image: '554.png' }} />
      </Box>
    </Container>
  );
};

export default Home;
