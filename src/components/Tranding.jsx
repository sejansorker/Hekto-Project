import React, { useContext } from 'react'
import Container from './Container'
import CCC from "../assets/ccc.png"
import Group1 from "../assets/group1.png"
import Group2 from "../assets/group2.png"
import { ProductApi } from './ContextApi'
const Tranding = () => {
    let tran = useContext(ProductApi)
    return (
        <div className='lg:mb-30 mb-13'>
            <Container>
                <div className="lg:w-1/3 w-full mx-auto text-center pb-10 ">
                    <h2 className='font-main font-bold text-prymari text-[22px] lg:text-[42px]'>Trending Products</h2>
                </div>
                <div className="lg:mb-10 mb-5 flex lg:gap-y-0 gap-y-5 justify-between flex-wrap">
                    {tran.slice(24,28).map((item)=>(
                    <div className="lg:w-[24%] w-[49%] lg:px-3 px-1  lg:pt-3 pt-1 lg:pb-8 pb-4 bg-white shadow-lg shadow-black/10">
                    <div className="">
                        <img className='w-full' src={item.thumbnail} alt="" />
                    </div>
                    <div className="text-center">
                        <h5 className='font-main font-bold text-prymari lg:text-[16px] text-[12px] pt-4 pb-2'>{item.title}</h5>
                    <div className="flex justify-center gap-3 items-center">
                        <p className='font-loto font-normal text-[#151875] lg:text-[14px] text-[10px] '>$26.00 </p>
                        <del className='font-loto font-normal text-[#1518753f] lg:text-[12px] text-[8px]'>$42.00 </del>
                    </div>
                    </div>
                    </div>
                    ))}
                </div>
                <div className="lg:flex justify-between lg:gap-x-7.5 ">
                    <div className="lg:w-1/3 w-full bg-[#FFF6FB]">
                        <img className='w-full' src={Group1} alt="" />
                    </div>
                    <div className="lg:w-1/3 w-full lg:my-0 my-3 bg-[#EEEFFB]">
                        <img className='w-full' src={Group2} alt="" />
                    </div>
                    <div className="lg:w-1/3 w-full  lg:pt-5 lg:pl-15  pt-2">
                    <div className="flex gap-x-5 items-center justify-center lg:justify-start">
                        <div className="px-5 w-fit bg-[#F5F6F8]">
                            <img src={CCC} alt="" />
                        </div>
                        <div className="">
                            <h5 className='font-main font-bold text-prymari lg:text-[16px] text-[12px]'>Executive Seat chair</h5>
                            <del className='font-main font-bold text-prymari lg:text-[12px] text-[10px] pt-1'>$32.00</del>
                        </div>
                    </div>
                    <div className="flex lg:my-6 my-3 gap-x-5 items-center justify-center lg:justify-start">
                        <div className="px-5 w-fit bg-[#F5F6F8]">
                            <img src={CCC} alt="" />
                        </div>
                          <div className="">
                            <h5 className='font-main font-bold text-prymari lg:text-[16px] text-[12px]'>Executive Seat chair</h5>
                            <del className='font-main font-bold text-prymari lg:text-[12px] text-[10px] pt-1'>$32.00</del>
                        </div>
                    </div>
                    <div className="flex gap-x-5 items-center justify-center lg:justify-start">
                        <div className="px-5 w-fit bg-[#F5F6F8]">
                            <img src={CCC} alt="" />
                        </div>
                        <div className="">
                            <h5 className='font-main font-bold text-prymari lg:text-[16px] text-[12px]'>Executive Seat chair</h5>
                            <del className='font-main font-bold text-prymari lg:text-[12px] text-[10px] pt-1'>$32.00</del>
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Tranding