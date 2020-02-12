import React from 'react';

function Pet(props) {
    return (
        <div>
            {props.name}
            {props.age}
        </div>
    )
}

export default Pet;