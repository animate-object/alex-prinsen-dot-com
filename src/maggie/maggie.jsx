import React from 'react';
import './maggie.css';
import maggiePng from './assets/maggie.png'

const STATIC_STYLES = {
    height: '5em', width: '5em',
    position: 'absolute', transition: 'all 2s ease 0s'
}


export default class Maggie extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            styles: Object.assign({}, STATIC_STYLES)
        }
    }
    componentDidMount() { 
        const maxHeight = this.containerRef.clientHeight;
        const maxWidth = this.containerRef.clientWidth;
        const initY = Math.round(maxHeight * 0.5);
        const initX = Math.round(maxWidth * 0.5);
        this.setState(
            {
                maxHeight: maxHeight, 
                maxWidth: maxWidth, 
                styles: Object.assign({top: `${initY}px`, left: `${initX}px`}, STATIC_STYLES)
            }
        )
        console.log(this.state.styles);
    }

    moveOnClick() {
        const x = Math.round(Math.random() * this.state.maxWidth, 100);
        const y = Math.round(Math.random() * this.state.maxHeight, 100);
        this.setState({
            styles: Object.assign({left: `${x}px`, top: `${y}px`}, STATIC_STYLES)
        })
    }
    render() {
        return (
            <div className="maggie-container"
                ref={ (containerRef) => this.containerRef = containerRef}
            >
                <a className="traveling-maggie"
                   style={this.state.styles}
                   onClick={this.moveOnClick.bind(this)}>
                   <img className='maggie-png' src={maggiePng}></img>
                </a> 
            </div>
        )
    }
}


