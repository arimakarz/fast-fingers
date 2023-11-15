import React, { useState, useEffect }  from 'react'
import './Timer.css'

export const Timer = ({ status }) => {
    
    const [ time, setTime ] = useState(0)
    const [ active, setActive ] = useState(status)

    useEffect(() => {
        setTimeout(() => {
            if (active && status !== false){
                setTime(time + 0.01)
            }else{
                setActive(false)
            }
        }, 10)
    })

  return (
    <div className="timer">
        { time.toFixed(2) }
    </div>
  )
}
