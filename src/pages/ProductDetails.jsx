import React from 'react'
import Container from '../components/Container'
import Details from "../assets/frame.png"
import Details1 from "../assets/frame1.png"
import Details2 from "../assets/frame2.png"
import { FaStar } from 'react-icons/fa'
const ProductDetails = () => {
  return (
    <div className=''>
           <div className="pt-24 pb-30 bg-[#F6F5FF]">
            <Container>
                <div className="">
                    <h2 className='text-[36px] text-[#101750] font-main font-bold pb-2'>Product Details</h2>
                    <p>Home.Pages.<span className='text-[#FB2E86] text-16px] font-main font-medium'>Product Details</span></p>
                </div>
               
            </Container>
           </div>
            <Container>
                <div className="my-30 shadow-[0_0_30px_rgba(0,0,0,0.08)]">
                   <div className="flex py-3 items-center">
                    <div className="w-1/2 flex gap-x-3">
                    <div className="w-[155px] ml-3">
                        <img className='h-[155px]' src={Details} alt="" />
                        <img className='h-[155px]' className='py-3' src={Details1} alt="" />
                        <img className='h-[155px]' src={Details2} alt="" />
                    </div>
                    <div className="">
                        <img className='w-[400px] h-[442px]' src={Details} alt="" />
                    </div>
                    </div>
                   <div className="w-1/2">
                   <div className="">
                    <h4 className='font-main font-semibold text-[36px] text-[#0D134E] pb-1'>Playwood arm chair</h4>
                        <i className='flex   text-[#FFC416]'><FaStar/><FaStar/><FaStar/><FaStar/> <FaStar/> <span className='text-[#151875] font-main font-normal text-[15px] pl-1.5'>(22)</span></i>
                    <p className='py-3 font-main font-normal text-[16px] text-[#151875]'>$32.00</p>
                    <h6 className='font-main font-bold text-[16px] text-[#0D134E] '>Color</h6>
                    <p className='font-main font-normal text-[16px] text-[#A9ACC6] py-3 pr-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                    <button className='font-main font-medium text-[17px] text-[#151875] border-2 border-[#151875] py-3 px-6'>Add To cart</button>
                    <h5 className='font-main font-normal text-[16px] text-[#151875] pt-3'>Categories:</h5>
                    <h6 className='font-main font-normal text-[16px] text-[#151875] py-2.5'>Tags</h6>
                    <p className='font-main font-normal text-[16px] text-[#151875] '>Share</p>
                   </div>
                   </div>
                   </div>
             </div>
            </Container>
        </div>
        
  )
}

export default ProductDetails