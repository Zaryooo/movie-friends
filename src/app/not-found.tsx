import Breadcrumb from '@/components/breadcrumb';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div>
        <Breadcrumb title='This page was not found'><Link href="/movies">Go to Movies</Link></Breadcrumb>
      </div>
    </>
  );
}
