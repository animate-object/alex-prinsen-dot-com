import React from 'react';
import { Link } from 'react-router-dom';
import './PostListEntry.css'

export const PostListEntry = props => {
    const displayTitle = props.title.replace(/\_/g, " ").slice(0, -3)
    return (
        <li className={"post-list-entry"}>
            <Link to={`/blog/${props.title}`}>
                <h2 className={"post-list-title"}>{displayTitle}</h2>
            </Link>
        </li>
    ) 
}
