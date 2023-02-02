import React from "react";
import { Square } from "./Square";
import { ContextBoard } from "../context/ContextBoard";
import { useContext } from "react";

export const ModalEnd = () => {
  const {winner,restartBoard} = useContext (ContextBoard)

  return (
    <main className="board">
      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'Ganó '
                }
              </h2>

              <header>
                {winner && <Square otherClass={'modal'}>{winner}</Square>}
              </header>

              <footer>
                <button onClick={restartBoard}>
                  Restart
                </button>
              </footer>

            </div>
          </section>
        )
      }
    </main>
  )
}