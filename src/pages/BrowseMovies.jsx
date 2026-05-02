import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import Wrapper from "../components/Wrapper"
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import PaginationRow from "../components/PaginationRow";

function BrowseMovies() {
  const [query, setQuery] = useState("best");
  const [isLoading, setIsLoading] = useState(true);
  const [finalMovie, setFinalMovies] = useState([]);
  const [pages, setPages] = useState(0);
  const API_KEY = 'ec51a0d2';

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const URL = `https://www.omdbapi.com/?s=%22${query}%22&apikey=${API_KEY}`;

      try {
        const res = await fetch(URL);
        const data = await res.json();

        if (data.Search) {
          const searchedData = [...data.Search];

          const detailPromise = searchedData.map(async (movie) => {
            const detailURL = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`;
            const detailRes = await fetch(detailURL);
            return await detailRes.json();
          });

          const finalMovies = await Promise.all(detailPromise);
          setFinalMovies(finalMovies);

          console.log(data.totalResults);
          const totalPages = Math.ceil(data.totalResults / 10);
          setPages(totalPages);
        }
        setIsLoading(false);

      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [query]);

  return (
    <>
      <Navbar />
      <Wrapper className='bg-gray-900/95 py-15'>
        <div className='w-full max-w-full px-4'>
          <h1 className='text-center font-arimo text-white font-light text-5xl pb-6'>Search What <span className='font-poppins font-bold tracking-tight text-transparent bg-linear-to-r from-green-500 to-cyan-400 bg-clip-text'>You Love</span></h1>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="bg-gray-900 py-10 min-h-dvh">
        {isLoading ? (
          <div className='w-full max-w-full px-4 flex justify-center items-center'>
            <Loading className="mt-10" />
          </div>
        ) : (
          <>
            <div className='w-full max-w-full grid grid-cols-5 gap-x-15 gap-y-10 px-4 py-12'>
              {finalMovie.map((movie) => (
                <MovieCard height="h-75" key={movie.imdbID} title={movie.Title} year={movie.Year} genre={movie.Genre} poster={movie.Poster} imdb={movie.imdbRating} />
              ))}
            </div>
            <div className="max-w-6xl mx-auto pt-5">
              <PaginationRow pages={pages}/>
            </div>
          </>
        )}
      </Wrapper>
      <Footer />
    </>
  )
}

export default BrowseMovies