import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             topic: 'veu'
        }
    }

    changeUsernameHandler = (event) => {
        this.setState({
            username: event.target.value
        }, () => {
            console.log(this.state.username)
        })
    }
    
    changeCommentHandler = (event) => {
        this.setState({
            comment: event.target.value 
        }, () => {
            console.log(this.state.comment)
        })
    }

    changeTopicHandler = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    changeFormHandler = (event) => {
        event.preventDefault()
        alert(` ${this.state.username} ${this.state.comment} ${this.state.topic} `)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Basics of Form Handling (Input, Textarea, Select)</h1>
                </div>
                <form onSubmit={this.changeFormHandler}>
                    {/* Input Text */}
                    <div>
                        <label>Username</label>
                        <input type="text" 
                        value={this.state.username} 
                        onChange={this.changeUsernameHandler} />
                    </div>
                    
                    {/* Textarea */}
                    <div>
                        <label>Comments</label>
                        <textarea
                        value={this.state.comment} 
                        onChange={this.changeCommentHandler}></textarea>
                    </div>

                    {/* Select Topic */}
                    <label>Select Option</label>
                    <select value={this.state.topic} onChange={this.changeTopicHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="veu">Veu</option>
                    </select>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
