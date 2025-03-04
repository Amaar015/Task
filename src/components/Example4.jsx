import { useEffect, useState } from "react";

const Example4 = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    if (data) {
      console.log("Effect Triggered");
    }
  }, [data]); // 🚨 data starts as an empty string ""

  return (
    <button onClick={() => setData("")}>Click Me</button>
  );
};

export default Example4;
