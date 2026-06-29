import { useState } from "react";
import Navbar from "../components/navbar";
import api from "../services/api";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", formData);

      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setMessage("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div>
      <Navbar />

      <section className="page-section">
        <h1>Login</h1>
        <p>Login to access your workshop dashboard.</p>

        <form className="form-card" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>

          {message && <p>{message}</p>}
        </form>
      </section>
    </div>
  );
}

export default Login;