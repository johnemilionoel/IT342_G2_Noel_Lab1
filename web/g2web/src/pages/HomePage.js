import { useEffect } from "react";

function HomePage() {

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      window.location.href = "/login";
    }
  }, []);

  const goToDashboard = () => {
    window.location.href = "/dashboard";
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/login";
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <h2>My App</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {/* MAIN CONTENT */}
      <div className="dashboard">
        <h2>Welcome Home</h2>
        <p>You are successfully logged in.</p>

        <button onClick={goToDashboard} style={{ marginTop: "20px" }}>
          Go to Dashboard
        </button>
      </div>
    </>
  );
}

export default HomePage;
