import { useState } from 'react'
import './Navbar.css'
import { Link as ScrollLink } from 'react-scroll';




const Navbar = () => {
    return (
        <div className="navbar-container" id='navbar'>

            <ScrollLink
                to="header"
                smooth={true}
                duration={500}
                className="logo-container"

            >
                JosH
            </ScrollLink>

            <div className="link-container">
                <ul>
                    <ScrollLink
                        to="header"
                        smooth={true}
                        duration={500}
                        className="scroll-link"

                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        className="scroll-link"

                    >
                        Über mich
                    </ScrollLink>
                    <ScrollLink
                        to="mywork"
                        smooth={true}
                        duration={500}
                        className="scroll-link"

                    >
                        Projekte
                    </ScrollLink>




                </ul>

            </div>

            <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="nav-connect"

            >
                kontaktiere mich
            </ScrollLink>



        </div>
    )
}


export default Navbar