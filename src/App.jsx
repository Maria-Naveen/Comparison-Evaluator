import { useState, useEffect } from "react";
import Input from "./components/Input/Input";
import "./App.css";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operator, setOperator] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (value1 === "" || value2 === "" || operator === "") {
      setMsg("INVALID");
      return;
    }

    // Convert input values to numbers
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    console.log(num2);
    let result;

    switch (operator) {
      case "<":
        result = num1 < num2;
        break;
      case "<=":
        result = num1 <= num2;
        break;
      case "==":
        result = num1 === num2;
        break;
      case ">":
        result = num1 > num2;
        break;
      case ">=":
        result = num1 >= num2;
        break;
      default:
        setMsg("INVALID OPERATOR");
        return;
    }

    setMsg(result ? "TRUE" : "FALSE");
  }, [value1, value2, operator]);

  return (
    <>
      <Input
        type="number"
        onChange={(e) => setValue1(e.target.value)}
        value={value1}
      ></Input>
      <span>Input1: {value1}</span>
      <div>
        <label htmlFor="operators">Operator </label>
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          name="operators"
          id="operators"
        >
          <option value="<">{"<"}</option>
          <option value="<=">{"<="}</option>
          <option value="==">{"=="}</option>
          <option value=">">{">"}</option>
          <option value=">=">{">="}</option>
        </select>
      </div>

      <Input
        type="number"
        onChange={(e) => setValue2(e.target.value)}
        value={value2}
      ></Input>
      <span>Input2: {value2}</span>

      <div>Result: {msg}</div>
    </>
  );
}

export default App;
