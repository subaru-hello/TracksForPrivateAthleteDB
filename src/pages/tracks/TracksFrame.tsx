import type { FC } from 'react';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import HomeButton from 'components/organisms/layouts/HomeButton';

const TracksFrame: FC = () => (
  <Container centerContent={true}>
    <Outlet />
    <HomeButton my={16} />
  </Container>
);

export default TracksFrame;
