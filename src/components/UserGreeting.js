import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
         //4 Short circuit operator
         return this.state.isLoggedIn && <h3>Hello Supriya</h3>

        //3 Ternary conditional operator
        // return this.state.isLoggedIn ? 
        // (
        //     <h3>Hello Supriya</h3>
        // ) :
        // (
        //     <h3>Hello Guest</h3>
        // )

        //2 approach element variables
        // let message
        // if(this.state.isLoggedIn){
        //     message = <h3>Hello Supriya</h3>
        // }else{
        //     message = <h3>Hello Guest</h3>
        // }

        // return(
        //     <div>{message}</div>
        // )

        //1 approach if/else
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <h3>Welcome Supriya</h3>
        //         </div>
        //     )
        // }else {
        //     return (
        //         <div>
        //              <h3>Welcome Guest</h3>
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting
