import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'components/templates/Home';
import About from 'components/templates/About'
import Post from 'components/templates/Post'
import TrackProfile from 'components/templates/track/TrackProfile';

const AppRoutes: FC = () => (
  <Routes>
    <Route path="about" element={<About />} />
    <Route path="track">
      <Route path=":id" element={<TrackProfile />} />
    </Route>
    <Route path="post" element={<Post />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoutes;
