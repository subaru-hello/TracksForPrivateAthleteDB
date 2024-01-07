import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import trackImage from 'assets/base_track.png';
import TrackImage from 'components/organisms/global/TrackImage';
const TrackImages: FC = () => {
  const image = trackImage;

  return (
    <Box>
      <TrackImage image={image} />
    </Box>
  );
};

export default TrackImages;
