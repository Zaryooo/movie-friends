import Link from 'next/link';
import Navigation from '../navigation';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className='container mx-auto p-5'>
        <div className='flex justify-between items-center flex-wrap'>
          <div className='text-3xl mr-14'>
          <Link href="/">
          <Image
              src="/logo.svg"
              alt="Movie Friends Logo"
              width={130}
              height={50}
              priority
            /></Link>
          </div>
          <Navigation />
          <div className='flex leading-9'>
            <h1>Login</h1>
          </div>
        </div>
      </div>
    </>
  );
}
