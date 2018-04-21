import React from 'react';
import './Splash.css';
import PithyText from './pithy/PithyText.jsx'

export default class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="splash-main-flex-container">
                    <div className="splash-main-content">
                        <h1>alex prinsen dot com</h1>
                        <PithyText />
                    </div>
                </div>
            </div>
        )
    }
}

