import { useMemo, useState } from "react";
import api from "../services/api";
import "./register.css";

function Register() {
  const [reg, setReg] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "", // 'error' | 'success'
    text: "",
  });

  const canSubmitRegister = useMemo(() => {
    return (
      reg.full_name.trim().length > 1 &&
      reg.email.trim().length > 3 &&
      reg.password.length >= 6 &&
      reg.confirm_password.length >= 6 &&
      reg.password === reg.confirm_password
    );
  }, [reg]);

  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (reg.password !== reg.confirm_password) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    if (reg.password.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters." });
      return;
    }

    if (!reg.full_name.trim() || !reg.email.trim()) {
      setMessage({ type: "error", text: "Full name and email are required." });
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/register", {
        full_name: reg.full_name.trim(),
        email: reg.email.trim(),
        password: reg.password,
      });

      setMessage({
        type: "success",
        text: res?.data?.message || "Account created successfully.",
      });
    } catch (err) {
      const detail = err?.response?.data?.detail || "Registration failed.";
      setMessage({ type: "error", text: detail });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box register-only">
        <div className="form-wrap">
          <form className="form register-form" onSubmit={onRegisterSubmit}>
            <h2>Registration</h2>

            <div className="form-sub">Register to join the 2026 AI Research Workshop.</div>

            <div className="fields">
              <div className="field">
                <div className="label">Full Name</div>
                <input
                  className="input"
                  type="text"
                  placeholder="Your full name"
                  value={reg.full_name}
                  onChange={(e) => setReg((p) => ({ ...p, full_name: e.target.value }))}
                  autoComplete="name"
                />
              </div>

              <div className="field">
                <div className="label">Email</div>
                <input
                  className="input"
                  type="email"
                  placeholder="you@example.com"
                  value={reg.email}
                  onChange={(e) => setReg((p) => ({ ...p, email: e.target.value }))}
                  autoComplete="email"
                />
              </div>

              <div className="field">
                <div className="label">Password</div>
                <input
                  className="input"
                  type="password"
                  placeholder="Minimum 6 characters"
                  value={reg.password}
                  onChange={(e) => setReg((p) => ({ ...p, password: e.target.value }))}
                  autoComplete="new-password"
                />
              </div>

              <div className="field">
                <div className="label">Confirm Password</div>
                <input
                  className="input"
                  type="password"
                  placeholder="Re-enter password"
                  value={reg.confirm_password}
                  onChange={(e) => setReg((p) => ({ ...p, confirm_password: e.target.value }))}
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div className="form-actions">
              {message.type === "error" && <div className="inline-error">{message.text}</div>}
              {message.type === "success" && <div className="success">{message.text}</div>}

              <button className="submit" type="submit" disabled={loading || !canSubmitRegister}>
                {loading ? "Creating..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;



