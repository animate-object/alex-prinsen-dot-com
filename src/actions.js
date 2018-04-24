import maggiePng from './assets/maggie.png';
import maggieAscendedPng from './assets/maggieAscended.png';
import maggieBeyondPng from './assets/maggieBeyond.png';
import maggieForeverPng from './assets/maggieForever.png';
import maggieOfTruthAndLightPng from './assets/maggieOfTruthAndLight.png';


export const INIT_GAME = 'INIT_GAME'
export const MOVE_ON_CLICK = 'MOVE_ON_CLICK'


const TRANSITION_EASY = 'all 2500ms ease 0s';
const TRANSITION_HARD = 'all 1000ms ease 0s';
const TRANSITION_VERY_HARD = 'all 500ms ease 0s';
const TRANSITION_ULTRA_HARD = 'all 200ms ease 0s';
const NO_TRANSITION = 'none';

const MAGGIE_LEVEL_DATA = [
    {
        imagePath: maggiePng,
        transition: TRANSITION_EASY,
        threshold: Math.random() * 40 + 10
    },
    {
        imagePath: maggieAscendedPng,
        transition: TRANSITION_HARD,
        threshold: Math.random() * 30 + 51,
    },
    {
        imagePath: maggieBeyondPng,
        transition: TRANSITION_VERY_HARD,
        threshold: Math.random() * 40 + 82
    },
    {
        imagePath: maggieForeverPng,
        transition: TRANSITION_ULTRA_HARD,
        threshold: Math.random() * 50 + 123
    },
    {
        imagePath: maggieOfTruthAndLightPng,
        transition: NO_TRANSITION,
        threshold: Math.POSITIVE_INFINITY


    }
]

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

