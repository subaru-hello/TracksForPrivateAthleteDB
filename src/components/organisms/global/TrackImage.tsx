import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import BaseImage from 'components/atoms/BaseImage';
type ImageProps = {
  image: string;
};

const TrackImage: FC<ImageProps> = (props) => {
  return (
    <Box>
      <BaseImage image={props.image} />
    </Box>
  );
};

export default TrackImage;
