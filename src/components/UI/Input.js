import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div>
      <label className={classes.label} htmlFor={props.input.id}>{props.label}</label>
      <input  className={classes.input} {...props.input}/>
    </div>
  )
}

export default Input
