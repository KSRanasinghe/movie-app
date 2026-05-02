import { useId, useRef } from "react"

function SearchBar({setQuery}) {
  const movieInputId = useId();
  const movieRef = useRef();

  const handleSubmit = () => {
    setQuery(movieRef.current.value);
  }

  return (
    <>
      <label htmlFor={movieInputId} className="font-arimo text-xl font-semibold text-white/65 block">Search Movie:</label>
      <div className="pt-2 flex items-center gap-8">
        <input id={movieInputId} ref={movieRef} type="text" className="grow-2 bg-white/20 rounded-sm py-2 px-3 focus:outline-0 font-arimo text-white/70" />
        <button type="submit" className="font-arimo py-2 px-4 rounded-sm bg-green-500 text-white transition duration-450 ease-linear hover:bg-green-600" onClick={handleSubmit}>Search</button>
      </div>
    </>
  )
}

export default SearchBar