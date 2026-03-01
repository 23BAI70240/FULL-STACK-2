import { useState, useEffect, useCallback } from "react";
import CounterDisplay from "../components/CounterDisplay";

const WaterTracker = () => {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load saved count from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem("waterCount");
    if (savedCount) {
      setCount(Number(savedCount));
    }
  }, []);

  // Save count to localStorage
  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  // Fetch health tip
  useEffect(() => {
    const fetchTip = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setTip(data.slip.advice);
      } catch (err) {
        setError("Failed to fetch advice.");
      } finally {
        setLoading(false);
      }
    };

    fetchTip();
  }, []);

  // useCallback to prevent unnecessary re-renders
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
  <div style={styles.page}>
    <div style={styles.card}>
      <h2 style={styles.title}>💧 Daily Water Tracker</h2>

      <CounterDisplay count={count} goal={goal} />

      {/* Progress Bar */}
      <div style={styles.progressContainer}>
        <div
          style={{
            ...styles.progressBar,
            width: `${Math.min((count / goal) * 100, 100)}%`
          }}
        />
      </div>

      {/* Buttons */}
      <div style={styles.buttonGroup}>
        <button style={styles.primaryBtn} onClick={increment}>+</button>
        <button style={styles.dangerBtn} onClick={decrement}>-</button>
        <button style={styles.resetBtn} onClick={reset}>Reset</button>
      </div>

      {/* Goal Input */}
      <div style={styles.goalSection}>
        <label style={styles.label}>Daily Goal</label>
        <input
          type="number"
          value={goal}
          min="1"
          style={styles.input}
          onChange={(e) => setGoal(Number(e.target.value))}
        />
      </div>
    </div>

    {/* Health Tip Card */}
    <div style={styles.tipCard}>
      <h3>Today's Health Tip</h3>
      {loading && <p>Loading advice...</p>}
      {error && <p style={{ color: "#DC2626" }}>{error}</p>}
      {tip && <p style={{ fontStyle: "italic" }}>“{tip}”</p>}
    </div>
  </div>
);
};
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#F8FAFC",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px"
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    marginBottom: "20px"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1E293B"
  },
  progressContainer: {
    height: "10px",
    backgroundColor: "#E2E8F0",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px"
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2563EB",
    transition: "width 0.3s ease"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },
  primaryBtn: {
    backgroundColor: "#2563EB",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer"
  },
  dangerBtn: {
    backgroundColor: "#DC2626",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer"
  },
  resetBtn: {
    backgroundColor: "#64748B",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer"
  },
  goalSection: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    marginBottom: "5px",
    color: "#475569"
  },
  input: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #CBD5E1"
  },
  tipCard: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  }
};
export default WaterTracker;