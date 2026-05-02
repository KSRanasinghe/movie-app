import { IconStarFilled } from "@tabler/icons-react"
import { useState } from "react";
import { Link } from "react-router"

function MovieCard(props) {
  const [imgSrc, setImgSrc] = useState(props.poster);
  const formattedYear = props.year.length > 4 ? props.year.slice(0, 4) : props.year;
  const fallbackImg = "https://placehold.net/400x600.png";

  return (
    <>
      <div className="w-full h-auto">
        <div className={`w-full ${props.height} border-4 border-white rounded-lg relative group transition duration-450 ease-linear hover:border-green-500 overflow-hidden`}>
          <img src={imgSrc == "N/A" ? fallbackImg : imgSrc}
            alt={props.title}
            onError={() => setImgSrc(fallbackImg)}
            className="w-full h-full max-w-full object-cover  block" />
          <div className="absolute inset-0 w-full h-full flex flex-col items-center pt-8 pb-4 px-4 bg-gray-950/45 backdrop-blur-sm z-2 opacity-0 transition duration-300 ease-linear group-hover:opacity-100">
            <IconStarFilled className="text-green-500" />
            <p className="font-arimo font-bold text-white text-3xl mt-3.5">{props.imdb} / 10</p>
            <h2 className="font-arimo font-bold text-white text-xl mt-3.5 text-center">{props.genre}</h2>
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