import { MAGGIE_LEVEL_DATA } from './assets/MAGGIE_LEVEL_DATA'

export const INIT_GAME = 'INIT_GAME'
export const MOVE_ON_CLICK = 'MOVE_ON_CLICK'


export function initMaggieGame(containerHeight, containerWidth) {
    return {
        type: INIT_GAME,
        containerHeight,
        containerWidth,
        levelData: MAGGIE_LEVEL_DATA,
    }
}

export function moveOnClick() {
    return {
        type: MOVE_ON_CLICK,
        x: Math.random(),
        y: Math.random()
    }
}

