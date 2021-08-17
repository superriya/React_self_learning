import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    //never modify the states directly insted make use of setState()
    //if we use it directly react will not render the component
    // incremaent(){ 
    //     this.state.count = this.state.count + 1 
    //     console.log(this.state.count)
    // }

    // setState method has two parameters  
    //     1: state object
    //     2: callback function(arrow function)
    incremaent(){
        this.setState(
            {
                count : this.state.count + 5
            }, () => { 
                console.log('callback value', this.state.count) 
            }
        )
        console.log(this.state.count)

        //increment by 5 times
        // this.setState( (prevState) => ({
        //     count : prevState.count + 2
        // }), () => {
        //     console.log('precallback value',this.state.count)
        // } )
        // console.log(this.state.count)
    }

    incremaentFive(){
        this.incremaent()
        this.incremaent()
        this.incremaent()
        this.incremaent()
        this.incremaent()
    }

    render() {
        return (
            <div>
                <div>
                    Count - { this.state.count }
                    {/* <button onClick={ () => this.incremaent()}>Increment</button> */}
                    <button onClick={ () => this.incremaent()}>Increment</button>
                </div>
            </div>
        )
    }
}

export default Counter
