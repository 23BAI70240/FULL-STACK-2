import logs from "../data/logs";

const Logs = () => {
  const total = logs.reduce((a, l) => a + l.carbon, 0);

  return (
    <div>
      <h2>Activity Logs</h2>

      <div style={styles.list}>
        {logs.map(log => (
          <div key={log.id} style={styles.card}>
            <span>{log.activity}</span>
            <span
              style={{
                color: log.carbon > 4 ? "var(--danger)" : "var(--primary)"
              }}
            >
              {log.carbon} kg CO₂
            </span>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "20px", color: "var(--accent)" }}>
        Total Emissions: {total} kg CO₂
      </h3>
    </div>
  );
};

export default Logs;

const styles = {
  list: {
    display: "grid",
    gap: "12px",
    marginTop: "20px"
  },
  card: {
    backgroundColor: "var(--surface)",
    padding: "14px 18px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between"
  }
};
