import React from 'react'

function ShadedContainer({children, otherStyle}) {
  return (
    <div className={'bg-[#510a321a] border-[1px] border-[#c72c4128] p-10 ' + otherStyle}>{children}</div>
  )
}

export default ShadedContainer