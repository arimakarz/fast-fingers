import React, { useState } from 'react'
import { useEffect } from 'react'
import { NumberButton } from '../NumberButton/NumberButton'
import './Board.css'

export const Board = ({ numbers, onClick, activeNum }) => {

  const [ style, setStyle ] = useState("board small")

  useEffect(() => {
    switch (numbers.length){
      case 25:
        setStyle("board small")
        break;
      case 36:
        setStyle("board medium")
        break;
      case 64:
        setStyle("board advanced")
        break;
      case 100:
        setStyle("board expert")
        break;
      default:
        setStyle("board small")
    }
  }, [numbers])

  return (
    <div className={style}>
    {
        numbers.map(( number, index ) => {
            return(
                <NumberButton key={ index } visible={ (number > activeNum) ? true : false } value={ number } onClick={() => onClick(number) }/>
            )
        })
    }
  </div> 
  )
}
