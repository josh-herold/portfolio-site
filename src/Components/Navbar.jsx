import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link as ScrollLink } from 'react-scroll';




const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');
        }

        return () => {
            document.body.classList.remove('mobile-menu-open'); // zur Sicherheit beim Unmount
        };
    }, [isOpen]);


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

            {/* Hamburger Button */}
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span />
                <span />
                <span />
            </div>

            <div className={`link-container ${isOpen ? 'mobile-open' : ''}`}>
                <ul>
                    {['header', 'about', 'mywork'].map((section, idx) => (
                        <li key={idx}>
                            <ScrollLink
                                to={section}
                                smooth={true}
                                duration={500}
                                spy={true}
                                className="scroll-link"
                                activeClass="active"
                                onClick={closeMenu}
                            >
                                {section === 'header' ? 'Home' : section === 'about' ? 'Über mich' : 'Projekte'}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>

            <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="nav-connect"

            >
                Kontaktiere mich
            </ScrollLink>



        </div>
    )
}


export default Navbar