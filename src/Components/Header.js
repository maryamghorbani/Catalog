import React from 'react';

import Logo from "./../Asset/images/logo.png"


function Header() {
    return (
        <>
            <div className="navbar navbar-dark bg-dark shadow-sm navbar-expand-md">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">

                    </a>

                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">تماس با ما</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">درباره ما</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pricelist">لیست قیمت ها</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/feature">امکانات</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">محصولات</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/">صفحه اصلی</a>
                        </li>
                    </ul>
                    <img src={Logo}/>
                </div>
            </div>
        </>
    )
}

export default Header;