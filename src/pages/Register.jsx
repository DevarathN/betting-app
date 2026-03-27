import { useState } from "react";
import { api } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    api.register({ email, password });
    navigate("/");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="auth-card">
          <h2>Create Account</h2>
          <p className="auth-sub">Start your journey</p>

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" onClick={handleRegister}>
            Register
          </button>

          <Link to="/" className="auth-link">
            Already have an account? Login
          </Link>
        </div>
      </div>

      <div className="auth-right"></div>
    </div>
  );
}
