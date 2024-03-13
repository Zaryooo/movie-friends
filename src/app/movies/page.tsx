'use client';

import Breadcrumb from '@/components/breadcrumb';
import Card from '@/components/card';
import { useEffect, useState } from 'react';
import { Movie, QueryParams, getMovies, getSearchMovies } from './api/route';
import { CircularProgress } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Search from '@/components/search';

export default function MoviesPage({
  params: { movies },
}: {
  params: { movies: string };
}) {
  const [result, setResult] = useState<Array<Movie>>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      fetchMovies();
    }
    setFirstLoad(false);
  }, [inView]);

  const onGenresHandler = (value: number) => {
    if(value){
      setResult([]);
      fetchMovies({genres: value});
    };
  }

  const onKeywordHandler = (value: string) => {
    if(value){
      setResult([]);
      fetchMovies({query: value});
    };
  };

  const fetchMovies = async (params?: QueryParams) => {
    setLoading(true);
    const next = page + 1;
    const result = params?.query ? await getSearchMovies(page, params?.query) : await getMovies(page, movies, params);
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
        <div className='min-h-[68px]'>{!firstLoad && <Search onKeywordHandler={onKeywordHandler} onGenresHandler={onGenresHandler} />}</div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {result?.length ? result.map(({ id, title, overview, poster_path }: Movie) => (
            <Card
              key={id}
              id={id}
              title={title}
              overview={overview}
              poster_path={poster_path}
            />
          )) : null}
        </div>
        <div ref={ref}>{inView}</div>
        {loading && (
          <div className='text-center mb-7'>
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
}
