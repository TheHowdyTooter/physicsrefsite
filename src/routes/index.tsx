import { createFileRoute } from '@tanstack/react-router';
import Eq from '../Custom-Elements/Equation-Element.tsx';
 
export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      
      <head><title>Physics Reference Site</title>Physics Reference</head>
      <div id ='root' className='background'>
        <h3 className='text' >Welcome Home!</h3>
        <br />
        <br />
        <Eq value='Ax + By = C'/>
      </div>
    </>
  )
}