import React, { useContext } from 'react'
import Container from './Container'
import Chi from "../assets/chair.png"
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaSearchPlus } from 'react-icons/fa'
import Slider from "react-slick";
import { ProductApi } from './ContextApi'



const Featured = () => {
  const data = useContext(ProductApi)
  const furnitureProducts = data.filter(item => item.category === "furniture")
   const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
  
  };
  return (
    <div className='mb-18 '>
        <Container>
          <div className="text-center lg:pb-12 pb-4">
            <h2 className='text-[22px] lg:text-[42px] font-main font-bold text-[#1A0B5B]'>Featured Products</h2>
          </div>
               <div id='first'>
                 <Slider {...settings}>
                  {furnitureProducts.map((item)=>(
                <div className="!w-[96%] relative group mx-auto lg:ml-0 ml-2.5">
                   <div className="bg-[#F6F7FB]">
                     <div className=" pt-8 pb-5 pl-5  ">
                        <img className='w-full' src={item.thumbnail}  alt="" />    
                    </div>
                    <div className="py-4 text-center  bg-white duration-300 ease-in-out group-hover:bg-[#2F1AC4] z-1000">
                       <h3 className='font-loto text-[18px] font-bold text-[#F701A8] group-hover:text-white'>{item.title}</h3>
                       <div className="flex justify-center gap-[5px] pt-3">
                        <div className="h-1 w-3.5 bg-[#05E6B7] rounded-full"></div>
                        <div className="h-1 w-3.5 bg-[#F701A8] rounded-full"></div>
                        <div className="h-1 w-3.5 bg-[#00009D] rounded-full"></div>
                       </div>
                    <h5 className='py-3 font-main font-normal text-[14px]  group-hover:text-white text-[#151875]'>Code - {item.sku}</h5>
                    <p className='font-loto font-normal text-[14px] group-hover:text-white text-[#151875]'>${item.price}</p>
                    </div>
                   </div>
                   <div className="flex gap-4 absolute top-3 left-3 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                    <div className=" h-7.5 w-7.5 bg-[#EEEFFB] rounded-full flex items-center justify-center">
                        <CiShoppingCart className='text-[16px] hover:text-[#2F1AC4] text-[#1389FF]' />
                    </div>
                    <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#EEEFFB] rounded-full">
                        <CiHeart className='text-[16px] hover:text-[#2F1AC4] text-[#1389FF]' />
                    </div>
                    <div className="h-7.5 w-7.5 flex items-center justify-center bg-[#EEEFFB] rounded-full">
                        <FaSearchPlus className='text-[14px] hover:text-[#2F1AC4] text-[#1389FF]' />
                    </div>
                   </div>
                   <div className="absolute top-75 left-[50%] duration-300 ease-in-out transform translate-x-[-50%]">
                    <button className='py-2 opacity-0 cursor-pointer group-hover:opacity-100 px-3 text-white text-[12px] font-main font-medium bg-[#08D15F]'>View Details</button>
                   </div>
                </div>     
                  ))}
                 
                </Slider>
               </div>
            
        </Container>
    </div>
  )
}

export default Featured





