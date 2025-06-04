import { useEffect, useState } from 'react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './About.css';
import profilbild from '/profilbild1.png'

const About = () => {

    const { ref, inView } = useInView({ triggerOnce: true });


    return (
        <div className="about-container" id="about">

            <div className="about-sections">
                <div className="about-left">
                    <img src={profilbild} alt="bild" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>iam an experianced web designer dsa...................dfdssdfsdfsdfdfsdfsdasdasdasdasd..sdafsdfasdfasdfdsfasdfdsfdsfsdfadsfdsfsda..</p>
                        <p>my passion is dumbstyle...................dfdssdfsdfsdfdfsdfsdasdasdasdasd....</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>React</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "40%" }} /></div>



                    </div>

                </div>

            </div>
            <div className={`about-achievements ${inView ? "in-view" : ""}`} ref={ref}>

                <div className="about-achievement">
                    <h1>
                        {inView && <CountUp end={10} duration={0.5} delay={0.1} suffix="+" />}
                    </h1>
                    <p>Years of Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>
                        {inView && <CountUp end={70} duration={0.5} delay={0.3} suffix="+" />}
                    </h1>
                    <p>Projects completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>
                        {inView && <CountUp end={24} duration={0.5} delay={0.5} suffix="+" />}
                    </h1>
                    <p>Customers</p>
                </div>
            </div>

        </div>
    );
};

export default About;
