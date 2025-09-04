import React, { useState } from "react";

export default function Counter() {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  if (!showCounter) {
    // Intro / Welcome Screen
    return (
      <div style={screenStyle}>
        <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>Counter App</h1>
        <button
          onClick={() => setShowCounter(true)}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "1.5rem",
            border: "2px solid white",
            background: "transparent",
            color: "white",
            cursor: "pointer",
            borderRadius: "10px"
          }}
        >
          Start
        </button>
      </div>
    );
  }

  // Actual Counter Screen
  return (
    <div style={screenStyle}>
      {/* Only Reset Button */}
      <div style={{
        position: "absolute",
        top: "20px"
      }}>
        <button onClick={reset} style={iconStyle}>⟳</button>
      </div>

      {/* Counter number */}
      <h1 style={{
        fontSize: "12rem",
        fontWeight: "bold",
        margin: "0"
      }}>
        {count}
      </h1>

      {/* Left - button */}
      <button
        onClick={decrement}
        style={{
          ...circleButton,
          position: "absolute",
          left: "40px",
          bottom: "40px"
        }}
      >
        –
      </button>

      {/* Right + button */}
      <button
        onClick={increment}
        style={{
          ...circleButton,
          position: "absolute",
          right: "40px",
          bottom: "40px"
        }}
      >
        +
      </button>
    </div>
  );
}

const screenStyle = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Arial, sans-serif",
  position: "relative"
};

const circleButton = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  border: "1px solid white",
  color: "white",
  background: "transparent",
  fontSize: "2rem",
  cursor: "pointer"
};

const iconStyle = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "1.5rem",
  cursor: "pointer"
};
