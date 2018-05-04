import React from 'react';
import { Link } from 'react-router-dom';
import './PostListEntry.css'

export const PostListEntry = props => {
    const displayTitle = props.title.replace(/\_/, " ").slice(0, -3)
    return (
        <li>
            <Link to={`/blog/${props.title}`}>
                <h2>{displayTitle}</h2>
            </Link>
        </li>
    ) 
}
