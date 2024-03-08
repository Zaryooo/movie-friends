import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Movie Friends',
  description: 'Created by Zarko Petrov',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <header className='header'>
          <Header/>
        </header>
        <main className='main'>
          {children}
        </main>
        <footer className='footer'>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
