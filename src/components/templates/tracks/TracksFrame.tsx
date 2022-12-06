import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Heading, Container } from '@chakra-ui/react';
import HomeButton from 'components/organisms/layouts/HomeButton';

const TracksFrame: FC = () => (
  <Container centerContent={true}>
    <Outlet />
    <HomeButton my={16} />
  </Container>
);

export default TracksFrame;
