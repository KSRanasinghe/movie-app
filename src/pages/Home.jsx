import Wrapper from '../components/Wrapper'
import MovieCard from '../components/MovieCard'
import { useEffect, useState } from 'react';

function Home() {
  const [finalMovie, setFinalMovies] = useState([]);
  const API_KEY = 'ec51a0d2';

  useEffect(() => {
    const getInitialMovies = async () => {
      const URL = `https://www.omdbapi.com/?s=%22new%22&y=2025&apikey=${API_KEY}`;

      try {
        const res = await fetch(URL);
        const data = await res.json();

        const detailPromise = data.Search.map(async (movie) => {
          const detailURL = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`;
          const detailRes = await fetch(detailURL);
          return await detailRes.json();
        });

        const finalMovies = await Promise.all(detailPromise);
        setFinalMovies(finalMovies);

      } catch (error) {
        console.log(error);
      }
    }

    getInitialMovies();
  }, []);

  return (
    <>
      <Wrapper className='bg-gray-900 py-24 min-h-dvh'>
        <div className='w-full max-w-full px-4'>
          <h1 className='text-center font-arimo text-white font-light text-6xl pb-6'>Welcome to <span className='font-poppins font-bold tracking-tight text-transparent bg-linear-to-r from-green-500 to-cyan-400 bg-clip-text'>MovieApp</span></h1>
          <p className='text-white font-arimo font-thin tracking-wide text-center text-[16px] w-[60%] leading-8 block mx-auto'>Your ultimate gateway to the world of cinema. Explore millions of movies, dive into detailed ratings, and find your next favorite watch—all powered by the OMDb database.</p>
        </div>
        <div className='w-full max-w-full grid grid-cols-4 gap-x-20 gap-y-10 px-4 py-12'>
          {finalMovie.map((movie) => (
            <MovieCard key={movie.imdbID} title={movie.Title} year={movie.Year} genre={movie.Genre} poster={movie.Poster} imdb={movie.imdbRating} />
          ))}
        </div>
      </Wrapper>
    </>
  )
}

export default Home