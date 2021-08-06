import React, { Component,PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Supriya"
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Supriya"
            }, () => {
                console.log(this.state.name)
            })
        },1000)
    }
    
    
    render() {
        console.log("********************* Parent Component Render *********************")
        return (
            <div>
                <h2>Parent Component</h2>
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
