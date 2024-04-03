'use client';

import { useSession } from 'next-auth/react';
import LoginPage from '../(profile)/login/page';
import Loading from '@/components/loading';

export default function TemplateMovies({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const { data: session, status: status } = useSession();

  const page = session ? (
    children
  ) : (
    <LoginPage />
  );
  return <>{status === 'loading' ? <Loading /> : page}</>;
}