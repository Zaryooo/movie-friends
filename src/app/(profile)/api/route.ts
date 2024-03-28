import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

export async function getNewToken() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg4MmIzYzRhY2E5YzI0ZDZhNDQwNzlkNjVjZGFlMSIsInN1YiI6IjY1ZTljZTBlMzM5NmI5MDE4Njg0YmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXVg7S3Q6wSVphmGXZCkQksy_c6fFzAKPOeY_bpszzI',
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/authentication/token/new`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return ErrorBoundary;
  }
}

export async function createSession(
  username: string,
  password: string,
  token: string
) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg4MmIzYzRhY2E5YzI0ZDZhNDQwNzlkNjVjZGFlMSIsInN1YiI6IjY1ZTljZTBlMzM5NmI5MDE4Njg0YmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXVg7S3Q6wSVphmGXZCkQksy_c6fFzAKPOeY_bpszzI',
    },
    body: JSON.stringify({
      username: username,
      password: password,
      request_token: token,
    }),
  };
  console.log('options', options);
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/authentication/session/new`,
      options
    );
    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (error) {
    return ErrorBoundary;
  }
}
