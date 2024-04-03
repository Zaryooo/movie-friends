'use client';

import Breadcrumb from '@/components/breadcrumb';
import Card from '@/components/card';
import { Suspense, useEffect, useState } from 'react';
import {
  Movie,
  QueryParams,
  getMovies,
  getSearchMovies,
} from './api/callbacks';
import { CircularProgress } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Search from '@/components/search';
import { redirect, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import LoginPage from '../(profile)/login/page';
import Loading from '@/components/loading';

interface MovieType {
  movies: string;
}

function Movies({ movies = 'now playing' }: MovieType) {
  const [result, setResult] = useState<Array<Movie>>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const { ref, inView } = useInView({ threshold: 0 });
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams ? searchParams : '').get(
    'query'
  );

  useEffect(() => {
    setResult([]);
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (inView) {
      fetchMovies();
    }
    setFirstLoad(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const onGenresHandler = (value: number) => {
    if (value) {
      setResult([]);
      fetchMovies({ genres: value });
    }
  };

  const fetchMovies = async (params?: QueryParams) => {
    setLoading(true);
    const next = page + 1;
    const result = query
      ? await getSearchMovies(page, query)
      : await getMovies(page, movies, params);
    if (result?.length) {
      setPage(next);
      setResult((prev) => [...(prev?.length ? prev : []), ...result]);
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb title={movies} />
      <div className='container mx-auto px-5 py-2'>
        <div className='min-h-[68px]'>
          {!firstLoad && <Search onGenresHandler={onGenresHandler} />}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {result?.length
            ? result.map(({ id, title, overview, poster_path }: Movie) => (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  overview={overview}
                  poster_path={poster_path}
                />
              ))
            : null}
        </div>
        {loading && (
          <div className='text-center mb-7'>
            <CircularProgress />
          </div>
        )}
        {!loading && <div ref={ref}>{inView}</div>}
      </div>
    </>
  );
}

export default function MoviesPage({ movies }: MovieType) {
  const { data: session, status: status } = useSession();

  const page = session ? (
    <Suspense fallback={<Loading />}>
      <Movies movies={movies} />
    </Suspense>
  ) : (
    <LoginPage />
  );
  return <>{status === 'loading' ? <Loading /> : page}</>;
}
