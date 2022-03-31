import React from 'react'
import { connect } from 'react-redux'

const Count = ({count}) => {
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

function mapState (state) {
    return {
        count: state.count
    }
}

export default connect(mapState) (Count)