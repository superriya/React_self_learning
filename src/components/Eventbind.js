import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "hello"
        }
        /* 3 approach : use bind keyword in constructor method */
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message : "goodbye"
    //     })
    // }

    /* 4 approach : event binding using arrow function */
    clickHandler = () => {
        this.setState({
            message : "Goodbye!"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* 1 approach : use bind keyword in render method */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* 2 approach : use arrow function in render method */}
                {/* <button onClick={ () => this.clickHandler()}>Click</button> */}

                <button onClick={ this.clickHandler }>Click</button>
            </div>
        )
    }
}

export default Eventbind
