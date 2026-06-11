import { useState } from "react";

const REGION_DATA = [
  { name: "Americas", value: 551233.53 },
  { name: "Europe", value: 330138.13 },
  { name: "Greater China", value: 250964.77 },
  { name: "Rest of Asia Pacific", value: 107184.65 },
  { name: "Japan", value: 79558.6 },
];

const CATEGORY_DATA = [
  { name: "iPhone", value: 702012.42 },
  { name: "Services", value: 265803.12 },
  { name: "Wearables", value: 132517.92 },
  { name: "Mac", value: 117380.37 },
  { name: "iPad", value: 101365.85 },
];

const TREND_DATA = [
  { month: "Jan '21", value: 37591.77 }, { month: "Feb '21", value: 40803.43 },
  { month: "Mar '21", value: 39838.41 }, { month: "Apr '21", value: 40373.86 },
  { month: "May '21", value: 38213.99 }, { month: "Jun '21", value: 32100.08 },
  { month: "Jul '21", value: 26993.5 },  { month: "Aug '21", value: 24355.55 },
  { month: "Sep '21", value: 31996.6 },  { month: "Oct '21", value: 35179.99 },
  { month: "Nov '21", value: 40885.97 }, { month: "Dec '21", value: 49771.87 },
  { month: "Jan '22", value: 37906.12 }, { month: "Feb '22", value: 42865.4 },
  { month: "Mar '22", value: 38974.86 }, { month: "Apr '22", value: 39332.35 },
  { month: "May '22", value: 37200.38 }, { month: "Jun '22", value: 32988.85 },
  { month: "Jul '22", value: 27707.41 }, { month: "Aug '22", value: 23587.58 },
  { month: "Sep '22", value: 37412.84 }, { month: "Oct '22", value: 35522.11 },
  { month: "Nov '22", value: 42629.85 }, { month: "Dec '22", value: 45883.51 },
  { month: "Jan '23", value: 35967.31 }, { month: "Feb '23", value: 41389.54 },
  { month: "Mar '23", value: 42097.71 }, { month: "Apr '23", value: 39017.01 },
  { month: "May '23", value: 38057.04 }, { month: "Jun '23", value: 34469.03 },
  { month: "Jul '23", value: 27481.15 }, { month: "Aug '23", value: 22679.69 },
  { month: "Sep '23", value: 34021.17 }, { month: "Oct '23", value: 36586.67 },
  { month: "Nov '23", value: 42416.89 }, { month: "Dec '23", value: 44780.19 },
];

const REGION_COLORS = ["#0A84FF", "#30D158", "#FF9F0A", "#FF453A", "#BF5AF2"];
const CATEGORY_COLORS = ["#0A84FF", "#30D158", "#FF9F0A", "#FF453A", "#BF5AF2"];

const fmt = (v) =>
  v >= 1000 ? `$${(v / 1000).toFixed(1)}B` : `$${v.toFixed(0)}M`;

function Tooltip({ tooltip }) {
  if (!tooltip.visible) return null;
  return (
    <div style={{
      position: "fixed", left: tooltip.x + 14, top: tooltip.y - 10,
      background: "#1C1C1E", border: "1px solid #3A3A3C",
      borderRadius: 10, padding: "8px 14px", pointerEvents: "none",
      zIndex: 9999, boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
    }}>
      <div style={{ color: "#EBEBF5", fontSize: 13, fontWeight: 600 }}>{tooltip.label}</div>
      <div style={{ color: tooltip.color || "#0A84FF", fontSize: 15, fontWeight: 700, marginTop: 2 }}>
        {fmt(tooltip.value)}
      </div>
    </div>
  );
}

