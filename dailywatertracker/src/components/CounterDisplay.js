import React from "react";

const CounterDisplay = ({ count, goal }) => {
  console.log("CounterDisplay Rendered");

  return (
    <div>
      <h3>{count} / {goal} glasses completed</h3>
      {count >= goal && <p style={{ color: "green" }}>Goal Reached 🎉</p>}
    </div>
  );
};

export default React.memo(CounterDisplay);