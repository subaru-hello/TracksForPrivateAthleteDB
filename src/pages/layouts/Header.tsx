import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import HeaderLinks from 'components/organisms/layouts/HeaderLinks';
const Header: FC = () => {
  return (
    <Box>
      <HeaderLinks />
    </Box>
  );
};

export default Header;
