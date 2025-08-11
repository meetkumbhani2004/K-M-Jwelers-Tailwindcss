import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';
import Header from "../HomePage/Header";
import Footer from "../Footer/Footer";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      alert("User already exists. Please login.");
      navigate("/login");
      return;
    }

    // Save user
    users.push({ firstName, lastName, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <h2 className="account-heading">CREATE ACCOUNT</h2>
        <p className="breadcrumb">Home • Create Account</p>

        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="FIRST NAME"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="LAST NAME"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            
            <label htmlFor="newsletter1" className="newsletter1"> Sign up for our newsletter</label>
          </div>
          <p className="acc"> 
            If you have an account, please <a href="/login">Login Here</a>
          </p>
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
