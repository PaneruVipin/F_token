import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { validateToken, generateToken } from "./dynamicToken";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      hello world
      <button
        onClick={() => validateToken(generateToken(999999999999), 999999999999,600)}
      >
        click this
      </button>
    </div>
  );
}

export default App;
