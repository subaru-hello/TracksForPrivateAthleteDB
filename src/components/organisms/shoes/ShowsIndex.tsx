import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const ShoesIndex: FC = () => {
  return (
    <Box>
      <Heading>Shoes</Heading>
      <Outlet />
    </Box>
  );
};

export default ShoesIndex;
