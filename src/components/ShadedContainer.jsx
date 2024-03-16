import React from 'react'

function ShadedContainer({children, otherStyle}) {
  return (
    <div className={'bg-[#510a325d] border-[1px] border-[#c72c4159] p-10 rounded-[20px] ' + otherStyle}>{children}</div>
  )
}

export default ShadedContainer