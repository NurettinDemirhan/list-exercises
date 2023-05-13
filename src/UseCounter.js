import { useState, useCallback } from 'react';

function useCounter(initialCount = 0) {
const [count, setCount] = useState(initialCount);

const increment = useCallback(() => setCount(prevCount => prevCount + 1), []);
const decrement = useCallback(() => setCount(prevCount => prevCount - 1), []);
const reset = useCallback(() => setCount(initialCount), [initialCount]);

return { count, increment, decrement, reset };
}

export function UseCounterComponent() {
const { count, increment, decrement, reset } = useCounter(0);

return (
<div>
<p>Count: {count}</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<button onClick={reset}>Reset</button>
</div>
);
}