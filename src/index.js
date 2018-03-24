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
        super(props);
        this.reloadText = this.reloadText.bind(this);
    }
    componentDidMount() {
        this.loadText();
    }
    loadText() {
        const url = 'https://2knl2tva8c.execute-api.us-east-1.amazonaws.com/prod/pithy-text'
        axios.get(url).then((res) => {
            this.setState(res.data);
        });

    }
    reloadText(e) {
        e.preventDefault();
        this.setState({firstLine: undefined, secondLine: undefined});
        this.loadText();
    }
    isLoadingText() {
        return !this.state || !this.state.firstLine;
    }
    render() {
        return (
            <div className={"pithy-text " + (this.isLoadingText() && "is-loading")}>
                {this.state &&
                    <a onClick={this.reloadText}>
                        <p>
                            {this.state.firstLine}<br/>
                            {this.state.secondLine}
                        </p>
                    </a>
                }
            </div>
        )
    }
}

ReactDOM.render(
    <SplashMain />,
    document.getElementById('app')
);

if (module.hot) { module.hot.accept(); }
