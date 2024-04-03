import Breadcrumb from '@/components/breadcrumb';
import Card from '@/components/card';
import { Suspense, useEffect, useState } from 'react';
import { Movie, QueryParams, getMovies, getSearchMovies } from './api/callbacks';
import { CircularProgress } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Search from '@/components/search';
import { useSearchParams } from 'next/navigation';
import Movies from './page';

interface MovieType {
    movies: string;
  }

export function MoviesPage({movies}: MovieType) {
    return (
      <Suspense fallback={<CircularProgress/>}>
        <Movies movies={movies}/>
      </Suspense>
    )
  }     