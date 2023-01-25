import React from "react";
import Main from '../template/Main.jsx'

const home = props =>
<Main icon="home" title="Início" subtitle="Projeto de cadastro de usuário com CRUD" > 
<div className='display-4'>
    Cadastro de usuário
</div>
<hr/>
<p className="mb-0">
    Exercício para criação de um cadastro de usuário utilizando node.js como back-end.
</p>
</Main>

export default home
