import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Link
        to="/example"
        style={{
          padding: "10px 15px",
          border: "2px solid green",
          background: "none",
          color: "#333",
        }}
      >
        UseEffect condition
      </Link>

      <Link
        to="/example6"
        style={{
          padding: "10px 15px",
          border: "2px solid green",
          background: "none",
          color: "#333",
        }}
      >
        Empty depedency
      </Link>
      <Link
        to="/example2"
        style={{
          padding: "10px 15px",
          border: "2px solid green",
          background: "none",
          color: "#333",
        }}
      >
        with depedency
      </Link>
      <Link
        to="/example2"
        style={{
          padding: "10px 15px",
          border: "2px solid green",
          background: "none",
          color: "#333",
        }}
      >
        Update empty state
      </Link>
    </div>
  );
};

export default Home;
