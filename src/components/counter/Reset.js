import React from 'react'
import { connect } from 'react-redux';
import { reset } from '../../countReducer';

const Reset = ({ resetCount }) => {
    const [input, setInput] = React.useState(0);

  return (
    <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} type='number' style={{padding: '.5em'}}/>
        <button onClick={() => resetCount(input)} className='btn'>reset</button>
    </div>
  )
}



function mapDispatch(dispatch) {
    return {
        resetCount: (val) => dispatch(reset(val))
    }
}

export default connect(null, mapDispatch) (Reset)