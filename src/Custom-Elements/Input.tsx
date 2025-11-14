import { useState, useRef } from "react";

export default function Input() {
    const [inputValue, setinputValue] = useState('');
    const inputRef = useRef(null);
    const [inputMode, setinputMode] = useState(true);


    const handleSearch = (event: any) => {
        if (event.key === 'Enter' && inputRef.current) {
            //@ts-ignore
            inputRef.current.blur()
            setinputMode(false)
        }
    };

    return(
        <div className={(inputMode) ? 'interactiveBoxPre' : 'interactiveBoxPost'}>
            <input
                value={inputValue}
                className='inputMod'
                onKeyDown={handleSearch}
                onChange={(e) => setinputValue(e.target.value)}
                ref={inputRef}
            ></input>
        </div>
    )
}