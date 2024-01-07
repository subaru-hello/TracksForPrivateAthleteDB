import type { FC } from 'react';
import IndexRoutes from 'routes/index';
import Providers from 'Providers';
import Footer from 'pages/layouts/Footer';
import Header from 'pages/layouts/Header';

const App: FC = () => (
  <Providers>
    <Header />
    <IndexRoutes />
    <Footer />
  </Providers>
);

export default App;
