import React from 'react'

function PanelLinks({text, handleClick, active}) {
  return (
    <h1 onClick={handleClick} className={'cursor-pointer px-[20px] hover:bg-[var(--secondary-color)] py-[8px] rounded-[10px] ' + (active && "bg-[var(--accent-color)] hover:bg-[var(--accent-color)] text-rose-200")}>{text}</h1>
  )
}

export default PanelLinks