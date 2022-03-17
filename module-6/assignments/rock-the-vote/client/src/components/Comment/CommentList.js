import React, { useEffect } from 'react'
import Comment from './Comment'

export default function CommentList(props) {
    const { comments } = props
    return (
        <div>
            {comments.map(comment => <Comment {...comment} key={comment._id}/>)}
        </div>
    )
}