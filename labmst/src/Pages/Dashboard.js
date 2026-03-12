import "./dashboard.css";

const Dashboard = () => {

  return (
    <div className="dashboard-container">

      <div className="dashboard-card">

        <h1> Dashboard</h1>
        <p>Welcome to Dashboard</p>

        <div className="stats">

          <div className="stat-box">
            <h2>5</h2>
            <p>Conduct</p>
          </div>

          <div className="stat-box">
            <h2>2</h2>
            <p>viva</p>
          </div>

          <div className="stat-box">
            <h2>3</h2>
            <p>Written</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;