import { Button } from '@mui/material';

export default function scrollToTop() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Button className='py-2 px-3' variant="outlined" onClick={scrollToTop}>
      Go To top
    </Button>
  );
}
