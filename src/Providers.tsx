import type { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';
import { AuthProvider } from 'auth/AuthProvider';

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
