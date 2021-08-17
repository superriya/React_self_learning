import React from 'react'

function MemoComp(props) {
    console.log("Memo Component Render")
    return (
        <div>
           <h3>Memo Component {props.name}</h3> 
        </div>
    )
}

export default React.memo(MemoComp) 
