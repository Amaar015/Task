import { useState, useEffect } from "react";

const Example6 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Updated!");
  }, []); // ⚠️ Empty dependency array

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Example6;
