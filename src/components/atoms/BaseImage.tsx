import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
type Props = {
  props: {
    image: string;
  };
};
const BaseImage: FC<Props> = ({ props }) => {
  return (
    <Box boxSize="sm">
      <img src={props.image} />
    </Box>
  );
};

export default BaseImage;
