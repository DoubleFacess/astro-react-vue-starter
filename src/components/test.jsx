import React, { useState } from 'react'

export default function test() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Test Component</h1>
      <p>Il valore del contatore è: {count}</p>
      <button onClick={increment}>Incrementa</button>
    </div>
  )
}