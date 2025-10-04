import React from 'react'
import Container from './Container'
import Free from "../assets/free.png"
import Cash from "../assets/cash.png"
import Pre from "../assets/pre.png"
import Clock from "../assets/clock.png"
const What = () => {
  return (
    <div className='lg:mt-15 lg:mb-34 mt-6 mb-15'>
       <Container>
        <div className="lg:w-1/3 w-full mx-auto ">
            <h2 className='text-center font-main font-bold text-prymari text-[22px] lg:text-[42px]'>What Shopex Offer!</h2>
        </div>
        <div className="flex flex-wrap lg:gap-x-5 lg:gap-y-0 gap-y-5 lg:pt-14 pt-5 justify-between">
            <div className="lg:w-[23%] w-[48%] ">
               <div className="lg:pt-14 pt-7 lg:pb-11 pb-5 lg:px-6.5 px-3 bg-[#fff] text-center shadow-lg shadow-black/10">
                <div className="flex justify-center">
                    <img className='' src={Free} alt="" />
                </div>
                <h6 className='font-main font-bold lg:text-[22px] text-[16px] text-prymari lg:pt-[27px] lg:pb-[20px] pt-3 pb-2.5'>24/7 Support</h6>
                <p className='lg:text-[16px] text-[12px] text-[#1A0B5B] font-loto font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </div>
            </div>
            <div className="lg:w-[23%] w-[48%] ">
               <div className="lg:pt-14 pt-7 lg:pb-11 pb-5 lg:px-6.5 px-3 bg-[#fff] text-center shadow-lg shadow-black/10">
                <div className="flex justify-center">
                    <img className='' src={Cash} alt="" />
                </div>
                <h6 className='font-main font-bold  text-prymari lg:pt-[27px] lg:pb-[20px] pt-3 pb-2.5 lg:text-[22px] text-[16px]'>24/7 Support</h6>
                <p className='lg:text-[16px] text-[12px] text-[#1A0B5B] font-loto font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </div>
            </div>
            <div className="lg:w-[23%] w-[48%] ">
               <div className="lg:pt-14 pt-7 lg:pb-11 pb-5 lg:px-6.5 px-3 bg-[#fff] text-center shadow-lg shadow-black/10">
                <div className="flex justify-center">
                    <img className='' src={Pre} alt="" />
                </div>
                <h6 className='font-main font-bold lg:text-[22px] text-[16px] text-prymari lg:pt-[27px] lg:pb-[20px] pt-3 pb-2.5'>24/7 Support</h6>
                <p className='lg:text-[16px] text-[12px] text-[#1A0B5B] font-loto font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </div>
            </div>
            <div className="lg:w-[23%] w-[48%] ">
               <div className="lg:pt-14 pt-7 lg:pb-11 pb-5 lg:px-6.5 px-3 bg-[#fff] text-center shadow-lg shadow-black/10">
                <div className="flex justify-center">
                    <img className='' src={Clock} alt="" />
                </div>
                <h6 className='font-main font-bold lg:text-[22px] text-[16px] text-prymari lg:pt-[27px] lg:pb-[20px] pt-3 pb-2.5'>24/7 Support</h6>
                <p className='lg:text-[16px] text-[12px] text-[#1A0B5B] font-loto font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </div>
            </div>
        </div>
       </Container>
    </div>
  )
}

export default What