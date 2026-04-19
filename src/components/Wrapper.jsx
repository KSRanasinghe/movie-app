import React from 'react'

function Wrapper({ children, className }) {
  return (
    <>
      <div className={`w-full ${className}`}>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-wrap -mx-4'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Wrapper