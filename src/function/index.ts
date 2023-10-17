import movies from '../utils/movies.json';
import axios from 'axios';

export type Movie = {
  title: string;
  year: number;
};

export type MovieDetails = Movie & {
  info: {
    plot: string;
    actors: string[];
  };
};

function delay(t: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t);
  });
}

export async function fetchMovies() {
  await delay(200 + Math.floor(Math.random() * 2000));
  return movies.slice(0, 100)?.map((movie: any) => ({
    title: movie.title,
    year: movie.year,
    movie: movie,
  })) as Promise<Movie[]>;
}

export async function fetchMovie(title: string) {
  console.log('fetchMovie', title);
  await delay(200 + Math.floor(Math.random() * 2000));
  const result = movies.filter(item => item.title === title);
  if (result.length == 0) {
    throw new Error('Movie not found');
  }
  return result[0] as Promise<MovieDetails>;
}

export async function getDataWithAuthorization(
  url: string,
  authorizationHeader: string,
) {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `bearer ${authorizationHeader}`,
        // 'Content-Type': 'application/json', // You can include other headers as needed
      },
    });

    // Handle the response data
    console.log('Response Data:', response.data);

    // You can return the data if needed
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message);
    throw error; // Re-throw the error to propagate it to the caller
  }
}
