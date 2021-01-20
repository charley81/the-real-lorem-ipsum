import React from 'react'

const Paragraphs = ({ text }) => {
  console.log(text)
  return (
    <div className="paragraphs">
      {text.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default Paragraphs
