import React from 'react'

const InputForm = (props) => {
  const {placeholder = "Enter ...", ...rests} = props
  const handleOnchangeInput = (e) => {
    props.onChange(e.target.value)
  }
    return (
        <input type="text" placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput}/>
  
  )
}
export default InputForm