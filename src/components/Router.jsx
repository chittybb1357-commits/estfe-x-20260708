import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Nav from "./Nav";
import Profile from "../routes/Profile";
import { BrowserRouter, Routes, Route } from "react-router";

function Router({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn && <Nav />}

      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<profile />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </>
  );
}

export default Router;
