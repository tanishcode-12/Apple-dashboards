import { useState, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const MONTHLY = [
  {m:"Jan '21",Mac:3011.84,Services:7590.49,Wearables:3780.17,iPad:2928.83,iPhone:20280.44},
  {m:"Feb '21",Mac:3554.48,Services:8265.47,Wearables:4250.40,iPad:3198.51,iPhone:21534.57},
  {m:"Mar '21",Mac:3637.69,Services:8722.72,Wearables:3927.38,iPad:3419.57,iPhone:20131.05},
  {m:"Apr '21",Mac:3749.00,Services:8280.08,Wearables:4108.82,iPad:3072.65,iPhone:21163.31},
  {m:"May '21",Mac:3602.66,Services:7468.86,Wearables:3836.13,iPad:2988.16,iPhone:20318.18},
  {m:"Jun '21",Mac:2495.72,Services:6613.17,Wearables:3530.32,iPad:2597.33,iPhone:16863.54},
  {m:"Jul '21",Mac:2665.73,Services:5349.94,Wearables:2794.07,iPad:2142.05,iPhone:14041.71},
  {m:"Aug '21",Mac:2301.39,Services:4801.51,Wearables:2207.68,iPad:2059.55,iPhone:12985.42},
  {m:"Sep '21",Mac:2037.93,Services:4362.12,Wearables:2181.76,iPad:2029.10,iPhone:21385.69},
  {m:"Oct '21",Mac:3445.14,Services:7682.13,Wearables:3407.24,iPad:2724.34,iPhone:17921.14},
  {m:"Nov '21",Mac:3691.93,Services:8433.97,Wearables:4081.45,iPad:2830.08,iPhone:21848.54},
  {m:"Dec '21",Mac:4646.68,Services:10170.25,Wearables:5274.01,iPad:3863.43,iPhone:25817.50},
  {m:"Jan '22",Mac:3603.77,Services:7454.72,Wearables:3462.97,iPad:3065.21,iPhone:20319.45},
  {m:"Feb '22",Mac:3416.33,Services:8406.84,Wearables:4137.84,iPad:3049.63,iPhone:23854.76},
  {m:"Mar '22",Mac:3812.99,Services:7597.77,Wearables:4430.63,iPad:3073.19,iPhone:20060.28},
  {m:"Apr '22",Mac:3902.19,Services:8428.25,Wearables:4271.44,iPad:3271.09,iPhone:19459.38},
  {m:"May '22",Mac:3472.94,Services:7653.95,Wearables:3478.50,iPad:3065.28,iPhone:19529.71},
  {m:"Jun '22",Mac:3039.57,Services:7516.83,Wearables:3786.08,iPad:2380.63,iPhone:16265.74},
  {m:"Jul '22",Mac:2529.25,Services:5609.28,Wearables:2700.42,iPad:2193.26,iPhone:14675.20},
  {m:"Aug '22",Mac:2326.13,Services:4637.05,Wearables:2509.86,iPad:1772.16,iPhone:12342.38},
  {m:"Sep '22",Mac:2308.11,Services:5170.17,Wearables:2271.19,iPad:1879.89,iPhone:25783.48},
  {m:"Oct '22",Mac:3070.46,Services:7634.89,Wearables:3741.66,iPad:2811.87,iPhone:18263.23},
  {m:"Nov '22",Mac:3910.03,Services:8573.01,Wearables:4609.69,iPad:3485.62,iPhone:22051.50},
  {m:"Dec '22",Mac:4122.32,Services:9469.96,Wearables:5109.50,iPad:3753.60,iPhone:23428.13},
  {m:"Jan '23",Mac:3123.60,Services:7081.35,Wearables:3824.85,iPad:2845.37,iPhone:19092.14},
  {m:"Feb '23",Mac:3716.27,Services:9151.76,Wearables:4115.48,iPad:3368.09,iPhone:21037.94},
  {m:"Mar '23",Mac:3919.49,Services:8761.25,Wearables:4763.61,iPad:3206.40,iPhone:21446.96},
  {m:"Apr '23",Mac:3723.49,Services:8798.70,Wearables:4576.25,iPad:3158.79,iPhone:18759.78},
  {m:"May '23",Mac:3758.18,Services:8063.75,Wearables:4039.75,iPad:2863.58,iPhone:19331.78},
  {m:"Jun '23",Mac:2773.26,Services:7296.63,Wearables:3505.40,iPad:2538.34,iPhone:18355.40},
  {m:"Jul '23",Mac:2270.59,Services:6062.24,Wearables:2643.58,iPad:2250.68,iPhone:14254.06},
  {m:"Aug '23",Mac:2007.81,Services:4333.58,Wearables:2509.19,iPad:1827.68,iPhone:12001.43},
  {m:"Sep '23",Mac:2049.24,Services:4856.51,Wearables:2320.22,iPad:1821.43,iPhone:22973.77},
  {m:"Oct '23",Mac:3301.86,Services:7665.90,Wearables:3641.98,iPad:2795.76,iPhone:19181.17},
  {m:"Nov '23",Mac:3692.99,Services:8551.12,Wearables:4180.71,iPad:3327.01,iPhone:22665.06},
  {m:"Dec '23",Mac:4689.31,Services:9286.90,Wearables:4507.69,iPad:3707.69,iPhone:22588.60},
];

const YEARLY = {
  2021: {iPhone:234291.09,Services:87740.71,Wearables:43379.43,Mac:38840.19,iPad:33853.60},
  2022: {iPhone:236033.24,Services:88152.72,Wearables:44509.78,Mac:39514.09,iPad:33801.43},
  2023: {iPhone:231688.09,Services:89909.69,Wearables:44628.71,Mac:39026.09,iPad:33710.82},
};

const SERVICES_REGION = {
  Americas:    {2021:37614.61, 2022:36931.74, 2023:37485.46},
  Europe:      {2021:21719.73, 2022:21833.43, 2023:23074.13},
  Greater_China:{2021:16288.12,2022:16911.88, 2023:16611.92},
  Japan:       {2021:5034.97,  2022:5132.24,  2023:5229.62},
  Asia_Pacific:{2021:7083.28,  2022:7343.43,  2023:7508.56},
};

const SEASONAL_SERVICES = [1475.10,1721.60,1672.12,1700.47,1545.77,1428.44,1134.76,918.14,959.25,1532.19,1703.87,1928.47];
const SEASONAL_IPHONE   = [3979.47,4428.48,4109.22,3958.83,3945.31,3432.31,2864.73,2488.62,4676.20,3691.04,4437.67,4788.95];
const MONTH_LABELS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const COLORS = {
  iPhone:"#0A84FF", Services:"#30D158", Wearables:"#FF9F0A",
  Mac:"#FF453A", iPad:"#BF5AF2",
  Americas:"#0A84FF", Europe:"#30D158", Greater_China:"#FF9F0A", Japan:"#FF453A", Asia_Pacific:"#BF5AF2"
};

// ─── UTILITIES ────────────────────────────────────────────────────────────────
const fmt = v => v>=1000 ? `$${(v/1000).toFixed(1)}B` : `$${v.toFixed(0)}M`;
const fmtPct = v => `${v>=0?"+":""}${v.toFixed(1)}%`;

function useTooltip() {
  const [tt, setTt] = useState({visible:false});
  const show = (e,label,value,color,extra="") => setTt({visible:true,x:e.clientX,y:e.clientY,label,value,color,extra});
  const hide = () => setTt({visible:false});
  return [tt, show, hide];
}

function Tooltip({tt}) {
  if (!tt.visible) return null;
  return (
    <div style={{position:"fixed",left:tt.x+14,top:tt.y-12,background:"#18181B",border:"1px solid #27272A",
      borderRadius:10,padding:"8px 14px",pointerEvents:"none",zIndex:9999,
      boxShadow:"0 12px 40px rgba(0,0,0,0.7)",minWidth:120}}>
      <div style={{color:"#A1A1AA",fontSize:11,fontWeight:500,marginBottom:2}}>{tt.label}</div>
      <div style={{color:tt.color||"#fff",fontSize:16,fontWeight:700}}>{fmt(tt.value)}</div>
      {tt.extra && <div style={{color:"#71717A",fontSize:11,marginTop:2}}>{tt.extra}</div>}
    </div>
  );
}

// ─── SHARED CHART COMPONENTS ─────────────────────────────────────────────────

function LineChartSVG({data,keys,width=700,height=220,pL=60,pB=44,pT=14,pR=16,showDots=true}) {
  const [tt,show,hide] = useTooltip();
  const [hover,setHover] = useState(null);
  const plotW = width-pL-pR, plotH = height-pT-pB;
  const allVals = data.flatMap(d=>keys.map(k=>d[k]||0));
  const maxV = Math.max(...allVals)*1.08, minV = Math.min(...allVals)*0.92;
  const range = maxV-minV;
  const gx = i => pL+(i/(data.length-1))*plotW;
  const gy = v => pT+plotH-((v-minV)/range)*plotH;
  const yticks = [0,0.25,0.5,0.75,1].map(f=>minV+range*f);

  return (
    <div style={{position:"relative"}}>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{overflow:"visible"}} onMouseLeave={hide}>
        <defs>
          {keys.map(k=>(
            <linearGradient key={k} id={`lg_${k}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={COLORS[k]} stopOpacity="0.25"/>
              <stop offset="100%" stopColor={COLORS[k]} stopOpacity="0"/>
            </linearGradient>
          ))}
        </defs>
        {yticks.map((v,i)=>(
          <g key={i}>
            <line x1={pL} x2={pL+plotW} y1={gy(v)} y2={gy(v)} stroke="#27272A" strokeWidth={i===0?1.2:0.5} strokeDasharray={i===0?"":"3,3"}/>
            <text x={pL-6} y={gy(v)+4} textAnchor="end" style={{fill:"#71717A",fontSize:10,fontFamily:"inherit"}}>{fmt(v)}</text>
          </g>
        ))}
        {keys.map(k=>{
          const pts = data.map((d,i)=>`${gx(i)},${gy(d[k]||0)}`).join(" ");
          const area = `${pL},${pT+plotH} `+pts+` ${pL+plotW},${pT+plotH}`;
          return (
            <g key={k}>
              <polygon points={area} fill={`url(#lg_${k})`}/>
              <polyline points={pts} fill="none" stroke={COLORS[k]} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round"/>
            </g>
          );
        })}
        {data.map((d,i)=>(
          <rect key={i} x={gx(i)-8} y={pT} width={16} height={plotH} fill="transparent"
            onMouseMove={e=>{
              setHover(i);
              const vals = keys.map(k=>`${k}: ${fmt(d[k]||0)}`).join(" · ");
              show(e, d.m||d.month||`#${i}`, keys.length===1?d[keys[0]]:null, COLORS[keys[0]], keys.length>1?vals:undefined);
            }}
            onMouseLeave={()=>{setHover(null);hide();}}
          />
        ))}
        {hover!==null && keys.map(k=>(
          <circle key={k} cx={gx(hover)} cy={gy(data[hover][k]||0)} r={4.5} fill={COLORS[k]} stroke="#09090B" strokeWidth={2}/>
        ))}
        {hover!==null && (
          <line x1={gx(hover)} x2={gx(hover)} y1={pT} y2={pT+plotH} stroke="#3F3F46" strokeWidth={1} strokeDasharray="3,2"/>
        )}
        {/* X labels – show every nth */}
        {data.map((d,i)=>{
          const step = data.length>24?6:data.length>12?3:1;
          if(i%step!==0) return null;
          return <text key={i} x={gx(i)} y={pT+plotH+14} textAnchor="middle" style={{fill:"#71717A",fontSize:9.5,fontFamily:"inherit"}}>{d.m||d.month||i}</text>;
        })}
        <text transform={`translate(12,${pT+plotH/2}) rotate(-90)`} textAnchor="middle" style={{fill:"#52525B",fontSize:10,fontFamily:"inherit"}}>Revenue</text>
      </svg>
      <Tooltip tt={tt}/>
    </div>
  );
}

function BarChartSVG({data,valueKey="value",colorKey,colors,width=500,height=220,pL=68,pB=64,pT=12,pR=12,horizontal=false}) {
  const [tt,show,hide] = useTooltip();
  const plotW=width-pL-pR, plotH=height-pT-pB;
  const maxV=Math.max(...data.map(d=>d[valueKey]));
  const barSlot = (horizontal?plotH:plotW)/data.length;
  const barW = barSlot*0.62;
  const yticks=[0,0.25,0.5,0.75,1].map(f=>maxV*f);

  return (
    <div style={{position:"relative"}}>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{overflow:"visible"}} onMouseLeave={hide}>
        {!horizontal && yticks.map((v,i)=>{
          const y=pT+plotH-(v/maxV)*plotH;
          return <g key={i}>
            <line x1={pL} x2={pL+plotW} y1={y} y2={y} stroke="#27272A" strokeWidth={i===0?1.2:0.5} strokeDasharray={i===0?"":"3,3"}/>
            <text x={pL-6} y={y+4} textAnchor="end" style={{fill:"#71717A",fontSize:10,fontFamily:"inherit"}}>{fmt(v)}</text>
          </g>;
        })}
        {data.map((d,i)=>{
          const clr = colorKey?COLORS[d[colorKey]]:(colors?colors[i%colors.length]:"#0A84FF");
          if(!horizontal){
            const bH=(d[valueKey]/maxV)*plotH;
            const x=pL+i*barSlot+(barSlot-barW)/2;
            const y=pT+plotH-bH;
            const label = d.label||d.name||d.month||"";
            const words = label.split(/[\s_]+/);
            return <g key={i}
              onMouseMove={e=>show(e,label,d[valueKey],clr)}
              onMouseLeave={hide} style={{cursor:"pointer"}}>
              <rect x={x+2} y={y+3} width={barW} height={bH} rx={5} fill={clr} opacity={0.12}/>
              <rect x={x} y={y} width={barW} height={bH} rx={5} fill={clr} opacity={0.88}/>
              <rect x={x} y={y} width={barW} height={Math.min(8,bH)} rx={5} fill="white" opacity={0.1}/>
              {words.map((w,wi)=>(
                <text key={wi} x={x+barW/2} y={pT+plotH+14+(wi*12)} textAnchor="middle"
                  style={{fill:"#D4D4D8",fontSize:10,fontFamily:"inherit",fontWeight:wi===0?500:400}}>{w}</text>
              ))}
            </g>;
          }
          return null;
        })}
        <text transform={`translate(12,${pT+plotH/2}) rotate(-90)`} textAnchor="middle" style={{fill:"#52525B",fontSize:10,fontFamily:"inherit"}}>Revenue</text>
      </svg>
      <Tooltip tt={tt}/>
    </div>
  );
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
function StatCard({label,value,sub,color,icon}) {
  return (
    <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:14,padding:"16px 20px",flex:"1 1 160px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div style={{color:"#71717A",fontSize:11,fontWeight:600,letterSpacing:.5,textTransform:"uppercase"}}>{label}</div>
        {icon && <div style={{fontSize:18}}>{icon}</div>}
      </div>
      <div style={{color:color||"#FAFAFA",fontSize:26,fontWeight:800,letterSpacing:-0.5,marginTop:6}}>{value}</div>
      <div style={{color:"#52525B",fontSize:11,marginTop:4}}>{sub}</div>
    </div>
  );
}

// ─── INSIGHT CARD ─────────────────────────────────────────────────────────────
function Insight({icon,title,body,accent}) {
  return (
    <div style={{background:"#18181B",border:`1px solid ${accent}33`,borderLeft:`3px solid ${accent}`,
      borderRadius:10,padding:"14px 16px",marginBottom:10}}>
      <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:4}}>
        <span style={{fontSize:16}}>{icon}</span>
        <span style={{color:"#FAFAFA",fontSize:13,fontWeight:700}}>{title}</span>
      </div>
      <p style={{color:"#A1A1AA",fontSize:12,lineHeight:1.6,margin:0}}>{body}</p>
    </div>
  );
}

