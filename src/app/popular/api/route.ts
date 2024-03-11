
const authToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg4MmIzYzRhY2E5YzI0ZDZhNDQwNzlkNjVjZGFlMSIsInN1YiI6IjY1ZTljZTBlMzM5NmI5MDE4Njg0YmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXVg7S3Q6wSVphmGXZCkQksy_c6fFzAKPOeY_bpszzI';

export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}

export async function getMovies(page: number, movies: string) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: authToken
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}`,
      options
    );
    const data = await response.json();
    return data.results;
  
  }
  