// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css';


// const Signup = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     try {
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert('Signup successful. Please login.');
//         navigate('/login');
//       } else {
//         setError(data.message || 'Error signing up.');
//       }
//     } catch (err) {
//       setError('Error connecting to the server.');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <video autoPlay loop muted className="video-background">
//         <source src="/background.mp4" type="video/mp4" />
//       </video>

//       <div className="overlay"></div>
//       <div className="signup-content">
//         <h1 className="signup-title">MEDI-CONNECT</h1>
//         <div className="signup-box">
//           {error && <p className="error-message">{error}</p>}
//           <form onSubmit={handleSubmit} className="signup-form">
//             <label htmlFor="username" className="signup-label">Username:</label>
//             <input
//               type="text"
//               id="username"
//               className="signup-input"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               placeholder="Enter your username"
//             />
//             <label htmlFor="password" className="signup-label">Password:</label>
//             <input
//               type="password"
//               id="password"
//               className="signup-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="Enter your password"
//             />
//             <label htmlFor="confirm-password" className="signup-label">Confirm Password:</label>
//             <input
//               type="password"
//               id="confirm-password"
//               className="signup-input"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               placeholder="Confirm your password"
//             />
//             <button type="submit" className="signup-button">Sign Up</button>
//           </form>
//           <p className="login-link">
//             Already have an account? <a href="/login">Login</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
      });

      alert(response.data.message);
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Error occurred during registration"
      );
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/login" style={{ color: "blue", textDecoration: "underline" }}>
          Login
        </a>
      </p>
    </div>
  );
};

export default Signup;