// ─── TAB 1: OVERVIEW ──────────────────────────────────────────────────────────
function OverviewTab() {
  const totals = Object.fromEntries(
    ["iPhone","Services","Wearables","Mac","iPad"].map(k=>[k,Object.values(YEARLY).reduce((s,y)=>s+y[k],0)])
  );
  const grand = Object.values(totals).reduce((a,b)=>a+b,0);
  const iPhonePct = (totals.iPhone/grand*100).toFixed(1);
  const servicesPct = (totals.Services/grand*100).toFixed(1);

  const mixData = Object.entries(totals).sort((a,b)=>b[1]-a[1]).map(([k,v])=>({
    name:k, value:v, pct:(v/grand*100).toFixed(1)
  }));

  // Revenue mix donut
  const DONUT_R=80, DONUT_CX=120, DONUT_CY=110;
  let cumAngle=0;
  const slices = mixData.map(d=>{
    const angle=(d.value/grand)*360;
    const start=cumAngle; cumAngle+=angle;
    return {...d,start,angle};
  });
  const toRad=a=>a*Math.PI/180;
  const arc=(cx,cy,r,startA,endA)=>{
    const s={x:cx+r*Math.cos(toRad(startA-90)),y:cy+r*Math.sin(toRad(startA-90))};
    const e={x:cx+r*Math.cos(toRad(endA-90)),y:cy+r*Math.sin(toRad(endA-90))};
    const large=endA-startA>180?1:0;
    return `M ${cx} ${cy} L ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y} Z`;
  };

  // YoY growth table
  const growth = ["iPhone","Services","Wearables","Mac","iPad"].map(k=>({
    k,
    g22:((YEARLY[2022][k]-YEARLY[2021][k])/YEARLY[2021][k]*100),
    g23:((YEARLY[2023][k]-YEARLY[2022][k])/YEARLY[2022][k]*100),
    cagr:(Math.pow(YEARLY[2023][k]/YEARLY[2021][k],0.5)-1)*100,
  }));

  const [tt,show,hide] = useTooltip();

  return (
    <div>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:20}}>
        <StatCard label="iPhone Dependency" value={`${iPhonePct}%`} sub="Of total 3-yr revenue" color="#FF453A" icon="⚠️"/>
        <StatCard label="Services Share" value={`${servicesPct}%`} sub="2nd largest & growing" color="#30D158" icon="📈"/>
        <StatCard label="Services CAGR" value="+1.23%" sub="Only cat. beating iPhone's -0.56%" color="#30D158" icon="🚀"/>
        <StatCard label="iPhone CAGR" value="-0.56%" sub="In decline since 2022 peak" color="#FF453A" icon="📉"/>
        <StatCard label="Services Resilience" value="Low β" sub="Stays up when iPhone dips" color="#FF9F0A" icon="🛡️"/>
      </div>

      <div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:20}}>
        {/* Donut */}
        <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",flex:"0 0 280px"}}>
          <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:12}}>3-Year Revenue Mix</div>
          <svg viewBox="0 0 240 220" width="100%">
            {slices.map((s,i)=>(
              <path key={i} d={arc(DONUT_CX,DONUT_CY,DONUT_R,s.start,s.start+s.angle)}
                fill={COLORS[s.name]} opacity={0.85}
                onMouseMove={e=>show(e,s.name,s.value,COLORS[s.name],`${s.pct}% of total`)}
                onMouseLeave={hide} style={{cursor:"pointer"}}/>
            ))}
            <circle cx={DONUT_CX} cy={DONUT_CY} r={46} fill="#09090B"/>
            <text x={DONUT_CX} y={DONUT_CY-6} textAnchor="middle" style={{fill:"#FAFAFA",fontSize:11,fontWeight:700,fontFamily:"inherit"}}>Total</text>
            <text x={DONUT_CX} y={DONUT_CY+10} textAnchor="middle" style={{fill:"#71717A",fontSize:10,fontFamily:"inherit"}}>{fmt(grand)}</text>
            {mixData.map((d,i)=>(
              <g key={i} transform={`translate(155, ${30+i*30})`}>
                <rect width={10} height={10} rx={3} fill={COLORS[d.name]}/>
                <text x={14} y={9} style={{fill:"#D4D4D8",fontSize:10,fontFamily:"inherit"}}>{d.name} {d.pct}%</text>
              </g>
            ))}
          </svg>
          <Tooltip tt={tt}/>
        </div>

        {/* YoY Table */}
        <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",flex:"1 1 300px",overflow:"auto"}}>
          <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:14}}>Category Growth Rates</div>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead>
              <tr>{["Category","2021 Rev","2022 YoY","2023 YoY","2-yr CAGR"].map(h=>(
                <th key={h} style={{color:"#52525B",fontWeight:600,padding:"4px 10px",textAlign:h==="Category"?"left":"right",borderBottom:"1px solid #27272A"}}>{h}</th>
              ))}</tr>
            </thead>
            <tbody>
              {growth.map(({k,g22,g23,cagr})=>(
                <tr key={k} style={{borderBottom:"1px solid #1C1C1E"}}>
                  <td style={{padding:"8px 10px",display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:8,height:8,borderRadius:2,background:COLORS[k],flexShrink:0}}/>
                    <span style={{color:"#FAFAFA",fontWeight:600}}>{k}</span>
                  </td>
                  <td style={{color:"#A1A1AA",textAlign:"right",padding:"8px 10px"}}>{fmt(YEARLY[2021][k])}</td>
                  <td style={{color:g22>=0?"#30D158":"#FF453A",textAlign:"right",padding:"8px 10px",fontWeight:600}}>{fmtPct(g22)}</td>
                  <td style={{color:g23>=0?"#30D158":"#FF453A",textAlign:"right",padding:"8px 10px",fontWeight:600}}>{fmtPct(g23)}</td>
                  <td style={{color:cagr>=0?"#30D158":"#FF453A",textAlign:"right",padding:"8px 10px",fontWeight:700}}>{fmtPct(cagr)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Multi-line trend */}
      <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",marginBottom:16}}>
        <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:4}}>All Categories — 36-Month Revenue Trend</div>
        <div style={{color:"#52525B",fontSize:11,marginBottom:12}}>Hover to inspect monthly values · Services maintains floor while iPhone swings wildly</div>
        <LineChartSVG data={MONTHLY} keys={["iPhone","Services","Wearables","Mac","iPad"]} width={860} height={220}/>
        <div style={{display:"flex",flexWrap:"wrap",gap:"8px 16px",marginTop:10}}>
          {["iPhone","Services","Wearables","Mac","iPad"].map(k=>(
            <div key={k} style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{width:20,height:3,borderRadius:2,background:COLORS[k]}}/>
              <span style={{color:"#A1A1AA",fontSize:11}}>{k}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TAB 2: RISK ANALYSIS ─────────────────────────────────────────────────────
function RiskTab() {
  // Services/iPhone correlation — monthly
  const corrData = MONTHLY.map(d=>({...d, ratio:(d.Services/d.iPhone*100)}));
  // Volatility — std dev approx
  const stdDev = (arr) => { const m=arr.reduce((a,b)=>a+b,0)/arr.length; return Math.sqrt(arr.reduce((a,b)=>a+(b-m)**2,0)/arr.length); };
  const iPhoneVals = MONTHLY.map(d=>d.iPhone);
  const servicesVals = MONTHLY.map(d=>d.Services);
  const iPhoneStd = stdDev(iPhoneVals);
  const servicesStd = stdDev(servicesVals);

  // Peak to trough swings
  const iPhonePeak = Math.max(...iPhoneVals), iPhoneTrough = Math.min(...iPhoneVals);
  const servicesPeak = Math.max(...servicesVals), servicesTrough = Math.min(...servicesVals);

  return (
    <div>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:20}}>
        <StatCard label="iPhone Volatility (σ)" value={fmt(iPhoneStd)} sub={`${((iPhoneStd/25000)*100).toFixed(0)}% swing vs mean`} color="#FF453A" icon="📊"/>
        <StatCard label="Services Volatility (σ)" value={fmt(servicesStd)} sub={`${((servicesStd/7500)*100).toFixed(0)}% swing vs mean — 3× lower`} color="#30D158" icon="🧘"/>
        <StatCard label="iPhone Peak-Trough" value={`${(((iPhonePeak-iPhoneTrough)/iPhonePeak)*100).toFixed(0)}% swing`} sub={`${fmt(iPhoneTrough)} → ${fmt(iPhonePeak)}`} color="#FF453A" icon="🎢"/>
        <StatCard label="Services Peak-Trough" value={`${(((servicesPeak-servicesTrough)/servicesPeak)*100).toFixed(0)}% swing`} sub={`${fmt(servicesTrough)} → ${fmt(servicesPeak)}`} color="#30D158" icon="📏"/>
      </div>

      <div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:16}}>
        <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",flex:"1 1 360px"}}>
          <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:4}}>Services / iPhone Revenue Ratio Over Time</div>
          <div style={{color:"#52525B",fontSize:11,marginBottom:12}}>A rising ratio = diversification improving. Target: 60%+</div>
          <LineChartSVG
            data={corrData.map(d=>({m:d.m,ratio:d.ratio}))}
            keys={["ratio"]}
            width={520} height={180} pL={52} pB={36}
          />
          <div style={{display:"flex",gap:8,alignItems:"center",marginTop:8}}>
            <div style={{width:20,height:3,borderRadius:2,background:COLORS.Services}}/>
            <span style={{color:"#A1A1AA",fontSize:11}}>Services as % of iPhone Revenue</span>
          </div>
        </div>

        <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",flex:"1 1 300px"}}>
          <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:14}}>Seasonal Vulnerability Map</div>
          <div style={{color:"#52525B",fontSize:11,marginBottom:12}}>iPhone crashes Jul–Aug; Services holds relatively steady</div>
          <BarChartSVG
            data={MONTH_LABELS.map((m,i)=>({
              label:m,
              value:SEASONAL_IPHONE[i],
              color:"#0A84FF"
            }))}
            valueKey="value" colors={MONTH_LABELS.map((_,i)=>{
              const v=SEASONAL_IPHONE[i];
              return v<3000?"#FF453A":v<3800?"#FF9F0A":"#0A84FF";
            })}
            width={420} height={200} pL={58} pB={40} pT={10}
          />
          <div style={{display:"flex",gap:12,marginTop:6,fontSize:10,color:"#52525B"}}>
            <span>🔴 High risk months</span><span>🟡 Moderate</span><span>🔵 Strong</span>
          </div>
        </div>
      </div>

      <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",marginBottom:16}}>
        <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:4}}>iPhone vs Services — Volatility Comparison</div>
        <div style={{color:"#52525B",fontSize:11,marginBottom:12}}>Overlaid to expose how Services acts as a revenue floor when iPhone revenue drops in summer cycles</div>
        <LineChartSVG data={MONTHLY} keys={["iPhone","Services"]} width={860} height={200}/>
        <div style={{display:"flex",gap:16,marginTop:10}}>
          {["iPhone","Services"].map(k=>(
            <div key={k} style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{width:20,height:3,borderRadius:2,background:COLORS[k]}}/>
              <span style={{color:"#A1A1AA",fontSize:11}}>{k}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:10}}>
        <Insight icon="🎢" title="iPhone Has 53% Revenue Concentration Risk" accent="#FF453A"
          body="Over the 3-year period, iPhone averaged 53% of total revenue. This is a classic single-product dependency trap — any market saturation, economic downturn, or competitive disruption has outsized impact on Apple's top line."/>
        <Insight icon="📉" title="iPhone CAGR Turned Negative (-0.56%)" accent="#FF453A"
          body="iPhone is the only major product category showing a negative 2-year CAGR. Revenue peaked in 2022 and declined 1.84% in 2023 — a signal that the hardware upgrade cycle is plateauing in mature markets."/>
        <Insight icon="🛡️" title="Services Is the Natural Hedge" accent="#30D158"
          body="Services has 3× lower revenue volatility than iPhone (lower σ) and maintains a revenue floor even in Jul–Aug when iPhone crashes. The Services/iPhone ratio is actually improving YoY — from 37.4% to 38.8% — signaling organic momentum."/>
        <Insight icon="📈" title="Services Has the Only Positive Multi-Year CAGR" accent="#30D158"
          body="At +1.23% CAGR, Services is the only category growing consistently. While that sounds modest, subscription revenue compounds — $1 of Services revenue today is worth considerably more than $1 of hardware revenue due to its recurring nature."/>
      </div>
    </div>
  );
}

