import React, { useState, useContext } from 'react'

export const GameSettings = ({ onClick }) => {
    return (
        <div>
            <select name="sizeBoard" id="" onChange={ onClick }>
                <option value="25">5x5</option>
                <option value="36">6x6</option>
                <option value="64">8x8</option>
                <option value="100">10x10</option>
            </select>
        </div>
    )
}
