import React from 'react'
import Container from './Container'
import Free from "../assets/free.png"
import Cash from "../assets/cash.png"
import Pre from "../assets/pre.png"
import Clock from "../assets/clock.png"
const What = () => {
  return (
    <div className='mt-15 mb-34'>
       <Container>
        <div className="w-1/3 mx-auto">
            <h2 className='text-center font-main font-bold text-prymari text-[42px]'>What Shopex Offer!</h2>
        </div>
        <div className="flex gap-x-5 pt-14">
            <div className="w-1/4">
               <div className="pt-14 pb-11 px-6.5 bg-[#fff] text-center shadow-lg shadow-black/10">
                <div className="flex justify-center">
                    <img className='' src={Free} alt="" />
                </div>
                <h6 className='font-main font-bold text-[22px] text-prymari pt-[27px] pb-[20px]'>24/7 Support</h6>
                <p className='text-[16px] text-[#1A0B5B] font-loto font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </div>
            </div>
            <div className="w-1/4">
               <div className="pt-14 pb-11 px-6.5 bg-[#fff] text-center shadow-lg shadow-black/10">
                <div className="flex justify-center">
                    <img className='' src={Cash} alt="" />
                </div>
                <h6 className='font-main font-bold text-[22px] text-prymari pt-[27px] pb-[20px]'>24/7 Support</h6>
                <p className='text-[16px] text-[#1A0B5B] font-loto font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </div>
            </div>
            <div className="w-1/4">
               <div className="pt-14 pb-11 px-6.5 bg-[#fff] text-center shadow-lg shadow-black/10">
                <div className="flex justify-center">
                    <img className='' src={Pre} alt="" />
                </div>
                <h6 className='font-main font-bold text-[22px] text-prymari pt-[27px] pb-[20px]'>24/7 Support</h6>
                <p className='text-[16px] text-[#1A0B5B] font-loto font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </div>
            </div>
            <div className="w-1/4">
               <div className="pt-14 pb-11 px-6.5 bg-[#fff] text-center shadow-lg shadow-black/10">
                <div className="flex justify-center">
                    <img className='' src={Clock} alt="" />
                </div>
                <h6 className='font-main font-bold text-[22px] text-prymari pt-[27px] pb-[20px]'>24/7 Support</h6>
                <p className='text-[16px] text-[#1A0B5B] font-loto font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </div>
            </div>
        </div>
       </Container>
    </div>
  )
}

export default What