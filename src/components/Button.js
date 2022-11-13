import '../assets/stylesheets/Button.css';
import { useState } from 'react';

const MyButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className="actions">
            <span className="counter">{count}</span>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default MyButton;