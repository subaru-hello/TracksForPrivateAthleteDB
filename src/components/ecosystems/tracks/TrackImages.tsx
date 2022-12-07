import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import TrackImage from 'components/organisms/global/TrackImage';
import trackImage from 'assets/base_track.png';
const TrackImages: FC = () => {
  const image = trackImage;
  return (
    <Box>
      <TrackImage props={{ image: image }} />
    </Box>
  );
};

export default TrackImages;
