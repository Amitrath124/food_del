import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets 2'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logohome} alt="Logo" />
                    <p>Delicious food, delivered seamlessly. Committed to bringing you the best dining experience, wherever you are. Order with confidence.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>Email: amitrath344@gmail.com</li>
                        <li>Phone: +91 9861313638</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright"> Copyright 2024 © Tomato.com - All rights reserved.</p>
        </div>
    )
}

export default Footer