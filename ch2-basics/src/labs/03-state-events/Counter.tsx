import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>현재 값: {count}</div>
      <button onClick={() => setCount(count + 1)}>[+1]</button>
      <button onClick={() => setCount(count - 1)}>[-1]</button>
    </div>
  );
}

export default Counter;
