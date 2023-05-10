window.global ||= window;
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { Button } from "antd5";
import { Button } from "antd3";
import "antd3/dist/antd.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Antd5 + Antd3</h1>
      <div className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count} from antd5
        </Button>
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count} from antd5
        </Button>
      </div>
    </>
  );
}

export default App;
