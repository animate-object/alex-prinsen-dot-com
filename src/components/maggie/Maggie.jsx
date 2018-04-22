import React from 'react';
import './Maggie.css';
import maggiePng from './assets/maggie.png';
import maggieAscendedPng from './assets/maggieAscended.png';
import {
    moveOnClick,
    initMaggieGame
} from '../../actions';
import { connect } from 'react-redux';


const TRANSITION_EASY = 'all 2500ms ease 0s';
const TRANSITION_HARD = 'all 1000ms ease 0s';
const TRANSITION_VERY_HARD = 'all 500ms ease 0s';
const NO_TRANSITION = 'none';

const mapDispatchToProps = dispatch => {
    return {
        moveOnClick: (x, y) => dispatch(moveOnClick(x, y)),
        initMaggieGame: (containerHeight, containerWidth, levelData) => { 
            dispatch(initMaggieGame(containerHeight, containerWidth, levelData))
        }
    }
}

const mapStateToProps = state => {
    return {
        escapeCount: state.maggie.escapeCount,
        currentLevel: state.maggie.currentLevel,
        currentImageSrc: state.maggie.currentImageSrc,
        styles: state.maggie.styles
    }
}

class Maggie extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount() { 
        const maxHeight = this.containerRef.clientHeight;
        const maxWidth = this.containerRef.clientWidth;
        this.props.initMaggieGame(maxHeight, maxWidth, [
            {
                imagePath: maggiePng,
                transition: TRANSITION_EASY,
                threshold: Math.random() * 40 + 10
            },
            {
                imagePath: maggieAscendedPng,
                transition: TRANSITION_HARD,
                threshold: Math.random() * 30 + 50
            },
            {
                imagePath: maggieAscendedPng,
                transition: TRANSITION_VERY_HARD,
                threshold: Math.random() * 40 + 80
            },
            {
                imagePath: maggieAscendedPng,
                transition: TRANSITION_VERY_HARD,
                threshold: Math.random() * 50 + 120
            },
            {
                imagePath: maggieAscendedPng,
                transition: NO_TRANSITION,
                threshold: Math.random() * 60 + 170
            }
        ])
    }

    render() {
        return (
            <div className="maggie-container"
                ref={ (containerRef) => this.containerRef = containerRef}
            >
                <h3>oh no, my cat maggie got out! can you catch her?</h3>
                {
                    this.props.currentLevel > 1 && 
                    <h4> LEVEL {this.props.currentLevel} </h4>
                }
                {
                    this.props.escapeCount > 0 && 
                    <p>times she's gotten away: {this.props.escapeCount}</p>
                }
                <a style={this.props.styles}
                    onClick={this.props.moveOnClick}>
                    <img className='maggie-png'
                        src={this.props.currentImageSrc}>
                    </img>
                </a> 
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Maggie);
