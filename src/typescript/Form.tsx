import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ICat } from './ICat'

const Form = ({ cats, addCat }) => {
    const [input, setInput] = useState<ICat>({
        id: cats.length, name: '', age: 0
    })

    const handleChange = (e) => {
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    const add = () => {
        addCat(input)
        setInput({
            id: cats.length, name: '', age: 0
        })
    }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            type='text' 
            value={cats.length}
            onChange={handleChange}
            disabled={true}
            name='id' />
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
        <input type='submit' onClick={add} value='Add' />
    </form>
  )
}

const mapDispatch = (dispatch) => {
    return {
        addCat: (cat) => dispatch({ type: "ADD_CAT", payload: {cat}})
    }
}

const mapState = (state) => {
    return {
        cats: state.cats
    }
}

export default connect(mapState, mapDispatch) (Form)