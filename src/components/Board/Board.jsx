import React from 'react'
import { NumberButton } from '../NumberButton/NumberButton'
import './Board.css'

export const Board = ({ numbers, onClick, activeNum }) => {
  return (
    <div className='board'>
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
