import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await logOut();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <Card className="mt-4">
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser && currentUser.email}
            <Link className="btn btn-primary w-100 mt-3" to="/update">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-4"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </div>
    </Container>
  );
};

export default Dashboard;
