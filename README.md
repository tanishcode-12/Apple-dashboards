<div align="center">

# 🍎 Apple Sales Intelligence Dashboard

![Made with React](https://img.shields.io/badge/Made%20with-React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![No Dependencies](https://img.shields.io/badge/Chart%20Libraries-Zero-30D158?style=for-the-badge)
![Data](https://img.shields.io/badge/Dataset-900%20rows-FF9F0A?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-BF5AF2?style=for-the-badge)

> 🔬 A fully interactive, multi-tab strategic analytics dashboard built with **React** and **inline CSS** — no external UI libraries, no chart dependencies. Just drop it in and run.

![Dashboard Preview](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd4b3VzNHQ3N2Q3M2Z5dGR6aHUxMm52NHFtaXhrdWxvcXZ3dWNoMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46CyJmS9KUbokzsI/giphy.gif)

</div>

---

## ✨ What Makes This Special

> 💡 Built as a data consulting exercise analyzing Apple's **FY2021–2023 revenue** across **5 product categories** and **5 global regions** — with zero charting libraries. Every chart is hand-rolled SVG.

```
📦 Zero chart libraries    🎨 Pure inline CSS    ⚡ Instant setup    🌍 5 global regions
```

---

## 🗂️ What's Inside

### 🧠 `AppleSalesDashboard.jsx` — 5-Tab Strategy Dashboard

The main deliverable. A deep-dive strategic intelligence tool:

| Tab | 📌 What It Shows |
|-----|----------------|
| 📊 **Overview** | Revenue mix donut, YoY growth table, all-category 36-month trend |
| ⚠️ **Risk Analysis** | iPhone concentration risk, volatility comparison, seasonal vulnerability map |
| 🚀 **Services Deep Dive** | Regional Services growth, seasonality patterns, key insights |
| 🎯 **Strategy** | 5 ranked initiatives with KPIs, actions & implementation roadmap |
| 🔭 **Projections** | Bull / Base / Bear scenario modelling through 2028 |

### 📈 `BasicCharts.jsx` — EDA Visualizations

Three standalone charts for initial data exploration:

- 📊 Bar chart: Revenue by Region  
- 📊 Bar chart: Revenue by Product Category  
- 📉 Line chart: Monthly Revenue Trend (Jan 2021 – Dec 2023)

---

## 🚀 Quick Start

![Setup](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanducXVrMzBtMTZxdzNqb3NneTd3bHgxcnBkcWttdjc3dWp0ZXN1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif)

### ⚡ Using Vite (Recommended)

```bash
npm create vite@latest apple-dashboard -- --template react
cd apple-dashboard
npm install
```

Replace `src/App.jsx` with:

```jsx
import AppleSalesDashboard from './AppleSalesDashboard'
export default AppleSalesDashboard
```

Copy `AppleSalesDashboard.jsx` into `src/`, then:

```bash
npm run dev
```

### 🛠 Using Create React App

```bash
npx create-react-app apple-dashboard
cd apple-dashboard
```

Replace `src/App.js` with:

```jsx
import AppleSalesDashboard from './AppleSalesDashboard'
export default function App() { return <AppleSalesDashboard /> }
```

```bash
npm start
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18 | ⚛️ Core framework |
| `react-dom` | ^18 | 🌐 DOM rendering |

> 🎉 **No charting libraries** — all SVG charts are hand-rolled with custom tooltips, hover states, gradients, and animations.

---

## 📊 Dataset

The dashboard uses Apple's publicly reported revenue data:

```
📁 900 rows × 7 columns
├── 📅 Year             (int)    — 2021, 2022, 2023
├── 📅 Month            (int)    — 1–12
├── 📅 Quarter          (int)    — 1–4
├── 🌍 Region           (str)    — Americas, Europe, Greater_China, Japan, Rest_of_Asia_Pacific
├── 📱 Product_Category (str)    — iPhone, Services, Wearables, Mac, iPad
├── 💰 Revenue          (float)  — USD millions
└── 🗓️ Month_Year       (str)    — e.g. "2021-01"
```

> ✅ Data is embedded directly in the components — no API calls, no file imports needed.

---

## 🔍 Key Analytical Findings

![Analysis](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWJ1eTZsaXFvdWZqeGd5NHo2MGNoZGd3dmZvazdndjQ4Ymx4NnptcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif)

| # | 💡 Finding | 📈 Signal |
|---|-----------|---------|
| 1 | 🚨 **iPhone Concentration Risk** | 53% of revenue, CAGR of -0.56% — declining |
| 2 | 🌱 **Services is the Only Growing Category** | +1.23% CAGR, 3× lower volatility than iPhone |
| 3 | 🌍 **Europe & APAC are the Expansion Frontier** | +6.2% and +6.0% Services growth respectively |
| 4 | 🎢 **Predictable Seasonal Vulnerability** | iPhone crashes ~40% Jul→Aug; Services only -37% |
| 5 | 📈 **Services/iPhone Ratio Rising** | 37.4% (2021) → 38.8% (2023) — organic momentum |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| ⚛️ Framework | React 18 — functional components, `useState` hooks |
| 🎨 Charts | Hand-rolled inline SVG — polylines, paths, gradients |
| 💅 Styling | 100% inline CSS — zero stylesheets, zero CSS-in-JS |
| 📦 Build | Vite 5 |

---

## 📁 File Structure

```
apple-dashboard/
├── 📂 src/
│   ├── 🔑 main.jsx                   # React entry point
│   ├── 🧠 AppleSalesDashboard.jsx    # 5-tab strategy dashboard
│   └── 📈 BasicCharts.jsx            # EDA visualizations
├── 🌐 index.html
├── ⚙️  package.json
├── ⚙️  vite.config.js
├── 🚫 .gitignore
└── 📖 README.md
```

---

## 👨‍💻 Author

<div align="center">

**Tanish Shetty**  
🎓 BSc Data Science · 📍 Mumbai, India

[![GitHub](https://img.shields.io/badge/GitHub-tanishcode--12-181717?style=for-the-badge&logo=github)](https://github.com/tanishcode-12)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-tanish--shetty495-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/tanish-shetty495/)

</div>

---

## 📄 License

MIT — free to use, modify, and distribute. ⭐ Star the repo if you found it useful!

---

<div align="center">

*Built with ❤️ and a lot of SVG math*

</div>
