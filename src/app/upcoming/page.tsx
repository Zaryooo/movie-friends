import Breadcrumb from '@/components/breadcrumb';
import { Movie } from '../movies/page';
import Card from '@/components/card';

export default async function UpcomingPage() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg4MmIzYzRhY2E5YzI0ZDZhNDQwNzlkNjVjZGFlMSIsInN1YiI6IjY1ZTljZTBlMzM5NmI5MDE4Njg0YmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXVg7S3Q6wSVphmGXZCkQksy_c6fFzAKPOeY_bpszzI',
    },
  };
  const getMovies = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    options
  );
  const movies = await getMovies.json();

  return (
    <>
      <Breadcrumb title='Upcoming Movies' />
      <div className='container mx-auto p-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {movies.results.map(({ id, title, overview, poster_path }: Movie) => (
            <Card key={id} id={id} title={title} overview={overview} poster_path={poster_path} />
          ))}
        </div>
      </div>
    </>
  );
}
