import React from 'react'
import ReactDOM from 'react-dom'

import Multi from './componentes/Multiplos'

// o CORNO do leo nao disse, mas tem que chamar com esse '_' antes, pra funfar :)

ReactDOM.render (
    <div>
        <Multi.BoaTarde nome="Núbia Helena"/>
        <Multi.BoaTarde nome="Antônio Augusto"/>
    </div>
, document.getElementById('root'))