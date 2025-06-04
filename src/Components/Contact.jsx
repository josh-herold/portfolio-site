import { useEffect, useState } from 'react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './Contact.css';
import mail from '/mail.png'
import phone from '/phone.png'
import local from '/local.png'

const Contact = () => {

    const { ref, inView } = useInView({ triggerOnce: true });


    return (
        <div className="contact" id="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets talk</h1>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail} alt="" /> <p>mail@janoschherold.de</p>
                        </div>
                        <div className="contact-detail">
                            <img src={phone} alt="" /> <p>+49 4332553</p>
                        </div>
                        <div className="contact-detail">
                            <img src={local} alt="" /> <p>Berlin, Germany</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Wrte your massage</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>





        </div>
    );
};

export default Contact;
