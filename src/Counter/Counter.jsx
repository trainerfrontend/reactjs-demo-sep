import { useState } from "react";

const Counter = ({ initialCount }) => {
    const [count, setCounter] = useState(initialCount);

    const increment = () => {
        setCounter(count + 1)
    }

    const decrement = () => {
        setCounter(count - 1)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </>)
}
export default Counter;
