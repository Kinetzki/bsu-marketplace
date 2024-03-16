import React from 'react'
import Button1 from './Button1'

function Header() {
  return (
    <div className='w-full justify-between flex px-10 h-[80px] items-center'>
        <div className='flex items-center'>
            {/* Logo */}
            <h1>Hello</h1>
        </div>
        <div className='flex gap-12 items-center'>
            <ul className='flex gap-10'>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>How it works</li>
                <li className='cursor-pointer'>Organizations</li>
                <li className='cursor-pointer'>Support</li>
            </ul>
            <Button1 text={"Log In"}/>
        </div>
    </div>
  )
}

export default Header