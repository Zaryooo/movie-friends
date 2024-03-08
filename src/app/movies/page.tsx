import Breadcrumb from '@/components/breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}

export default async function MoviesPage() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg4MmIzYzRhY2E5YzI0ZDZhNDQwNzlkNjVjZGFlMSIsInN1YiI6IjY1ZTljZTBlMzM5NmI5MDE4Njg0YmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXVg7S3Q6wSVphmGXZCkQksy_c6fFzAKPOeY_bpszzI',
    },
  };
  const getMovies = await fetch(
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    options
  );
  const movies = await getMovies.json();

  console.log('data', movies);

  return (
    <>
      <Breadcrumb title='Popular Movies' />
      <div className='container mx-auto p-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {movies.results.map(({ id, title, overview, poster_path }: Movie) => (
            <Link key={id} href={`movies/${id}`} title={title} className='flex flex-col justify-start mb-5'>
              <Image
                alt={title}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width={500}
                height={500}
                className='w-full'
              />
              <div className='flex flex-row'>
                <h2 className='py-2 font-bold flex-1'>{title}</h2>
                <Link href={`movies/${id}`} title={`${title} Details`}>Details</Link>
              </div>
                <p className='py-2 text-xs'>{overview}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
