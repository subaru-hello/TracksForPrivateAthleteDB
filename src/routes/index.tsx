import { useEffect } from 'react';
import type { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AllTracks from 'components/ecosystems/tracks/AllTracks';
import TrackListByPrefecture from 'components/ecosystems/tracks/TrackListByPrefecture';
import TracksFrame from 'components/templates/tracks/TracksFrame';
import TrackCommentNew from 'components/organisms/tracks/TrackCommentNew';
import TrackMockEco from 'components/ecosystems/tracks/mocks/TrackMockEco';
import Home from 'components/templates/layouts/Home';
import ForPublicDate from 'components/templates/tracks/ForPublicDate';
import SignUp from 'components/templates/auths/SignUp';
import Login from 'components/templates/auths/Login';
import UserCollection from 'components/templates/users/UserCollection';
// import UserCollectionShow from 'components/organisms/UserCollectionShow';

import TrackMockAddEco from 'components/ecosystems/tracks/mocks/TrackMockAddEco';
import TrackMockFrame from 'components/templates/tracks/mock/TrackMockFrame';

const IndexRoutes: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="mock" element={<TrackMockFrame />}>
        <Route path="" element={<TrackMockEco />} />
        <Route path="new" element={<TrackMockAddEco />} />
      </Route>

      <Route path="tracks" element={<TracksFrame />}>
        <Route path="" element={<AllTracks my={12} />} />
        <Route path=":prefectureID" element={<TrackListByPrefecture my={12} />}>
          <Route path="calender" element={<ForPublicDate />} />
        </Route>
        <Route path="new" element={<TrackCommentNew />} />
      </Route>

      <Route path="users" element={<UserCollection />}>
        {/* <Route path=":userID" element={<UserCollectionShow />} /> */}
      </Route>

      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default IndexRoutes;
