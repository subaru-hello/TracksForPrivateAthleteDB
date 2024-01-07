import type { FC } from 'react';
import { Container, useColorModeValue } from '@chakra-ui/react';
import FooterLinks from 'components/organisms/layouts/FooterLinks';
const Footer: FC = () => {
  return (
    <Container
      bg={useColorModeValue('gray.300', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      maxW={'auto'}
    >
      <FooterLinks />
    </Container>
  );
};

export default Footer;
