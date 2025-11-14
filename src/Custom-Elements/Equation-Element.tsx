import { useState } from 'react';

//@ts-ignore
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