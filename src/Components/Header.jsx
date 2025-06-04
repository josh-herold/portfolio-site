import { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {


    return (
        <div className="header-container" id='header'>



            <div className="header-image-text">
                hello,<br />
                i am a front end developer<br />
                and photographer<br />
                based in Berlin</div>
            <img src="/berlin3.png" div className="header-image-container" alt="Stickman"></img>

        </div>
    );
};

export default Header;
