import Link from 'next/link';
import Navigation from '../navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react"

export default function Header() {
  const { data: session, status: status } = useSession();
  
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
          {session && status === 'authenticated' ? <button onClick={() => signOut({redirect: true, callbackUrl: "/login"})}>Logout</button> : null}
          </div>
        </div>
      </div>
    </>
  );
}
