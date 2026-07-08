import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome to Dashboard</h2>
      <p>You have successfully logged in.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;