import type { FC } from 'react';
import Providers from 'Providers';
import IndexRoutes from 'routes/index';
import Header from 'components/templates/layouts/Header';

const App: FC = () => (
  <Providers>
    <Header />
    <IndexRoutes />
  </Providers>
);

export default App;
