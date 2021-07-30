import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello With JSX</h1>
    //     </div>
    // )
    return React.createElement('div', { id: 'dumId', className:'dumClass'}, 
    React.createElement('h1', null, 'hello without jsx'))
}


export default Hello