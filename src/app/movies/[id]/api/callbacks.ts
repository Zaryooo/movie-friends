import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

export async function getMoviesDetails(id: string) {

  console.log("TOKEN", process.env.TOKEN)
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.TOKEN ? process.env.TOKEN : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg4MmIzYzRhY2E5YzI0ZDZhNDQwNzlkNjVjZGFlMSIsInN1YiI6IjY1ZTljZTBlMzM5NmI5MDE4Njg0YmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXVg7S3Q6wSVphmGXZCkQksy_c6fFzAKPOeY_bpszzI'
      },
    };
    try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return ErrorBoundary;
  }
  
  }
  