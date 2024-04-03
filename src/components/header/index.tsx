import Link from 'next/link';
import Navigation from '../navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/firebase';

export default function Header() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login')
    }
  })
  
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
          {session && <Navigation />}
          <div className='flex leading-9'>
          {session ? <button onClick={() => signOut(auth)}>Logout</button>: <Link href="/login">Login</Link>}
          </div>
        </div>
      </div>
    </>
  );
}
