export const MaggieGameActions = {
    INIT_GAME: 'INIT_GAME',
    MOVE_ON_CLICK: 'MOVE_ON_CLICK'
}

function initMaggieGame(containerHeight, containerWidth, levelData) {
    return {
        type: INIT_GAME,
        containerHeight,
        containerWidth,
        levelData,
    }
}

function maggieMovesOnClick(x, y) {
    return {
        type: MOVE_ON_CLICK,
        x,
        y
    }
}

