import { useState, useEffect } from "react";
import Input from "./components/Input/Input";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operator, setOperator] = useState("<");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (value1 === "" || value2 === "" || operator === "") {
      setMsg("INVALID");
      return;
    }

    // Convert input values to numbers
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
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
    <div className="h-screen flex bg-gray-950 items-center justify-center">
      <div className="w-96 mx-2 mx-auto border-2 border-blue-500 bg-gray-100 py-10 text-center">
        <Input
          id="value1"
          label="Input 1:"
          type="number"
          onChange={(e) => setValue1(e.target.value)}
          value={value1}
          className={"max-w-24 border-2 border-gray-500"}
        ></Input>
        <div>
          <label htmlFor="operators">Operator </label>
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            name="operators"
            id="operators"
            className="border-2 border-blue-500 bg-blue-200 my-2.5"
          >
            <option value="<">{"<"}</option>
            <option value="<=">{"<="}</option>
            <option value="==">{"=="}</option>
            <option value=">">{">"}</option>
            <option value=">=">{">="}</option>
          </select>
        </div>

        <Input
          id="value2"
          label="Input 2:"
          type="number"
          onChange={(e) => setValue2(e.target.value)}
          value={value2}
          className={"max-w-24 border-2 border-gray-500"}
        ></Input>

        <div>Result: {msg}</div>
      </div>
    </div>
  );
}

export default App;
