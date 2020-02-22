import React from 'react'

export default function ContactList(props){
    const { contacts } = props
    return (
        <div>
            { contacts.map((contact, i) => <h1 key={contact + i}>{contact}</h1>) }
        </div>
    )
}