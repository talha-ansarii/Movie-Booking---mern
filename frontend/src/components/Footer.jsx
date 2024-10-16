import React from 'react'

const Footer = () => {
  const t = new Date;
  const year = t.getFullYear();
  console.log(year);
  return (
    <div className='h-[360px] w-screen flex flex-row font border-t-[#BDC5D4] border-t-2'>
      <div className="logo flex-[1.5]">
        <img className="mt-2 w-32 mx-auto" src="/icons/TIX ID.png" alt="logo"></img>
      </div>
      <div className='flex-[1]'>
        <div className="mt-8">
        <p className='mb-6 font-semibold'>Perusahaan</p>
        <p className='mb-6'>Kontak Kami</p>
        <p className='mb-6'>Ten Tang</p>
        <p className='mb-6'>Partner</p>
        </div>
      </div>
      <div className='flex-[1]'>
        <div className="mt-8">
        <p className='mb-[24px] font-semibold'>Seputar</p>
        <p className='mb-[24px]'>TIX ID News</p>
        <p className='mb-[24px]'>Bioskop</p>
        <p className='mb-[24px]'>Tiket Saya</p>
        <p className='mb-[24px]'>Pembayaran</p>
        <p className='mb-[24px]'>Ciclian</p>
        </div>
      </div>
      <div className='flex-[1]'>
        <div className="mt-8">
        <p className='mb-[24px] font-semibold'>Dunkungan</p>
        <p className='mb-[24px]'>Pusat Bantuan</p>
        <p className='mb-[24px]'>Kebijakan Privasi</p>
        <p className='mb-[24px]'>FAQ</p>
        <p className='mb-[24px]'>Sayrat Dan Ketentuan</p>
        <p className='mb-[24px]'>Update Covid-19</p>
        </div>
      </div>
      <div className="link w-40 flex-[2]">
        <div className="mt-8" >
        <p className='mb-[24px] font-semibold'>Follow Social media</p>
        <img className="mb-6" src='/icons/Frame 141.png' alt="social logos"></img>
        <p className='mb-[24px] font-semibold'>Download Aplikasi TIX ID</p>
        <img className='mb-6' src="/icons/Group 33.png" alt="playstore apple links"></img>
        <p className='mb-[24px]'>{year} TIX ID-PT Nusantara Sejahtera.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer