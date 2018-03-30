import React from 'react';
import './splash.css';
import PithyText from './pithy/pithy.jsx'

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: ['owls']};
    }
    randomFromList (list)  {
        return list[Math.floor(Math.random() * list.length)]
    }
    render() {
        return (
            <div>
                <div className="splash-main-flex-container">
                    <div className="splash-main-content">
                        <h1>alex prinsen dot com</h1>
                        <h3>
                            software, simple living, 
                            {" " + this.randomFromList(this.state.items)}</h3>
                        <PithyText />
                    </div>
                </div>
            </div>
        )
    }
}

