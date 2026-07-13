import "./App.css";
import Router from "./Router";
import { useEffect, useState } from "react";
import { authService } from "../firebase";
import { Container } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = authService;

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;

        console.log(uid);

        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [auth]);

  return (
    <>
      <Container>
        <h1>ESTFE-X</h1>

        <Router isLoggedIn={isLoggedIn} />
      </Container>
    </>
  );
}

export default App;
