import React from 'react'

function Signupform() {
  return (
    <div className='flex justify-center align-middle h-[450px] bg-stone-950 text-white'>
      <div className=' w-[300px] flex justify-center items-center'>
        <div className='grid justify-items-center h-[400px]'>
          <h1 className='text-center text-3xl'>Signup</h1><br></br>
          <input type="text" placeholder='Name' className='border-2 bg-white text-black'/><br></br><br></br>
          <input type="email" placeholder='Email' className='border-2 bg-white text-black'/><br></br><br></br>
          <input type="usename" placeholder='Username' className='border-2 bg-white text-black'/><br></br><br></br>
          <input type="password" placeholder='Password'className='border-2 bg-white text-black'/><br></br><br></br>
          <button className='border-1 w-[100px]'>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default Signupform