import { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {


    return (
        <div className="header-container" id='header'>



            <div className="header-image-text">
                hallo, <span>ich bin Janosch</span><br />
                Student der Medieninformatik<br />

                an der Berliner Hochschule<br /> für Technik</div>
            <img src="/berlin.png" div className="header-image-container" alt="berlin"></img>

        </div>
    );
};

export default Header;
