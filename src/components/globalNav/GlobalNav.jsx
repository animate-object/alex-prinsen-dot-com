import React from 'react';
import ReactDOM from 'react-dom';
import './GlobalNav.css';
import { Link } from 'react-router-dom';

export default class GlobalNav extends React.Component {
    render() {
        return (
            <header className="nav">
                <nav>
                    <ul>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/maggie'>cat game</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

