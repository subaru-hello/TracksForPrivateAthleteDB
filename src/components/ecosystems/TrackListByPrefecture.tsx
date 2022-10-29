import type { FC, SyntheticEvent } from 'react';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import { SpinnerIcon } from '@chakra-ui/icons';
import { Box, IconButton, Heading } from '@chakra-ui/react';
import { trackData, prefectureData } from 'data';
import { PREFECTURE_CODE } from 'domains';
import { Helmet } from 'react-helmet-async';
import TrackList from 'components/organisms/TrackList';

const TrackListByPrefecture: FC<{ my?: number | string }> = ({ my = 0 }) => {
  const { prefectureID = ' ' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = Boolean(searchParams.get('loading'));

  const handleLoading = (event: SyntheticEvent) => {
    event.stopPropagation();
    const loading = !isLoading ? 'true' : '';
    setSearchParams(`loading=${loading}`);
  };

  if (PREFECTURE_CODE.includes(prefectureID as never)) {
    // if (PREFECTURE_CODE.includes(prefectureID as 'kanagawa')) {
    const tracks = trackData.filter(
      (track) => track.prefectureID === prefectureID
    );
    const prefecture = prefectureData.find(
      (prefecture) => prefecture.id === prefectureID
    );

    return (
      <Box my={my} w="2xl">
        <Helmet>
          <title>全国の競技場｜{prefecture?.name}｜競技場検索</title>
        </Helmet>
        <Heading as="h2" size="lg">
          {prefecture?.name}
        </Heading>
        <Box textAlign="right">
          <IconButton
            onClick={handleLoading}
            aria-label="ローディング切り替え"
            icon={<SpinnerIcon />}
          />
        </Box>
        <TrackList
          tracks={tracks}
          color={prefecture?.color}
          isLoading={isLoading}
        />
      </Box>
    );
  }

  return <Navigate to="/" replace />;
};

export default TrackListByPrefecture;
