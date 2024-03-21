import React from 'react'

function PanelLinks({text, handleClick}) {
  return (
    <h1 onClick={handleClick} className='cursor-pointer px-[20px] hover:bg-[var(--secondary-color)] py-[8px] rounded-[10px]'>{text}</h1>
  )
}

export default PanelLinks