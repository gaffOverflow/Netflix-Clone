import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-2xl font-bold">Vite + React</h1>
      <div className="card">
        <div className="count animate-pulse">{count}</div>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="mr-2 rounded-lg bg-cyan-500 p-2 text-sm font-semibold shadow-sm shadow-slate-500 duration-500 hover:shadow-md active:shadow-sm"
        >
          Increase
        </button>
        <button
          onClick={() => setCount((count) => count - 1)}
          className=" m-2 rounded-lg bg-yellow-400 p-2 text-sm font-bold shadow-sm shadow-slate-500 hover:shadow-md active:shadow-sm"
        >
          Reduce
        </button>
        <p className="mt-4 text-red-600">
          n Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
