// We will start with one reducer until it's not enough to get by
import { INIT_GAME, MOVE_ON_CLICK }  from './actions'


const MAGGIE_INIT_CONSTANTS = {
    height: '5em',
    width: '5em',
    position: 'absolute'
}

const reducer = (state, action) => {
    switch (action.type) {
        case INIT_GAME:
            return {
                ...state,
                maggie: {
                    game: {
                        levelData: action.payload.levelData,
                        currentLevel: 0,
                        escapeCount: 0,
                        currentImageSrc: action.payload.levelData[0].imagePath,
                        levelUpThreshold: action.payload.levelData[0].threshold,
                    },
                    containerStyles: {
                        height: action.payload.containerHeight,
                        width: action.payload.containerWidth
                    },
                    maggieStyles: {
                        ...MAGGIE_INIT_CONSTANTS,
                        top: `${Math.round(action.payload.containerHeight) * 0.5}px`,
                        left: `${Math.round(action.payload.containerWidth) * 0.5}px`,
                        transition: action.payload.levelData[0].transition
                    }
                }
            };
        case MOVE_ON_CLICK:
            newCount = state.maggie.game.escapeCount + 1
            levelUp = state.maggie.game.escapeCount > state.maggie.game.levelUpThreshold
            newLevel = levelUp ? 
                state.maggie.game.currentLevel + 1: state.maggie.game.currentLevel
            return {
                ...state,
                maggie: {
                    ...state.maggie,
                    game: {
                        ...state.maggie.game,
                        currentLevel: newLevel,
                        escapeCount: newCount,
                        currentImageSrc: state.maggie.game.levelData[newLevel].imagePath,
                        levelUpThreshold: state.maggie.game.levelData[newLevel].threshold
                    },
                    maggieStyles: {
                        ...state.maggie.maggieStyles,
                        transition: state.maggie.game.levelData[newLevel].threshold,
                        top: `${action.payload.y}px`,
                        left: `${action.payload.x}px`
                    }
                }

            }
        default:
            return state;
    }
}

export default reducer;
