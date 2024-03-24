import React from 'react'

function PanelLinks({text, handleClick, active, otherStyle}) {
  return (
    <h1 onClick={handleClick} className={'select-none cursor-pointer px-[20px] py-[8px] rounded-[10px] ' + otherStyle + " " + (active? "bg-[var(--accent-color)] text-rose-200 hover:bg-[var(--accent-color)]" : "hover:bg-[var(--secondary-color)]")}>{text}</h1>
  )
}

export default PanelLinks