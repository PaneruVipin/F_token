import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { generateToken, validateToken } from "./FT";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      hello world
      <button
        onClick={() =>
          validateToken(generateToken(111199999999), 111199999999)
        }
      >
        click this
      </button>
    </div>
  );
}

export default App;
