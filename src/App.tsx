import type { FC } from 'react';
import Providers from 'Providers';
import IndexRoutes from 'routes/index';
import Header from 'components/templates/layouts/Header';
import Footer from 'components/templates/layouts/Footer';

const App: FC = () => (
  <Providers>
    <Header />
    <IndexRoutes />
    <Footer />
  </Providers>
);

export default App;
