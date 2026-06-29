import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/auth/login", { email, password });
      const token = res?.data?.access_token;
      if (token) localStorage.setItem("access_token", token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err?.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page" style={{ padding: "120px 0 80px" }}>
      <div className="container" style={{ maxWidth: 520 }}>
        <h1 style={{ marginBottom: 18 }}>Login</h1>
        <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 14, borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)", color: "#fff" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: 14, borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)", color: "#fff" }}
          />

          {error && <div style={{ color: "#ff4d6d", fontWeight: 800 }}>{error}</div>}

          <button type="submit" disabled={loading} style={{ padding: 14, borderRadius: 12, border: "none", background: "#ef4444", color: "#fff", fontWeight: 900, cursor: "pointer" }}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}

