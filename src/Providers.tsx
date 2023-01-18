import type { FC, PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from 'auth/AuthProvider';
import { store } from 'store';
import { Provider } from 'react-redux';

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    <HelmetProvider>
      <ChakraProvider>
        <Provider store={store}>
          <Router>{children}</Router>
        </Provider>
      </ChakraProvider>
    </HelmetProvider>
  </AuthProvider>
);

export default Providers;