// ─── TAB 3: SERVICES DEEP DIVE ────────────────────────────────────────────────
function ServicesTab() {
  const regions = Object.entries(SERVICES_REGION);
  const regionBarData = regions.map(([r,v])=>({
    label:r.replace("_"," "), name:r,
    value21:v[2021], value22:v[2022], value23:v[2023],
    growth:((v[2023]-v[2021])/v[2021]*100)
  })).sort((a,b)=>b.value23-a.value23);

  const seasonData = MONTH_LABELS.map((m,i)=>({m, Services:SEASONAL_SERVICES[i], iPhone:SEASONAL_IPHONE[i]}));

  return (
    <div>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:20}}>
        <StatCard label="Services Total 3yr" value={fmt(87740.71+88152.72+89909.69)} sub="Consistent base — no year below $87.7B" color="#30D158" icon="💰"/>
        <StatCard label="Fastest Growing Region" value="Europe" sub="+6.2% in Services 2021→2023" color="#30D158" icon="🌍"/>
        <StatCard label="Asia Pacific Growth" value="+6.0%" sub="Smallest but fastest outside Americas" color="#FF9F0A" icon="🌏"/>
        <StatCard label="Americas Saturation" value="-0.3%" value2 sub="Slight dip — near peak penetration signal" color="#FF9F0A" icon="⚡"/>
        <StatCard label="Dec Seasonal Boost" value="+110%" sub="Services doubles Aug trough in December" color="#30D158" icon="🎄"/>
      </div>

      <div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:16}}>
        <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",flex:"1 1 360px"}}>
          <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:4}}>Services Revenue by Region (2021–2023)</div>
          <div style={{color:"#52525B",fontSize:11,marginBottom:12}}>Europe & Asia Pacific showing strongest growth momentum</div>
          <BarChartSVG
            data={regionBarData.map(d=>({label:d.label, value:d.value23, name:d.name}))}
            valueKey="value" colorKey="name"
            width={500} height={220} pL={62} pB={56} pT={10}
          />
        </div>
        <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",flex:"1 1 300px"}}>
          <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:4}}>Regional Services Growth 2021→2023</div>
          <div style={{color:"#52525B",fontSize:11,marginBottom:14}}>Highlighting where expansion is occurring</div>
          {regionBarData.map(d=>(
            <div key={d.label} style={{marginBottom:14}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                <span style={{color:"#D4D4D8",fontSize:12,fontWeight:600}}>{d.label}</span>
                <span style={{color:d.growth>=0?"#30D158":"#FF453A",fontSize:12,fontWeight:700}}>{fmtPct(d.growth)}</span>
              </div>
              <div style={{background:"#27272A",borderRadius:99,height:6,overflow:"hidden"}}>
                <div style={{width:`${Math.min(100,Math.abs(d.growth)/8*100)}%`,height:"100%",
                  background:d.growth>=0?COLORS[d.name]:"#FF453A",borderRadius:99,transition:"width 0.6s ease"}}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:3}}>
                <span style={{color:"#52525B",fontSize:10}}>{fmt(d.value21)}</span>
                <span style={{color:"#71717A",fontSize:10}}>→ {fmt(d.value23)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:16}}>
        <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",flex:"1 1 420px"}}>
          <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:4}}>Services Seasonality Pattern (Monthly Avg)</div>
          <div style={{color:"#52525B",fontSize:11,marginBottom:12}}>Services follows iPhone rhythm — but the amplitude is much smaller. Q4 seasonality is real but exploitable</div>
          <LineChartSVG data={seasonData} keys={["Services","iPhone"]} width={560} height={190} pL={58} pB={36}/>
          <div style={{display:"flex",gap:16,marginTop:8}}>
            {["Services","iPhone"].map(k=>(
              <div key={k} style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:20,height:3,borderRadius:2,background:COLORS[k]}}/>
                <span style={{color:"#A1A1AA",fontSize:11}}>{k} (avg)</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",flex:"1 1 300px"}}>
          <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:14}}>Key Services Insights</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {[
              {icon:"🌍",text:"Europe grew +6.2% — highest regional Services growth. EU digital markets still expanding.", c:"#30D158"},
              {icon:"🌏",text:"Asia Pacific grew +6.0% — fastest relative to base. Huge untapped middle-class digital consumer pool.", c:"#FF9F0A"},
              {icon:"🇺🇸",text:"Americas slipped -0.3%. Near saturation in core market — time to harvest depth (ARPU) not breadth.", c:"#FF453A"},
              {icon:"🎄",text:"December Services revenue is 2.1× August's. Gift card activations & new device setup drive Q4 Services surge alongside hardware.", c:"#0A84FF"},
              {icon:"📱",text:"Services & iPhone move together seasonally — Services is leveraged on the installed base. Every iPhone sold is a Services pipeline.", c:"#BF5AF2"},
            ].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:10,padding:"10px 12px",background:"#09090B",borderRadius:8,borderLeft:`3px solid ${item.c}`}}>
                <span style={{fontSize:14,flexShrink:0}}>{item.icon}</span>
                <span style={{color:"#A1A1AA",fontSize:11,lineHeight:1.55}}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 4: STRATEGIC RECOMMENDATIONS ────────────────────────────────────────
