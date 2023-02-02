import React from "react"

export const Square = ({ children, isSelected=null, updateBoard, updateHistory,index,otherClass='' }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      updateBoard(index)
      updateHistory(index)
    }
  
    return (
      <div onClick={handleClick} className={className + `${otherClass}`}>
        {children}
      </div>
    )
  }
  