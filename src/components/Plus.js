import React from 'react'
import { connect } from 'react-redux'
import { increase } from '../countReducer'

const Plus = ({increaseCount}) => {
  return (
    <div>
        <button onClick={() => increaseCount() } className='btn'>+</button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCount: () => {
            dispatch(increase())
        }
    }
}

export default connect(null, mapDispatchToProps) (Plus)