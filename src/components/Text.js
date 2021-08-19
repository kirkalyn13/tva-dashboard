import React from 'react'

const Text = ({title, content}) => {
    return (
        <div className="container-text">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Text
