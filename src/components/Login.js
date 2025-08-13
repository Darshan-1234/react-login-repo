import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate(); 

  const {
    email, 
    password,
    handleInputChange,
    handleLogin,
    loading,
    error,
    success,
  } = useLogin(); 

  const data = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      navigate("/dashboard");
    }
  }, [success, navigate]);

  useEffect(() => {
    console.log("User Data:", data);
  }, [data]);

  return (
    <div>
      <h2>Login</h2>
      {success && (
        <p style={{ color: "green" }}>
          <h3>Login Successful!</h3>
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleInputChange} 
      />

      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      <div style={{ marginTop: "10px" }}>
        <p>
          New to us? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
