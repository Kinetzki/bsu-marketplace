import React from 'react'
import ShadedContainer from './ShadedContainer'

function Banner({title}) {
  return (
    <ShadedContainer otherStyle={"rounded-[0px] flex py-[15px] bg-[#510a325a]"}>
        <h1 className='text-[18px] font-Archivo'>{title}</h1>
    </ShadedContainer>
  )
}

export default Banner