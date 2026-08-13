import React, { useContext } from 'react'
import { ProductApi } from '../components/ContextApi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'

const Page = () => {
    const data = useContext(ProductApi)
  return (
     <div className="flex gap-y-15 flex-wrap justify-between">
          {data.map((item)=>(
           <div className="w-[31%]">
            <div className="bg-[#F6F7FB] hover:bg-[#EBF4F3] duration-300 ease-in-out flex justify-center items-center py-13 relative group">
              <img src={item.thumbnail} className='w-50 h-50 ' alt="" />
                <div className="gap-y-4 flex flex-col  absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                      <div className=" h-9.5 w-9.5 bg-[#fff] rounded-full cursor-pointer flex items-center justify-center">
                        <MdOutlineShoppingCart className='text-[17px] font-bold text-[#151875]' />
                      </div>
                      <div className="h-9.5 w-9.5 flex items-center cursor-pointer justify-center bg-[#fff] rounded-full">
                        <FaRegHeart className='text-[16px] font-bold text-[#151875]' />
                      </div>
                      <div className="h-9.5 w-9.5 flex items-center cursor-pointer justify-center bg-[#fff] rounded-full">
                        <FaSearchPlus className='text-[14px] text-[#151875]' />
                      </div>
                    </div>
            </div>
            <div className="text-center">
                 
                <h4 className='pt-4.5 font-main font-bold text-[18px] text-[#151875]'>{item.title}</h4>
                <div className="flex justify-center items-center gap-x-2 pt-2 pb-4">
                  <div className="h-2.5 w-2.5 bg-[#DE9034] rounded-full"></div>
                  <div className="h-2.5 w-2.5 bg-[#EC42A2] rounded-full"></div>
                  <div className="h-2.5 w-2.5 bg-[#8568FF] rounded-full"></div>
                 </div>
                <p className='font-main font-normal text-[14px] '>${item.price} <del className='text-[#FB2E86] pl-2'>$42.00</del></p>
              </div>
           </div>
          ))}
          </div>
  )
}

export default Page