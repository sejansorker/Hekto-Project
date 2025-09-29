import React from 'react'
import Container from './Container'
import { MdOutlineMail } from 'react-icons/md'
import { FiPhoneCall, FiShoppingCart } from 'react-icons/fi'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='bg-top'>
        <Container>
            <div className="flex  py-2.5 font-main justify-between">
                <div className="w-1/3 flex gap-12">
                   <div className="flex gap-2.5 items-center font-semibold text-[16px] text-[#F1F1F1]">
                     <MdOutlineMail />
                    <p>sejansorker@gmail.com</p>
                   </div>
                   <div className="flex gap-3 items-center font-semibold text-[16px] text-[#F1F1F1]">
                    <FiPhoneCall />
                    <p className=''>01780519010</p>
                   </div>
                </div>
                <div className="w-1/3 flex justify-end">
                <div className="flex items-center gap-x-4 ">
              <div className="space-x-4">
                <select name="" id="" className='focus:outline-0 text-[#F1F1F1] font-semibold text-[16px]'>
                <option value="" className=' text-black' >English</option>
                <option value="" className=' text-black' >Bangla</option>
                
              </select>
              <select name="" id="" className='focus:outline-0 text-[#F1F1F1] font-semibold text-[16px]'>
                <option value="" className=' text-black' >USD</option>
                <option value="" className=' text-black' >BD</option>
                
              </select>
              </div>
              <div className="flex gap-x-5">
                <p className='flex text-[#F1F1F1] gap-0.5 font-semibold text-[16px]'>Login <FaRegUser/></p>
                <p className='flex text-[#F1F1F1] gap-[3px] font-semibold text-[16px]'>Wishlist <FaRegHeart/></p>
                <p className='text-[#F1F1F1] font-semibold text-[19px]'><FiShoppingCart /></p>
              </div>
                </div>
                </div>
              
                
            </div>
        </Container>
    </div>
  )
}

export default Header