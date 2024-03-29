import React from "react";
import { Link } from 'react-router-dom'
import './Nav.css'

const navegacao = props =>
<aside className="menu-area">
    <nav className="menu">
    {/* Lembrar de refatorar colocando esse link em um nav-link.jsx */}
    <Link to="/">
        <i className="fa fa-home"></i> Início
    </Link>

    <Link to="/users">
        <i className="fa fa-users"></i> Usuários
    </Link>
    </nav>
</aside>

export default navegacao 