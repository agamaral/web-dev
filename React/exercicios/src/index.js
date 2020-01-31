import React from 'react'
import ReactDOM from 'react-dom'

import _Pai from './componentes/Pai'
import _Filho from './componentes/Filho'

ReactDOM.render (
    <div>
        <_Pai nome ="Jander" sobrenome="Pereira">
            <_Filho nome="Renan"/>
            <_Filho nome="Nubia"/>
        </_Pai>
    </div>
,document.getElementById('root'))