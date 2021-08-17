import React, { Component } from 'react'
import Input from './Input'

class ParentInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler  = () => {
        this.componentRef.current.onFocus()
    }
    
    render() {
        return (
            <div>
                <h4>ref to a child component from a parent component it is possible in Class Components </h4>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ParentInput
