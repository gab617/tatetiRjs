import { createContext, useState } from "react";
import confetti from 'canvas-confetti'
import { TURNS } from "../logic/consts";
import { checkWinner, checkEndGame, getNewBoard, endGame } from "../logic/function";
import { resetGameStorage, saveHistory, saveLocalStorage, upBoard, upHistory, upTurn } from "../logic/localStorage";

export const ContextBoard = createContext()

export function ContextBoardProvider({children}) {
    //STATES
    const [board, setBoard] = useState(upBoard())
    const [turn, setTurn] = useState(upTurn())
    const [winner, setWinner] = useState(null)//null es no hay ganador, false empate, true ganador
    const [history, setHistory] = useState(upHistory())

    const restartBoard = () => {
        setBoard(Array(9).fill(null))
        setWinner(null)
        setTurn('×')
        setHistory('')
        resetGameStorage()
    }

    const updateBoard = (index) => {

        //si esa posicion tiene algun valor -> return.
        if (endGame(board[index], winner)) return
        console.log('click en square ', index)
        //Crea nuevo tablero con el dato modificado
        const newBoard = getNewBoard({
            board: board,
            index: index,
            turn: turn
        })
        //Actualiza el tablero
        setBoard(newBoard)

        //Nuevo turno asignacion
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)

        //guardar partida
        saveLocalStorage({
            board: newBoard,
            turn: newTurn
        })

        //revisar ganador
        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            confetti()
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }
    }

    const updateHistory = (index) => {
        //Si la posicion esta ocupada o hay ganador, return
        if (endGame(board[index], winner)) return
        const newStr = history + ' ' + index
        setHistory(newStr)
        saveHistory({
            history: newStr
        })
    }


    return (
        <ContextBoard.Provider value={{
            board, turn, winner, history,
            updateBoard, updateHistory, restartBoard
        }
        }>
            {children}
        </ContextBoard.Provider>
    )
}