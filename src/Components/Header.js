import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from "./../Asset/images/logo.png"

const activestyle = {
    backgroundColor : 'red',
    borderRadius : '4px'
}
const stickyheaderstyle = {
    position : 'sticky',
    top : '0',
    zIndex : '1'
}


function Header({ navLinkTitles }) {
    return (
        <>
            <div className="navbar navbar-dark bg-dark shadow-sm navbar-expand-md" style={stickyheaderstyle}>
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">

                    </a>

                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" activeStyle={activestyle}>{navLinkTitles.contact}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeStyle={activestyle}>{navLinkTitles.about}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pricelist" activeStyle={activestyle}>{navLinkTitles.pricelist}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/feature" activeStyle={activestyle}>{navLinkTitles.feature}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products" activeStyle={activestyle}>{navLinkTitles.products}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeStyle={activestyle}>{navLinkTitles.home}</NavLink>
                        </li>
                    </ul>
                    <img src={Logo}/>
                </div>
            </div>
        </>
    )
}

export default Header;