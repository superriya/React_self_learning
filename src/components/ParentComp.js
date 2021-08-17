import React, { Component,PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
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
                <MemoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
