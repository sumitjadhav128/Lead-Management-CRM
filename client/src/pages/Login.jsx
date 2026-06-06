import { useState } from "react";
import api from "../services/api"
import {
  useNavigate,
  Link
} from "react-router-dom";

import "../styles/auth.css";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);
      setError("");

      const res = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Login failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1 className="auth-title">
          Login
        </h1>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form
          className="auth-form"
          onSubmit={submitHandler}
        >

          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            className="auth-btn"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        <div className="auth-footer">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="auth-link"
          >
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;