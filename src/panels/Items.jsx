import React from 'react'
import Banner from '../components/Banner'
import Label1 from '../components/Label1'

function Items() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Banner title="Items"/>
      <Label1 text="No items "/>
    </div>
  )
}

export default Items