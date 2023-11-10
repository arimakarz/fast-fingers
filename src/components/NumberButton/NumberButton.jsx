import React from 'react'
import './NumberButton.css'

export const NumberButton = ( { value, onClick, visible }) => {
  const style = visible ? "button visible" : "button invisible"
  return (
    <button className={ style } onClick={ onClick }>{ value }</button>
  )
}