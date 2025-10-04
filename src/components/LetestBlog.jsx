import React from 'react'
import Container from './Container'
import Frame from "../assets/frame.png"
import Frame1 from "../assets/frame1.png"
import Frame2 from "../assets/frame2.png"
import { BsVectorPen } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'
const LetestBlog = () => {
    return (
        <div className='lg:mb-25 mb-11'>
            <Container>
                <div className="lg:w-1/3 w-full m-auto text-center pb-15">
                    <h2 className='font-main font-bold text-prymari lg:text-[42px] text-[22px'>Leatest Blog</h2>
                </div>
                <div className="lg:flex lg:gap-x-5 ">
                    <div className="lg:w-1/3 w-full group pb-5 bg-white shadow-lg shadow-black/10">
                        <div className="">
                            <img className='w-full' src={Frame} alt="" />
                        </div>
                       <div className="pl-5">
                         <div className="flex gap-7 pt-5 pb-8">
                            <p className='flex  gap-2 font-main  font-bold text-prymari text-[14px]'><BsVectorPen className='text-[#FB2E86] text-[16px]' /> SaberAli</p>
                            <p className='flex  gap-1 font-main font-bold text-prymari text-[14px]'><FaRegCalendarAlt className='text-[#FFA454] text-[16px]' /> 21 August,2020</p>
                        </div>
                        <h3 className='pb-4 font-main font-bold text-prymari text-[18px] group-hover:text-[#FB2E86]'>Top esssential Trends in 2021</h3>
                        <p className='pb-3.5 font-loto pr-15 font-normal text-[16px] text-[#72718F]'>More off this less hello samlande lied much
                        over tightly circa horse taped mightly</p>
                        <u className='font-loto font-normal text-[16px] text-[#151875] group-hover:text-[#FB2E86] cursor-pointer'>Read More</u>
                       </div>
                    </div>
                    <div className="lg:w-1/3 w-full group pb-5 bg-white shadow-lg shadow-black/10">
                        <div className="">
                            <img className='w-full' src={Frame1} alt="" />
                        </div>
                       <div className="pl-5">
                         <div className="flex gap-7 pt-5 pb-8">
                            <p className='flex  gap-2 font-main  font-bold text-prymari text-[14px]'><BsVectorPen className='text-[#FB2E86] text-[16px]' /> SaberAli</p>
                            <p className='flex  gap-1 font-main font-bold text-prymari text-[14px]'><FaRegCalendarAlt className='text-[#FFA454] text-[16px]' /> 21 August,2020</p>
                        </div>
                        <h3 className='pb-4 font-main font-bold text-prymari text-[18px] group-hover:text-[#FB2E86]'>Top esssential Trends in 2021</h3>
                        <p className='pb-3.5 font-loto pr-15 font-normal text-[16px] text-[#72718F]'>More off this less hello samlande lied much
                        over tightly circa horse taped mightly</p>
                        <u className='font-loto font-normal text-[16px] text-[#151875] group-hover:text-[#FB2E86] cursor-pointer'>Read More</u>
                       </div>
                    </div>
                    <div className="lg:w-1/3 w-full group pb-5 bg-white shadow-lg shadow-black/10">
                        <div className="">
                            <img className='w-full' src={Frame2} alt="" />
                        </div>
                       <div className="pl-5">
                         <div className="flex gap-7 pt-5 pb-8">
                            <p className='flex  gap-2 font-main  font-bold text-prymari text-[14px]'><BsVectorPen className='text-[#FB2E86] text-[16px]' /> SaberAli</p>
                            <p className='flex  gap-1 font-main font-bold text-prymari text-[14px]'><FaRegCalendarAlt className='text-[#FFA454] text-[16px]' /> 21 August,2020</p>
                        </div>
                        <h3 className='pb-4 font-main font-bold text-prymari text-[18px] group-hover:text-[#FB2E86]'>Top esssential Trends in 2021</h3>
                        <p className='pb-3.5 font-loto pr-15 font-normal text-[16px] text-[#72718F]'>More off this less hello samlande lied much
                        over tightly circa horse taped mightly</p>
                        <u className='font-loto font-normal text-[16px] text-[#151875] group-hover:text-[#FB2E86] cursor-pointer'>Read More</u>
                       </div>
                    </div>
                   
                </div>
            </Container>
        </div>
    )
}

export default LetestBlog