import React from 'react'

import Shop from "../assets/shop.png"
import All from "../assets/all.png"
import Container from './Container'
const Get = () => {
    return (
        <>
        <div >
            <img src={Shop} alt="" />
        </div>
        <Container>
            <div className="w-2/3 m-auto p-24">
            <img src={All} alt="" />
            </div>
        </Container>
        </>
    )
}

export default Get