function BarChart({ data, colors, title, subtitle }) {
  const [tooltip, setTooltip] = useState({ visible: false });
  const maxVal = Math.max(...data.map((d) => d.value));
  const yTicks = 5;

  const chartH = 280;
  const chartW = 580;
  const paddingL = 72;
  const paddingB = 90;
  const paddingT = 20;
  const paddingR = 20;
  const plotH = chartH - paddingT - paddingB;
  const plotW = chartW - paddingL - paddingR;
  const barGap = 0.3;
  const barW = (plotW / data.length) * (1 - barGap);
  const barSlot = plotW / data.length;

  const yTickVals = Array.from({ length: yTicks + 1 }, (_, i) =>
    (maxVal * i) / yTicks
  );

  return (
    <div style={{
      background: "linear-gradient(145deg,#1C1C1E,#2C2C2E)",
      borderRadius: 20, padding: "28px 24px 20px",
      border: "1px solid #3A3A3C", flex: "1 1 400px",
    }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ color: "#EBEBF5", fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>{title}</div>
        <div style={{ color: "#8E8E93", fontSize: 12, marginTop: 3 }}>{subtitle}</div>
      </div>

      <svg
        viewBox={`0 0 ${chartW} ${chartH}`}
        width="100%" style={{ overflow: "visible" }}
        onMouseLeave={() => setTooltip({ visible: false })}
      >
        {/* Y grid lines + labels */}
        {yTickVals.map((v, i) => {
          const y = paddingT + plotH - (v / maxVal) * plotH;
          return (
            <g key={i}>
              <line x1={paddingL} x2={paddingL + plotW} y1={y} y2={y}
                stroke="#3A3A3C" strokeWidth={i === 0 ? 1.5 : 0.5} strokeDasharray={i === 0 ? "" : "4,4"} />
              <text x={paddingL - 8} y={y + 4} textAnchor="end"
                style={{ fill: "#8E8E93", fontSize: 11, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
                {fmt(v)}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {data.map((d, i) => {
          const barH = (d.value / maxVal) * plotH;
          const x = paddingL + i * barSlot + (barSlot - barW) / 2;
          const y = paddingT + plotH - barH;
          const color = colors[i % colors.length];
          return (
            <g key={i}
              onMouseMove={(e) => setTooltip({ visible: true, x: e.clientX, y: e.clientY, label: d.name, value: d.value, color })}
              onMouseLeave={() => setTooltip({ visible: false })}
              style={{ cursor: "pointer" }}
            >
              {/* Bar shadow */}
              <rect x={x + 2} y={y + 4} width={barW} height={barH}
                rx={6} fill={color} opacity={0.15} />
              {/* Bar */}
              <rect x={x} y={y} width={barW} height={barH} rx={6} fill={color} opacity={0.9} />
              {/* Top shine */}
              <rect x={x} y={y} width={barW} height={Math.min(12, barH)} rx={6} fill="white" opacity={0.08} />
              {/* X label */}
              <text
                x={x + barW / 2}
                y={paddingT + plotH + 16}
                textAnchor="middle"
                style={{ fill: "#EBEBF5", fontSize: 11, fontFamily: "SF Pro Display, -apple-system, sans-serif", fontWeight: 500 }}
              >
                {d.name.length > 10 ? d.name.split(" ").map((w, wi) => (
                  <tspan key={wi} x={x + barW / 2} dy={wi === 0 ? 0 : 14}>{w}</tspan>
                )) : d.name}
              </text>
            </g>
          );
        })}

        {/* Y-axis label */}
        <text
          transform={`translate(14, ${paddingT + plotH / 2}) rotate(-90)`}
          textAnchor="middle"
          style={{ fill: "#8E8E93", fontSize: 11, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}
        >
          Revenue (USD)
        </text>
      </svg>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", marginTop: 12 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: colors[i % colors.length] }} />
            <span style={{ color: "#EBEBF5", fontSize: 11, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>{d.name}</span>
          </div>
        ))}
      </div>

      <Tooltip tooltip={tooltip} />
    </div>
  );
}

function LineChart() {
  const [tooltip, setTooltip] = useState({ visible: false });
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const chartH = 300;
  const chartW = 860;
  const paddingL = 72;
  const paddingB = 60;
  const paddingT = 20;
  const paddingR = 20;
  const plotH = chartH - paddingT - paddingB;
  const plotW = chartW - paddingL - paddingR;

  const maxVal = Math.max(...TREND_DATA.map((d) => d.value)) * 1.1;
  const minVal = Math.min(...TREND_DATA.map((d) => d.value)) * 0.9;
  const range = maxVal - minVal;
  const yTicks = 5;
  const yTickVals = Array.from({ length: yTicks + 1 }, (_, i) =>
    minVal + (range * i) / yTicks
  );

  const getX = (i) => paddingL + (i / (TREND_DATA.length - 1)) * plotW;
  const getY = (v) => paddingT + plotH - ((v - minVal) / range) * plotH;

  const points = TREND_DATA.map((d, i) => `${getX(i)},${getY(d.value)}`).join(" ");
  const areaPoints = `${paddingL},${paddingT + plotH} ` + points + ` ${paddingL + plotW},${paddingT + plotH}`;

  // Show every 3rd label
  const xLabels = TREND_DATA.filter((_, i) => i % 3 === 0);

  return (
    <div style={{
      background: "linear-gradient(145deg,#1C1C1E,#2C2C2E)",
      borderRadius: 20, padding: "28px 24px 20px",
      border: "1px solid #3A3A3C",
    }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ color: "#EBEBF5", fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>Monthly Revenue Trend</div>
        <div style={{ color: "#8E8E93", fontSize: 12, marginTop: 3 }}>Jan 2021 – Dec 2023 · All regions & categories combined</div>
      </div>

      <svg viewBox={`0 0 ${chartW} ${chartH}`} width="100%" style={{ overflow: "visible" }}
        onMouseLeave={() => { setTooltip({ visible: false }); setHoveredIdx(null); }}>

        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0A84FF" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Y grid + labels */}
        {yTickVals.map((v, i) => {
          const y = getY(v);
          return (
            <g key={i}>
              <line x1={paddingL} x2={paddingL + plotW} y1={y} y2={y}
                stroke="#3A3A3C" strokeWidth={i === 0 ? 1.5 : 0.5} strokeDasharray={i === 0 ? "" : "4,4"} />
              <text x={paddingL - 8} y={y + 4} textAnchor="end"
                style={{ fill: "#8E8E93", fontSize: 11, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
                {fmt(v)}
              </text>
            </g>
          );
        })}

        {/* Year dividers */}
        {[12, 24].map((idx) => (
          <line key={idx} x1={getX(idx)} x2={getX(idx)} y1={paddingT} y2={paddingT + plotH}
            stroke="#5A5A5E" strokeWidth={1} strokeDasharray="6,4" />
        ))}
        {[{ idx: 6, label: "2021" }, { idx: 18, label: "2022" }, { idx: 30, label: "2023" }].map(({ idx, label }) => (
          <text key={label} x={getX(idx)} y={paddingT + plotH + 48}
            textAnchor="middle"
            style={{ fill: "#5A5A5E", fontSize: 11, fontFamily: "SF Pro Display, -apple-system, sans-serif", fontWeight: 600 }}>
            {label}
          </text>
        ))}

        {/* Area fill */}
        <polygon points={areaPoints} fill="url(#areaGrad)" />

        {/* Line */}
        <polyline points={points} fill="none" stroke="#0A84FF" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />

        {/* X-axis labels (every 3rd) */}
        {xLabels.map((d, li) => {
          const i = li * 3;
          return (
            <text key={i} x={getX(i)} y={paddingT + plotH + 18} textAnchor="middle"
              style={{ fill: "#8E8E93", fontSize: 10, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
              {d.month}
            </text>
          );
        })}

        {/* Hover dots + invisible hit targets */}
        {TREND_DATA.map((d, i) => (
          <g key={i}>
            <rect
              x={getX(i) - 10} y={paddingT} width={20} height={plotH}
              fill="transparent"
              onMouseMove={(e) => {
                setHoveredIdx(i);
                setTooltip({ visible: true, x: e.clientX, y: e.clientY, label: d.month, value: d.value, color: "#0A84FF" });
              }}
            />
            {hoveredIdx === i && (
              <>
                <line x1={getX(i)} x2={getX(i)} y1={paddingT} y2={paddingT + plotH}
                  stroke="#0A84FF" strokeWidth={1} strokeDasharray="4,3" opacity={0.5} />
                <circle cx={getX(i)} cy={getY(d.value)} r={5} fill="#0A84FF" stroke="#1C1C1E" strokeWidth={2} />
              </>
            )}
          </g>
        ))}

        {/* Y axis label */}
        <text transform={`translate(14, ${paddingT + plotH / 2}) rotate(-90)`}
          textAnchor="middle"
          style={{ fill: "#8E8E93", fontSize: 11, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
          Revenue (USD)
        </text>
      </svg>

      {/* Legend */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
        <div style={{ width: 24, height: 3, borderRadius: 2, background: "#0A84FF" }} />
        <span style={{ color: "#EBEBF5", fontSize: 11, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
          Total Monthly Revenue
        </span>
      </div>

      <Tooltip tooltip={tooltip} />
    </div>
  );
}

export default function AppleSalesDashboard() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#000000",
      padding: "36px 24px",
      fontFamily: "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      {/* Header */}
      <div style={{ marginBottom: 36, display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: "linear-gradient(135deg,#0A84FF,#BF5AF2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22, boxShadow: "0 4px 20px rgba(10,132,255,0.4)",
        }}>🍎</div>
        <div>
          <div style={{ color: "#EBEBF5", fontSize: 24, fontWeight: 700, letterSpacing: -0.5 }}>
            Apple Sales Analytics
          </div>
          <div style={{ color: "#8E8E93", fontSize: 13, marginTop: 2 }}>
            FY 2021 – 2023 · 900 records · 5 regions · 5 categories
          </div>
        </div>
      </div>

      {/* Bar Charts Row */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 20 }}>
        <BarChart
          data={REGION_DATA}
          colors={REGION_COLORS}
          title="Revenue by Region"
          subtitle="Cumulative 2021–2023 · USD millions"
        />
        <BarChart
          data={CATEGORY_DATA}
          colors={CATEGORY_COLORS}
          title="Revenue by Product Category"
          subtitle="Cumulative 2021–2023 · USD millions"
        />
      </div>

      {/* Line Chart */}
      <LineChart />
    </div>
  );
}
