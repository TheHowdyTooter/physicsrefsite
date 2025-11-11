import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3 className='text' >Welcome Home!</h3>
      <br />
      <br />
      <eq>Ax + By = C </eq>
    </div>
  )
}