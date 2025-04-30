import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instaicon from '../Assets/instagram_icon.png'
import pinta from '../Assets/pintester_icon.png'
import whts from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>NELLUS STORE</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Offices</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instaicon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinta} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whts} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
                <p>Copyright @ 2025 -All Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer