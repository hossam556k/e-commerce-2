import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 bg-slate-600 md:px-12 fixed py-2 justify-between top-0 w-full z-50 shadow'>
        <Link href="/" className='text-2xl text-zinc-200 font-bold'>
            LOGO

        </Link>

    <div className='flex gap-4'>
        <button className='bg-blue-500 px-3 py-1 rounded text-white hover:bg-white hover:text-blue-500'>Logn in</button>
        <button className='bg-blue-500 px-3 py-1 rounded text-white hover:bg-white hover:text-blue-500'>Sign up</button>
    </div>
         
    </div>
  )
}

export default Navbar