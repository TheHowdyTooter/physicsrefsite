import { useState } from 'react';

export default function Eq({ value }) {
    
    const [Equation, setEquation] = useState('');
    
    if (Equation != value) {
        setEquation(value)
    };
        

    return(
        <>
            <a className='eq'>{'  ' + Equation + '  '}</a>
        </>
    )
}