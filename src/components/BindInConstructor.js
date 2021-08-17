import React, { Component } from 'react'

class BindInConstructor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isToggelOn:true
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState(prevState => ({
            isToggelOn: !prevState.isToggelOn
        }))
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>
                {this.state.isToggelOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default BindInConstructor
