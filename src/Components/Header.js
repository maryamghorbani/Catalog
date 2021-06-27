import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from "./../Asset/images/logo.png"

const activestyle = {
    backgroundColor : 'red',
    borderRadius : '4px'
}


function Header() {
    return (
        <>
            <div className="navbar navbar-dark bg-dark shadow-sm navbar-expand-md">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">

                    </a>

                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" activeStyle={activestyle}>تماس با ما</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeStyle={activestyle}>درباره ما</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pricelist" activeStyle={activestyle}>لیست قیمت ها</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/feature" activeStyle={activestyle}>امکانات</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products" activeStyle={activestyle}>محصولات</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeStyle={activestyle}>صفحه اصلی</NavLink>
                        </li>
                    </ul>
                    <img src={Logo}/>
                </div>
            </div>
        </>
    )
}

export default Header;