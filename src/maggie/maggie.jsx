import React from 'react';
import './maggie.css';
import maggiePng from './assets/maggie.png'
import maggieAscendedPng from './assets/maggieAscended.png'

const STATIC_STYLES = {
    height: '5em', width: '5em',
    position: 'absolute'
}

const TRANSITION_EASY = 'all 2500ms ease 0s';
const TRANSITION_HARD = 'all 1000ms ease 0s';

export default class Maggie extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            escapeCount: 0,
            styles: Object.assign({}, STATIC_STYLES),
            levelTwoCount: Math.round(Math.random() * 40 + 10)
        };
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
                styles: Object.assign(
                    {top: `${initY}px`, left: `${initX}px`}, STATIC_STYLES)
            }
        )
    }
    getMaggieImage() {
        return !this.hasMaggieAscended() ? maggiePng : maggieAscendedPng
    }

    getTransition() {
        return !this.hasMaggieAscended() ? TRANSITION_EASY : TRANSITION_HARD;
    }

    hasMaggieAscended() {
        return this.state.escapeCount > this.state.levelTwoCount
    }

    moveOnClick() {
        const x = Math.round(Math.random() * this.state.maxWidth, 100);
        const y = Math.round(Math.random() * this.state.maxHeight, 100);
        this.setState({
            escapeCount: this.state.escapeCount + 1,
            styles: Object.assign(
                {
                    left: `${x}px`,
                    top: `${y}px`,
                    transition: this.getTransition()
                }, 
                STATIC_STYLES)
        })
    }
    render() {
        return (
            <div className="maggie-container"
                ref={ (containerRef) => this.containerRef = containerRef}
            >
                <h3>oh no, my cat maggie got out! can you catch her?</h3>
                {this.hasMaggieAscended() && <h4> LEVEL 2 </h4>}
                {this.state.escapeCount > 0 && 
                    <p>times she's gotten away: {this.state.escapeCount}
                    </p>}
                <a style={this.state.styles}
                   onClick={this.moveOnClick.bind(this)}>
                   <img className='maggie-png'
                       src={this.getMaggieImage()}>
                   </img>
                </a> 
            </div>
        )
    }
}

