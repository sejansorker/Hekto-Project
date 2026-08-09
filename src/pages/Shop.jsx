import React, { useContext } from 'react'
import { ProductApi } from '../components/ContextApi'
import Container from '../components/Container'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaSearchPlus } from 'react-icons/fa'
import One from "../assets/one.png"
const Shop = () => {
  const data = useContext(ProductApi)
  
  
  return (
    <div>
      <Container>
        <div className="pt-36 pb-22 ">
          <div className="flex flex-wrap justify-between">
          {data.map(()=>(
           <div className="w-[31%]">
            <div className="bg-[#F6F7FB] flex justify-center items-center py-13 relative group">
              <img src={One} className='w-50 h-50 ' alt="" />
                <div className="gap-y-4 flex flex-col  absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                      <div className=" h-7.5 w-7.5 bg-[#fff] rounded-full flex items-center justify-center">
                        <CiShoppingCart className='text-[16px] font-bold cursor-pointer  text-[#151875]' />
                      </div>
                      <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#fff] rounded-full">
                        <CiHeart className='text-[16px] cursor-pointer   text-[#151875]' />
                      </div>
                      <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#fff] rounded-full">
                        <FaSearchPlus className='text-[14px] cursor-pointer text-[#151875]' />
                      </div>
                    </div>
            </div>
            <div className="text-center">
                <h4 className='py-4.5 font-main font-bold text-[18px] text-[#151875]'>Vel elit euismod</h4>
                <p>$26.00 <span className=''>$42.00</span></p>
              </div>
           </div>
          ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop