import { useEffect, useState } from 'react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './Footer.css';


const Footer = () => {

    const { ref, inView } = useInView({ triggerOnce: true });


    return (
        <div className="footer" id="footer">
           <div className="footer-top">
            <div className="footer-left">
                
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                <img src="" alt="" className="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
            </div>
           </div> 
           <hr />
           <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2025 Janosch Herold. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Datenschutzerklärung</p>
                <p>Impressum</p>
            </div>
           </div>
</div>
    );
};

export default Footer;
