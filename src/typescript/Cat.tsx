import React from 'react'

const Cat = ({ cat }) => {
    const { name, age } = cat
  return (
    <div style={{ 'margin': '1em', 'border': '1px solid gray', padding: '.5em'}}>
        {name} - {age}
    </div>
  )
}

export default Cat