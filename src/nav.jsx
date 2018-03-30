import React from 'react';
import ReactDOM from 'react-dom';
import './nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <header className="nav">
                <nav>
                    <ul>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/maggie'>meow</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

