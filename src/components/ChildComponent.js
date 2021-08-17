import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* pass string parameter from child component to parent component using arrow function */}
            <p>This is a child component</p>
            <button onClick={ () => props.greetHandler('child')}>Greet Parent!</button>
        </div>
    )
}

export default ChildComponent
