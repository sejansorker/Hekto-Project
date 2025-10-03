import React from 'react'
import Container from './Container'
import { MdOutlineMail } from 'react-icons/md'
import { FiPhoneCall, FiShoppingCart } from 'react-icons/fi'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='bg-top overflow-hidden'>
        <Container>
            <div className="lg:flex  lg:py-2.5 py-1 font-main lg:justify-between ">
                <div className="w-1/3  flex lg:gap-x-12 gap-x-3 lg:justify-start justify-center">
                   <div className="flex lg:gap-2.5 gap-1 items-center font-semibold text-[12px] lg:text-[16px] text-[#F1F1F1]">
                     <MdOutlineMail />
                    <p>sejansorker@gmail.com</p>
                   </div>
                   <div className="flex gap-1 lg:gap-3 items-center font-semibold text-[12px] lg:text-[16px] text-[#F1F1F1]">
                    <FiPhoneCall />
                    <p className=''>01780519010</p>
                   </div>
                </div>
                <div className="w-1/3 flex lg:justify-end justify-center">
                <div className="flex items-center lg:gap-x-4 gap-x-2 ">
              <div className="space-x-2 lg:space-x-4">
                <select name="" id="" className='focus:outline-0 text-[#F1F1F1]  font-semibold lg:text-[16px] text-[12px]'>
                <option value="" className=' text-black lg:text-[16px] text-[12px]' >English</option>
                <option value="" className=' text-black lg:text-[16px] text-[12px]' >Bangla</option>
                
              </select>
              <select name="" id="" className='focus:outline-0 text-[#F1F1F1] font-semibold lg:text-[16px] text-[12px]'>
                <option value="" className=' text-black lg:text-[16px] text-[12px]' >USD</option>
                <option value="" className=' text-black lg:text-[16px] text-[12px]' >BD</option>
                
              </select>
              </div>
              <div className="flex lg:gap-x-5 gap-x-2">
                <p className='flex text-[#F1F1F1] gap-0.5 font-semibold lg:text-[16px] text-[12px]'>Login <FaRegUser/></p>
                <p className='flex text-[#F1F1F1] gap-[3px] font-semibold lg:text-[16px] text-[12px]'>Wishlist <FaRegHeart/></p>
                <p className='text-[#F1F1F1] font-semibold lg:text-[19px] text-[14px]'><FiShoppingCart /></p>
              </div>
                </div>
                </div>
              
                
            </div>
        </Container>
    </div>
  )
}

export default Header













// import React from 'react'
// import Container from './Container'
// import { MdOutlineMail } from 'react-icons/md'
// import { FiPhoneCall, FiShoppingCart } from 'react-icons/fi'
// import { FaRegHeart, FaRegUser } from 'react-icons/fa'

// const Header = () => {
//   return (
//     <div className='bg-top'>
//       <Container>
//         {/* Grid Layout: 1 column on mobile, 2 columns on large screen */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-2.5 py-1 font-main items-center">
          
//           {/* Left Side */}
//           <div className="flex flex-wrap lg:gap-12 gap-3 justify-start">
//             <div className="flex lg:gap-2.5 gap-1 items-center font-semibold text-[12px] lg:text-[16px] text-[#F1F1F1]">
//               <MdOutlineMail />
//               <p>sejansorker@gmail.com</p>
//             </div>
//             <div className="flex gap-1 lg:gap-3 items-center font-semibold text-[12px] lg:text-[16px] text-[#F1F1F1]">
//               <FiPhoneCall />
//               <p>01780519010</p>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="flex flex-wrap justify-start lg:justify-end mt-1 lg:mt-0">
//             <div className="flex items-center lg:gap-x-4 gap-x-2">
//               <div className="space-x-2 lg:space-x-4">
//                 <select className='focus:outline-0 text-[#F1F1F1] font-semibold lg:text-[16px] text-[12px]'>
//                   <option className='text-black'>English</option>
//                   <option className='text-black'>Bangla</option>
//                 </select>
//                 <select className='focus:outline-0 text-[#F1F1F1] font-semibold lg:text-[16px] text-[12px]'>
//                   <option className='text-black'>USD</option>
//                   <option className='text-black'>BD</option>
//                 </select>
//               </div>
//               <div className="flex lg:gap-x-5 gap-x-2">
//                 <p className='flex text-[#F1F1F1] gap-0.5 font-semibold lg:text-[16px] text-[12px]'>
//                   Login <FaRegUser/>
//                 </p>
//                 <p className='flex text-[#F1F1F1] gap-[3px] font-semibold lg:text-[16px] text-[12px]'>
//                   Wishlist <FaRegHeart/>
//                 </p>
//                 <p className='text-[#F1F1F1] font-semibold lg:text-[19px] text-[14px]'>
//                   <FiShoppingCart />
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </Container>
//     </div>
//   )
// }

// export default Header
