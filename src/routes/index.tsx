import { useEffect } from 'react';
import type { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AllTracks from 'components/ecosystems/tracks/AllTracks';
import TrackListByPrefecture from 'components/ecosystems/tracks/TrackListByPrefecture';
import TracksFrame from 'components/templates/tracks/TracksFrame';
import TrackCommentNew from 'components/organisms/tracks/TrackComment';
import TrackDetail from 'components/organisms/tracks/TrackDetails';
import TrackMockEco from 'components/ecosystems/tracks/mocks/TrackMockEco';
import Home from 'components/templates/layouts/Home';
import ForPublicDate from 'components/templates/tracks/ForPublicDate';
import SignUp from 'components/templates/auths/SignUp';
import Login from 'components/templates/auths/Login';
import UserCollection from 'components/templates/users/UserCollection';
import ProfilePage from 'components/templates/mypage/ProfilePage';
import ProfileEdit from 'components/templates/mypage/ProfileEdit';
import TrackMockAddEco from 'components/ecosystems/tracks/mocks/TrackMockAddEco';
import TrackMockFrame from 'components/templates/tracks/mock/TrackMockFrame';
import TracksByPrefectureFrame from 'components/organisms/tracks/TracksByPrefectureFrame';
import ProfileIndex from 'components/templates/mypage/ProfileIndex';

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

        <Route path=":prefectureID" element={<TracksByPrefectureFrame />}>
          <Route path="" element={<TrackListByPrefecture my={12} />} />
          <Route
            path=":trackID"
            element={<TrackDetail prefecture_name={'tokyo'} />}
          />
        </Route>
      </Route>

      <Route path="users" element={<UserCollection />} />

      <Route path="mypage" element={<ProfileIndex />}>
        <Route path="" element={<ProfilePage />} />
        <Route path="edit" element={<ProfileEdit />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default IndexRoutes;
