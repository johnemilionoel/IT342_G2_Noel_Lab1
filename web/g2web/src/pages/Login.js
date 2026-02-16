import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {
  const [form, setForm] = useState({
    userEmail: "",
    userPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      // save userId locally
      localStorage.setItem("userId", res.data.userID);

      // go to homepage
      window.location.href = "/home";
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>

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

        <button type="submit">Login</button>
      </form>

      <a href="/register">Create an account</a>
    </div>
  );
}

export default Login;
