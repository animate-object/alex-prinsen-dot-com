import React from 'react';
import axios from 'axios';

export default class PithyText extends React.Component {
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

