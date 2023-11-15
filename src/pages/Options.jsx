import React from 'react'
import { StartButton } from '../components/StartButton/StartButton'
import { Link } from 'react-router-dom'
import { GameSettings } from '../components/GameSettings/GameSettings'

export const Options = () => {
    return (
        <div>
            Choose game size: <GameSettings />
            <Link to="/game">
                <StartButton />
            </Link>
        </div>
    )
}
