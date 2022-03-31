import React, { useState } from 'react'
import { ICat } from './ICat'

const Form = () => {
    const [input, setInput] = useState<ICat>({
        name: '', age: 0
    })

    const handleChange = (e) => {
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            type='text' 
            value={input.name}
            onChange={handleChange}
            name='name'
            placeholder='Name' />
        <input 
            type='number' 
            name='age'
            min={0}
            max={10}
            value={input.age}
            onChange={handleChange}
            placeholder='Age' />
        <input type='submit' value='Add' />
    </form>
  )
}

export default Form