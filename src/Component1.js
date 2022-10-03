import { Button, Card, TextField } from "@shopify/polaris";
import React, { useCallback, useMemo, useState } from "react";

const Component1 = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [dark, setDark] = useState(false);
  const [sum, setSum] = useState(0);
  const getnum1 = useCallback((newValue) => setNum1(newValue), []);
  const getnum2 = useCallback((newValue) => setNum2(newValue), []);

  const add = () => {
    console.log("from addition");
    setSum(num1 + num2);
  };
  console.log("component1 render");
  const multiplication = useMemo(() => {
    console.log("multiplication render");
    return num1 * num2;
  }, [num1, num2]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    width: "8vw",
    height: "30px",
    borderRadius: "30px",
  };

  return (
    <div>
      <Card title="Online store dashboard" sectioned>
        <TextField
          label="enter first number"
          type="number"
          value={num1}
          onChange={getnum1}
          autoComplete="off"
        />
        <TextField
          label="enter second number"
          type="number"
          value={num2}
          onChange={getnum2}
          autoComplete="off"
        />
        <div></div>
        <Button onClick={add}>Add</Button>
        <button
          onClick={() => setDark((prevDark) => !prevDark)}
          style={themeStyles}
        >
          Toggle
        </button>
        <p>Add id : {sum}</p>
        <p>multiplication is : {multiplication}</p>
      </Card>
    </div>
  );
};

export default Component1;
