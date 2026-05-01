import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import Wrapper from "../components/Wrapper"

function BrowseMovies() {
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
      <Wrapper className="bg-gray-900 py-20 min-h-dvh"></Wrapper>
      <Footer />
    </>
  )
}

export default BrowseMovies