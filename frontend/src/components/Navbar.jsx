import React from 'react'

const Navbar = () => {
  return (
      <div className='navbar h-20 flex items-center justify-between px-24 font-roboto'>
        <img className="py-8px px-18px" src="/icons/TIX ID.jpg" alt="TIX LOGO"></img>
          <div className=' flex flex-row items-center gap-10 w-1/2'>
            <p>HOME</p>
            <p>TIKET SAYA</p>
            <p>TIX ID NEWS</p>
            <p>|</p>
            <img className="size-8" src="/icons/bell.png" alt="notification"></img>
            <p>DAFTAR AKUN</p>
            <div className="account text-white h-10 w-10 flex justify-center items-center rounded-full bg-gradient-to-tr from-yellow-400  to bg-yellow-700">A</div>
          </div>
      </div>




  )
}

export default Navbar