import type { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Track } from 'domains';
import axios from 'axios';
import TrackMockList from 'components/organisms/TrackMockList';

const TrackMockEco: FC = () => {
  const [trackMocks, setTrackMocks] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('http://127.0.0.1:4010/tracks');
      setTrackMocks(response.data);
    };
    getUser();
  }, []);

  return (
    <Box>
      <TrackMockList track_mock={trackMocks} />
    </Box>
  );
};

export default TrackMockEco;
