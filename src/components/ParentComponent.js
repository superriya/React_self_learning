import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentHandler : "Parent"
        }
        this.parentHandler = this.parentHandler.bind(this)
    }
    
    parentHandler = (childName) => {
        // create method in parent component and passing that method as props in child component
        // `string ${expression}` it's feature in ES6 and it's not feature to specific in React.
        alert(`Hello ${this.state.parentHandler} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.parentHandler} />
            </div>
        )
    }
}

export default ParentComponent
