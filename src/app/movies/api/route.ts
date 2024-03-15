import ErrorBoundary from '@/app/error';

export const authToken =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg4MmIzYzRhY2E5YzI0ZDZhNDQwNzlkNjVjZGFlMSIsInN1YiI6IjY1ZTljZTBlMzM5NmI5MDE4Njg0YmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXVg7S3Q6wSVphmGXZCkQksy_c6fFzAKPOeY_bpszzI';

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


export interface QueryParams {
  query?: string,
  genres?: number,
  movies?: string
}

export async function getMovies(page: number, movies: string, params?: QueryParams) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authToken,
    },
  };
  let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;

  if(movies === 'popular') {
    url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
  }
  if(movies === 'upcoming') {
    url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
  }
  if(params?.genres) {
    url = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&with_genres=${params.genres}`;
  }
  try {
    const response = await fetch(
      url,
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    return ErrorBoundary;
  }
}

export async function getSearchMovies(page: number, query: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authToken,
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1${page}`,
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    return ErrorBoundary;
  }
}

export async function getGenres() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: authToken,
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      options
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    return ErrorBoundary;
  }
}
