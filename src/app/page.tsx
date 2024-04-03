'use client';

import { useSession } from 'next-auth/react';
import MoviesPage from './movies/page';
import { redirect } from 'next/navigation';
import { Login } from '@mui/icons-material';
import LoginPage from './(profile)/login/page';
import { CircularProgress } from '@mui/material';

export default function Home() {
  return <MoviesPage movies="now playing"/>
}
