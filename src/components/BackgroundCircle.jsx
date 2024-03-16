import React from 'react'

function BackgroundCircle({position}) {
  return (
    <div className={"absolute w-[500px] h-[500px] rounded-[50%] bg-[var(--secondary-color)] filter blur-3xl opacity-[60%] z-[-1] " + position}></div>
  )
}

export default BackgroundCircle