import { createFileRoute } from '@tanstack/react-router';
import '../eq-eq';
 
export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <h3 className='text' >Welcome Home!</h3>
      <br />
      <br />
      <eq-eq>Ax + By = C</eq-eq>
    </div>
  )
}