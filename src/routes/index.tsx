import { createFileRoute } from '@tanstack/react-router';
import { useState, useRef } from 'react'
import Eq from '../Custom-Elements/Equation-Element.tsx';
import '../styles.css'

 
export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [inputValue, setinputValue] = useState('');
  const inputRef = useRef(null);
  const [inputMode, setinputMode] = useState(true);

  const handleSearch = (event: any) => {
      if (event.key === 'Enter' && inputRef.current) {
        inputRef.current.blur()
        setinputMode(false)
      }
    };

  return (
    <>
      <head>
        <link rel="stylesheet" type='text/css' href="../styles.css" />
        <title>Physics Reference Site</title>
      </head>
      <div>

        <div className='headingBox'>
          <h3 className='heading' >Are you ready to Physics!!!</h3>
        </div>

        <div className={(inputMode) ? 'interactiveBoxPre' : 'interactiveBoxPost'}>
          <input 
          value={inputValue}
          className='inputMod' 
          onKeyDown={handleSearch}
          onChange={(e) => setinputValue(e.target.value)}
          ref={inputRef}
          ></input>
        </div>

      </div>
    </>
  )
}