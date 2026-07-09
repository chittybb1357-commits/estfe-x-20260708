import "./App.css";
import Router from "./Router";
import { useState } from "react";
import { authService } from "../firebase";

function App() {
  console.log(authService.currentUser);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>ESTFE-X</h1>
      <Router isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
