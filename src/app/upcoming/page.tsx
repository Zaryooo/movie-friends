import MoviesPage from '../movies/page';

export default function Home() {
  return (
      <MoviesPage params={{movies: "upcoming"}} />
  );
}
