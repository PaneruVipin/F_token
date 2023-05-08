import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import { validateToken, generateToken } from "dynamic-token";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    axios.get("http://localhost:3333/test", {
      headers: {
        token: generateToken(992872828982),
      },
    });
  };
  return (
    <div className="App">
      hello world
      <button onClick={handleClick}>click this</button>
    </div>
  );
}

export default App;
