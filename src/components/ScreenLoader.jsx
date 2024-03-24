import React from 'react'
import Spinner from './Spinner'

function ScreenLoader({otherstyle}) {
  return (
    <div className={'absolute top-0 left-0 w-full min-h-screen bg-[#1a0c19] z-[2] flex items-center justify-center ' + otherstyle}>
        <Spinner/>
    </div>
  )
}

export default ScreenLoader