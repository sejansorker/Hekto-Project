import React, { useContext } from 'react'
import Container from './Container'
import Soto from "../assets/soto.png"
import { ProductApi } from './ContextApi'
import Slider from "react-slick";
const Top = () => {
    const topp = useContext(ProductApi)
    const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };
    return (
        <div className='mb-30'>
            <Container>
                <div className="w-1/3 mx-auto text-center mb-14">
                    <h2 className='font-main font-bold text-prymari text-[42px]'>Top Categories</h2>
                </div>
                <div id="two">
                    <Slider {...settings}>
                    {topp.slice(18,30).map((item)=>(
                    <div className="!w-[96%] ">
                        <div className="p-15 relative group bg-[#F6F7FB] rounded-full border-b-[5px] border-transparent hover:border-b-[5px] hover:border-[#7E33E0]">
                            <img className='pl-2 pb-2' src={item.thumbnail} alt="" />
                    <button className='bg-[#08D15F] absolute  bottom-2 left-[50%] transform translate-[-50%] py-2 px-4.5 text-white cursor-pointer opacity-0 group-hover:opacity-100 '>View Shop</button>
                        </div>
                    <h3 className='text-center font-main font-normal text-[20px] text-prymari pt-6'>{item.title}</h3>
                    <p className='text-center font-main font-normal text-[16px] pt-3 text-prymari'>${item.price}</p>
                </div>
                    ))}
                </Slider>
                </div>
             
            </Container>
        </div>
    )
}

export default Top