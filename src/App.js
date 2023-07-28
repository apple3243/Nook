import { useState } from "react";
import "./styles.css";

// 1. How to use the hook "useInput"
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  // const maxLen = (value) => value.length <= 10; //No return if the value is more than 10
  const Include = (value) => !value.includes("@"); //No return if the value includes @
  const name = useInput("Mr.", Include);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
