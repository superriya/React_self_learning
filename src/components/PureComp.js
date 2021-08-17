import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("Pure Component Render")
        return (
            <div>
                <h3>Pure Component {this.props.name}</h3>
            </div>
        )
    }
}

export default PureComp
