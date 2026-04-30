import Wrapper from "./Wrapper"

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <Wrapper className='bg-gray-900 py-5 border-t-gray-500 border-t'>
        <div className="w-full flex justify-center items-center">
          <p className="font-arimo font-light text-md text-white/60">MovieApp &copy; {year} | All Rights Reserved | Built by Keshara Ranasinghe</p>
        </div>
      </Wrapper>
    </>
  )
}

export default Footer