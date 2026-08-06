import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import Leatest from '../components/Leatest'
import What from '../components/What'
import Unek from '../components/Unek'
import Tranding from '../components/Tranding'
import Discount from '../components/Discount'
import Top from '../components/Top'
import Get from '../components/Get'
import LetestBlog from '../components/LetestBlog'

const Home = () => {
  return (
    <div>
    <Banner/>
    <Featured/>
    <Leatest/>
    <What/>
    <Unek/>
    <Tranding/>
    <Discount/>
    <Top/>
    <Get/>
    <LetestBlog/></div>
  )
}

export default Home