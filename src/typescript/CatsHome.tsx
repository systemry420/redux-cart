import React, { useState } from 'react'
import Cat from './Cat'
import Form from './Form'
import { ICat } from './ICat'

const CatsHome = () => {
    const [cats, setCats] = useState<ICat[]>([
        {
            name: 'Moshmosh', age: 3
        }
    ])

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

export default CatsHome