import React from 'react';
import './styles.css';

function BlogPost(props) {
    return (
<div id="blog-post">
    <a href="www.google.com">
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
        <p>Posted by {props.author} on {props.date}</p>
        <hr />
    </a>
</div>
)
}

export default BlogPost;