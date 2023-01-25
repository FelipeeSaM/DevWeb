import React, { Component }from "react";
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'usuários',
    subtitle: 'Cadastro de usuários com funções de incluir, listar, alterar e excluir.'
}

export default class UserCrud extends Component {
    render() {
        return(
            <Main {...headerProps}>
                Cadastro de usuário
            </Main>
        )
    }
}