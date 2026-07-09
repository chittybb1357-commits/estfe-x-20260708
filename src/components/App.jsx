import "./App.css";
import Router from "./Router";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>ESTFE-X</h1>
      <Router isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
