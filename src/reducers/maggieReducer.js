import { INIT_GAME, MOVE_ON_CLICK }  from '../actions'


const MAGGIE_INIT_CONSTANTS = {
    height: '5em',
    width: '5em',
    position: 'absolute'
}

export const maggieReducer = (state={}, action) => {
    switch (action.type) {
        case INIT_GAME:
            return {
                ...state,
                levelData: action.levelData,
                currentLevel: 1,
                escapeCount: 0,
                currentImageSrc: action.levelData[0].imagePath,
                levelUpThreshold: action.levelData[0].threshold,
                containerHeight: action.containerHeight,
                containerWidth: action.containerWidth,
                styles: {
                    ...MAGGIE_INIT_CONSTANTS,
                    top: `${Math.round(action.containerHeight) * 0.5}px`,
                    left: `${Math.round(action.containerWidth) * 0.5}px`,
                    transition: action.levelData[0].transition
                }
            };
        case MOVE_ON_CLICK:
            const newCount = state.escapeCount + 1
            const levelUp = state.escapeCount > state.levelUpThreshold
            const newLevel = levelUp ? 
                state.currentLevel + 1: state.currentLevel
            return {
                ...state,
                currentLevel: newLevel,
                escapeCount: newCount,
                currentImageSrc: state.levelData[newLevel - 1].imagePath,
                levelUpThreshold: state.levelData[newLevel - 1].threshold,
                styles: {
                    ...state.styles,
                    transition: state.levelData[newLevel - 1].threshold,
                    top: `${Math.floor(state.containerHeight * action.y)}px`,
                    left: `${Math.floor(state.containerWidth * action.x)}px`
                }

            }
        default:
            return state
    }
}

