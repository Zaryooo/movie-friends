import MoviesPage from './movies/page';

export default function Home(children: React.ReactNode) {
  return (
      <div>
        <MoviesPage params={{movies: "movies"}} />
      </div>
  );
}
