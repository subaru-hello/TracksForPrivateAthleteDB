import type { FC, SyntheticEvent } from 'react';
import {
  Outlet,
  Navigate,
  useParams,
  useSearchParams,
  Link,
} from 'react-router-dom';
import { Heading, Container } from '@chakra-ui/react';
import { trackData, prefectureData } from 'data';
import { PREFECTURE_CODE } from 'domains';
import { Helmet } from 'react-helmet-async';
import TrackList from 'components/organisms/tracks/TrackList';
const TrackListByPrefecture: FC<{ my?: number | string }> = ({ my = 0 }) => {
  const { prefectureID = ' ' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = Boolean(searchParams.get('loading'));

  if (PREFECTURE_CODE.includes(prefectureID as never)) {
    // if (PREFECTURE_CODE.includes(prefectureID as 'kanagawa')) {
    const tracks = trackData.filter(
      (track) => track.prefectureID === prefectureID
    );
    const prefecture = prefectureData.find(
      (prefecture) => prefecture.id === prefectureID
    );

    return (
      <Container centerContent={true}>
        <Helmet>
          <title>競技場 at {prefecture?.name}</title>
        </Helmet>
        <Heading as="h2" size="lg">
          {prefecture?.name}
        </Heading>

        <TrackList
          tracks={tracks}
          color={prefecture?.color}
          isLoading={isLoading}
        />
        <Link to="calender">カレンダーを見る</Link>
        <Outlet />
      </Container>
    );
  }

  return <Navigate to="/" replace />;
};

export default TrackListByPrefecture;
