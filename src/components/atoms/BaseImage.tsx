import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
type Props = {
  src: string;
};
const BaseImage: FC<Props> = (props) => {
  return (
    <Box w="100%">
      <img src={props.src} />
    </Box>
  );
};

export default BaseImage;
