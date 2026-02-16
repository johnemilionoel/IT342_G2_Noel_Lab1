import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {
  const [form, setForm] = useState({
    userEmail: "",
    userPassword: "",
    userFirstName: "",
    userLastName: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registered successfully!");
      window.location.href = "/login";
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container">
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="userEmail"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="userPassword"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <input
          name="userFirstName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          required
        />

        <input
          name="userLastName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      <a href="/login">Already have an account? Login</a>
    </div>
  );
}

export default Register;
