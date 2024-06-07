import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import './globals.css';
import AuthBar from '@/components/AuthBar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AuthBar/>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
