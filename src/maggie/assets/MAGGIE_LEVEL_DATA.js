import maggiePng from './maggie.png';
import maggieAscendedPng from './maggieAscended.png';
import maggieBeyondPng from './maggieBeyond.png';
import maggieForeverPng from './maggieForever.png';
import maggieOfTruthAndLightPng from './maggieOfTruthAndLight.png';

const TRANSITION_EASY = 'all 2500ms ease 0s';
const TRANSITION_HARD = 'all 1000ms ease 0s';
const TRANSITION_VERY_HARD = 'all 500ms ease 0s';
const TRANSITION_ULTRA_HARD = 'all 200ms ease 0s';
const NO_TRANSITION = 'none';

export const MAGGIE_LEVEL_DATA = [
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


