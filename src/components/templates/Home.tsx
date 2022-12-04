import type { FC } from 'react';
import { Heading, Container } from '@chakra-ui/react';
import { prefectureData } from 'data';
import { Helmet } from 'react-helmet-async';
import TrackIndex from 'components/organisms/TrackIndex';
import SiteOutline from 'components/organisms/SiteOutline';
const title = '競技場検索';

const Home: FC = () => {
  return (
    <Container centerContent={true}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container>
        <Heading as="h1" size="xl" my={4}>
          {title}
        </Heading>
        <SiteOutline my={10} />
        <TrackIndex prefectures={prefectureData} />
      </Container>
    </Container>
  );
};

export default Home;
