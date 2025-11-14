import { createFileRoute } from '@tanstack/react-router';
import { useState, useRef } from 'react'
import Eq from '../Custom-Elements/Equation-Element.tsx';
import { Link } from '@tanstack/react-router';
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
        //@ts-ignore
        inputRef.current.blur()
        setinputMode(false)
      }
    };

  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <link rel="stylesheet" type='text\css' href="../styles.css" />
        <link rel='icon' type='image/x-icon'href='C:\GitProjects\physicsrefsite\PSI_Image.png'></link>
        <title>Physics Reference Site</title>
      </head>
      <div>
        <div className='headingBox'>
          <div className='linkBox'>
            <Link to='/about' className='text'>About Me</Link>
          </div>
          <p className='heading' >Are you ready to Physics!!!</p>
          <div className='linkBox'>
            <Link to='/guide' className='text'>Guide</Link>
          </div>
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