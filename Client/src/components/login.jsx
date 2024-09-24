import React from 'react'


export default function login() {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='flex bg-[#b3c3239b] p-5 rounded-md'>
      {/* main div */}
      <div>
        {/* left div */}
        <h1 className='flex justify-center items-center font-bold  text-2xl'>SIGNIN</h1>
        <br/>
        {/* <p>if you are a new member then <a className='hover:text-white font-semibold cursor-pointer text-[#e63737]' href="#/">SIGNIN</a></p> */}
        <br/>
        <ul>
          <li className='p-2  rounded-2xl border-2 border-[#b3c3239b] hover:border-sky-500 text-red-400 hover:scale-105 transform duration-300'>placeholder="Enter your Name"</li>
          <li className='p-2  rounded-2xl border-2 border-[#b3c3239b] hover:border-sky-500 text-red-400 hover:scale-105 transform duration-300'>placeholder="Enter your Email"</li>
          <li className='p-2  rounded-2xl border-2 border-[#b3c3239b] hover:border-sky-500 text-red-400 hover:scale-105 transform duration-300'>placeholder="Enter your password"</li>
        </ul>

        <div class="border-2 p-2 bg-white rounded-2xl items-center flex justify-center hover:scale-105 transform duration-300  border-[#b3c3239b] hover:border-sky-500">
                    <button>SIGIN</button>
                </div>
                ---------------------OR----------------------
                <div class=" border-[#b3c3239b] hover:border-sky-500 flex border-2 bg-white py-2 w-full justify-center items-center rounded-2xl hover:scale-105 transform duration-300">
                    <img class="h-[30px]" src="" />
                    <h1>signin with google</h1>
                </div>

      </div>
      <div>
        {/* right div */}
      </div>
    </div>
  </div>

  )
}
