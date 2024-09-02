import "./App.css";
import Main from "./components/Main/Main";
import SessionContext from "./components/Login/SessionContext";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Register from "./components/Login/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <BrowserRouter>
        <SessionContext.Provider value={{ user, login, logout }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </SessionContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
