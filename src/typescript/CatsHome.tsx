import React, { useState } from 'react'
import { connect } from 'react-redux'
import Cat from './Cat'
import Form from './Form'
import { ICat } from './ICat'

const CatsHome = ({ cats }) => {
  return (
    <div>
        <h1>Cats Home</h1>
        <Form />
        {cats.map((cat: ICat) => 
            <Cat cat={cat} />
        )}
    </div>
  )
}

const mapState = (state) => {
    return {
        cats: state.cats
    }
}

export default connect(mapState)(CatsHome)