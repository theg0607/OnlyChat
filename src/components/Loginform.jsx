import React from 'react'

function Loginform() {
  return (
    <div className='flex justify-center align-middle h-[450px] bg-stone-950 text-white'>
      <div className=' w-[300px] flex justify-center items-center'>
        <div>
          <h1 className='text-center text-3xl'>Signup</h1><br></br>
          <input type="usename" placeholder='Username' className='border-2 bg-white text-black'/><br></br><br></br>
          <input type="password" placeholder='Password'className='border-2 bg-white text-black'/>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Loginform