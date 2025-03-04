import { useState, useEffect } from "react";

const Example2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Updated!");
  }, [count]); // ⚠️ Empty dependency array

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Example2;
