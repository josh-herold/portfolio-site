import { useEffect, useState } from 'react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './Contact.css';
import mail from '/mail.png'
import phone from '/phone.png'
import local from '/local.png'

const Contact = () => {

    const { ref, inView } = useInView({ triggerOnce: true });

    const [success, setSuccess] = useState(null);

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.append("access_key", "4304a6f1-bf60-4fa6-a704-f3cad5bc4a23");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    setSuccess("Danke für deine Nachricht!");
    event.target.reset(); // Formular leeren
  } else {
    setSuccess("Es ist ein Fehler aufgetreten.");
  }
};



    return (
        <div className="contact" id="contact">
            
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Kontakt</h1>
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
                <form onSubmit={onSubmit} className="contact-right">
    <label htmlFor="">Name</label>
    <input type="text" placeholder='Enter your name' name='name' required />

    <label htmlFor="">Email</label>
    <input type="email" placeholder='Enter your email' name='email' required />

    <label htmlFor="">Nachricht</label>
    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>

    <div className="contact-submit-wrapper">
        <button type='submit' className="contact-submit">Submit now</button>
        {success && <span className="form-success">{success}</span>}
    </div>
</form>

            </div>





        </div>
    );
};

export default Contact;
