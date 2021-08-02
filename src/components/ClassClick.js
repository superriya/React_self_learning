import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("Clicked Successfully!")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Clicked Me!</button>
            </div>
        )
    }
}

export default ClassClick
