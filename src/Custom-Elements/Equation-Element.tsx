import { useState } from 'react';

export default function Eq({value}) {
    const [equation, setequation] = useState('');
    setequation(value);

    return(
        <div>
            <p>Equation:</p>
            <br />
            <div className='eq'>{equation}</div>
        </div>
    )
}