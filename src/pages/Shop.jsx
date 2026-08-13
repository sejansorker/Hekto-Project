import React, { useContext } from 'react'
import { ProductApi } from '../components/ContextApi'
import Container from '../components/Container'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaList, FaRegHeart, FaRegStar, FaSearchPlus, FaStar } from 'react-icons/fa'
import One from "../assets/one.png"
import { MdOutlineShoppingCart } from 'react-icons/md'
import ShopBanner from '../components/ShopBanner'
import { IoGrid } from 'react-icons/io5'
import Page from '../components/Page'
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
            <input className='w-[162px] text-[15px] outline-0 pl-1  border-1 border-[#E7E6EF] ' type="text" placeholder='searce'/>
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
            <div className="pb-11">
              <h4 className='text-[20px] w-fit pb-1 border-b-2 border-black text-[#151875] font-main font-bold'>Rating Item</h4>
               <div className="flex flex-col gap-3 mt-4">
             <label className="flex items-center gap-2 cursor-pointer">
            <input className="w-4 h-4 " type="checkbox" />
             <span  className='text-[#7E81A2] font-loto font-normal text-[16px] flex items-center'><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar /> (2341)</span>
              </label>
               <label className="flex items-center gap-2 cursor-pointer">
               <input className="w-4 h-4 " type="checkbox" />
                  <span  className='text-[#7E81A2] font-loto font-normal text-[16px] flex items-center'><FaStar/><FaStar/><FaStar/><FaRegStar /><FaRegStar />(1726)</span>
              </label>
               <label className="flex items-center gap-2 cursor-pointer">
               <input className="w-4 h-4 " type="checkbox" />
                  <span  className='text-[#7E81A2] font-loto font-normal text-[16px] flex items-center'><FaStar/><FaStar/><FaRegStar /><FaRegStar /><FaRegStar />(258)</span>
              </label>
               <label className="flex items-center gap-2 cursor-pointer">
               <input className="w-4 h-4 " type="checkbox" />
                  <span  className='text-[#7E81A2] font-loto font-normal text-[16px] flex items-center'><FaStar/><FaStar/><FaRegStar /><FaRegStar /><FaRegStar />(25)</span>
              </label>
            
                 
</div>
            </div>
            <div className="pb-11">
              <h4 className='text-[20px] w-fit pb-1 border-b-2 border-black text-[#151875] font-main font-bold'>Categories</h4>
               <div className="flex flex-col gap-3 mt-4">
             <label className="flex items-center gap-2 cursor-pointer">
            <input className="w-4 h-4 " type="checkbox" />
             <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>Prestashop</span>
              </label>
               <label className="flex items-center gap-2 cursor-pointer">
               <input className="w-4 h-4 " type="checkbox" />
                  <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>Magento</span>
              </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input className="w-4 h-4 " type="checkbox" />
                 <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>Bigcommerce</span>
             </label>
                   <label className="flex items-center gap-2 cursor-pointer">
              <input className="w-4 h-4 " type="checkbox" />
              <span  className='text-[#7E81A2] font-loto font-normal text-[16px]'>osCommerce</span>
            </label>

  <label className="flex items-center gap-2 cursor-pointer">
    <input className="w-4 h-4 " type="checkbox" />
    <span className='text-[#7E81A2] font-loto font-normal text-[16px]'>3dcart</span>
  </label>

  <label className="flex items-center gap-2 cursor-pointer">
    <input className="w-4 h-4 " type="checkbox" />
    <span className='text-[#7E81A2] font-loto font-normal text-[16px]'>Bags</span>
  </label>

  <label className="flex items-center gap-2 cursor-pointer">
    <input className="w-4 h-4 " type="checkbox" />
    <span className='text-[#7E81A2] font-loto font-normal text-[16px]'>Watches</span>
  </label>
</div>
            </div>
            <div className="pb-11">
              <h4 className='text-[20px] w-fit pb-1 border-b-2 border-black text-[#151875] font-main font-bold'>Price Filter</h4>
               <div className="flex flex-col gap-3 mt-4">
             <label className="flex items-center gap-2 cursor-pointer">
            <input className="w-4 h-4 " type="checkbox" />
             <span  className='text-[#7E81A2] font-loto font-normal text-[16px] flex items-center'>$0.00 - $150.00</span>
              </label>
               <label className="flex items-center gap-2 cursor-pointer">
               <input className="w-4 h-4 " type="checkbox" />
                  <span  className='text-[#7E81A2] font-loto font-normal text-[16px] flex items-center'>$150.00 - $350.00</span>
              </label>
               <label className="flex items-center gap-2 cursor-pointer">
               <input className="w-4 h-4 " type="checkbox" />
                  <span  className='text-[#7E81A2] font-loto font-normal text-[16px] flex items-center'>$150.00 - $504.00</span>
              </label>
               <label className="flex items-center gap-2 cursor-pointer">
               <input className="w-4 h-4 " type="checkbox" />
                  <span  className='text-[#7E81A2] font-loto font-normal text-[16px] flex items-center'>$450.00 +</span>
              </label>
</div>
            </div>
          </div>
          <div className="w-6/8">
          <Page/>
          </div>
        </div>
        <div className="pt-36 pb-22 ">
         
        </div>
      </Container>
    </div>
  )
}
export default Shop