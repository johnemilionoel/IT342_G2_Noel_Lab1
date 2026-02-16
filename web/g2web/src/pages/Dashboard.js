import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      window.location.href = "/login";
      return;
    }

    getProfile(userId)
      .then((res) => setUser(res.data))
      .catch(() => {
        alert("Failed to load profile");
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/login";
  };

  if (!user) {
    return (
      <div className="dashboard">
        <h2>Loading profile...</h2>
      </div>
    );
  }

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {/* PROFILE CONTENT */}
      <div className="dashboard">
        <h2>Welcome, {user.userFirstName}!</h2>

        <p><strong>Email:</strong> {user.userEmail}</p>
        <p><strong>First Name:</strong> {user.userFirstName}</p>
        <p><strong>Last Name:</strong> {user.userLastName}</p>
      </div>
    </>
  );
}

export default Dashboard;
