import logo from "./logo.svg";
import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default App;
