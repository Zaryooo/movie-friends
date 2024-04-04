'use client';

import { useSession } from 'next-auth/react';
import Loading from '@/components/loading';
import { useRouter } from 'next/navigation';

export default function ProfilePage({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const { data: session, status: status } = useSession();
    const router = useRouter();

  const page = !session ? (
    children
  ) : (
    router.push('/movies')
  );
  return <>{status === 'loading' ? <Loading /> : page}</>;
}