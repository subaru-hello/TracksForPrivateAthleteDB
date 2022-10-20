import type { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { trackData } from 'data';
import { Helmet } from 'react-helmet-async';
import TrackList from 'components/organisms/TrackList';

const SORT = {
  entree_fee: '料金順',
};
type Props = { sortType?: keyof typeof SORT; my?: number | string };

const AllTracks: FC<Props> = ({ sortType = 'entree_fee', my = 0 }) => {
  const tracks = trackData.sort(
    (t1: { [x: string]: any }, t2: { [x: string]: any }) =>
      Number(t1[sortType]) < Number(t2[sortType]) ? -1 : 1
  );

  return (
    <Box my={my} w="2xl">
      <Helmet>
        <title>競技場一覧|{SORT[sortType]}</title>
      </Helmet>
      <Heading as="h2" size="lg">
        全国の競技場 | {SORT[sortType]}
      </Heading>
      <TrackList tracks={tracks} />
    </Box>
  );
};

export default AllTracks;
