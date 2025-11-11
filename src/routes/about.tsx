import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
  <div className='text'>
    This should be an About me Page
  </div>
  )}