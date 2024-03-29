import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

export type Token = {
    request_token: string;
}

const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg4MmIzYzRhY2E5YzI0ZDZhNDQwNzlkNjVjZGFlMSIsInN1YiI6IjY1ZTljZTBlMzM5NmI5MDE4Njg0YmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXVg7S3Q6wSVphmGXZCkQksy_c6fFzAKPOeY_bpszzI';
const API_TOKEN = `https://api.themoviedb.org/3/authentication/token/new`;
const API_SESSION = `https://api.themoviedb.org/3/authentication/session/new`;

export async function getNewToken() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: TOKEN,
    },
  };
  try {
    const response = await fetch(API_TOKEN, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
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
      Authorization: TOKEN,
    },
    body: JSON.stringify({
      username: username,
      password: password,
      request_token: token,
    }),
  };
  try {
    const response = await fetch(API_SESSION, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return ErrorBoundary;
  }
}
