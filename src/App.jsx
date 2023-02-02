import { Header } from "./components/Header"
import { Board } from "./components/Board"
import { TurnBoard } from "./components/TurnBoard"
import { ModalEnd } from "./components/ModalEnd"

function App() {
  
//-----------------------------

//JSX--------------------------
  return (
    <main className="board">
      <Header/>
      <Board/>
      <TurnBoard/>
      <ModalEnd />
    </main>
  )

}

export default App
