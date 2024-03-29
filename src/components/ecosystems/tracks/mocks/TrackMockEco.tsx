import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { trackData } from 'data';
import TrackMockList from 'components/organisms/tracks/mocks/TrackMockList';

const TrackMockEco: FC = () => {
  const [trackMocks, setTrackMocks] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('http://127.0.0.1:4010/tracks');
      setTrackMocks(response.data);
    };
    getUser();
  }, []);
  console.log(trackMocks);

  // track_dataをtrackMocksに変えれば外部データを入れることができる。
  return (
    <Box>
      <TrackMockList trackData={trackData} />
    </Box>
  );
};

export default TrackMockEco;
