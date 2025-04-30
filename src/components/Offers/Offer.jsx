import React from 'react'
import './Offer.css'
import exc_img from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
        <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>Only On Best Sellers Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exc_img} alt="" />
        </div>
    </div>
  )
}

export default Offer