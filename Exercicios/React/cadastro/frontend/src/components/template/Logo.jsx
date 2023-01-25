import React from "react";
import logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom'
import './Logo.css'

const logotipo =  props =>
<aside className="logo">
    <Link to="/" className="logo">
        <img src={logo} alt="logo"></img>
    </Link>
</aside>

export default logotipo