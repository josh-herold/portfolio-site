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
                    <p>
          ich wohne und studiere in Berlin. 
          Während meines Studiums habe ich mir umfangreiche Kenntnisse
          in der objektorientierten Programmiersprache Java sowie im
          Frontend-Bereich mit HTML, CSS, JavaScript und ReactJS aneignen
          können.</p>
          Ich habe eine große Leidenschaft für moderne Computertechnologien,
          sowie für kreatives Design und grafische Kompositionen. Anwendungen
          sollten nicht nur technisch anspruchsvoll sein, sondern auch
          modern und ästhetisch ansprechend aussehen.
          Neben meines Studiums habe ich großes Interesse an der Fotografie entwickelt
          und beschäftige mich auch dort intensiv mit Phototechnik,Bildkompositionen, 
          Farblehre und der technischen Nachproduktion der Aufnahmen, insbesondere mit
          Adobe Lightroom und Photoshop. Die Fotografie erweitert dabei meine Arbeitsweise 
          und hat einen großen Einfluss auf die Umsetzung von kreativen Ideen in digitale
          Designs und Anwendungen. 
          Ich bin bin derzeit auf der Suche nach einer Anstellung als Werkstudent 
          im Bereich Webdesign, Webentwicklung, Frontend.
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
                        {inView && <CountUp end={4} duration={0.5} delay={0.1} suffix="." />}
                    </h1>
                    <p>Semester</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>
                        {inView && <CountUp end={18} duration={0.5} delay={0.3} suffix="+" />}
                    </h1>
                    <p>Projekte</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>
                        {inView && <CountUp end={24} duration={0.5} delay={0.5} suffix="+" />}
                    </h1>
                    <p>Kurse</p>
                </div>
            </div>

        </div>
    );
};

export default About;
