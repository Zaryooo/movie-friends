'use client';

import Breadcrumb from '@/components/breadcrumb';
import Card from '@/components/card';
import { useEffect, useState } from 'react';
import { getMovies } from './api/route';
import { CircularProgress } from '@mui/material';

export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}

export default function MoviesPage() {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies(page);
      if (movies) {
        setMovies(movies);
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  return (
    <>
      <Breadcrumb title='Movies' />
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>

      <div className='container mx-auto p-5'>
        {loading ? (
          <div className='text-center'><CircularProgress/></div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {movies?.map(({ id, title, overview, poster_path }: Movie) => (
              <Card
                key={id}
                id={id}
                title={title}
                overview={overview}
                poster_path={poster_path}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
