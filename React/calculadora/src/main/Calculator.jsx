import React, { Component } from 'react'
import './Calculator.css'

import _Button from '../components/Button'

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <_Button/>
                <_Button/>
                <_Button/>
                <_Button/>
                <_Button/>
                <_Button/>
                <_Button/>
            </div>
        )
    }
}