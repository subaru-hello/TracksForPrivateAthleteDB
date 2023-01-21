import type { FC } from 'react';
import { Container, Box, useColorModeValue, chakra } from '@chakra-ui/react';
import { prefectureData } from 'data';
import { Helmet } from 'react-helmet-async';
import TrackIndex from 'components/organisms/tracks/TrackIndex';
import SiteOutline from 'components/organisms/layouts/SiteOutline';
import Calender from 'components/organisms/Calender';
import WithSpeechBubbles from 'components/organisms/layouts/Testimonial';
import { AmazonBanner } from 'components/atoms/AmazonBanner';
import News from 'components/organisms/News';
const title = '競技場検索';

const Home: FC = () => {
  return (
    <Box fontFamily={'YuMincho'}>
      <Box textAlign={'center'} justifyContent={'space-between'} mx="auto">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Box>
          <SiteOutline my={10} />
          <TrackIndex prefectures={prefectureData} />
        </Box>
      </Box>
      <Box textAlign={'center'} w="75%" mx="auto">
        <chakra.h3
          py={5}
          fontSize={20}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          現在の個人開放状況
        </chakra.h3>
        <Calender />
        <News />
      </Box>
      <WithSpeechBubbles />
      <AmazonBanner />
    </Box>
  );
};

export default Home;
