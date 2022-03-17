import React, {useState} from 'react'
import AddMovieForm from './AddMovieForm'

export default function Movie(props) {
    const { title, genre, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="movie">
            { !editToggle ? 
                <>
                <h1>Title: { title }</h1>
                <p>Title: { genre }</p>
                <button className="delete-btn" onClick={() => props.deleteMovie(_id)}>Delete</button>
                <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>
            :
            <>
            <AddMovieForm _id={_id} submit={props.editMovie} btnText="Submit Edit" title={title} genre={genre} />
            <button>Close</button>
            </>
            }  
        </div>
    )
}

