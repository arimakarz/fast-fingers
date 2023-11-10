import { useEffect, useState } from 'react'
import { Board } from './components/Board/Board'
import Countdown from 'react-countdown';
import { Timer } from './components/Timer/Timer'
import './App.css';

function App() {

  const [ clickedNums, setClickedNums ] = useState([])
  const [ activeNum, setActiveNum ] = useState(clickedNums.length)
  const [ status, setStatus ] = useState(true)
  //const [ timeCounter, setTimeCounter ] = useState(Date.now() + 30000)

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  const [ numbers, setNumbers ] = useState(shuffleArray(Array.from({ length: (25 - 1) / 1 + 1 }, (_, i) => 1 + i * 1)))

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
    if (clickedNums.length === 25) {
      console.log("win")
      setStatus(false)
    }
  }

  // useEffect(() => {
  //   console.log(leftTime)
  //   setLeftTime(leftTime - 1)
  //   if (leftTime === 0) console.log('youve run out of time')
  // }, [timeCounter])

  return (
    <div className='App'>
      {/* <Countdown className={ Date.now() > 10000 ? "timer" : "timer red" } date={timeCounter}/> */}
      <Timer status = { status }/>
      <Board numbers={ numbers } activeNum={ clickedNums.length !== 0 ? activeNum: 0 } onClick={ handleClick }/>
    </div>

  );
}

export default App;
