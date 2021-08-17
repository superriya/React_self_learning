import React from 'react'

function Person(props) {
    return (
        <div>
            <h4>I am {props.person.name}. I am {props.person.age} years old. I know {props.person.skills} skills</h4>
        </div>
    )
}

export default Person
