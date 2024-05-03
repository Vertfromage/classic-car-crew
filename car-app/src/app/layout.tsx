// app/layout.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme'; // ensure you have a theme file or import the default theme

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
    <ChakraProvider theme={theme}>
    <body>{children}</body>
    </ChakraProvider>
    </html>
  );
}
