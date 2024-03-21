import React from 'react'
import Spinner from './Spinner'

function ScreenLoader() {
  return (
    <div className='absolute top-0 left-0 w-full h-screen bg-[#1a0c19] z-[2] flex items-center justify-center'>
        <Spinner/>
    </div>
  )
}

export default ScreenLoader