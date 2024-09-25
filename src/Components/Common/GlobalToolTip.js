// Tooltip.js
import React, { useState, useEffect } from "react";

const GlobalTooltip = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    url: "",
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseOver = (event) => {
      const target = event.target;
      if (target.tagName === "A") {
        setTooltip({
          visible: true,
          url: target.href,
        });
      }
    };

    const handleMouseOut = () => {
      setTooltip({ visible: false, url: "" });
    };

    // Add event listeners for all mouseovers and mouseouts
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return tooltip.visible && <div style={tooltipStyle}>{tooltip.url}</div>;
};

// Tooltip styling
const tooltipStyle = {
  position: "fixed",
  bottom: "10px",
  left: "10px",
  backgroundColor: "black",
  color: "white",
  padding: "5px",
  borderRadius: "5px",
  fontSize: "12px",
  zIndex: 1000,
};

export default GlobalTooltip;
