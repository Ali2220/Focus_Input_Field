import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const inputField = useRef()
  
  function handleFocus() {
    inputField.current.focus()
  }

  function handleClear(){
    inputField.current.value = ''
  }

  return (
    <>
      <div className='my-14 text-2xl font-serif tracking-wide'>This Basic Project using useRef hook shows You that when You Click on the button it focuses on the input field and clicking on the second button clear the Input field </div> 
      <button onClick={handleFocus} className='mx-2 hover:bg-slate-950 hover:duration-700'>Click to focus</button>
      <input ref = {inputField} type="text"  className='text-2xl hover:bg-slate-950 hover:duration-700 '/>
      <button onClick= {handleClear} className='mx-2 hover:bg-slate-950 hover:duration-700'>Click to Clear</button>

    </>
  )
}

export default App
