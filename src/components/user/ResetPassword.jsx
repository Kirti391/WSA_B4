import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../store/User/user-action";
import "../../css/ResetPassword.css";

import LoadingSpinner from "../LoadingSpinner";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      await dispatch(resetPassword({ password, confirmPassword }, token));
      setMessage("Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2500);
    } catch {
      setError("Failed to reset password. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="reset-container">
      {loading && <LoadingSpinner />}
      <div className="reset-box">
        <h2>Reset Your Password</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter new password"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm password"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
            Reset Password
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
