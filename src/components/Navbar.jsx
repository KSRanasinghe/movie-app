import { Link } from 'react-router'
import Wrapper from './Wrapper'
import NavLink from './NavLink'

function Navbar() {
  return (
    <>
      <Wrapper className='bg-gray-900 py-4 border-b-gray-500 border-b'>
        <div className='w-full lg:w-3/12 px-4 flex items-center'>
          <Link to='/' className='font-poppins font-semibold text-3xl tracking-tighter bg-linear-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent' title='MovieApp | Home'>MovieApp</Link>
        </div>
        <div className='w-full lg:w-9/12 px-4'>
          <div className='h-full flex justify-end items-center gap-8'>
            <NavLink to='/' name='Home' />
            <NavLink to='/browse' name='Browse Movies' />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Navbar