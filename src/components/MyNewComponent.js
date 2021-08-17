import React from 'react'

function MyNewComponent(props) {
    console.log('*****child****')
    return (
        <div>
            <h3>
                {
                    props.content
                }
            </h3>
        </div>
    )
}

export default MyNewComponent
