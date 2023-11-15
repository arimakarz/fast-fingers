import { useState } from 'react'
import { Game } from './pages/Game';
import { Options } from './pages/Options'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ContextProvider } from './context/GameContext'

function App() {

  return (
    <div className='App'>
      {/* <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/game" element={<Game />} />
            <Route exact path="/" element={<Options />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider> */}
      <Game />
    </div>

  );
}

export default App;
