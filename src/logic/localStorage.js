import { TURNS } from "./consts"

export const saveLocalStorage = ({ board, turn }) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('history')
}

export const saveHistory = ({ history }) => {
    window.localStorage.setItem('history', history)
}

export const upBoard = () => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage
        ? JSON.parse(boardFromStorage)
        : Array(9).fill(null)
}

export const upTurn = () => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
}

export const upHistory = () =>{
        const historyFromStorage = window.localStorage.getItem('history')
        return historyFromStorage ?? ''
    }
