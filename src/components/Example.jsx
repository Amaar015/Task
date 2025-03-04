import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Example = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if ("") {
      console.log("Empty string condition executed");
      // false
    }
    if ([]) {
      console.log("Empty array condition executed");
      // true
    }
    if ({}) {
      console.log("Empty object condition executed");
      // true
    }
    if (null) {
      console.log("Null condition executed");
      // false
    }
    if (undefined) {
      console.log("Undefined condition executed");
      // false
    } else {
      console.log("Else Condition execution");
    }
    console.log("Outside if-else Condition execution");
  }, []);

  return (
    <div>
      <p>Check Console</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Example;
