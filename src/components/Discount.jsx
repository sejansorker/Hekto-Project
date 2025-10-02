import React, { useState } from 'react'
import Container from './Container'
import { IoCheckmark } from 'react-icons/io5'
import Group from "../assets/group3.png"
const Discount = () => {
    const [discount, setDiscount] = useState("wood") 
  return (
    <div className='mb-20'>
        <Container>
            <div className="w-1/3 mx-auto text-center">
                <h2 className='font-main font-bold text-prymari text-[42px] pb-8'>Discount Item</h2>
            </div>
            <div className="w-1/3 mx-auto flex gap-x-8   justify-center">
                <h2 onClick={()=>setDiscount("wood")} className={`${discount === "wood" ? "text-[#FB4997] border-b-2 border-[#FB4997] after:absolute after:h-1.5 after:w-1.5 after:bg-[#FB4997] after:top-[50%]  after:transform after:translateY-[-50%] after:right-[-15px]": "text-prymari"} font-loto font-normal relative cursor-pointer text-[18px] `}>Wood Chair</h2>
                <h2 onClick={()=>setDiscount("plastic")} className={`${discount === "plastic" ? "text-[#FB4997] border-b-2 border-[#FB4997] after:absolute after:h-1.5 after:w-1.5 after:bg-[#FB4997] after:top-[50%]  after:transform after:translateY-[-50%] after:right-[-15px]": "text-prymari"} font-loto relative font-normal  cursor-pointer text-[18px] `}>Plastic Chair</h2>
                <h2 onClick={()=>setDiscount("sofa")} className={`${discount === "sofa" ? "text-[#FB4997] border-b-2 border-[#FB4997] after:absolute after:h-1.5 after:w-1.5 after:bg-[#FB4997] after:top-[50%]  after:transform after:translateY-[-50%] after:right-[-15px]": "text-prymari"} font-loto relative font-normal  cursor-pointer text-[18px] `}>Sofa Colletion</h2>
            </div>
            <div className="">
                {discount === "wood" &&
                <div className="flex items-center">
                    <div className="w-1/2">
                        <h3 className='font-main font-bold text-[35px] text-prymari pb-4'><span className='text-[#FB2E86]'>20% </span>Discount Of All Products</h3>
                        <h5 className='font-main font-normal text-[21px] text-[#FB2E86] pb-5'>Eams Sofa Compact</h5>
                        <p className='font-loto font-normal text-[16px] text-[#B7BACB] pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                        <ul className='flex flex-wrap gap-x-11 gap-y-3'>
                            <li className='flex items-center font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Material expose like metals</li>
                            <li className='flex items-center font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Clear lines and geomatric figures</li>
                            <li className='flex items-center font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Simple neutral colours.</li>
                            <li className='flex items-center pl-5 font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Material expose like metals</li>
                        </ul>
                        <button className='font-main px-12 py-5 font-normal text-[16px] bg-[#FB2E86] text-white mt-9 cursor-pointer'>Shop Now</button>
                    </div>
                    <div className="w-1/2">
                    <img className='w-full' src={Group} alt="" />
                    </div>
                </div>
                }
            </div>
            <div className="">
                {discount === "plastic" &&
                 <div className="flex items-center">
                    <div className="w-1/2">
                        <h3 className='font-main font-bold text-[35px] text-prymari pb-4'><span className='text-[#FB2E86]'>30% </span> Discount Of All Products</h3>
                        <h5 className='font-main font-normal text-[21px] text-[#FB2E86] pb-5'>Eams Sofa Compact</h5>
                        <p className='font-loto font-normal text-[16px] text-[#B7BACB] pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                        <ul className='flex flex-wrap gap-x-11 gap-y-3'>
                            <li className='flex items-center font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Material expose like metals</li>
                            <li className='flex items-center font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Clear lines and geomatric figures</li>
                            <li className='flex items-center font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Simple neutral colours.</li>
                            <li className='flex items-center pl-5 font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Material expose like metals</li>
                        </ul>
                        <button className='font-main px-12 py-5 font-normal text-[16px] bg-[#FB2E86] text-white mt-9 cursor-pointer'>Shop Now</button>
                    </div>
                    <div className="w-1/2">
                    <img className='w-full' src={Group} alt="" />
                    </div>
                </div>
                }
            </div>
            <div className="">
                {discount === "sofa" &&
                 <div className="flex items-center">
                    <div className="w-1/2">
                        <h3 className='font-main font-bold text-[35px] text-prymari pb-4'><span className='text-[#FB2E86]'>40% </span> Discount Of All Products</h3>
                        <h5 className='font-main font-normal text-[21px] text-[#FB2E86] pb-5'>Eams Sofa Compact</h5>
                        <p className='font-loto font-normal text-[16px] text-[#B7BACB] pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                        <ul className='flex flex-wrap gap-x-11 gap-y-3'>
                            <li className='flex items-center font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Material expose like metals</li>
                            <li className='flex items-center font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Clear lines and geomatric figures</li>
                            <li className='flex items-center font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Simple neutral colours.</li>
                            <li className='flex items-center pl-5 font-loto font-normal text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold text-[20px]' /> Material expose like metals</li>
                        </ul>
                        <button className='font-main px-12 py-5 font-normal text-[16px] bg-[#FB2E86] text-white mt-9 cursor-pointer'>Shop Now</button>
                    </div>
                    <div className="w-1/2">
                    <img className='w-full' src={Group} alt="" />
                    </div>
                </div>
                }
            </div>
        </Container>
    </div>
  )
}

export default Discount