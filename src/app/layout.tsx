import './globals.css';
import type { Metadata } from 'next';
import { abel } from './fonts';

export const metadata: Metadata = {
  title: 'Emzy',
  description: 'Aesthetics and beauty',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={abel.className}>{children}</body>
    </html>
  );
}
