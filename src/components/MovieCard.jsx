import { IconStarFilled } from "@tabler/icons-react"
import { Link } from "react-router"

function MovieCard() {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-93 border-4 border-white rounded-lg relative group transition duration-450 ease-linear hover:border-green-500 overflow-hidden">
          <img src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg" alt="Guardians of the Galaxy Vol. 2" className="w-full h-auto max-w-full object-fill block" />

          <div className="absolute inset-0 w-full h-full flex flex-col items-center pt-8 pb-4 px-4 bg-gray-950/45 backdrop-blur-sm z-2 opacity-0 transition duration-300 ease-linear group-hover:opacity-100">
            <IconStarFilled className="text-green-500" />
            <p className="font-arimo font-bold text-white text-3xl mt-3.5">7.6 / 10</p>
            <h2 className="font-arimo font-bold text-white text-2xl mt-3.5 text-center">Action, Adventure, Comedy</h2>
            <Link className="font-arimo py-2 px-4 rounded-sm bg-green-500 text-white mt-5 transition duration-450 ease-linear translate-y-6 group-hover:translate-y-0 hover:bg-green-600">View More</Link>
          </div>
        </div>
        <div className="p-1.5">
          <h3 className="text-white font-arimo text-sm font-light whitespace-break-spaces">Guardians of the Galaxy Vol. 2</h3>
          <p className="text-white/45 font-arimo text-sm font-light">2017</p>
        </div>
      </div>
    </>
  )
}

export default MovieCard