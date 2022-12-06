import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
const TracksByPrefectureFrame: FC = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default TracksByPrefectureFrame;
