import { Button } from '@mui/material';

export default function scrollToTop() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Button className='fixed bottom-0 py-2 px-3 m-7' variant="contained" onClick={scrollToTop}>
      Go To top
    </Button>
  );
}
