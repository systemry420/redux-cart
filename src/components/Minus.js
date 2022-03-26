import React from 'react'
import { connect } from 'react-redux'
import { decrease } from '../countReducer'

const Minus = ({ decreaseCount }) => {
  return (
    <div>
        <button onClick={decreaseCount} className='btn'>-</button>
    </div>
  )
}

function mapDispatch(dispatch) {
    return {
        decreaseCount: () => dispatch(decrease())
    }

}

export default connect(null, mapDispatch) (Minus)