import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='h-18 bg-black flex justify-around items-center text-white'>
      <div className='font-extrabold text-3xl'>OnlyChat</div>
      <Link href="/src/app/login/page.jsx" className=' border-1 rounded-2xl text-xl w-20 h-10 flex justify-center curson-pointer' >Login</Link>
    </div>
  )
}

export default Navbar
