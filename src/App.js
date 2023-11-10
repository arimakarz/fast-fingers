import { useState } from 'react'
import { Board } from './components/Board/Board'
import './App.css';

function App() {

  const [ clickedNums, setClickedNums ] = useState([])
  const [ activeNum, setActiveNum ] = useState(clickedNums.length)
  

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

  const checkFinished = () => {
    if (clickedNums.length === 25) console.log("win")
  }

  return (
    <div className='App'>
      <Board numbers={ numbers } activeNum={ clickedNums.length !== 0 ? activeNum: 0 } onClick={ handleClick }/>
    </div>

  );
}

export default App;
