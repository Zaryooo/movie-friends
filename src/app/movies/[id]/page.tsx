'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getMoviesDetails } from './api/route';
import { Movie } from '../api/route';
import { Button, CircularProgress } from '@mui/material';
import Breadcrumb from '@/components/breadcrumb';
import Popularity from '@/components/popularity';

export default function MovieDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState(true);

  const fetchMovieDetails = async () => {
    setLoading(true);
    const details = await getMoviesDetails(id);
    if (details) {
        setMovie(details);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
        <Breadcrumb />
        <div className='container mx-auto p-5'>
          {movie && (
            <div className='max-w-[1000px] mx-auto w-full'>
            <div className='flex items-center'>
                <div className='mb-[50px] pr-[100px] flex-1'>
                  <h2 className='text-4xl font-bold my-4'>{movie.title}</h2>
                  <p className='mb-5'>{movie.overview}</p>
                  <p className='mb-3'><b>Genres - </b><i>{movie.genres?.map(genr => genr.name).join(", ")}</i></p>
                  <p className='mb-3'><b>Release Date - </b><i>{movie.release_date}</i></p>
                  <p className='mb-5'><b>Popularity </b>{movie.popularity && <Popularity popularity={movie.popularity}/>}</p>
                  <p className='mb-3'><Button variant="contained" href={`https://www.imdb.com/title/${movie.imdb_id}`} title="Link to IMDb">IMDb</Button></p>
                </div>
                <div className='flex-1'>
                  <Image
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    width={500}
                    height={500}
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          )} 
          {loading && (
            <div className='text-center'>
              <CircularProgress />
            </div>
          )}
        </div>
    </>
  );
}
