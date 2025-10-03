import React from 'react'
import Container from './Container'
import Logo from "../assets/hekto.png"
import { FaFacebook } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { AiFillTwitterCircle } from 'react-icons/ai'
const Footer = () => {
  return (
   <>
    <div className='bg-[#EEEFFB]'>
        <Container>
            <div className="flex py-12 ">
                <div className="w-2/5">
                <div className="pb-8">
                    <img src={Logo} alt="" />
                </div>
                <div className="relative">
                    <input className='w-[377px]  pt-3.5 pb-3 pl-5 outline-0 bg-white text-[#8A8FB9] text-[16px] font-normal font-loto' type="text" placeholder='Enter Email Address' />
                <button className='pt-[13px] pb-[12px] px-10 absolute top-0 right-36 text-white text-[16px] font-medium font-main bg-[#FB2E86]'>Sign Up</button>
                <p className='pb-2.5 pt-8 text-[#8A8FB9] text-[16px] font-normal font-loto'>Contact Info</p>
                <address className='text-[#8A8FB9] text-[16px] font-normal font-loto'>Dhanmondi 10/A Road, Dhaka, Bangladesh</address>
                </div>
                </div>
                <div className="w-1/5">
                <h4 className='pb-8.5 font-main font-semibold text-black text-[22px]'>Catagories</h4>
                <ul>
                    <li className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Laptops & Computers</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Cameras & Photography</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Smart Phones & Tablets</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Video Games & Consoles</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Waterproof Headphones</li>
                </ul>
                </div>
                <div className="w-1/5">
                <h4 className='pb-8.5 font-main font-semibold text-black text-[22px]'>Customer Care</h4>
                <ul>
                    <li className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>My Account</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Discount</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Smart Returns</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Video Orders History</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Order Tracking</li>
                </ul>
                </div>
                <div className="w-1/5">
                <h4 className='pb-8.5 font-main font-semibold text-black text-[22px]'> Pages</h4>
                <ul>
                    <li className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Blog</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Browse the Shop</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Category </li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Pre-Built Pages</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>Visual Composer Elements</li>
                    <li  className='text-[#8A8FB9] text-[16px] font-normal font-loto pb-5'>WooCommerce Pages</li>
                </ul>
                </div>
            </div>
        </Container>
    </div>
    <div className="bg-[#E7E4F8]">
        <Container>
            <div className="flex justify-between">
                <div className="w-1/5">
                <p className='text-[#9DA0AE] text-[16px] font-semibold font-loto py-4'>©Webecy - All Rights Reserved</p>
                </div>
                <div className="w-1/5">
                <div className="flex items-center pt-5 gap-[10px]">
                    <FaFacebook />
                    <RiInstagramFill />
                    <AiFillTwitterCircle />
                </div>
                </div>
            </div>
        </Container>
    </div>
   </>
  )
}

export default Footer