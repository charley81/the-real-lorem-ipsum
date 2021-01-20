import React, { useState } from 'react'
import Input from './components/input'
import Paragraphs from './components/paragraphs'
import Title from './components/title'
import data from './data'

function App() {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 10) {
      amount = 10
    }
    setText(data.slice(0, amount))
  }

  console.log(text)

  return (
    <div className="App">
      <Title />
      <Input handleSubmit={handleSubmit} setCount={setCount} count={count} />
      <Paragraphs text={text} />
    </div>
  )
}

export default App
