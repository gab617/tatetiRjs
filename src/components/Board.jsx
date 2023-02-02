import React from "react";
import { Square } from "./Square";
import { ContextBoard } from "../context/ContextBoard";
import { useContext } from "react";

export const Board = () => {
    const {board,updateBoard,updateHistory} = useContext(ContextBoard)

    return (
        <section className="game">
            
            {
                board.map((square, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                            updateHistory = {updateHistory}
                        >
                            {square}
                        </Square>
                    )
                })
            }
        </section>
    )
}