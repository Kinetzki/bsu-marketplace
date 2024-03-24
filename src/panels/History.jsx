import React from 'react'
import Banner from '../components/Banner'
import Label1 from '../components/Label1'

function History() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Banner title="History"/>
      <Label1 text={"No History"}/>
    </div>
  )
}

export default History