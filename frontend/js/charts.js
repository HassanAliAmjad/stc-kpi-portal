let trendChart=null;
let bandChart=null;

function renderCharts(months){
  renderTrendChart();
  renderBandChart();
}

function renderTrendChart(){
  if(trendChart) trendChart.destroy();
  const datasets=Object.entries(TEAMS).map(([tk,td])=>({
    label:td.label.split(' ')[0],
    data:['Jan','Feb','Mar','Apr'].map(m=>{
      const scores=td.agents.map(a=>a.scores[m]).filter(s=>s!==null);
      return scores.length?Math.min(Math.round(scores.reduce((a,b)=>a+b,0)/scores.length*100),100):null;
    }),
    borderColor:td.color,backgroundColor:'transparent',tension:0.3,
    pointRadius:5,pointBackgroundColor:td.color,fill:false,borderWidth:2.5,spanGaps:false
  }));
  datasets.push({label:'Target 85%',data:[85,85,85,85],borderColor:'#c0392b',borderDash:[6,4],pointRadius:0,fill:false,borderWidth:1.5});

  const leg=document.getElementById('trendLegend');
  if(leg) leg.innerHTML=[
    ...Object.values(TEAMS).map(td=>`<span class="legend-item"><span class="legend-dot" style="background:${td.color}"></span>${td.label.split(' ')[0]}</span>`),
    `<span class="legend-item"><span class="legend-dot" style="background:#c0392b"></span>Target 85%</span>`
  ].join('');

  const canvas=document.getElementById('trendChart');
  if(!canvas) return;
  trendChart=new Chart(canvas,{
    type:'line',
    data:{labels:['Jan','Feb','Mar','Apr'],datasets},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>ctx.dataset.label+': '+(ctx.raw||'N/A')+(ctx.raw?'%':'')}}},
      scales:{y:{min:50,max:105,ticks:{callback:v=>v+'%',font:{size:11},color:'#888'},grid:{color:'rgba(0,0,0,.05)'}},x:{ticks:{font:{size:12},color:'#888'},grid:{display:false}}}
    }
  });
}

function renderBandChart(){
  if(bandChart) bandChart.destroy();
  const all=getAllAgents();
  const valid=all.map(a=>a.score).filter(s=>s!==null);
  const bands=[
    {label:'Outstanding ≥95%',count:valid.filter(s=>s>=0.95).length,color:'#1a7f37'},
    {label:'Good 85–94%',count:valid.filter(s=>s>=0.85&&s<0.95).length,color:'#6B2D8B'},
    {label:'Needs Work 70–84%',count:valid.filter(s=>s>=0.7&&s<0.85).length,color:'#856404'},
    {label:'At Risk <70%',count:valid.filter(s=>s<0.7).length,color:'#c0392b'},
  ];
  const leg=document.getElementById('bandLegend');
  if(leg) leg.innerHTML=bands.map(b=>`<div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#666;margin-bottom:4px"><span style="width:10px;height:10px;border-radius:2px;background:${b.color};display:inline-block;flex-shrink:0"></span>${b.label}: <strong>${b.count}</strong></div>`).join('');
  const canvas=document.getElementById('bandChart');
  if(!canvas) return;
  bandChart=new Chart(canvas,{
    type:'doughnut',
    data:{labels:bands.map(b=>b.label),datasets:[{data:bands.map(b=>b.count),backgroundColor:bands.map(b=>b.color),borderWidth:0,hoverOffset:8}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>ctx.label+': '+ctx.raw+' agents'}}}}
  });
}