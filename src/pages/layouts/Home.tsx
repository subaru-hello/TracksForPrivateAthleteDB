import { type FC } from 'react';
import { Box, useColorModeValue, chakra, Button } from '@chakra-ui/react';
import { prefectureData } from 'data';
import { Helmet } from 'react-helmet-async';
import { AmazonBanner } from 'components/atoms/AmazonBanner';
import Calender from 'components/organisms/Calender';
import SiteOutline from 'components/organisms/layouts/SiteOutline';
import WithSpeechBubbles from 'components/organisms/layouts/Testimonial';
import TrackIndex from 'components/organisms/tracks/TrackIndex';
import { useFetchAvailableDate } from 'hooks/useFetchAvailableDate';
import { useAppSelector } from 'hooks/useStore';
import { selectAvailableDate } from 'examples/availableDate/availableDateSlice';
const title = '競技場検索';

const Home: FC = () => {
  useFetchAvailableDate();
  const availableDates = useAppSelector(selectAvailableDate);
  console.log(
    '^^^^^^^^^^',
    availableDates[0]?.availableDates,
    import.meta.env.VITE_FIREBASE_URL.split(', ')[0]
  );
  return (
    <Box fontFamily={'YuMincho'}>
      {/* <Button onClick={handleTracks}>Track取得</Button> */}
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
        <Calender availableDates={availableDates[0]?.availableDates} />
      </Box>
      <WithSpeechBubbles />
      <AmazonBanner />
    </Box>
  );
};

export default Home;
