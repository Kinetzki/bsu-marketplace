import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Label1 from '../components/Label1'
import ScreenLoader from '../components/ScreenLoader';

function History() {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col relative">
      {isLoading && <ScreenLoader otherstyle={"z-[2]"} />}
      <Banner title="History"/>
      <Label1 text={"No History"}/>
    </div>
  )
}

export default History