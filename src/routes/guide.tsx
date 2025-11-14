import { createFileRoute } from '@tanstack/react-router';
import '../styles.css'

 
export const Route = createFileRoute('/guide')({
  component: Guide,
})

function Guide() {
    return(
        <>
            
        </>
    )
}