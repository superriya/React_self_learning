// class components
// this example demonstrate what exactly state is in React
 
import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : "Welcome to state in class component"
        }
    }

    //on click method display new message by using setState()
    changMessage() {
        this.setState({
            message: "Thank you for subscribing!"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ () => this.changMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message