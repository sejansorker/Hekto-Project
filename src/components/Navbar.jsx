// import React, { useState } from 'react'
// import Container from './Container'
// import Logo from "../assets/hekto.png"
// import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
// import { HiMiniBars3CenterLeft } from 'react-icons/hi2'
// import { RxCross2 } from 'react-icons/rx'
// const Navbar = () => {
//   const [show, setShow] = useState(false)
//   return (
//     <div className='sticky top-0 z-100 bg-white'>
//       <Container>
//         <div className="lg:flex lg:py-5 py-2 items-center relative ">
//           <div className="lg:w-1/6">
//             <img className='' src={Logo} alt="" />
//           </div>
//           <div className="lg:w-3/6 w-full overflow-hidden">
//             <div className="">
//               <ul className={`lg:flex lg:gap-x-9 text-center duration-500 ease-in-out ${show ? "bg-red-400 lg:pt-0 pt-2" : "lg:mt-0 mt-[-250px]"}`}>
//                 <li className='text-[#0D0E43] cursor-pointer flex items-center justify-center lg:pl-0 pl-2 gap-0.5 text-[12px] lg:pb-0 pb-1.5 lg:text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Home <IoIosArrowDown className='text-[14px]' /></li>
//                 <li className='text-[#0D0E43] cursor-pointer text-[12px] lg:pb-0 pb-1.5 lg:text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Pages</li>
//                 <li className='text-[#0D0E43] cursor-pointer text-[12px] lg:pb-0 pb-1.5 lg:text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Products</li>
//                 <li className='text-[#0D0E43] cursor-pointer text-[12px] lg:pb-0 pb-1.5 lg:text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Blog </li>
//                 <li className='text-[#0D0E43] cursor-pointer text-[12px] lg:pb-0 pb-1.5 lg:text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Shop</li>
//                 <li className='text-[#0D0E43] cursor-pointer text-[12px] lg:pb-0 pb-1.5 lg:text-[16px] font-loto font-normal hover:text-[#FB2E86]'>Contact</li>
//               </ul>
//             </div>
//             <div onClick={() => setShow(!show)} className="lg:hidden absolute top-5 right-0">
//               {show == true ? <RxCross2 /> : <HiMiniBars3CenterLeft />}

//             </div>
//           </div>
//           <div className={`lg:w-2/6 w-full flex lg:justify-end justify-center 
//                 transition-all duration-500 ease-in-out overflow-hidden
//                   ${show ? "max-h-20 bg-red-400 lg:py-0 py-3" : "max-h-0 lg:max-h-none"}
//                `}>
//             <div className="flex ">
//               <input type="text" className='w-80 h-10 outline-0 pl-5 text-[16px] font-loto font-normal text-black bg-[#D9D9D9]' />
//               <div className="flex items-center justify-center  h-10 bg-[#FB2E86] w-13 "><IoIosSearch className='text-[22px] font-loto font-normal text-[#FFFFFF]' /></div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }
// export default Navbar















import React, { useEffect, useState } from 'react'
import Container from './Container'
import Logo from "../assets/hekto.png"
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'
const Navbar = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [show])
  return (
    <div className='sticky top-0 z-50 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
      <Container>
        <div className="lg:flex lg:py-5 py-2 items-center relative">
          <div className="lg:w-1/6">
            <img src={Logo} alt="logo" />
          </div>
          <div className="lg:w-3/6 lg:mb-0 mb-3 ">
            <ul className="hidden lg:Visible lg:flex lg:gap-x-9 text-center ">
              <li className='text-[#0D0E43] cursor-pointer flex items-center justify-center gap-0.5 text-[16px] font-loto font-normal hover:text-[#FB2E86]'>
                Home <IoIosArrowDown className='text-[14px]' />
              </li>
              <li className='text-[#0D0E43] cursor-pointer font-loto hover:text-[#FB2E86]'>Pages</li>
              <li className='text-[#0D0E43] cursor-pointer font-loto hover:text-[#FB2E86]'>Products</li>
              <li className='text-[#0D0E43] cursor-pointer font-loto hover:text-[#FB2E86]'>Blog</li>
              <li className='text-[#0D0E43] cursor-pointer font-loto hover:text-[#FB2E86]'>Shop</li>
              <li className='text-[#0D0E43] cursor-pointer font-loto hover:text-[#]'>Contact</li>
            </ul>
            <div
              className={`fixed top-0 left-0 h-full w-[80%] bg-[#2F5755] 
              transform transition-transform duration-500 ease-in-out z-40
              ${show ? "translate-x-0" : "-translate-x-full"}`}
            >
              <div className="flex justify-between items-center p-4">
                <img src={Logo} alt="logo" className="h-8" />
                <RxCross2 className="text-2xl cursor-pointer" onClick={() => setShow(false)} />
              </div>
              <ul className="flex flex-col gap-y-3 mt-10 text-center">
                <li className='text-white text-lg cursor-pointer hover:text-pink-700'>Home</li>
                <li className='text-white text-lg cursor-pointer hover:text-pink-700'>Pages</li>
                <li className='text-white text-lg cursor-pointer hover:text-pink-700'>Products</li>
                <li className='text-white text-lg cursor-pointer hover:text-pink-700'>Blog</li>
                <li className='text-white text-lg cursor-pointer hover:text-pink-700'>Shop</li>
                <li className='text-white text-lg cursor-pointer hover:text-pink-700'>Contact</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-2/6 w-full flex lg:justify-end justify-center">
            <div className="flex">
              <input type="text" className='w-80 h-10 outline-0 pl-5 text-[16px] font-loto text-black bg-[#D9D9D9]' />
              <div className="flex items-center justify-center h-10 bg-[#FB2E86] w-13">
                <IoIosSearch className='text-[22px] text-white' />
              </div>
            </div>
          </div>
          <div onClick={() => setShow(true)} className="lg:hidden absolute top-4 right-0">
            <HiMiniBars3CenterLeft className="text-2xl cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
