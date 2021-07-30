// class components
import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        console.log(this.props)
        return <h1>Hello Class Component by {this.props.name} working as a {this.props.heroName}</h1>
    }
}

export default Welcome