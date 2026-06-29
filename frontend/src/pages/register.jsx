import { useState } from "react";
import Navbar from "../components/navbar";
import api from "../services/api";

function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/users/register", formData);
      setMessage("Registration successful! You can now login.");
      setFormData({
        full_name: "",
        email: "",
        password: ""
      });
    } catch (error) {
      console.error("Register error:", error);
      setMessage("Registration failed. Email may already exist.");
    }
  };

  return (
    <div>
      <Navbar />

      <section className="page-section">
        <h1>Create Account</h1>
        <p>Register to join workshops and access learning resources.</p>

        <form className="form-card" onSubmit={handleRegister}>
          <input
            type="text"
            name="full_name"
            placeholder="Full name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />

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

          <button type="submit">Register</button>

          {message && <p>{message}</p>}
        </form>
      </section>
    </div>
  );
}

export default Register;