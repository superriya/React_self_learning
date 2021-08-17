import React, { Component, PureComponent } from 'react'
import MyNewComponent from './MyNewComponent'

class MyComponent extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       showCompomnent: false,
       content: 'This is a MyNewComponent.'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  
  clickHandler = () => {
    this.setState({
      showCompomnent: true
    })
    
  }
  
  
  render() {
    console.log('*****parent*******')
    return (
      <div>
        <button onClick={this.clickHandler}>Button</button>
        {/* <button onClick={ () => this.clickHandler()}>Button2</button> */}
        
        {
          this.state.showCompomnent ? <MyNewComponent content={this.state.content}/> : null
        }
      </div>
    )
  }
}

export default MyComponent
