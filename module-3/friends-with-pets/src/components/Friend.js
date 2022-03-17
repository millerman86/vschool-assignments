import React from 'react';
import Pet from './Pet';


function Friend(props) {
    const renderedPets = props.pets.map((pet) => {
        return <Pet name={pet.name} age={pet.age} />
    })

    return (
        <div>
            <br />
            {props.name + " " + props.age}
            <br />
            {"Here are his pets: "}
            {renderedPets}
        </div>
    )
}

export default Friend;