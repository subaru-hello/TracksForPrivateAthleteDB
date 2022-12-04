import type { FC, PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from 'auth/AuthProvider';
const Providers: FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    <HelmetProvider>
      <ChakraProvider>
        <Router>{children}</Router>
      </ChakraProvider>
    </HelmetProvider>
  </AuthProvider>
);

export default Providers;
