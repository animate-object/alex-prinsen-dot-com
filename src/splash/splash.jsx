import React from 'react';
import './splash.css';
import PithyText from './pithy/pithy.jsx'

export default class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="splash-main-flex-container">
                    <div className="splash-main-content">
                        <h1>Alex Prinsen Dot Com</h1>
                        <h3>Under Construction</h3>
                        <PithyText />
                    </div>
                </div>
            </div>
        )
    }
}

