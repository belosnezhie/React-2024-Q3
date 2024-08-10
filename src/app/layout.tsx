import { Metadata } from 'next';
import { Orbitron } from 'next/font/google';

import './index.css';
import { ThemeProvider } from '../context/ThemeContext';
import StoreProvider from '../store/StoreProvider';

const orbitron = Orbitron({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nextjs-ssr-app-router-api',
  description: 'Nextjs-ssr-app-router-api',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <ThemeProvider>
          <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
