import React from 'react';
import ReactDOM from 'react-dom';
import './SplashMain.css';
import axios from 'axios';

class SplashMain extends React.Component {
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

class PithyText extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const url = 'https://2knl2tva8c.execute-api.us-east-1.amazonaws.com/prod/pithy-text'
        axios.get(url).then((res) => {
            this.setState(res.data);
        });
    }
    render() {
        return (
            <div>
                {this.state &&
                    <p>
                        {this.state.firstLine}<br/>
                        {this.state.secondLine}
                    </p>
                }
            </div>
        )
    }
}

ReactDOM.render(
    <SplashMain />,
    document.getElementById('app')
);

module.hot.accept();
