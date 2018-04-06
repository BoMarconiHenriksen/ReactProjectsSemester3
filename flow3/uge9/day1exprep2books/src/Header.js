import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <div>
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
            <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
        </ul>
    </div>
);

export default Header;
