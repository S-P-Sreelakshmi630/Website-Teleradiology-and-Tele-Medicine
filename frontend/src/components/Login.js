import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      alert(response.data.message);
      // Store token in localStorage (or handle it in a state)
      localStorage.setItem("token", response.data.token);

      // Update isAuthenticated state in parent App component
      handleLogin();

      navigate("/dashboard"); // Redirect to Dashboard after successful login
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <a href="/signup" style={{ color: "blue", textDecoration: "underline" }}>
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
