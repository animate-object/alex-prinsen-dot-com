import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/maggie'>Meow</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

