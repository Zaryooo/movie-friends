'use client';

import { useSession } from 'next-auth/react';
import MoviesPage from './movies/page';
import { redirect } from 'next/navigation';
import { Login } from '@mui/icons-material';

export default function Home() {
  const session = useSession({
    required: true

  })
  return <MoviesPage movies="now playing" />
}
