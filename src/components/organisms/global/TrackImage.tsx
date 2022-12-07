import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import BaseImage from 'components/atoms/BaseImage';
type Props = {
  props: {
    image?: string;
  };
};

const TrackImage: FC<Props> = ({ props: { image = 'base_track.png' } }) => {
  return (
    <Box>
      <BaseImage props={{ image: image }} />
    </Box>
  );
};

export default TrackImage;
