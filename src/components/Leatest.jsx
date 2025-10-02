import React, { useState } from 'react'
import Container from './Container'
import Chi from "../assets/chair.png"
import { FaSearchPlus } from 'react-icons/fa'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import Sele from "../assets/sele.png"
import { useContext } from 'react'
import { ProductApi } from './ContextApi'
const Leatest = () => {
  const [one, setOne] = useState("new")
  const safi = useContext(ProductApi)
  
  
  return (
    <div className='mt-15 mb-25'>
      <Container>
        <div className="">
          <div className="w-5/12 mx-auto">
            <div className="text-center">
              <h2 className='text-prymari font-bold font-main text-[42px] pb-5'>Leatest Products</h2>
              <div className="pb-15">
                <ul className='flex justify-center gap-15'>
                  <li onClick={() => setOne("new")} className={`${one === "new" ? "border-b-2 border-red-500 text-[#FB2E86]":"text-prymari"}  cursor-pointer text-[18px] font-normal font-loto hover:border-b-2 hover:border-red-500 hover:text-[#FB2E86]`}>New Arrival</li>
                  <li onClick={() => setOne("best")} className={`${one === "best" ? "border-b-2 border-red-500 text-[#FB2E86]":"text-prymari"}  cursor-pointer text-[18px] font-normal font-loto hover:border-b-2 hover:border-red-500 hover:text-[#FB2E86]`}>Best Seller</li>
                  <li onClick={() => setOne("featured")} className={`${one === "featured" ? "border-b-2 border-red-500 text-[#FB2E86]":"text-prymari"}  cursor-pointer text-[18px] font-normal font-loto hover:border-b-2 hover:border-red-500 hover:text-[#FB2E86]`}>Featured</li>
                  <li onClick={() => setOne("specail")} className={`${one === "specail" ? "border-b-2 border-red-500 text-[#FB2E86]":"text-prymari"}  cursor-pointer text-[18px] font-normal font-loto hover:border-b-2 hover:border-red-500 hover:text-[#FB2E86]`}>Special Offer</li>
                </ul>
              </div>

            </div>

          </div>
          <div className="w-12/12">
            <div className="">
              {
                one === "new" &&
                <div className="flex flex-wrap gap-y-10 justify-between ">
                  {safi.slice(0,6).map((item)=>(
                  <div className="w-[32%] relative group">
                    <div className="pt-8 pb-2 bg-[#F7F7F7] hover:bg-white">
                      <img className='w-full' src={item.thumbnail} alt="" />
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <h6 className='text-prymari text-[16px] font-main font-normal border-b-2 border-[#EEEFFB]'>{item.title}</h6>
                      <div className="flex items-center gap-2.5 ">
                        <p className='text-prymari text-[14px] font-main font-normal'>${item.price}</p>
                        <del className='text-[#FB2448] text-[12px] font-main font-normal'>$15.00</del>
                      </div>
                    </div>
                    <div className="gap-y-4 flex flex-col  absolute opacity-0 group-hover:opacity-100 bottom-15 left-5 duration-300 ease-in-out">
                      <div className=" h-7.5 w-7.5 bg-[#EEEFFB] rounded-full flex items-center justify-center">
                        <CiShoppingCart className='text-[16px] cursor-pointer hover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                      <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#EEEFFB] rounded-full">
                        <CiHeart className='text-[16px] cursor-pointer  cursor-pointerhover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                      <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#EEEFFB] rounded-full">
                        <FaSearchPlus className='text-[14px] cursor-pointer hover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                    </div>
                    <div className="absolute top-[25px] left-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                      <img src={Sele} alt="" />
                    </div>
                  </div>
                  ))}
                </div>
              }
            </div>
            <div className="">
              {
                one === "best" &&
                <div className="flex flex-wrap gap-y-10 justify-between ">
                  {safi.slice(6,12).map((item)=>(
                  <div className="w-[32%] relative group">
                    <div className="pt-8 pb-2 bg-[#F7F7F7] hover:bg-white">
                      <img className='w-full' src={item.thumbnail} alt="" />
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <h6 className='text-prymari text-[16px] font-main font-normal border-b-2 border-[#EEEFFB]'>{item.title}</h6>
                      <div className="flex items-center gap-2.5 ">
                        <p className='text-prymari text-[14px] font-main font-normal'>${item.price}</p>
                        <del className='text-[#FB2448] text-[12px] font-main font-normal'>$605.00</del>
                      </div>
                    </div>
                    <div className="gap-y-4 flex flex-col  absolute opacity-0 group-hover:opacity-100 bottom-15 left-5 duration-300 ease-in-out">
                      <div className=" h-7.5 w-7.5 bg-[#EEEFFB] rounded-full flex items-center justify-center">
                        <CiShoppingCart className='text-[16px] cursor-pointer hover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                      <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#EEEFFB] rounded-full">
                        <CiHeart className='text-[16px] cursor-pointer  cursor-pointerhover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                      <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#EEEFFB] rounded-full">
                        <FaSearchPlus className='text-[14px] cursor-pointer hover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                    </div>
                    <div className="absolute top-[25px] left-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                      <img src={Sele} alt="" />
                    </div>
                  </div>
                  ))}
                </div>
                }
            </div>
            <div className="">
              {
                one === "featured" &&
                <div className="flex flex-wrap gap-y-10 justify-between ">
                  {safi.slice(12,18).map((item)=>(
                  <div className="w-[32%] relative group">
                    <div className="pt-8 pb-2 bg-[#F7F7F7] hover:bg-white">
                      <img className='w-full' src={item.thumbnail} alt="" />
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <h6 className='text-prymari text-[16px] font-main font-normal border-b-2 border-[#EEEFFB]'>{item.title}</h6>
                      <div className="flex items-center gap-2.5 ">
                        <p className='text-prymari text-[14px] font-main font-normal'>${item.price}</p>
                        <del className='text-[#FB2448] text-[12px] font-main font-normal'>$605.00</del>
                      </div>
                    </div>
                    <div className="gap-y-4 flex flex-col  absolute opacity-0 group-hover:opacity-100 bottom-15 left-5 duration-300 ease-in-out">
                      <div className=" h-7.5 w-7.5 bg-[#EEEFFB] rounded-full flex items-center justify-center">
                        <CiShoppingCart className='text-[16px] cursor-pointer hover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                      <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#EEEFFB] rounded-full">
                        <CiHeart className='text-[16px] cursor-pointer  cursor-pointerhover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                      <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#EEEFFB] rounded-full">
                        <FaSearchPlus className='text-[14px] cursor-pointer hover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                    </div>
                    <div className="absolute top-[25px] left-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                      <img src={Sele} alt="" />
                    </div>
                  </div>
                  ))}
                </div>
                }
            </div>
            <div className="">
              {
                 one === "specail" &&
                <div className="flex flex-wrap gap-y-10 justify-between ">
                  {safi.slice(18,24).map((item)=>(
                  <div className="w-[32%] relative group">
                    <div className="pt-8 pb-2 bg-[#F7F7F7] hover:bg-white">
                      <img className='w-full' src={item.thumbnail} alt="" />
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <h6 className='text-prymari text-[16px] font-main font-normal border-b-2 border-[#EEEFFB]'>{item.title}</h6>
                      <div className="flex items-center gap-2.5 ">
                        <p className='text-prymari text-[14px] font-main font-normal'>${item.price}</p>
                        <del className='text-[#FB2448] text-[12px] font-main font-normal'>$605.00</del>
                      </div>
                    </div>
                    <div className="gap-y-4 flex flex-col  absolute opacity-0 group-hover:opacity-100 bottom-15 left-5 duration-300 ease-in-out">
                      <div className=" h-7.5 w-7.5 bg-[#EEEFFB] rounded-full flex items-center justify-center">
                        <CiShoppingCart className='text-[16px] cursor-pointer hover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                      <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#EEEFFB] rounded-full">
                        <CiHeart className='text-[16px] cursor-pointer  cursor-pointerhover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                      <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#EEEFFB] rounded-full">
                        <FaSearchPlus className='text-[14px] cursor-pointer hover:text-[#2F1AC4] text-[#1389FF]' />
                      </div>
                    </div>
                    <div className="absolute top-[25px] left-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                      <img src={Sele} alt="" />
                    </div>
                  </div>
                  ))}
                </div>
                }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Leatest