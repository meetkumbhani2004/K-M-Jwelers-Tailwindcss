
import React, { useState } from "react";
import "./login.css";
import Header from "../HomePage/Header";
import Footer from '../Footer/Footer'

const LoginPage = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // login logic
    console.log("Login with", email);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const passwordInput = document.querySelector('input[type="password"]').value;
    const matchedUser = users.find(user => user.email === email && user.password === passwordInput);

    if (matchedUser) {
      alert("Login successful!");
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
    } else {
      alert("Invalid email or password!");
    }

  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Password reset email sent to", email);
    alert("Password reset email sent!");
  };

  return (
    <div>
        <Header />
    <div className="login-container">
      <h2 className="account-heading">ACCOUNT</h2>
      <p className="breadcrumb">Home • Account</p>

      {!showForgotPassword ? (
        <>
          <h3 className="log-tit">SIGN IN</h3>
          <p>Insert your account information:</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input type="password" placeholder="PASSWORD" required />
            <div className="forgot-row">
              <input
                type="checkbox"
                onChange={() => setShowForgotPassword(true)}
              />
              <span>Forgot your Password?</span>
            </div>
            <p>
              If you don’t have an account, please <a href="register">Register Here</a>
            </p>
            <button type="submit" className="login-btn">Login</button>
          </form>
        </>
      ) : (
        <>
          <h3>Reset your password</h3>
          <p>We will send you an email to reset your password.</p>
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="btn-group">
              <button type="submit" className="login-btn">Submit</button>
              <button type="button" onClick={() => setShowForgotPassword(false)} className="login-btn">Cancel</button>
            </div>
          </form>
        </>
      )}
    </div>
    < Footer />
    </div>
  );
};

export default LoginPage;