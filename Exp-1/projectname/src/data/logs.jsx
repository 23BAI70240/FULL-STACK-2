export const logs = [
  { id: 1, activity: "Car Travel", carbon: 4 },
  { id: 2, activity: "Electricity Usage", carbon: 6 },
  { id: 3, activity: "Cycling", carbon: 0 },
  { id: 4, activity: "Public Transport", carbon: 12 },
  { id: 5, activity: "Meat Consumption", carbon: 5 },
  { id: 6, activity: "Plant-based Meal", carbon: 2 },
  { id: 7, activity: "Air Travel", carbon: 1 }
];

export const HighImpact = () => {
  const highCarbonLogs = logs.filter(log => log.carbon <= 4);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#121212",
        borderRadius: "8px"
      }}
    >
      <h2 style={{ color: "#FFD700" }}>Daily Logs</h2>

      <p style={{ color: "#00E5FF", fontSize: "15px" }}>
        These are the given carbon emissions
      </p>

      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {highCarbonLogs.map(log => (
          <li
            key={log.id}
            style={{
              marginBottom: "8px",
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#1E1E1E",
              color:
                log.carbon === 0
                  ? "#00FF7F"   
                  : log.carbon <= 2
                  ? "#ADFF2F"   
                  : "#FF4500",  
              fontWeight: "bold"
            }}
          >
            {log.activity} : {log.carbon} kgs
          </li>
        ))}
      </ul>
    </div>
  );
};