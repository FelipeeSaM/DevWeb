import React from 'react'

export default props => [
    <h1 key='h1'>Bom dia, {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]


//Usado para jogar os elementos soltos no html
// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>


//Envolve tudo em uma div
// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>