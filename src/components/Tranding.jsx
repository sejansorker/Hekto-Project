import React, { useContext } from 'react'
import Container from './Container'
import CCC from "../assets/ccc.png"
import Group1 from "../assets/group1.png"
import Group2 from "../assets/group2.png"
import { ProductApi } from './ContextApi'
const Tranding = () => {
    let tran = useContext(ProductApi)
    return (
        <div className='mb-30'>
            <Container>
                <div className="w-1/3 mx-auto text-center pb-10 ">
                    <h2 className='font-main font-bold text-prymari text-[42px]'>Trending Products</h2>
                </div>
                <div className="mb-10 flex  justify-between flex-wrap">
                    {tran.slice(24,28).map((item)=>(
                    <div className="w-[24%] px-3 pt-3 pb-8 bg-white shadow-lg shadow-black/10">
                    <div className="">
                        <img className='w-full' src={item.thumbnail} alt="" />
                    </div>
                    <div className="text-center">
                        <h5 className='font-main font-bold text-prymari text-[16px] pt-4 pb-2'>{item.title}</h5>
                    <div className="flex justify-center gap-3 items-center">
                        <p className='font-loto font-normal text-[#151875] text-[14px] '>$26.00 </p>
                        <del className='font-loto font-normal text-[#1518753f] text-[12px]'>$42.00 </del>
                    </div>
                    </div>
                    </div>
                    ))}
                </div>
                <div className="flex justify-between gap-7.5">
                    <div className="w-1/3  bg-[#FFF6FB]">
                        <img className='w-full' src={Group1} alt="" />
                    </div>
                    <div className="w-1/3  bg-[#EEEFFB]">
                        <img className='w-full' src={Group2} alt="" />
                    </div>
                    <div className="w-1/3 pt-5 pl-15">
                    <div className="flex gap-x-5 items-center">
                        <div className="px-5 w-fit bg-[#F5F6F8]">
                            <img src={CCC} alt="" />
                        </div>
                        <div className="">
                            <h5 className='font-main font-bold text-prymari text-[16px]'>Executive Seat chair</h5>
                            <del className='font-main font-bold text-prymari text-[12px] pt-1'>$32.00</del>
                        </div>
                    </div>
                    <div className="flex my-6 gap-5 items-center">
                        <div className="px-5 w-fit bg-[#F5F6F8]">
                            <img src={CCC} alt="" />
                        </div>
                          <div className="">
                            <h5 className='font-main font-bold text-prymari text-[16px]'>Executive Seat chair</h5>
                            <del className='font-main font-bold text-prymari text-[12px] pt-1'>$32.00</del>
                        </div>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <div className="px-5 w-fit bg-[#F5F6F8]">
                            <img src={CCC} alt="" />
                        </div>
                        <div className="">
                            <h5 className='font-main font-bold text-prymari text-[16px]'>Executive Seat chair</h5>
                            <del className='font-main font-bold text-prymari text-[12px] pt-1'>$32.00</del>
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Tranding