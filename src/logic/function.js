import { COMBOS_WIN } from "./consts"




export const checkWinner = (boardToCheck) => {
  for (const combo of COMBOS_WIN) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] == boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c]
    ) {
      console.log('gano')
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null)
}

export const getNewBoard = ({board,index,turn}) => {
  const newBoard = [...board]
  newBoard[index] = turn
  return newBoard
}

export const endGame =(valueBoard, valueWinner)=>{
  return (valueBoard || valueWinner ? true : false)
}
