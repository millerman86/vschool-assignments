import React from 'react'

export default function Movie(props) {
    const { title, genre, _id} = props


    return (
        <div className="movie">
            <h1>Title: { title }</h1>
            <p>Title: { genre }</p>
            <button className="delete-btn" onClick={() => props.deleteMovie(_id)}>Delete</button>
        </div>
    )
}