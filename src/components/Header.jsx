import React from 'react'
import { useContext } from "react"
import { ContextBoard } from '../context/ContextBoard'

export const Header = () => {
    const {restartBoard} = useContext(ContextBoard)
    return (
        <>
            <h1>Tateti</h1>
            <button onClick={restartBoard}>
                Restart
            </button>
        </>

    )
}