import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../store/User/user-action";

// import "../css/UpdatePassword.css";
import LoadingSpinner from "../LoadingSpinner";

const UpdatePassword = () => {
  const dispatch = useDispatch();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      await dispatch(updatePassword({ oldPassword, newPassword, confirmPassword }));
      setMessage("Password updated successfully!");
    } catch {
      setError("Failed to update password.");
    }
    setLoading(false);
  };

  return (
    <div className="update-container">
      {loading && <LoadingSpinner />}
      <div className="update-box">
        <h2>Change Password</h2>

        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
            Update Password
          </button>
        </form>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default UpdatePassword;
