import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import Dashboard from "./Components/Dashboard";
import AuthProvider from "./Context/AuthContext";
import RequiredAuth from "./Context/RequiredAuth";

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-container-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ minWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update" element={<UpdateProfile />} />
              <Route
                path="/"
                element={
                  <RequiredAuth>
                    <Dashboard />
                  </RequiredAuth>
                }
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
