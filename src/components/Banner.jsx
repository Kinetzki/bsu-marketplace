import React from 'react'
import ShadedContainer from './ShadedContainer'

function Banner({title, utils}) {
  return (
    <ShadedContainer otherStyle={"rounded-[0px] flex py-[15px] bg-[#510a325a] border-l-0 select-none justify-between items-center"}>
        <h1 className='text-[18px] font-Archivo'>{title}</h1>
        {utils}
    </ShadedContainer>
  )
}

export default Banner