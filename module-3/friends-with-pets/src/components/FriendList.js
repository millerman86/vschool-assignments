import React from 'react';
import Pet from './Pet';
// import friends from '../data/friends';
import Friend from './Friend';

function FriendList(props) {
    const renderedFriends = props.friends.map((friend, i) => {
        return <Friend name={friend.name} age={friend.age} pets={friend.pets} />
    })

    return (
        <div>
            {renderedFriends}
        </div>
    )
}

export default FriendList;