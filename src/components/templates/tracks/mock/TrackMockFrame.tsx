import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Heading, Container } from '@chakra-ui/react';
import HomeButton from 'components/organisms/layouts/HomeButton';

const TrackMockFrame: FC = () => (
  <Container>
    <header>
      <Heading as="h1" size="xl" my={4}>
        競技場編集
      </Heading>
    </header>
    <Outlet />
    {/* 検索フォームテンプレート */}

    <HomeButton my={16} />
  </Container>
);

export default TrackMockFrame;
