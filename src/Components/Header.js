import React from 'react';
import { Link } from 'react-router-dom';

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
                            <Link className="nav-link" to="/contact">تماس با ما</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">درباره ما</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricelist">لیست قیمت ها</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feature">امکانات</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">محصولات</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">صفحه اصلی</Link>
                        </li>
                    </ul>
                    <img src={Logo}/>
                </div>
            </div>
        </>
    )
}

export default Header;