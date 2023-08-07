import "./App.css";

import { useState } from "react";

import { Button } from "omega-react-ui";

import logo from "./logo.svg";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello CRA React + Omega!</p>
                <p>
                    <Button onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
                </p>
                <p>
                    Edit <code>src/components/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
