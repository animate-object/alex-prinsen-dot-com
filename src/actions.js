export const INIT_GAME = 'INIT_GAME'
export const MOVE_ON_CLICK = 'MOVE_ON_CLICK'


export function initMaggieGame(containerHeight, containerWidth, levelData) {
    return {
        type: INIT_GAME,
        containerHeight,
        containerWidth,
        levelData,
    }
}

export function moveOnClick(x, y) {
    return {
        type: MOVE_ON_CLICK,
        x: Math.random(),
        y: Math.random()
    }
}

