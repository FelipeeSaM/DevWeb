import React from "react";
import './Nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
        {/* Lembrar de refatorar colocando esse link em um nav-link.jsx */}
        <a href="#/">
            <i className="fa fa-home"></i> Início
        </a>

        <a href="#/users">
            <i className="fa fa-users"></i> Usuários
        </a>
        </nav>
    </aside>