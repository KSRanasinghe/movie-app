import { IconStarFilled } from "@tabler/icons-react"
import { Link } from "react-router"

function MovieCard(props) {
  const formattedYear = props.year.length > 4 ? props.year.slice(0, 4) : props.year;

  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-93 border-4 border-white rounded-lg relative group transition duration-450 ease-linear hover:border-green-500 overflow-hidden">
          <img src={props.poster} alt={props.title} className="w-full max-w-full aspect-2/3 object-cover  block" />

          <div className="absolute inset-0 w-full h-full flex flex-col items-center pt-8 pb-4 px-4 bg-gray-950/45 backdrop-blur-sm z-2 opacity-0 transition duration-300 ease-linear group-hover:opacity-100">
            <IconStarFilled className="text-green-500" />
            <p className="font-arimo font-bold text-white text-3xl mt-3.5">{props.imdb} / 10</p>
            <h2 className="font-arimo font-bold text-white text-2xl mt-3.5 text-center">{props.genre}</h2>
            <Link className="font-arimo py-2 px-4 rounded-sm bg-green-500 text-white mt-5 transition duration-450 ease-linear translate-y-6 group-hover:translate-y-0 hover:bg-green-600">View More</Link>
          </div>
        </div>
        <div className="p-1.5">
          <h3 className="text-white font-arimo text-sm font-light whitespace-break-spaces">{props.title}</h3>
          <p className="text-white/45 font-arimo text-sm font-light">{formattedYear}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCard