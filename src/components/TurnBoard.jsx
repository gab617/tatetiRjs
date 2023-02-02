import React from "react";
import { Square } from "./Square";
import { TURNS } from "../logic/consts";
import { ContextBoard } from "../context/ContextBoard";
import { useContext } from "react";

export const TurnBoard = () => {
    const {turn,history} = useContext(ContextBoard)
    
    
    return (
        <div>
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>
            <h1>Posiciones</h1>
            <h2>{history}</h2>
        </div>
    )
}

