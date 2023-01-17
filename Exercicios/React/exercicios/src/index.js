import React from 'react'
import ReactDom from 'react-dom'

// 1° ex:
// import BomDia from './Componentes/BomDia'

// ReactDom.render(<BomDia nome={'Zoio'} />, document.getElementById('root'))


// 2°.1° ex:
// import { BoaTarde, BoaNoite } from './Componentes/Multiplos'

// ReactDom.render(
//     <div>
//         <BoaTarde nome="ana" />
//         <BoaNoite nome="bia" />
//     </div>,
//     document.getElementById('root')
// )

// 2°.2° ex: export default permite que o componente seja exportado sem a necessidade de desconstruir o array.
// import BoaTarde, { BoaNoite } from './Componentes/Multiplos'

// ReactDom.render(
//     <div>
//         <BoaTarde nome="ana" />
//         <BoaNoite nome="bia" />
//     </div>,
//     document.getElementById('root')
// )

// 2°.3° ex: Posso dar o nome que quiser para o import e usá-lo como objeto na chamada. Tem que ser no default
// import Multi from './Componentes/Multiplos'

// ReactDom.render(
//     <div>
//         <Multi.BoaTarde nome="ana" />
//         <Multi.BoaNoite nome="bia" />
//     </div>,
//     document.getElementById('root')
// )

// 3° ex:

import Saudacao from './Componentes/Saudacao'

ReactDom.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Zoiou" />
    </div>,
    document.getElementById('root')
)