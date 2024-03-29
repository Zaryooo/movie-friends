import MoviesPage from '../movies/page';

export default function Home() {
  return (
      <div>
        <MoviesPage params={{movies: "upcoming"}} />
      </div>
  );
}
