import React from 'react';

import Logo from "./../Asset/images/logo.png"


function Header() {
    return (
        <>
            <div className="navbar navbar-dark bg-secondary shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">

                    </a>
                    <img src={Logo}/>
                </div>
            </div>
        </>
    )
}

export default Header;