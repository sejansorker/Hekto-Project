import React, { useState } from 'react'
import Container from './Container'
import { IoCheckmark } from 'react-icons/io5'
import Group from "../assets/group3.png"
const Discount = () => {
    const [discount, setDiscount] = useState("wood") 
  return (
    <div className='lg:mb-20 mb-9'>
        <Container>
            <div className="lg:w-1/3 w-full mx-auto text-center">
                <h2 className='font-main font-bold text-prymari text-[22px] lg:text-[42px] pb-8'>Discount Item</h2>
            </div>
            <div className="lg:w-1/3 w-full mx-auto flex gap-x-6 lg:gap-x-8   justify-center">
                <h2 onClick={()=>setDiscount("wood")} className={`${discount === "wood" ? "text-[#FB4997] border-b-2 border-[#FB4997] after:absolute after:h-1.5 after:w-1.5 after:bg-[#FB4997] after:top-[50%]  after:transform after:translateY-[-50%] after:right-[-15px]": "text-prymari"} font-loto font-normal relative cursor-pointer lg:text-[18px] text-[14px]`}>Wood Chair</h2>
                <h2 onClick={()=>setDiscount("plastic")} className={`${discount === "plastic" ? "text-[#FB4997] border-b-2 border-[#FB4997] after:absolute after:h-1.5 after:w-1.5 after:bg-[#FB4997] after:top-[50%]  after:transform after:translateY-[-50%] after:right-[-15px]": "text-prymari"} font-loto relative font-normal  cursor-pointer lg:text-[18px] text-[14px `}>Plastic Chair</h2>
                <h2 onClick={()=>setDiscount("sofa")} className={`${discount === "sofa" ? "text-[#FB4997] border-b-2 border-[#FB4997] after:absolute after:h-1.5 after:w-1.5 after:bg-[#FB4997] after:top-[50%]  after:transform after:translateY-[-50%] after:right-[-15px]": "text-prymari"} font-loto relative font-normal  cursor-pointer lg:text-[18px] text-[14px`}>Sofa Colletion</h2>
            </div>
            <div className="">
                {discount === "wood" &&
                <div className="lg:flex items-center lg:mt-0 mt-4">
                    <div className="lg:w-1/2 w-full">
                        <h3 className='font-main font-bold lg:text-[35px] text-[20px] pb-2 lg:pb-4 text-prymari '><span className='text-[#FB2E86]'>20% </span>Discount Of All Products</h3>
                        <h5 className='font-main font-normal text-[16px] lg:text-[21px] text-[#FB2E86] lg:pb-5 pb-2'>Eams Sofa Compact</h5>
                        <p className='font-loto font-normal lg:text-[16px] text-[12px] text-[#B7BACB] lg:pb-7 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                        <ul className='flex flex-wrap lg:gap-x-11 gap-x-3 gap-y-3'>
                            <li className='flex items-center font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Material expose like metals</li>
                            <li className='flex items-center font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Clear lines and geomatric figures</li>
                            <li className='flex items-center font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Simple neutral colours.</li>
                            <li className='flex items-center pl-5 font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Material expose like metals</li>
                        </ul>
                        <button className='font-main lg:px-12 px-4 lg:py-5 py-2 font-normal lg:text-[16px] text-[12px] bg-[#FB2E86] text-white lg:mt-9 mt-3 cursor-pointer'>Shop Now</button>
                    </div>
                    <div className="lg:w-1/2 w-full">
                    <img className='w-full' src={Group} alt="" />
                    </div>
                </div>
                }
            </div>
            <div className="">
                {discount === "plastic" &&
                 <div className="lg:flex items-center lg:mt-0 mt-4">
                    <div className="lg:w-1/2 w-full">
                        <h3 className='font-main font-bold lg:text-[35px] text-[20px] pb-2 lg:pb-4 text-prymari '><span className='text-[#FB2E86]'>30% </span>Discount Of All Products</h3>
                        <h5 className='font-main font-normal text-[16px] lg:text-[21px] text-[#FB2E86] lg:pb-5 pb-2'>Eams Sofa Compact</h5>
                        <p className='font-loto font-normal lg:text-[16px] text-[12px] text-[#B7BACB] lg:pb-7 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                        <ul className='flex flex-wrap lg:gap-x-11 gap-x-3 gap-y-3'>
                            <li className='flex items-center font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Material expose like metals</li>
                            <li className='flex items-center font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Clear lines and geomatric figures</li>
                            <li className='flex items-center font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Simple neutral colours.</li>
                            <li className='flex items-center pl-5 font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Material expose like metals</li>
                        </ul>
                        <button className='font-main lg:px-12 px-4 lg:py-5 py-2 font-normal lg:text-[16px] text-[12px] bg-[#FB2E86] text-white lg:mt-9 mt-3 cursor-pointer'>Shop Now</button>
                    </div>
                    <div className="lg:w-1/2 w-full">
                    <img className='w-full' src={Group} alt="" />
                    </div>
                </div>
                }
            </div>
            <div className="">
                {discount === "sofa" &&
                <div className="lg:flex items-center lg:mt-0 mt-4">
                    <div className="lg:w-1/2 w-full">
                        <h3 className='font-main font-bold lg:text-[35px] text-[20px] pb-2 lg:pb-4 text-prymari '><span className='text-[#FB2E86]'>40% </span>Discount Of All Products</h3>
                        <h5 className='font-main font-normal text-[16px] lg:text-[21px] text-[#FB2E86] lg:pb-5 pb-2'>Eams Sofa Compact</h5>
                        <p className='font-loto font-normal lg:text-[16px] text-[12px] text-[#B7BACB] lg:pb-7 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                        <ul className='flex flex-wrap lg:gap-x-11 gap-x-3 gap-y-3'>
                            <li className='flex items-center font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Material expose like metals</li>
                            <li className='flex items-center font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Clear lines and geomatric figures</li>
                            <li className='flex items-center font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Simple neutral colours.</li>
                            <li className='flex items-center pl-5 font-loto font-normal text-[12px] lg:text-[16px] text-[#B8B8DC] gap-1.5'><IoCheckmark className='text-[#7569B2] font-loto font-bold lg:text-[20px] text-[16px]' /> Material expose like metals</li>
                        </ul>
                        <button className='font-main lg:px-12 px-4 lg:py-5 py-2 font-normal lg:text-[16px] text-[12px] bg-[#FB2E86] text-white lg:mt-9 mt-3 cursor-pointer'>Shop Now</button>
                    </div>
                    <div className="lg:w-1/2 w-full">
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