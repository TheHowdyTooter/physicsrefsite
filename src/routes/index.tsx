import { createFileRoute } from '@tanstack/react-router';
import Eq from '../Custom-Elements/Equation-Element.tsx';
 
export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <h3 className='text' >Welcome Home!</h3>
      <br />
      <br />
      <Eq value=''></Eq>
    </div>
  )
}