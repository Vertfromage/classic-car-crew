// components/Layout.tsx
import { Box } from '@chakra-ui/react';
import FishLoader from './FishLoader';

const Layout = ({ children }:any) => {
  return (
    <Box width="full" minHeight="100vh">
      <header>
        {/* You can add navigation here */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Footer content here */}
      </footer>
    </Box>

  );
};

export default Layout;
