import React from "react";

export default function TooltipTemplate(pieChart) {
  return (
    <svg>
      <circle
        cx="100"
        cy="100"
        fill="#eee"
      ></circle>
      <text
        textAnchor="middle"
        x="100"
        y="120"
        style={{ fontSize: 18, fill: "#494949" }}
      >
        <tspan x="20" y="40"  style={{ fontSize: 20, fontWeight: 600 }}>
          {pieChart}
        </tspan>
      </text>
    </svg>
  );
}
