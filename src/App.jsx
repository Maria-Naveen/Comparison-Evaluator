import { useState } from "react";
import Input from "./components/Input/Input";
import "./App.css";

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <>
      <Input onChange={(e) => setValue1(e.target.value)} value={value1}></Input>
      <span>Input1:{value1}</span>
      <Input onChange={(e) => setValue2(e.target.value)} value={value2}></Input>
      <span>Input2:{value2}</span>
    </>
  );
}

export default App;
