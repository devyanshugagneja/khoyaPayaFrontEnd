// Login.js

import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-form">
      <form>
        <input type="email" className="form-input" placeholder="Email" />
        <input type="password" className="form-input" placeholder="Password" />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
