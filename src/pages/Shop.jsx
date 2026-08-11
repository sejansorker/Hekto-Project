import React, { useContext } from 'react'
import { ProductApi } from '../components/ContextApi'
import Container from '../components/Container'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaList, FaRegHeart, FaSearchPlus } from 'react-icons/fa'
import One from "../assets/one.png"
import { MdOutlineShoppingCart } from 'react-icons/md'
import ShopBanner from '../components/ShopBanner'
import { IoGrid } from 'react-icons/io5'
const Shop = () => {
  const data = useContext(ProductApi)
  
  
  return (
    <div>
        <ShopBanner/>
      <Container>
        <div className="flex items-center justify-between mt-30">
          <div className="w-1/2">
          <h4 className='text-[22px] text-[#151875] font-main font-bold pb-1'>Ecommerce Acceories & Fashion item </h4>
          <p className='text-[12px] text-[##8A8FB9] font-main font-normal'>About 9,620 results (0.62 seconds)</p>
          </div>
          <div className="w-1/2">
          <div className="flex items-center justify-end">
            <div className="flex ">
            <h5 className='text-[16px] text-[#3F509E] pr-2 font-loto font-normal'>Per Page:</h5>
            <input className='w-13.5 pl-1 outline-0 text-[12px] text-[#3F509E] border-1 border-[#E7E6EF]' type="text" />
          </div>
          <div className="flex pl-7">
            <h5 className='text-[16px] text-[#3F509E]  font-loto font-normal pr-2'>Sort By:</h5>
            <select className='pl-2 w-24 text-[13px] outline-0 border-1  border-[#E7E6EF] text-[#8A8FB9]  font-loto font-normal' name="" id="">
              <option className='text-[12px] text-[#3F509E] outline-0 font-loto font-normal' value="">Best Match</option>
            </select>
          </div>
          <div className="pl-6 flex items-center gap-x-7">
            <h5 className='flex items-center text-[16px] text-[#3F509E]  font-loto font-normal'>View: <IoGrid className='text-[#151875] ml-2' /> <FaList className='text-[#151875] ml-2' /></h5>
            <input className='w-[162px] outline-0  border-1 border-[#E7E6EF] ' type="text" placeholder='searce'/>
          </div>
          </div>
          </div>
        </div>
        <div className="flex pt-36 pb-22 ">
          <div className="w-2/8">
            <div className="pb-11">
              <h4 className='text-[20px] w-fit pb-1 border-b-2 border-black text-[#151875] font-main font-bold'>Product Brand</h4>
               <div className="flex flex-col gap-3 mt-4">
             <label className="flex items-center gap-2 cursor-pointer">
            <input className="w-4 h-4 " type="checkbox" />
             <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>Glamour Beauty</span>
              </label>
               <label className="flex items-center gap-2 cursor-pointer">
               <input className="w-4 h-4 " type="checkbox" />
                  <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>Velvet Touch</span>
              </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input className="w-4 h-4 " type="checkbox" />
                 <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>Chic Cosmetics</span>
             </label>
                   <label className="flex items-center gap-2 cursor-pointer">
              <input className="w-4 h-4 " type="checkbox" />
              <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>Nail Couture</span>
            </label>

  <label className="flex items-center gap-2 cursor-pointer">
    <input className="w-4 h-4 " type="checkbox" />
    <span className='text-[#7E81A2] font-loto font-normal text-[16px]'>Calvin Klein</span>
  </label>

  <label className="flex items-center gap-2 cursor-pointer">
    <input className="w-4 h-4 " type="checkbox" />
    <span className='text-[#7E81A2] font-loto font-normal text-[16px]'>Chanel</span>
  </label>

  <label className="flex items-center gap-2 cursor-pointer">
    <input className="w-4 h-4 " type="checkbox" />
    <span className='text-[#7E81A2] font-loto font-normal text-[16px]'>Dior</span>
  </label>
</div>
            </div>
            <div className="pb-11">
              <h4 className='text-[20px] w-fit pb-1 border-b-2 border-black text-[#151875] font-main font-bold'>Discount Offer</h4>
               <div className="flex flex-col gap-3 mt-4">
             <label className="flex items-center gap-2 cursor-pointer">
            <input className="w-4 h-4 " type="checkbox" />
             <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>20% Cashback</span>
              </label>
               <label className="flex items-center gap-2 cursor-pointer">
               <input className="w-4 h-4 " type="checkbox" />
                  <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>5% Cashback Offer</span>
              </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input className="w-4 h-4 " type="checkbox" />
                 <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>25% Discount Offer</span>
             </label>
                 
</div>
            </div>
          </div>
          <div className="w-6/8">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
        </div>
        <div className="pt-36 pb-22 ">
          <div className="flex gap-y-20 flex-wrap justify-between">
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
        </div>
      </Container>
    </div>
  )
}
export default Shop