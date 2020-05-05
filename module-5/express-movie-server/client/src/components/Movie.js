import React from 'react'

export default function Movie(props) {
    const { title, genre, _id} = props
    return (
        <div>
            <h1>Title: { title }</h1>
            <p>Title: { genre }</p>
        </div>
    )
}