import React from 'react'

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { //espera receber um unico elemento
            ...props, ...child.props
        })
    })
}
