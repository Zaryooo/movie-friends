// export async function getMoviews() {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg4MmIzYzRhY2E5YzI0ZDZhNDQwNzlkNjVjZGFlMSIsInN1YiI6IjY1ZTljZTBlMzM5NmI5MDE4Njg0YmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXVg7S3Q6wSVphmGXZCkQksy_c6fFzAKPOeY_bpszzI',
//     },
//   };
//   let response = await fetch(
//     'https://api.themoviedb.org/3/list/1?language=en-US&page=1',
//     options
//   );
//   let data = await response.json();

//   return Response.json(data);
// }

// export async function getImages(id: string) {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzg4MmIzYzRhY2E5YzI0ZDZhNDQwNzlkNjVjZGFlMSIsInN1YiI6IjY1ZTljZTBlMzM5NmI5MDE4Njg0YmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXVg7S3Q6wSVphmGXZCkQksy_c6fFzAKPOeY_bpszzI',
//     },
//   };
//   const getImages = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}/images`,
//     options
//   );
//   const images = await getImages.json();

//   return images;
// }