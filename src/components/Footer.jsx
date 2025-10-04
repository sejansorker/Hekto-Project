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
            <div className="flex flex-wrap py-12 justify-between">
                <div className="lg:w-2/5 w-6/6">
                <div className="lg:pb-8 pb-4">
                    <img src={Logo} alt="" />
                </div>
                <div className="relative lg:pb-0 pb-3">
                    <input className='lg:w-[377px] w-[190px] pt-3.5 pb-3 pl-5 outline-0 bg-white text-[#8A8FB9] lg:text-[16px] text-[12px] font-normal font-loto' type="text" placeholder='Enter Email Address' />
                <button className='pt-[13px] pb-[13px] lg:px-10 px-5 absolute top-0 lg:right-36 right-[155px] text-white lg:text-[16px] text-[12px] font-medium font-main bg-[#FB2E86]'>Sign Up</button>
                <p className='pb-2.5 lg:pt-8 pt-4 text-[#8A8FB9] lg:text-[16px] text-[12px] font-normal font-loto'>Contact Info</p>
                <address className='text-[#8A8FB9] lg:text-[16px] text-[12px] font-normal font-loto'>Dhanmondi 10/A Road, Dhaka, Bangladesh</address>
                </div>
                </div>
                <div className="lg:w-1/5 w-2/6">
                <h4 className='lg:pb-8.5 pb-4 text-[16px] lg:text-[22px] font-main font-semibold text-black '>Catagories</h4>
                <ul>
                    <li className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Laptops & Computers</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Cameras & Photography</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Smart Phones & Tablets</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Video Games & Consoles</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Waterproof Headphones</li>
                </ul>
                </div>
                <div className="lg:w-1/5 w-2/6">
                <h4 className='lg:pb-8.5 pb-4 text-[16px] lg:text-[22px] font-main font-semibold text-black '>Customer Care</h4>
                <ul>
                    <li className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>My Account</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Discount</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Smart Returns</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Video Orders History</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Order Tracking</li>
                </ul>
                </div>
                <div className="lg:w-1/5 w-2/6">
                <h4 className='lg:pb-8.5 pb-4 text-[16px] lg:text-[22px] font-main font-semibold text-black '> Pages</h4>
                <ul>
                    <li className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Blog</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Browse the Shop</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Category </li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Pre-Built Pages</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>Visual Composer Elements</li>
                    <li  className='text-[#8A8FB9] text-[10px] lg:text-[16px] font-normal font-loto pb-5'>WooCommerce Pages</li>
                </ul>
                </div>
            </div>
        </Container>
    </div>
    <div className="bg-[#E7E4F8]">
        <Container>
            <div className="flex justify-between">
                <div className="lg:w-1/5 w-1/2">
                <p className='text-[#9DA0AE] lg:text-[16px] text-[12px] font-semibold font-loto py-4'>©Webecy - All Rights Reserved</p>
                </div>
                <div className="lg:w-1/5 w-1/2">
                <div className="flex lg:items-center justify-center pt-5 gap-[10px]">
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