import { useEffect } from 'react';
import type { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AllTracks from 'components/ecosystems/tracks/AllTracks';
import TrackListByPrefecture from 'components/ecosystems/tracks/TrackListByPrefecture';
import TrackMockAddEco from 'components/ecosystems/tracks/mocks/TrackMockAddEco';
import TrackMockEco from 'components/ecosystems/tracks/mocks/TrackMockEco';
import TrackDetail from 'components/organisms/tracks/TrackDetails';
import TracksByPrefectureFrame from 'components/organisms/tracks/TracksByPrefectureFrame';
import Login from 'pages/auths/Login';
import SignUp from 'pages/auths/SignUp';
import Home from 'pages/layouts/Home';
import ProfileEdit from 'pages/mypage/ProfileEdit';
import ProfileIndex from 'pages/mypage/ProfileIndex';
import ProfilePage from 'pages/mypage/ProfilePage';
import TracksFrame from 'pages/tracks/TracksFrame';
import TrackMockFrame from 'pages/tracks/mock/TrackMockFrame';
import UserCollection from 'pages/users/UserCollection';
import { Counter } from 'examples/counter/Counter';

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
        <Route path="counter" element={<Counter />} />
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
