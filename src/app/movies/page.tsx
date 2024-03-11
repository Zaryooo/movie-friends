'use client';

import Breadcrumb from '@/components/breadcrumb';
import Card from '@/components/card';
import { useEffect, useState } from 'react';
import { Movie, getMovies } from './api/route';
import { CircularProgress } from '@mui/material';
import { InView, useInView } from 'react-intersection-observer';
import ScrollToTop from '@/components/scrollToTop';

export default function MoviesPage({
  params: { movies },
}: {
  params: { movies: string };
}) {
  const [result, setResult] = useState<Array<Movie>>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const { ref, inView, entry } = useInView({ threshold: 0 });
  const breadcrumb = movies.toString().toLocaleUpperCase();
  //console.log("entry", entry)

  useEffect(() => {
    if (inView) {
      fetchMovies();
    }
  }, [inView]);

  const fetchMovies = async () => {
    setLoading(true);
    const next = page + 1;
    const result = await getMovies(page, movies);
    if (result?.length) {
      setPage(next);
      setResult((prev) => [...(prev?.length ? prev : []), ...result]);
      setLoading(false);
    } else {
      throw new Error("Something is wrong!")
    }
  };

  return (
    <>
      <Breadcrumb title={breadcrumb} />
      <div className='container mx-auto p-5'>
        {loading ? (
          <div className='text-center'>
            <CircularProgress />
          </div>
        ) : null}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {result?.map(({ id, title, overview, poster_path }: Movie) => (
            <Card
              key={id}
              id={id}
              title={title}
              overview={overview}
              poster_path={poster_path}
            />
          ))}
        </div>
        <div ref={ref}>{inView}</div>
      </div>
      <ScrollToTop />
    </>
  );
}
