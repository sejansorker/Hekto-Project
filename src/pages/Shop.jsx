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
        <div className="">
           <div className="w-[31%]">
            <div className="bg-[#F6F7FB] flex justify-center items-center py-13">
              <img src={One} className='w-50 h-50' alt="" />
            </div>
            <div className="">
                
              </div>
           </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop