import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../store/User/user-action";
import "../../css/ForgetPassword.css";

import LoadingSpinner from "../LoadingSpinner";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      await dispatch(forgotPassword(email));
      setMessage("If this email exists, a reset link has been sent via Mailtrap!");
    } catch {
      setError("Failed to send reset email.");
    }
    setLoading(false);
  };

  return (
    <div className="forgot-container">
      {loading && <LoadingSpinner />}
      <div className="forgot-box">
        <h2 className="password_title">Forgot Password</h2>
        <p className="password-subtext">Enter your registered email below to receive a reset link.</p>

        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
            Send Reset Link
          </button>
        </form>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
