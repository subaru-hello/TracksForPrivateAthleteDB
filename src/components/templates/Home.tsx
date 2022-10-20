import type { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { prefectureData } from 'data';
import { Helmet } from 'react-helmet-async';
import TrackIndex from 'components/organisms/TrackIndex';
import SiteOutline from 'components/organisms/SiteOutline';
import TrackList from 'components/TrackList';

const title = '競技場検索';

const Home: FC = () => (
  <Box maxW="3xl">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Heading as="h1" size="xl" my={4}>
      {title}
    </Heading>
    <SiteOutline my={10} />
    <TrackList prefectures={prefectureData} />
  </Box>
);

export default Home;
