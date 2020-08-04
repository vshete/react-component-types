import { useState, useEffect } from 'react';

export default function Hook() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const clickHandler = (e) => {
            setCount(count + 1);    
        }
        document.getElementById('trigger').addEventListener('click', clickHandler)
        return () => {
            document.getElementById('trigger').removeEventListener('click', clickHandler)
        }
    })
    return count;
}