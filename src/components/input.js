import React from 'react'

const Input = ({ handleSubmit, setCount, count }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="count">How many: </label>
      <input
        type="number"
        name="count"
        id="count"
        value={count}
        onChange={e => setCount(e.target.value)}
      />
      <button type="submit">Generate</button>
    </form>
  )
}

export default Input
