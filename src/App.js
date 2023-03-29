import React, { useRef, useState } from "react"
import "./app.css"
function App() {
  let [MaskedWord, setMaskedWord] = useState('')
  let [Recived, setRecived] = useState('')
  const chosen = useRef(null)
  const Masked = useRef(null)
  const words = ['apple', 'bus', 'rain', 'bicycle', 'earth', 'telephone', 'television', 'clock', 'laptop', 'computer', 'bike']

  function Start() {
    const word = (words[Math.floor(Math.random() * 11)])
    const randomWord = [...word]
    chosen.current = randomWord
    console.log(chosen.current)
    const ran = Array(randomWord.length).fill('-')
    setMaskedWord(ran)
  }

  function changeHandler(e) {
    if ((e.target.value).length > 1) {
      alert('Its getting bigger')
      return
    }
    setRecived(e.target.value)
  }

  function clickHandler(e) {
    e.preventDefault()
    setRecived('')
    Masked.current = [...MaskedWord]
    const ind = chosen.current.indexOf(Recived)
    if (ind <= -1) {
      alert('Word not found')
      return
    }
    chosen.current.splice(ind, 1, ' ')
    Masked.current.splice(ind, 1, Recived)
    setMaskedWord(Masked.current)
  }

  return (
    <div className="parent">
      <div className="child" ref={Masked}  >
        {MaskedWord}
      </div>

      <button onClick={() => Start()} className="button1" >Start The game</button>
      <form onSubmit={clickHandler} className="form" >
        <input type="text" onChange={changeHandler} value={Recived} className="input" ></input>
        <button type='submit' className="button2" >Player Choice</button>{console.log('akhilesh')}
      </form>
    </div >
  )
}

export default App; 
