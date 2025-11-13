import { useState } from 'react';

export default function Eq({ value }) {
    
    const [Equation, setEquation] = useState('');
    
    if (Equation != value) {
        setEquation(value)
    };
        

    return(
        <>
            <p className='text'>Equation:</p>
            <br />
            <a className='eq'>{Equation}</a>
        </>
    )
}