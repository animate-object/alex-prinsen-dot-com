import React from 'react';
import './Maggie.css';
import {
    moveOnClick,
    initMaggieGame
} from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        moveOnClick: () => dispatch(moveOnClick()),
        initMaggieGame: (containerHeight, containerWidth) => {
            dispatch(initMaggieGame(containerHeight, containerWidth))
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
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const maxHeight = this.containerRef.clientHeight;
        const maxWidth = this.containerRef.clientWidth;
        this.props.initMaggieGame(maxHeight, maxWidth)
    }

    render() {
        return (
            <div className="maggie-container"
                ref={(containerRef) => this.containerRef = containerRef}
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
