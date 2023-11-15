import React, { useState } from 'react'
import { Board } from '../components/Board/Board'
import { Timer } from '../components/Timer/Timer'
import { RestartButton } from '../components/RestartButton/RestartButton'
import { GameSettings } from '../components/GameSettings/GameSettings'
import { useEffect } from 'react'

export const Game = () => {
    const [ clickedNums, setClickedNums ] = useState([])
    const [ activeNum, setActiveNum ] = useState(clickedNums.length)
    const [ status, setStatus ] = useState(false)
    const [ boardSize, setBoardSize ] = useState(25)
    //const [ max, setMax] = useState(25)
    const [ numbers, setNumbers ] = useState([])

    useEffect(() => {
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            }
            return array
        }
    
        setNumbers(shuffleArray(Array.from({ length: (parseInt(boardSize) - 1) / 1 + 1 }, (_, i) => 1 + i * 1)))
    }, [boardSize])
    

    const handleClick = (numberClicked) => {
        const updatedClickedNumbers = clickedNums

        const lastNumber = clickedNums[clickedNums.length - 1] || 0

        if (numberClicked === lastNumber + 1) {
        updatedClickedNumbers.push(numberClicked)
        setClickedNums(updatedClickedNumbers)
        
        checkFinished()
        }
        setActiveNum(clickedNums.length)
    }

    const checkFinished = (timeCounter) => {
        if (clickedNums.length === boardSize) {
        console.log("win")
        setStatus(false)
        }
    }

    const handleChangeBoardSize = (selected) => {
        setBoardSize(selected.target.value)
        console.log(boardSize)
    }


    return (
        <div>
            <Timer status = { status }/>
            <GameSettings onClick = { handleChangeBoardSize }/>
            <Board numbers={ numbers } activeNum={ clickedNums.length !== 0 ? activeNum: 0 } onClick={ handleClick } size={ boardSize }/>
            <RestartButton />
        </div>
    )
}
