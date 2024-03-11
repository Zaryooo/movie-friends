
export default function scrollToTop() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button className='fixed bottom-0 p-10' onClick={scrollToTop}>
      To top
    </button>
  );
}