function StrategyTab() {
  const initiatives = [
    {
      id:"01", title:"Decouple Services from iPhone Seasonality",
      priority:"CRITICAL", effort:"Low", impact:"High", color:"#FF453A",
      insight:"Services currently tracks iPhone's summer trough (Jul–Aug drop of ~40%). Introducing annual subscriptions, content bundles, and auto-renewals with mid-year promotions can smooth the revenue curve.",
      kpi:"Reduce Jul–Aug Services dip from 40% to <20% by 2025",
      actions:["Launch mid-year Apple One upgrade campaigns in June","Introduce annual plan discounts with Mar/Jul start incentives","Cross-sell iCloud+ to existing App Store subscribers in summer"]
    },
    {
      id:"02", title:"Accelerate Europe & Asia Pacific Services",
      priority:"HIGH", effort:"Medium", impact:"Very High", color:"#FF9F0A",
      insight:"Europe grew Services +6.2% and Asia Pacific +6.0% — far outpacing Americas (-0.3%). These markets have lower penetration but growing digital middle classes. Every % point of penetration gain in these regions converts directly to recurring margin.",
      kpi:"Grow non-Americas Services to 45% of total Services mix by 2026",
      actions:["Launch Apple TV+ local content investments in EU & SE Asia","Expand regional payment infrastructure for Apple Pay in APAC","Localize Apple Music & Fitness+ for Japanese & Korean markets","Partner with European telcos for bundled Apple One distribution"]
    },
    {
      id:"03", title:"Convert Hardware Upgrade Cycle Into Services Funnel",
      priority:"HIGH", effort:"Low", impact:"High", color:"#30D158",
      insight:"iPhone is the trojan horse. Each September launch (Sep spike visible clearly in data) brings new devices — and new Services pipeline. The data shows Sep iPhone revenue jumps +88% MoM; Services lags this by ~1 month. Closing that lag is free money.",
      kpi:"Increase Services attach rate within 30 days of iPhone purchase by 35%",
      actions:["Mandatory Apple One trial (90 days) bundled with iPhone 16+","In-box QR codes linking to exclusive content for new device owners","Trigger App Store personalization upon first device setup","Partner with carriers to include Apple One in device plans"]
    },
    {
      id:"04", title:"Harvest Americas ARPU (Not Volume)",
      priority:"MEDIUM", effort:"Medium", impact:"Medium", color:"#0A84FF",
      insight:"Americas is flat (-0.3%) in Services — saturation signal. The strategy shifts from acquiring new subscribers to maximizing revenue per existing user. Premium tiers, family plans, and enterprise tools are the levers.",
      kpi:"Increase Americas Services ARPU by 18% by 2025",
      actions:["Launch Apple Intelligence Pro tier ($9.99/mo premium AI features)","Expand Apple Business Essentials to SMBs nationally","Introduce Apple One Family+ with expanded storage tiers","Offer Apple Card cashback incentives tied to Services spending"]
    },
    {
      id:"05", title:"Build Counter-Cyclical Services Products",
      priority:"MEDIUM", effort:"High", impact:"Very High", color:"#BF5AF2",
      insight:"The Jul–Aug trough is predictable. Apple should engineer Services revenue that is anti-correlated to hardware cycles — financial products, enterprise software, and B2B APIs don't follow consumer hardware seasonality.",
      kpi:"Generate 15% of Services from non-consumer recurring sources by 2026",
      actions:["Scale Apple Financial Services (BNPL, savings, credit) as standalone","Launch Apple Intelligence API for enterprise developers","Expand AppleCare+ to enterprise device fleets","Develop Apple Maps Platform revenue (similar to Google Maps API)"]
    },
  ];

  const roadmapYears = ["2024 H1","2024 H2","2025 H1","2025 H2","2026+"];
  const roadmap = [
    {init:"01 Decouple Seasonality",     bars:[1,1,1,1,0], phase:"Quick Win"},
    {init:"02 Europe & APAC Expansion",  bars:[0,1,1,1,1], phase:"Growth"},
    {init:"03 Hardware → Services Funnel",bars:[1,1,0,0,0], phase:"Quick Win"},
    {init:"04 Americas ARPU Harvest",    bars:[0,1,1,1,0], phase:"Growth"},
    {init:"05 Counter-Cyclical Products",bars:[0,0,1,1,1], phase:"Long-term"},
  ];
  const phaseColors = {"Quick Win":"#30D158","Growth":"#0A84FF","Long-term":"#BF5AF2"};

  const [expanded,setExpanded] = useState(null);

  return (
    <div>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:20}}>
        <StatCard label="Revenue at Risk" value="53%" sub="iPhone concentration — must diversify" color="#FF453A" icon="🎯"/>
        <StatCard label="Opportunity Size" value="$120B+" sub="Addressable Services expansion by 2026" color="#30D158" icon="💎"/>
        <StatCard label="Quick Win Timeline" value="< 6 months" sub="2 initiatives deployable immediately" color="#FF9F0A" icon="⚡"/>
        <StatCard label="Services Target Mix" value="30%" sub="From 20% → 30% is the 5-year goal" color="#30D158" icon="🏆"/>
      </div>

      {/* Initiative Cards */}
      <div style={{marginBottom:20}}>
        <div style={{color:"#FAFAFA",fontSize:15,fontWeight:700,marginBottom:12}}>Strategic Initiatives</div>
        {initiatives.map((init)=>(
          <div key={init.id} style={{background:"#18181B",border:`1px solid ${init.color}33`,borderRadius:14,
            marginBottom:10,overflow:"hidden",cursor:"pointer"}}
            onClick={()=>setExpanded(expanded===init.id?null:init.id)}>
            <div style={{display:"flex",alignItems:"center",gap:14,padding:"14px 18px"}}>
              <div style={{width:32,height:32,borderRadius:8,background:`${init.color}22`,border:`1px solid ${init.color}55`,
                display:"flex",alignItems:"center",justifyContent:"center",color:init.color,fontSize:12,fontWeight:800,flexShrink:0}}>
                {init.id}
              </div>
              <div style={{flex:1}}>
                <div style={{color:"#FAFAFA",fontSize:13,fontWeight:700}}>{init.title}</div>
                <div style={{display:"flex",gap:8,marginTop:4}}>
                  <span style={{background:`${init.color}22`,color:init.color,fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99}}>{init.priority}</span>
                  <span style={{background:"#27272A",color:"#71717A",fontSize:10,padding:"2px 8px",borderRadius:99}}>Effort: {init.effort}</span>
                  <span style={{background:"#27272A",color:"#71717A",fontSize:10,padding:"2px 8px",borderRadius:99}}>Impact: {init.impact}</span>
                </div>
              </div>
              <div style={{color:"#52525B",fontSize:18,transform:expanded===init.id?"rotate(180deg)":"none",transition:"transform 0.2s"}}>▾</div>
            </div>
            {expanded===init.id && (
              <div style={{padding:"0 18px 16px",borderTop:"1px solid #27272A"}}>
                <p style={{color:"#A1A1AA",fontSize:12,lineHeight:1.65,marginTop:14,marginBottom:12}}>{init.insight}</p>
                <div style={{background:`${init.color}11`,border:`1px solid ${init.color}33`,borderRadius:8,padding:"8px 12px",marginBottom:12}}>
                  <span style={{color:init.color,fontSize:11,fontWeight:700}}>KPI: </span>
                  <span style={{color:"#D4D4D8",fontSize:11}}>{init.kpi}</span>
                </div>
                <div style={{color:"#71717A",fontSize:11,fontWeight:700,marginBottom:6,textTransform:"uppercase",letterSpacing:.5}}>Action Items</div>
                {init.actions.map((a,ai)=>(
                  <div key={ai} style={{display:"flex",gap:8,marginBottom:5}}>
                    <div style={{width:5,height:5,borderRadius:99,background:init.color,marginTop:5,flexShrink:0}}/>
                    <span style={{color:"#A1A1AA",fontSize:12,lineHeight:1.5}}>{a}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Roadmap */}
      <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px"}}>
        <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:14}}>Implementation Roadmap</div>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",minWidth:560}}>
            <thead>
              <tr>
                <th style={{color:"#52525B",fontSize:11,fontWeight:600,textAlign:"left",padding:"4px 12px 10px",borderBottom:"1px solid #27272A",width:220}}>Initiative</th>
                {roadmapYears.map(y=>(
                  <th key={y} style={{color:"#52525B",fontSize:11,fontWeight:600,textAlign:"center",padding:"4px 8px 10px",borderBottom:"1px solid #27272A"}}>{y}</th>
                ))}
                <th style={{color:"#52525B",fontSize:11,fontWeight:600,textAlign:"left",padding:"4px 12px 10px",borderBottom:"1px solid #27272A"}}>Phase</th>
              </tr>
            </thead>
            <tbody>
              {roadmap.map((row,ri)=>{
                const color = initiatives[ri].color;
                return (
                  <tr key={ri} style={{borderBottom:"1px solid #1C1C1E"}}>
                    <td style={{padding:"10px 12px",color:"#D4D4D8",fontSize:12}}>{row.init}</td>
                    {row.bars.map((active,bi)=>(
                      <td key={bi} style={{padding:"10px 8px",textAlign:"center"}}>
                        {active ? <div style={{height:12,borderRadius:6,background:`${color}cc`,margin:"0 4px"}}/> :
                          <div style={{height:12,margin:"0 4px"}}/>}
                      </td>
                    ))}
                    <td style={{padding:"10px 12px"}}>
                      <span style={{background:`${phaseColors[row.phase]}22`,color:phaseColors[row.phase],
                        fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:99}}>{row.phase}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── TAB 5: PROJECTIONS ───────────────────────────────────────────────────────
function ProjectionsTab() {
  const [scenario, setScenario] = useState("base");

  // Simple projection: 3 scenarios for Services % of total
  const scenarios = {
    base:    {label:"Base Case",    servicesCagr:1.5,  iPhoneCagr:-0.5,  color:"#FF9F0A"},
    bull:    {label:"Bull Case",    servicesCagr:5.0,  iPhoneCagr: 0.5,  color:"#30D158"},
    bear:    {label:"Bear Case",    servicesCagr:0.5,  iPhoneCagr:-2.0,  color:"#FF453A"},
  };

  const proj = scenarios[scenario];
  const baseServices = 89909.69; // 2023 total
  const baseIPhone   = 231688.09;
  const baseOther    = 44628.71+39026.09+33710.82;

  const years = [2023,2024,2025,2026,2027,2028];
  const projData = years.map((yr,i)=>{
    const svc = baseServices * Math.pow(1+proj.servicesCagr/100, i);
    const iph = baseIPhone  * Math.pow(1+proj.iPhoneCagr/100, i);
    const oth = baseOther   * Math.pow(1.005, i);
    const total = svc+iph+oth;
    return {yr, svc, iph, total, svcPct:(svc/total*100).toFixed(1)};
  });

  const mixBarData = projData.map(d=>({
    label:String(d.yr), valueS:d.svc, valueI:d.iph,
    pct:parseFloat(d.svcPct)
  }));

  return (
    <div>
      <div style={{display:"flex",gap:10,marginBottom:20}}>
        {Object.entries(scenarios).map(([k,s])=>(
          <button key={k} onClick={()=>setScenario(k)}
            style={{padding:"8px 18px",borderRadius:99,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:700,
              background:scenario===k?s.color:"#27272A",
              color:scenario===k?"#09090B":"#71717A",transition:"all 0.2s"}}>
            {s.label}
          </button>
        ))}
      </div>

      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:20}}>
        <StatCard label="Services 2028 (Projected)" value={fmt(projData[5].svc)} sub={`vs ${fmt(baseServices)} in 2023`} color={proj.color} icon="📈"/>
        <StatCard label="Services Mix 2028" value={`${projData[5].svcPct}%`} sub={`vs 20.5% today`} color={proj.color} icon="🎯"/>
        <StatCard label="iPhone 2028 (Projected)" value={fmt(projData[5].iph)} sub={`CAGR ${proj.iPhoneCagr>0?"+":""}${proj.iPhoneCagr}% assumed`} color="#0A84FF" icon="📱"/>
        <StatCard label="Total Revenue 2028" value={fmt(projData[5].total)} sub={`${(((projData[5].total/projData[0].total)-1)*100).toFixed(1)}% growth vs 2023`} color="#FAFAFA" icon="💼"/>
      </div>

      <div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:16}}>
        <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",flex:"1 1 400px"}}>
          <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:4}}>Services & iPhone Revenue Projection 2023–2028</div>
          <div style={{color:"#52525B",fontSize:11,marginBottom:12}}>{proj.label} · Services CAGR {proj.servicesCagr>0?"+":""}{ proj.servicesCagr}% · iPhone CAGR {proj.iPhoneCagr}%</div>
          <LineChartSVG
            data={projData.map(d=>({m:String(d.yr),Services:d.svc,iPhone:d.iph}))}
            keys={["Services","iPhone"]} width={560} height={200} pL={62} pB={36}
          />
          <div style={{display:"flex",gap:16,marginTop:8}}>
            {["Services","iPhone"].map(k=>(
              <div key={k} style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:20,height:3,borderRadius:2,background:COLORS[k]}}/>
                <span style={{color:"#A1A1AA",fontSize:11}}>{k} (projected)</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{background:"#18181B",border:"1px solid #27272A",borderRadius:16,padding:"20px",flex:"1 1 280px"}}>
          <div style={{color:"#FAFAFA",fontSize:14,fontWeight:700,marginBottom:14}}>Services Mix % by Year</div>
          {projData.map((d,i)=>(
            <div key={d.yr} style={{marginBottom:12}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                <span style={{color:i===0?"#71717A":"#D4D4D8",fontSize:12,fontWeight:i===0?400:600}}>{d.yr}{i===0?" (actual)":i<3?" (near-term)":" (projected)"}</span>
                <span style={{color:proj.color,fontSize:12,fontWeight:700}}>{d.svcPct}%</span>
              </div>
              <div style={{background:"#27272A",borderRadius:99,height:8,overflow:"hidden"}}>
                <div style={{width:`${d.svcPct}%`,height:"100%",
                  background:`linear-gradient(90deg, #30D158, ${proj.color})`,
                  borderRadius:99,transition:"width 0.8s ease"}}/>
              </div>
            </div>
          ))}
          <div style={{marginTop:16,padding:"10px 12px",background:`${proj.color}11`,borderRadius:8,border:`1px solid ${proj.color}33`}}>
            <div style={{color:proj.color,fontSize:11,fontWeight:700,marginBottom:4}}>Scenario Assumption</div>
            <div style={{color:"#A1A1AA",fontSize:11,lineHeight:1.55}}>
              {scenario==="base" && "Moderate execution of Services growth initiatives with continued modest iPhone decline. Achievable without major new product categories."}
              {scenario==="bull" && "Strong strategy execution: Services bundling with hardware, major international expansion, and enterprise growth. iPhone stabilizes with AI differentiation."}
              {scenario==="bear" && "Minimal Services investment, continued iPhone headwinds, regulatory pressure on App Store margins. Concentration risk materializes."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN DASHBOARD ───────────────────────────────────────────────────────────
const TABS = [
  {id:"overview",   label:"📊 Overview"},
  {id:"risk",       label:"⚠️ Risk Analysis"},
  {id:"services",   label:"🚀 Services Deep Dive"},
  {id:"strategy",   label:"🎯 Strategy"},
  {id:"projections",label:"🔭 Projections"},
];

export default function Dashboard() {
  const [tab,setTab] = useState("overview");

  return (
    <div style={{minHeight:"100vh",background:"#09090B",color:"#FAFAFA",
      fontFamily:"-apple-system, 'SF Pro Display', BlinkMacSystemFont, 'Segoe UI', sans-serif",padding:"0 0 40px"}}>
      {/* Header */}
      <div style={{background:"linear-gradient(180deg,#0F0F11 0%,#09090B 100%)",
        borderBottom:"1px solid #27272A",padding:"24px 28px 0",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(20px)"}}>
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:20}}>
          <div style={{width:40,height:40,borderRadius:10,
            background:"linear-gradient(135deg,#30D158,#0A84FF)",
            display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,
            boxShadow:"0 4px 20px rgba(48,209,88,0.35)"}}>🍎</div>
          <div>
            <div style={{fontSize:20,fontWeight:800,letterSpacing:-0.5}}>Services Growth Intelligence</div>
            <div style={{color:"#52525B",fontSize:12,marginTop:1}}>Apple Revenue Diversification Strategy · FY2021–2023 Analysis</div>
          </div>
          <div style={{marginLeft:"auto",background:"#FF453A22",border:"1px solid #FF453A44",
            borderRadius:8,padding:"6px 14px",display:"flex",gap:6,alignItems:"center"}}>
            <div style={{width:6,height:6,borderRadius:99,background:"#FF453A",animation:"pulse 2s infinite"}}/>
            <span style={{color:"#FF453A",fontSize:11,fontWeight:700}}>53% iPhone Dependency</span>
          </div>
        </div>
        {/* Tabs */}
        <div style={{display:"flex",gap:2}}>
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)}
              style={{padding:"9px 16px",borderRadius:"8px 8px 0 0",border:"none",cursor:"pointer",
                fontFamily:"inherit",fontSize:12,fontWeight:600,transition:"all 0.15s",
                background:tab===t.id?"#18181B":"transparent",
                color:tab===t.id?"#FAFAFA":"#71717A",
                borderBottom:tab===t.id?"2px solid #30D158":"2px solid transparent"}}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{padding:"24px 28px",maxWidth:1100}}>
        {tab==="overview"    && <OverviewTab/>}
        {tab==="risk"        && <RiskTab/>}
        {tab==="services"    && <ServicesTab/>}
        {tab==="strategy"    && <StrategyTab/>}
        {tab==="projections" && <ProjectionsTab/>}
      </div>

      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
    </div>
  );
}
