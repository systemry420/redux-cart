import React from 'react'

const Cat = ({ cat }) => {
    const { name, age } = cat
  return (
    <div>
        {name} - {age}
    </div>
  )
}

export default Cat