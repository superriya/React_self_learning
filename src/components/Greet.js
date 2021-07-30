// functional components

import React from 'react'

// function Greet() {
//     return <h1>Hello functional components!</h1>
// }

// const Greet = () => <h1>Hello functional components with arrow function!</h1>

const Greet = (props) => {
    console.log(props)

    //props are immutable
    // props.name = 'naina'  
    
    return(
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Greet