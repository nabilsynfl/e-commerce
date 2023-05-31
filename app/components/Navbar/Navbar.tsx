import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between pt-[30px] px-[120px] w-full mx-auto'>
      <div className='flex space-x-[3px] font-bold text-[20px]'>
        <img src='navbar-icon/shoe.svg'></img>
        <h1>Shoe</h1>
      </div>

      <div className='navbar flex space-x-20'>
        <ul className='flex space-x-20 text-[#808080] font-bold text-[12px]'>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT US</Link></li>
          <li><Link href="/shop">SHOP</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
        </ul>
        <div>
          <img src="navbar-icon/Search.svg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Navbar