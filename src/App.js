import { useState, useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const element = useRef();
  useEffect(() => {
    // useEffect will be called when it is in the state of componentDidmount, conponentDidUpdate
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // Need to clean up EventListener when it is unmount ~
    // This function with return will be called when it is in the state of componentWillUnMount
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
    // If there had dependency, the function will be called only when it is in the state of componentDidmount
  }, []);
  return element;
};
export default function App() {
  const sayHello = () => (title.current.innerText = "Say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}
