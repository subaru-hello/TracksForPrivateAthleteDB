import type { FC } from 'react';
import { Container, Box, useColorModeValue, chakra } from '@chakra-ui/react';
import { prefectureData } from 'data';
import { Helmet } from 'react-helmet-async';
import TrackIndex from 'components/organisms/tracks/TrackIndex';
import SiteOutline from 'components/organisms/layouts/SiteOutline';
import Calender from 'components/organisms/Calender';
import WithSpeechBubbles from 'components/organisms/layouts/Testimonial';
import { AmazonBanner } from 'components/atoms/AmazonBanner';
import FrontQuery from 'components/organisms/graphqls/FrontQuery';
import axios from 'axios';
const title = '競技場検索';

const Home: FC = () => {
  async function fetchData() {
    try {
      const response = await axios.get(
        'https://asia-northeast1-rikujo-b8e9e.cloudfunctions.net/hello'
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const handlefetchData = () => {
    fetchData();
  };
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
      <button onClick={handlefetchData}>ClickMe</button>
      <FrontQuery />
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
      </Box>
      <WithSpeechBubbles />
      <AmazonBanner />
    </Box>
  );
};

export default Home;
