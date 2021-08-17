import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setcbRef = elememt => {
            this.cbRef = elememt
        }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    clickHandler = () => {
        alert(this.cbRef.value)
    }
    
    render() {
        return (
            <div>
                <h1>Ref Demo with createRef() and callbackRef (cbRef)</h1>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setcbRef} />
                <button onClick={this.clickHandler}>Get Input Value</button>
            </div>
        )
    }
}

export default RefsDemo
