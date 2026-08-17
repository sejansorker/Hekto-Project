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
                <div className="my-30 shadow-2xl shadow-[shadow-[#F6F4FD]">
                   <div className="flex py-3 ">
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
                    <h4>Playwood arm chair</h4>
                    <i className='flex items-center'><FaStar/><FaStar/><FaStar/><FaStar/> <FaStar/></i>
                    <p>$32.00</p>
                    <h6>Color</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                    <button>Add To cart</button>
                    <h5>Categories:</h5>
                    <h6>Tags</h6>
                    <p>Share</p>
                   </div>
                   </div>
                   </div>
             </div>
            </Container>
        </div>
        
  )
}

export default ProductDetails