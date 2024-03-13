'use client';

import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#42a5f5'
    }
  },
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ThemeProvider theme={darkTheme}>
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
      </ThemeProvider>
    </html>
  );
}
