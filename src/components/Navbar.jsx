import React from 'react'
import Container from './Container'
import Logo from "../assets/hekto.png"
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
const Navbar = () => {
  return (
    <div className='sticky top-0 z-100 bg-white'>
        <Container>
            <div className="flex py-5 ">
                <div className="w-1/6">
                <img className='' src={Logo} alt="" />
                </div>
                <div className="w-3/6">
                <div className="">
                    <ul className='flex gap-x-9 '>
                        <li className='text-[#0D0E43] cursor-pointer flex items-center gap-0.5 text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Home <IoIosArrowDown className='text-[14px]' /></li>
                        <li className='text-[#0D0E43] cursor-pointer text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Pages</li>
                        <li className='text-[#0D0E43] cursor-pointer text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Products</li>
                        <li className='text-[#0D0E43] cursor-pointer text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Blog </li>
                        <li className='text-[#0D0E43] cursor-pointer text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Shop</li>
                        <li className='text-[#0D0E43] cursor-pointer text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Contact</li>
                    </ul>
                    </div>
                    </div>
                <div className="w-2/6 flex justify-end">
                <div className="relative">
                  <input type="text" className='w-80 h-10 outline-0 pl-5 text-[16px] font-loto font-normal text-black bg-[#D9D9D9]' />
                  <div className="flex items-center justify-center absolute h-10 bg-[#FB2E86] w-13 top-0 right-0"><IoIosSearch className='text-[22px] font-loto font-normal text-[#FFFFFF]' /></div>
                </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
export default Navbar