export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  genres?: [
    {
      id: number;
      name: string;
    }
  ];
  release_date?: string;
  popularity?: number;
  imdb_id?: string;
}
