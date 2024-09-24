import React from 'react'

export default function Signin() {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='flex bg-[#b3c3239b] p-5 rounded-md'>
      {/* main div */}
      <div>
        {/* left div */}
        <h1 className='flex justify-center items-center font-bold  text-2xl'>SIGNOUT</h1>
        <br/>
        <p> <a className='hover:text-white font-semibold cursor-pointer text-[#e63737]' href="#/">Enter Details To SIGNOUT</a></p>
        <br/>
        <ul>
          <li className='p-2  rounded-2xl border-2 border-[#b3c3239b] hover:border-sky-500 text-red-400 hover:scale-105 transform duration-300'>placeholder="Enter your Name"</li>
          <li className='p-2  rounded-2xl border-2 border-[#b3c3239b] hover:border-sky-500 text-red-400 hover:scale-105 transform duration-300'>placeholder="Enter your Email"</li>
          <li className='p-2  rounded-2xl border-2 border-[#b3c3239b] hover:border-sky-500 text-red-400 hover:scale-105 transform duration-300'>placeholder="Enter your password"</li>
        </ul>

        <div class="border-2 p-2 bg-white rounded-2xl items-center flex justify-center hover:scale-105 transform duration-300  border-[#b3c3239b] hover:border-sky-500">
                    <button>SIGNOUT</button>
                </div>
               

      </div>
      <div>
        {/* right div */}
      </div>
    </div>
  </div>

  

  )
}
