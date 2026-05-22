const TEAMS={
  ahmed:{label:'Ahmed Al Sabea',color:'#6B2D8B',agents:[
    {name:'Sultan Nahar',hrid:'5099',tabs:'CQNT0054',lang:'B2C Arabic',scores:{Jan:1.0,Feb:0.965,Mar:0.99,Apr:0.855},kpi:{Apr:{q:20,quiz:10,aht:25,irt:20,ref:8,tags:5,abs:0,focus:'Quiz, Referrals'}}},
    {name:'Abdullah Essam',hrid:'5122',tabs:'CQNT0058',lang:'B2C Arabic',scores:{Jan:1.0,Feb:0.8,Mar:0.89,Apr:0.96},kpi:{Apr:{q:20,quiz:15,aht:25,irt:20,ref:10,tags:3,abs:0,focus:'Referrals, Tags'}}},
    {name:'AbdulHadi Ajay',hrid:'5339',tabs:'CQNT0261',lang:'B2C Arabic',scores:{Jan:0.95,Feb:0.75,Mar:0.375,Apr:0.86},kpi:{Apr:{q:16,quiz:15,aht:25,irt:15,ref:8,tags:0,abs:1,focus:'Quality, AHT, Tags'}}},
    {name:'Nooreldein Ghazi',hrid:'5536',tabs:'CQNT0444',lang:'B2C Arabic & English',scores:{Jan:0.93,Feb:0.91,Mar:0.99,Apr:0.93},kpi:{Apr:{q:20,quiz:15,aht:25,irt:20,ref:8,tags:5,abs:0,focus:'Reduce AHT, Referrals'}}},
    {name:'Abdullah Alkhudari',hrid:'5864',tabs:'CQNT0754',lang:'B2C Arabic & English',scores:{Jan:1.0,Feb:0.89,Mar:0.955,Apr:1.0},kpi:{Apr:{q:20,quiz:15,aht:25,irt:20,ref:10,tags:5,abs:0,focus:'Reduce AHT'}}},
    {name:'Ali Khouder',hrid:'5187',tabs:'CQNT0247',lang:'B2C Arabic',scores:{Jan:0.89,Feb:0.9,Mar:0.8,Apr:0.85},kpi:{Apr:{q:20,quiz:15,aht:20,irt:20,ref:0,tags:0,abs:0,focus:'Referrals, Tags'}}},
    {name:'Omar Hamad',hrid:'5427',tabs:'CQNT0353',lang:'B2C Arabic',scores:{Jan:1.0,Feb:0.82,Mar:0.67,Apr:0.92},kpi:{Apr:{q:20,quiz:12,aht:25,irt:20,ref:5,tags:5,abs:0,focus:'Quiz, Reduce AHT'}}},
  ]},
  aziz:{label:'Aziz Al Sabea',color:'#9B4DC0',agents:[
    {name:'Faisal Jaber',hrid:'5107',tabs:'CQNT0056',lang:'B2C Arabic',scores:{Jan:1.0,Feb:0.9,Mar:0.73,Apr:0.87},kpi:{Apr:{q:20,quiz:12,aht:25,irt:20,ref:0,tags:5,abs:0,focus:'Quiz, Referrals, Tags'}}},
    {name:'Hashim Ramazan',hrid:'5228',tabs:'CQNT0136',lang:'B2C English',scores:{Jan:0.89,Feb:0.73,Mar:0.68,Apr:0.62},kpi:{Apr:{q:20,quiz:12,aht:0,irt:20,ref:5,tags:0,abs:0,focus:'CRITICAL: Reduce AHT'}}},
    {name:'Samy AlRuwaily',hrid:'5378',tabs:'CQNT0306',lang:'B2C Arabic',scores:{Jan:1.0,Feb:0.73,Mar:0.815,Apr:0.83},kpi:{Apr:{q:16,quiz:12,aht:25,irt:20,ref:5,tags:0,abs:0,focus:'Quality, Quiz, Tags'}}},
    {name:'Beshayer M.',hrid:'5716',tabs:'CQNT0616',lang:'B2C Arabic & English',scores:{Jan:0.87,Feb:0.93,Mar:0.82,Apr:0.77},kpi:{Apr:{q:12,quiz:15,aht:25,irt:20,ref:5,tags:0,abs:0,focus:'Quality, Tags'}}},
    {name:'Anas O.',hrid:'5916',tabs:'CQNT0774',lang:'B2C Arabic & English',scores:{Jan:1.0,Feb:0.805,Mar:0.855,Apr:0.8},kpi:{Apr:{q:20,quiz:15,aht:25,irt:20,ref:5,tags:0,abs:0,focus:'Referrals, Tags'}}},
    {name:'Mohammad Mejbel',hrid:'5432',tabs:'CQNT0351',lang:'B2C Arabic',scores:{Jan:1.0,Feb:0.9,Mar:0.94,Apr:0.83},kpi:{Apr:{q:20,quiz:10,aht:25,irt:20,ref:0,tags:3,abs:0,focus:'Quiz, Referrals'}}},
    {name:'Essa Ballan',hrid:'5870',tabs:'CQNT0744',lang:'B2C Arabic & English',scores:{Jan:1.0,Feb:0.9,Mar:0.92,Apr:0.91},kpi:{Apr:{q:16,quiz:15,aht:25,irt:20,ref:5,tags:5,abs:0,focus:'Quality, Referrals'}}},
  ]},
  abul:{label:'Abul Hassan',color:'#4A1A6B',agents:[
    {name:'Ali Aaqab',hrid:'5113',tabs:'CQNT0028',lang:'B2C Arabic',scores:{Jan:1.0,Feb:0.97,Mar:0.99,Apr:1.0},kpi:{Apr:{q:20,quiz:15,aht:25,irt:20,ref:10,tags:5,abs:0,focus:'Reduce AHT'}}},
    {name:'AbdulRahman Mohamed',hrid:'5236',tabs:'CQNT0148',lang:'B2C English',scores:{Jan:1.0,Feb:0.76,Mar:0.89,Apr:0.98},kpi:{Apr:{q:20,quiz:15,aht:25,irt:20,ref:10,tags:5,abs:0,focus:'Reduce AHT'}}},
    {name:'Ahmed Ahmad',hrid:'5508',tabs:'CQNT0430',lang:'B2C Arabic & English',scores:{Jan:1.0,Feb:0.71,Mar:0.75,Apr:0.91},kpi:{Apr:{q:16,quiz:12,aht:25,irt:20,ref:8,tags:5,abs:0,focus:'Quality, Quiz'}}},
    {name:'Abrar Alsadi',hrid:'5692',tabs:'CQNT0580',lang:'B2C Arabic',scores:{Jan:null,Feb:0.94,Mar:0.94,Apr:0.97},kpi:{Apr:{q:20,quiz:12,aht:25,irt:20,ref:10,tags:0,abs:0,focus:'Quiz, Tags'}}},
    {name:'Duaij M.',hrid:'5797',tabs:'CQNT0688',lang:'B2C Arabic & English',scores:{Jan:1.0,Feb:0.785,Mar:0.8,Apr:0.895},kpi:{Apr:{q:20,quiz:12,aht:25,irt:20,ref:5,tags:0,abs:0,focus:'Quiz, Referrals, Tags'}}},
    {name:'Bader B.',hrid:'5950',tabs:'CQNT5950',lang:'B2C Arabic & English',scores:{Jan:null,Feb:null,Mar:0.665,Apr:0.905},kpi:{Apr:{q:20,quiz:15,aht:25,irt:20,ref:5,tags:3,abs:0,focus:'Referrals'}}},
    {name:'Moussa Ahmed',hrid:'5593',tabs:'CQNT0494',lang:'B2C Arabic',scores:{Jan:1.0,Feb:0.86,Mar:0.88,Apr:0.93},kpi:{Apr:{q:18,quiz:15,aht:25,irt:20,ref:5,tags:5,abs:0,focus:'Quality, Referrals'}}},
    {name:'Mohamad K.',hrid:'5938',tabs:'CQNT-',lang:'B2C Arabic & English',scores:{Jan:null,Feb:null,Mar:0.94,Apr:0.98},kpi:{Apr:{q:20,quiz:15,aht:25,irt:20,ref:8,tags:5,abs:0,focus:'Reduce AHT'}}},
  ]},
};

const MONTHS=['Jan','Feb','Mar','Apr'];
const UPLOADS=[
  {name:'Jan_KPI_2026.xlsx',month:'January 2026',date:'Feb 3, 2026',status:'ok'},
  {name:'Feb_KPI_2026.xlsx',month:'February 2026',date:'Mar 2, 2026',status:'ok'},
  {name:'March-_New_2026.xlsx',month:'March 2026',date:'Apr 1, 2026',status:'ok'},
  {name:'April-_New_2026.xlsx',month:'April 2026',date:'May 4, 2026',status:'ok'},
];

let currentAgentModal=null;
let modalTrendChart=null;
let modalRadarChart=null;

const KPI_LOOKUP={
  quality:[{val:0.88,pts:0},{val:0.89,pts:10},{val:0.91,pts:12},{val:0.93,pts:14},{val:0.94,pts:16},{val:0.97,pts:18},{val:0.98,pts:20},{val:1.0,pts:20}],
  quiz:[{val:88,pts:0},{val:89,pts:0},{val:90,pts:5},{val:92,pts:10},{val:95,pts:12},{val:97,pts:15},{val:100,pts:15}],
  aht:[{val:22,pts:0},{val:20,pts:18},{val:18.5,pts:20},{val:16,pts:22},{val:15.5,pts:25},{val:12,pts:25}],
  irt:[{val:180,pts:0},{val:150,pts:8},{val:165,pts:10},{val:150,pts:15},{val:135,pts:18},{val:120,pts:20}],
  tags:[{val:10,pts:0},{val:9,pts:1},{val:7,pts:2},{val:5,pts:3},{val:2,pts:5},{val:0,pts:5}],
  referral:[{val:100,pts:10},{val:70,pts:8},{val:50,pts:5},{val:21,pts:3},{val:20,pts:0}],
  notready:[{val:90,pts:0},{val:60,pts:2},{val:75,pts:3},{val:60,pts:4},{val:60,pts:5}],
};

// Store actual agent performance data by month
let AGENT_PERFORMANCE={};
let CURRENT_MONTH='Apr';
function capScore(s){
  if(s===null||s===undefined) return null;
  return Math.min(s,1.0);
}



function handleKPIUpload(input){
  const file=input.files[0];
  if(!file){
    console.log("No file selected");
    return;
  }
  console.log("Processing file:", file.name);
  let month='Apr';
  const filename=file.name.toLowerCase();
  if(filename.includes('jan')) month='Jan';
  else if(filename.includes('feb')) month='Feb';
  else if(filename.includes('mar')) month='Mar';
  else if(filename.includes('apr')) month='Apr';
  CURRENT_MONTH=month;
  const reader=new FileReader();
  reader.onerror=function(e){
    console.error("File read error:", e);
    alert("Error reading file: "+e);
  };
  reader.onload=function(e){
    try{
      console.log("File loaded, size:", e.target.result.byteLength);
      const data=new Uint8Array(e.target.result);
      const wb=XLSX.read(data,{type:'array'});
      console.log("Workbook sheets:", wb.SheetNames);
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws);
      console.log("Parsed rows:", rows.length, "Sample:", JSON.stringify(rows.slice(0,2)));
      console.log("First row keys:", Object.keys(rows[0]));
      console.log("First row data:", rows[0]);
      if(rows.length===0){
        alert("No data found in Excel file");
        return;
      }
      let count=0;
      rows.forEach(r=>{
        const user=String(r['User']||'').trim();
        if(!user) return;
        const quality=parseFloat(r[' Quality'])||0;
        const quiz=parseFloat(r['Quiz'])||0;
        const referral=parseFloat(r['Referral TT'])||0;
        const tags=parseFloat(r['TAGS 1'])||0;
        const aht=r['ACHT1'];
        const irt=r['IRT1'];
        if(!AGENT_PERFORMANCE[user]) AGENT_PERFORMANCE[user]={};
        AGENT_PERFORMANCE[user][month]={quality,quiz,referral,tags,aht,irt};
        count++;
      });
      alert('✅ '+month+' data: '+count+' agents loaded');
      console.log('AGENT_PERFORMANCE after upload:', AGENT_PERFORMANCE);
    }catch(err){
      console.error("Error parsing Excel:", err);
      alert('Error: '+err.message);
    }
  };
  reader.readAsArrayBuffer(file);
}
function scoreColor(s){if(!s)return'#888';if(s>=0.95)return'#1a7f37';if(s>=0.85)return'#6B2D8B';if(s>=0.70)return'#856404';return'#c0392b';}
function scoreBadge(s){if(!s)return'';if(s>=0.95)return'sb-out';if(s>=0.85)return'sb-good';if(s>=0.70)return'sb-needs';return'sb-risk';}
function scoreLabel(s){if(!s)return'—';if(s>=0.95)return'Outstanding';if(s>=0.85)return'Good';if(s>=0.70)return'Needs Work';return'At Risk';}
function initials(name){return name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();}

function getPeriodMonths(){
  const el=document.getElementById('periodFilter');
  if(!el) return['Apr'];
  const v=el.value;
  if(v==='all') return['Jan','Feb','Mar','Apr'];
  if(v==='FebMarApr') return['Feb','Mar','Apr'];
  if(v==='MarApr') return['Mar','Apr'];
  if(v==='Jan') return['Jan'];
  if(v==='Feb') return['Feb'];
  if(v==='Mar') return['Mar'];
  return['Apr'];
}

function getAgentAvg(ag,months){
  const vals=months.map(m=>ag.scores[m]).filter(s=>s!==null);
  return vals.length?Math.min(vals.reduce((a,b)=>a+b,0)/vals.length,1.0):null;
}

function getAllAgents(){
  const months=getPeriodMonths();
  const all=[];
  Object.entries(TEAMS).forEach(([tk,td])=>{
    td.agents.forEach(ag=>{
      all.push({...ag,team:tk,tl:td.label,tlColor:td.color,score:getAgentAvg(ag,months)});
    });
  });
  return all;
}

function showPage(page,el){
  document.querySelectorAll('.nav-link').forEach(n=>n.classList.remove('active'));
  if(el) el.classList.add('active');
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.getElementById('page-'+page);
  if(pg) pg.classList.add('active');
  setTimeout(()=>{
    if(page==='overview') renderOverview();
    if(page==='agents') renderAgentCards();
    if(page==='teams') renderTeams();
    if(page==='upload') renderUploadHistory();
  },50);
}

function renderAll(){ renderCurrentPage(); }

function renderCurrentPage(){
  const active=document.querySelector('.page.active');
  if(!active) return;
  const id=active.id.replace('page-','');
  if(id==='overview') renderOverview();
  if(id==='agents') renderAgentCards();
  if(id==='teams') renderTeams();
}

function renderAll(){renderOverview();}

function renderDeptScorecard(){
  const months=getPeriodMonths();
  const all=getAllAgents();
  const valid=all.map(a=>a.score).filter(s=>s!==null);
  if(!valid.length) return;
  const avg=valid.reduce((a,b)=>a+b,0)/valid.length;
  const above85=valid.filter(s=>s>=0.85).length;
  let bestTeam='',bestTeamScore=0;
  Object.entries(TEAMS).forEach(([tk,td])=>{
    const sc=all.filter(a=>a.team===tk).map(a=>a.score).filter(s=>s!==null);
    const tavg=sc.length?sc.reduce((a,b)=>a+b,0)/sc.length:0;
    if(tavg>bestTeamScore){bestTeamScore=tavg;bestTeam=td.label.split(' ')[0];}
  });
  const el=document.getElementById('deptScorecard');
  if(!el) return;
  el.innerHTML=`
    <div class="dept-card"><div class="dept-card-label">Department avg</div><div class="dept-card-value" style="color:${scoreColor(avg)}">${Math.round(avg*100)}%</div><div class="dept-card-change ${avg>=0.85?'up':'down'}">${avg>=0.85?'Above':'Below'} 85% target</div></div>
    <div class="dept-card"><div class="dept-card-label">Agents above target</div><div class="dept-card-value">${above85} / ${valid.length}</div><div class="dept-card-change ${above85/valid.length>=0.7?'up':'down'}">${Math.round(above85/valid.length*100)}% of department</div></div>
    <div class="dept-card"><div class="dept-card-label">Best team</div><div class="dept-card-value" style="font-size:20px">${bestTeam}</div><div class="dept-card-change up">${Math.round(bestTeamScore*100)}% avg</div></div>
    <div class="dept-card"><div class="dept-card-label">Period</div><div class="dept-card-value" style="font-size:20px">${months.length}M</div><div class="dept-card-change neutral">${months.join(' – ')} 2026</div></div>`;
}

function renderSpotlight(){
  const months=getPeriodMonths();
  const all=getAllAgents().filter(a=>a.score!==null).sort((a,b)=>b.score-a.score);
  if(!all.length) return;
  const best=all[0];
  const worst=all[all.length-1];
  function spark(ag,color){
    const data=months.map(m=>ag.scores[m]?Math.round(Math.min(ag.scores[m],1)*100):null);
    const valid=data.filter(v=>v!==null);
    if(valid.length<2) return '';
    const w=90,h=32,pad=3;
    const mn=Math.min(...valid),mx=Math.max(...valid);
    const pts=data.map((v,i)=>{
      if(v===null) return null;
      const x=pad+i*(w-2*pad)/(data.length-1);
      const y=h-pad-(v-mn)/(mx-mn||1)*(h-2*pad);
      return x+','+y;
    }).filter(Boolean).join(' ');
    return `<svg width="${w}" height="${h}"><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
  }
  const el=document.getElementById('spotlight');
  if(!el) return;
  el.innerHTML=`
    <div class="spotlight-card best">
      <span class="spotlight-badge">🏆 Best performer — ${months.join('–')}</span>
      <div class="spotlight-body">
        <div class="spotlight-avatar" style="background:${best.tlColor}">${initials(best.name)}</div>
        <div class="spotlight-info">
          <div class="spotlight-name" onclick="openAgentModal('${best.hrid}')">${best.name}</div>
          <div class="spotlight-meta">${best.tl.split(' ')[0]} · ${best.lang.replace('B2C ','')}</div>
          <div class="spotlight-kpis">${months.map(m=>best.scores[m]?`<span class="spotlight-kpi-pill">${m}: ${Math.round(Math.min(best.scores[m],1)*100)}%</span>`:'').join('')}</div>
        </div>
        <div class="spotlight-right">
          <div class="spotlight-score" style="color:#1a7f37">${Math.round(best.score*100)}%</div>
          ${spark(best,'#1a7f37')}
        </div>
      </div>
    </div>
    <div class="spotlight-card worst">
      <span class="spotlight-badge">⚠️ Needs attention — ${months.join('–')}</span>
      <div class="spotlight-body">
        <div class="spotlight-avatar" style="background:${worst.tlColor}">${initials(worst.name)}</div>
        <div class="spotlight-info">
          <div class="spotlight-name" onclick="openAgentModal('${worst.hrid}')">${worst.name}</div>
          <div class="spotlight-meta">${worst.tl.split(' ')[0]} · ${worst.lang.replace('B2C ','')}</div>
          <div class="spotlight-kpis">${months.map(m=>worst.scores[m]?`<span class="spotlight-kpi-pill bad">${m}: ${Math.round(Math.min(worst.scores[m],1)*100)}%</span>`:'').join('')}</div>
          <div class="spotlight-focus">${worst.kpi.Apr.focus}</div>
        </div>
        <div class="spotlight-right">
          <div class="spotlight-score" style="color:#c0392b">${Math.round(worst.score*100)}%</div>
          ${spark(worst,'#c0392b')}
        </div>
      </div>
    </div>`;
}

function renderOverview(){
  const months=getPeriodMonths();
  const label=months.length===1?months[0]+' 2026':months[0]+' – '+months[months.length-1]+' 2026';
  const op=document.getElementById('overviewPeriod');
  if(op) op.textContent=label;
  const pb=document.getElementById('periodBadge');
  if(pb) pb.textContent=label;

  renderDeptScorecard();
  renderSpotlight();

  const all=getAllAgents();
  const valid=all.map(a=>a.score).filter(s=>s!==null);
  if(!valid.length) return;
  const avg=valid.reduce((a,b)=>a+b,0)/valid.length;
  const above85=valid.filter(s=>s>=0.85).length;

  const ms=document.getElementById('metricStrip');
  if(ms) ms.innerHTML=[
    {label:'Dept avg',val:Math.round(avg*100)+'%',change:avg>=0.85?'Above target':'Below target',cls:avg>=0.85?'up':'down'},
    {label:'Highest score',val:Math.round(Math.max(...valid)*100)+'%',change:'Outstanding',cls:'up'},
    {label:'Lowest score',val:Math.round(Math.min(...valid)*100)+'%',change:Math.min(...valid)<0.7?'At risk':'Monitor',cls:Math.min(...valid)<0.7?'down':'neutral'},
    {label:'Above target',val:above85+'/'+valid.length,change:Math.round(above85/valid.length*100)+'% of team',cls:above85/valid.length>=0.7?'up':'down'},
    {label:'Period',val:months.length+'M',change:label,cls:'neutral'},
  ].map(m=>`<div class="metric-card"><div class="metric-label">${m.label}</div><div class="metric-value">${m.val}</div><div class="metric-change ${m.cls}">${m.change}</div></div>`).join('');

  const ts=document.getElementById('teamStrip');
  if(ts) ts.innerHTML=Object.entries(TEAMS).map(([tk,td])=>{
    const scores=all.filter(a=>a.team===tk).map(a=>a.score).filter(s=>s!==null);
    const tavg=scores.length?Math.min(scores.reduce((a,b)=>a+b,0)/scores.length,1.0):0;
    return `<div class="team-card" onclick="showPage('teams',null)">
      <div class="team-card-header"><div class="team-dot" style="background:${td.color}"></div><div><div class="team-card-name">${td.label}</div><div class="team-card-count">${td.agents.length} agents</div></div></div>
      <div class="team-card-score" style="color:${scoreColor(tavg)}">${Math.round(tavg*100)}%</div>
      <div class="team-card-label">${scoreLabel(tavg)}</div>
      <div class="team-progress"><div class="team-progress-fill" style="width:${Math.round(tavg*100)}%;background:${scoreColor(tavg)}"></div></div>
    </div>`;
  }).join('');

  renderCharts(months);
  renderAgentTable();
}

function renderAgentTable(){
  const all=getAllAgents().filter(a=>a.score!==null).sort((a,b)=>b.score-a.score);
  const tb=document.getElementById('agentTableBody');
  if(!tb) return;
  tb.innerHTML=all.map((ag,i)=>{
    const kp=ag.kpi.Apr;
    const rank=i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1);
    const rankCls=i===0?'gold':i===1?'silver':i===2?'bronze':'';
    return `<tr>
      <td><span class="rank-num ${rankCls}">${rank}</span></td>
      <td><span class="agent-name-link" onclick="openAgentModal('${ag.hrid}')">${ag.name}</span></td>
      <td style="color:#888;font-size:12px">${ag.tl.split(' ')[0]}</td>
      <td><span class="sbadge ${scoreBadge(ag.score)}">${Math.round(ag.score*100)}%</span></td>
      <td style="color:${kp.q<20?'#856404':'#1a7f37'}">${kp.q}%</td>
      <td style="color:${kp.quiz<15?'#856404':'#1a7f37'}">${kp.quiz}%</td>
      <td style="color:${kp.aht===0?'#c0392b':kp.aht<25?'#856404':'#1a7f37'}">${kp.aht}%</td>
      <td style="color:${kp.irt<20?'#856404':'#1a7f37'}">${kp.irt}%</td>
      <td style="color:${kp.ref<10?'#856404':'#1a7f37'}">${kp.ref}%</td>
      <td style="color:${kp.tags<5?'#856404':'#1a7f37'}">${kp.tags}%</td>
      <td style="font-size:12px;color:${scoreColor(ag.score)};font-weight:600">${scoreLabel(ag.score)}</td>
      <td style="font-size:11px;color:#888;font-style:italic;max-width:140px;overflow:hidden;text-overflow:ellipsis">${kp.focus||'—'}</td>
    </tr>`;
  }).join('');
}

function filterAgentTable(){
  const q=document.getElementById('agentSearch').value.toLowerCase();
  document.querySelectorAll('#agentTableBody tr').forEach(tr=>{
    tr.style.display=tr.textContent.toLowerCase().includes(q)?'':'none';
  });
}

function renderAgentCards(){
  const months=getPeriodMonths();
  const all=getAllAgents().sort((a,b)=>(b.score||0)-(a.score||0));
  const el=document.getElementById('agentCardsGrid');
  if(!el) return;
  el.innerHTML=all.map(ag=>{
    const sc=ag.score;
    const lastM=months[months.length-1];
    const prevM=months[months.length-2]||null;
    const last=ag.scores[lastM]?Math.min(ag.scores[lastM],1):null;
    const prev=prevM&&ag.scores[prevM]?Math.min(ag.scores[prevM],1):null;
    const chg=last&&prev?Math.round((last-prev)*100):null;
    return `<div class="agent-card" onclick="openAgentModal('${ag.hrid}')">
      <div class="agent-card-top">
        <div class="agent-initials" style="background:${ag.tlColor}">${initials(ag.name)}</div>
        <div><div class="agent-card-name">${ag.name}</div><div class="agent-card-team">${ag.tl.split(' ')[0]} · ${ag.lang.replace('B2C ','')}</div></div>
      </div>
      <div class="agent-card-score" style="color:${scoreColor(sc)}">${sc?Math.round(sc*100)+'%':'N/A'}</div>
      <div class="agent-card-trend" style="color:${scoreColor(sc)}">${scoreLabel(sc)}</div>
      <div style="font-size:11px;margin-top:4px;color:${chg===null?'#888':chg>=0?'#1a7f37':'#c0392b'}">${chg===null?'—':chg>=0?'▲ '+chg+'%':'▼ '+Math.abs(chg)+'%'} vs prev</div>
      <div class="agent-card-bar"><div class="agent-card-bar-fill" style="width:${sc?Math.round(sc*100):0}%;background:${scoreColor(sc)}"></div></div>
    </div>`;
  }).join('');
}

function renderTeams(){
  const months=getPeriodMonths();
  const el=document.getElementById('teamsContent');
  if(!el) return;
  el.innerHTML=Object.entries(TEAMS).map(([tk,td])=>{
    const agents=td.agents.map(ag=>({...ag,score:getAgentAvg(ag,months),tl:td.label,tlColor:td.color})).sort((a,b)=>(b.score||0)-(a.score||0));
    const scores=agents.map(a=>a.score).filter(s=>s!==null);
    const tavg=scores.length?Math.min(scores.reduce((a,b)=>a+b,0)/scores.length,1.0):0;
    return `<div class="team-detail-card">
      <div class="team-detail-header">
        <div class="team-detail-avatar" style="background:${td.color}">${td.label.charAt(0)}</div>
        <div><div style="font-size:16px;font-weight:700;color:#1a1a2e">${td.label}</div><div style="font-size:12px;color:#888">${td.agents.length} agents · ${months.join('–')} avg</div></div>
        <div style="margin-left:auto;font-size:32px;font-weight:800;color:${scoreColor(tavg)}">${Math.round(tavg*100)}%</div>
      </div>
      <table class="ga-table">
        <thead><tr><th>#</th><th>Agent</th><th>Avg</th>${months.map(m=>`<th>${m}</th>`).join('')}<th>Quality</th><th>Quiz</th><th>AHT</th><th>IRT</th><th>Referral</th><th>Tags</th><th>Focus</th></tr></thead>
        <tbody>${agents.map((ag,i)=>{
          const kp=ag.kpi.Apr;
          return `<tr>
            <td class="rank-num">${i+1}</td>
            <td><span class="agent-name-link" onclick="openAgentModal('${ag.hrid}')">${ag.name}</span></td>
            <td><span class="sbadge ${scoreBadge(ag.score)}">${ag.score?Math.round(ag.score*100)+'%':'—'}</span></td>
            ${months.map(m=>{const s=ag.scores[m]?Math.min(ag.scores[m],1):null;return`<td style="color:${scoreColor(s)};font-weight:600">${s?Math.round(s*100)+'%':'—'}</td>`;}).join('')}
            <td>${kp.q}%</td><td>${kp.quiz}%</td>
            <td style="color:${kp.aht===0?'#c0392b':'inherit'};font-weight:${kp.aht===0?700:400}">${kp.aht}%</td>
            <td>${kp.irt}%</td><td>${kp.ref}%</td><td>${kp.tags}%</td>
            <td style="font-size:11px;color:#888;font-style:italic">${kp.focus||'—'}</td>
          </tr>`;
        }).join('')}</tbody>
      </table>
    </div>`;
  }).join('');
}

function openAgentModal(hrid){
  let found=null;
  Object.entries(TEAMS).forEach(([tk,td])=>{
    const ag=td.agents.find(a=>a.hrid===hrid);
    if(ag) found={...ag,tl:td.label,tlColor:td.color};
  });
  if(!found) return;
  currentAgentModal=found;

  const months=getPeriodMonths();
  const avgScore=getAgentAvg(found,months);

  document.getElementById('modalAvatar').textContent=initials(found.name);
  document.getElementById('modalAvatar').style.background=found.tlColor;
  document.getElementById('modalName').textContent=found.name;
  document.getElementById('modalMeta').textContent=found.tl+' · '+found.lang+' · HR '+found.hrid+' · '+found.tabs;

  const apr=found.kpi.Apr;
  const displayScore=avgScore;
  
  // Get actual performance data for this agent and month
  const monthData=AGENT_PERFORMANCE[found.hrid]||{};
  const currentMonthData=monthData[CURRENT_MONTH]||{quality:0.98,quiz:100,referral:61,tags:0,aht:'00:13:31',irt:'00:00:45'};
  
  // Format values
  const qualityPct=Math.round(currentMonthData.quality*100);
  const quizVal=Math.round(currentMonthData.quiz);
  const referralVal=Math.round(currentMonthData.referral);
  const tagsVal=Math.round(currentMonthData.tags);
  
  // Get string representations of time values
  const ahtStr=(typeof currentMonthData.aht==='string'?currentMonthData.aht.substring(0,8):'00:13:31');
  const irtStr=(typeof currentMonthData.irt==='string'?currentMonthData.irt.substring(0,8):'00:00:45');

  document.getElementById('modalKPIs').innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(90px,1fr));gap:10px;width:100%">
      <div style="background:var(--color-background-secondary);border-radius:6px;padding:10px;text-align:center">
        <div style="font-size:17px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">${qualityPct}%</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">Quality</div>
        <div style="font-size:12px;font-weight:500;color:#6B2D8B;padding:3px 6px;background:rgba(107,45,139,0.1);border-radius:4px">${apr.q}%</div>
      </div>
      <div style="background:var(--color-background-secondary);border-radius:6px;padding:10px;text-align:center">
        <div style="font-size:17px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">${quizVal}</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">Quiz</div>
        <div style="font-size:12px;font-weight:500;color:#6B2D8B;padding:3px 6px;background:rgba(107,45,139,0.1);border-radius:4px">${apr.quiz}%</div>
      </div>
      <div style="background:var(--color-background-secondary);border-radius:6px;padding:10px;text-align:center">
        <div style="font-size:17px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">${ahtStr}</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">AHT</div>
        <div style="font-size:12px;font-weight:500;color:${apr.aht===0?'#c0392b':'#6B2D8B'};padding:3px 6px;background:rgba(${apr.aht===0?'192,57,43':'107,45,139'},0.1);border-radius:4px">${apr.aht}%</div>
      </div>
      <div style="background:var(--color-background-secondary);border-radius:6px;padding:10px;text-align:center">
        <div style="font-size:17px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">${irtStr}</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">IRT</div>
        <div style="font-size:12px;font-weight:500;color:#6B2D8B;padding:3px 6px;background:rgba(107,45,139,0.1);border-radius:4px">${apr.irt}%</div>
      </div>
      <div style="background:var(--color-background-secondary);border-radius:6px;padding:10px;text-align:center">
        <div style="font-size:17px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">${referralVal}</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">Referrals</div>
        <div style="font-size:12px;font-weight:500;color:${apr.ref>=10?'#6B2D8B':'#c0392b'};padding:3px 6px;background:rgba(${apr.ref>=10?'107,45,139':'192,57,43'},0.1);border-radius:4px">${apr.ref}%</div>
      </div>
      <div style="background:var(--color-background-secondary);border-radius:6px;padding:10px;text-align:center">
        <div style="font-size:17px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">${tagsVal}</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">Tags</div>
        <div style="font-size:12px;font-weight:500;color:#6B2D8B;padding:3px 6px;background:rgba(107,45,139,0.1);border-radius:4px">${apr.tags}%</div>
      </div>
      <div style="background:var(--color-background-secondary);border-radius:6px;padding:10px;text-align:center">
        <div style="font-size:17px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">${apr.abs||0}</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">Absenteeism</div>
        <div style="font-size:12px;font-weight:500;color:${apr.abs===0?'#6B2D8B':'#c0392b'};padding:3px 6px;background:rgba(${apr.abs===0?'107,45,139':'192,57,43'},0.1);border-radius:4px">5%</div>
      </div>
      <div style="background:var(--color-background-secondary);border-radius:6px;padding:10px;text-align:center">
        <div style="font-size:17px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">0</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">Punctuality</div>
        <div style="font-size:12px;font-weight:500;color:#6B2D8B;padding:3px 6px;background:rgba(107,45,139,0.1);border-radius:4px">5%</div>
      </div>
      <div style="background:var(--color-background-secondary);border-radius:6px;padding:10px;text-align:center">
        <div style="font-size:17px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">7:00</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">Login Hrs</div>
        <div style="font-size:12px;font-weight:500;color:#6B2D8B;padding:3px 6px;background:rgba(107,45,139,0.1);border-radius:4px">0%</div>
      </div>
      <div style="background:var(--color-background-secondary);border-radius:6px;padding:10px;text-align:center">
        <div style="font-size:17px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">1:00</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">Not Ready</div>
        <div style="font-size:12px;font-weight:500;color:#6B2D8B;padding:3px 6px;background:rgba(107,45,139,0.1);border-radius:4px">5%</div>
      </div>
    </div>
    <div style="margin-top:16px;padding:12px 14px;background:var(--color-background-secondary);border-radius:8px;border:2px solid #6B2D8B;text-align:center">
      <div style="font-size:12px;color:var(--color-text-secondary);margin-bottom:4px">Total KPI Score (${CURRENT_MONTH} 2026)</div>
      <div style="font-size:28px;font-weight:700;color:#6B2D8B">${displayScore?Math.round(displayScore*100)+'%':'N/A'}</div>
    </div>
  `;

  const existing=document.querySelector('.modal-month-scores');
  if(existing) existing.remove();
  const mmsDiv=document.createElement('div');
  mmsDiv.className='modal-month-scores';
  mmsDiv.innerHTML=MONTHS.map((m,i)=>{
    const s=capScore(found.scores[m]);
    const prev=i>0?capScore(found.scores[MONTHS[i-1]]):null;
    const chg=s&&prev?Math.round((s-prev)*100):null;
    const isSelected=months.includes(m);
    const improved=chg!==null?(chg>0?'▲ +'+chg+'%':chg<0?'▼ '+chg+'%':'→ Same'):'First month';
    return `<div class="mms-card" style="opacity:${isSelected?1:0.45};border:${isSelected?'2px solid #6B2D8B':'1px solid #eee'}">
      <div class="mms-month" style="font-weight:${isSelected?700:400}">${m} 2026${isSelected?' ✓':''}</div>
      <div class="mms-val" style="color:${scoreColor(s)}">${s?Math.round(s*100)+'%':'N/A'}</div>
      <div class="mms-change" style="color:${chg===null?'#888':chg>0?'#1a7f37':chg<0?'#c0392b':'#888'};font-size:10px">${improved}</div>
    </div>`;
  }).join('');
  document.querySelector('.modal-focus').before(mmsDiv);

  document.getElementById('modalFocus').innerHTML=`
    <div style="margin-bottom:8px;font-size:12px;color:#555">
      <strong>Focus areas (April 2026):</strong>
    </div>
    <div class="focus-tags">${(apr.focus||'No issues').split(',').map(f=>{
      const clean=f.trim();
      return`<span class="focus-tag ${clean==='No issues'?'ok':''}">${clean}</span>`;
    }).join('')}</div>
    <div style="margin-top:12px;padding:10px 14px;background:#f8f9fa;border-radius:8px;font-size:12px">
      <strong>Period:</strong> ${months.join(' – ')} 2026 &nbsp;|&nbsp;
      <strong>Avg score:</strong> <span style="color:${scoreColor(displayScore)};font-weight:700">${displayScore?Math.round(displayScore*100)+'%':'N/A'}</span> &nbsp;|&nbsp;
      <strong>Status:</strong> <span style="color:${scoreColor(displayScore)};font-weight:700">${scoreLabel(displayScore)}</span>
    </div>
    <div style="margin-top:8px;padding:10px 14px;background:${displayScore>=0.95?'#f0faf4':displayScore>=0.85?'#f5f0fa':displayScore>=0.7?'#fffbf0':'#fff8f5'};border-radius:8px;font-size:12px;color:#555">
      <strong>Coaching priority:</strong>
      <span style="font-weight:700;color:${scoreColor(displayScore)};margin-left:6px">
        ${displayScore>=0.95?'Maintain excellence — share best practices with team':displayScore>=0.85?'Good performance — focus on minor improvements':displayScore>=0.7?'High priority coaching required — schedule weekly 1:1':'URGENT intervention needed — escalate to management'}
      </span>
    </div>`;

  document.getElementById('agentModal').classList.add('open');
  setTimeout(()=>renderModalCharts(found,months),100);
}

function renderModalCharts(ag,months){
  if(modalTrendChart) modalTrendChart.destroy();
  if(modalRadarChart) modalRadarChart.destroy();

  const scores=MONTHS.map(m=>ag.scores[m]!==null&&ag.scores[m]!==undefined?Math.min(Math.round(ag.scores[m]*100),100):null);
  const pointColors=MONTHS.map(m=>months.includes(m)?ag.tlColor:'#cccccc');
  const pointRadius=MONTHS.map(m=>months.includes(m)?7:4);

  modalTrendChart=new Chart(document.getElementById('modalTrendChart'),{
    type:'line',
    data:{labels:MONTHS,datasets:[
      {label:'Score',data:scores,borderColor:ag.tlColor,backgroundColor:ag.tlColor+'20',tension:0.3,
        pointRadius:pointRadius,pointBackgroundColor:pointColors,fill:true,borderWidth:2,spanGaps:false},
      {label:'Target 85%',data:[85,85,85,85],borderColor:'#c0392b',borderDash:[4,3],pointRadius:0,fill:false,borderWidth:1.5}
    ]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>ctx.dataset.label+': '+(ctx.raw||'N/A')+(ctx.raw?'%':'')}}},
      scales:{y:{min:0,max:105,ticks:{callback:v=>v+'%',font:{size:10},color:'#888'},grid:{color:'rgba(0,0,0,.05)'}},
        x:{ticks:{font:{size:11},color:'#888'},grid:{display:false}}}}
  });

  const apr=ag.kpi.Apr;
  modalRadarChart=new Chart(document.getElementById('modalRadarChart'),{
    type:'radar',
    data:{labels:['Quality','Quiz','AHT','IRT','Referral','Tags'],datasets:[{
      label:'Apr score',data:[apr.q,apr.quiz,apr.aht,apr.irt,apr.ref,apr.tags],
      backgroundColor:ag.tlColor+'30',borderColor:ag.tlColor,borderWidth:2,
      pointBackgroundColor:ag.tlColor,pointRadius:4
    }]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{r:{min:0,max:25,ticks:{display:false},grid:{color:'rgba(0,0,0,.08)'},pointLabels:{font:{size:11},color:'#555'}}}}
  });
}

function closeAgentModal(){
  document.getElementById('agentModal').classList.remove('open');
  if(modalTrendChart){modalTrendChart.destroy();modalTrendChart=null;}
  if(modalRadarChart){modalRadarChart.destroy();modalRadarChart=null;}
  const mms=document.querySelector('.modal-month-scores');
  if(mms) mms.remove();
}

function closeModal(e){
  if(e.target===document.getElementById('agentModal')) closeAgentModal();
}

function askAgentAI(){
  if(!currentAgentModal) return;
  const name=currentAgentModal.name;
  closeAgentModal();
  showPage('ai',document.querySelectorAll('.nav-link')[4]);
  setTimeout(()=>{
    document.getElementById('chatInput').value='Give me a detailed analysis and personalised coaching plan for agent '+name+' including their Jan-Apr 2026 trend, weak KPIs, and specific action steps.';
    sendChat();
  },300);
}

function renderUploadHistory(){
  const el=document.getElementById('uploadHistoryList');
  if(!el) return;
  el.innerHTML=UPLOADS.map(u=>`
    <div class="upload-history-item">
      <div class="uhi-icon">${u.status==='ok'?'✅':'⏳'}</div>
      <div><div class="uhi-name">${u.name}</div><div class="uhi-date">${u.month} · ${u.date}</div></div>
      <span class="uhi-tag uhi-${u.status==='ok'?'ok':'pending'}">${u.status==='ok'?'Processed':'Pending'}</span>
    </div>`).join('');
}

function handleKPIUpload(input){
  const file=input.files[0];
  if(!file){
    console.log("No file selected");
    return;
  }
  console.log("Processing file:", file.name);
  let month='Apr';
  const filename=file.name.toLowerCase();
  if(filename.includes('jan')) month='Jan';
  else if(filename.includes('feb')) month='Feb';
  else if(filename.includes('mar')) month='Mar';
  else if(filename.includes('apr')) month='Apr';
  CURRENT_MONTH=month;
  const reader=new FileReader();
  reader.onerror=function(e){
    console.error("File read error:", e);
    alert("Error reading file: "+e);
  };
  reader.onload=function(e){
    try{
      console.log("File loaded, size:", e.target.result.byteLength);
      const data=new Uint8Array(e.target.result);
      const wb=XLSX.read(data,{type:'array'});
      console.log("Workbook sheets:", wb.SheetNames);
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws);
      console.log("Parsed rows:", rows.length, "Sample:", JSON.stringify(rows.slice(0,2)));
      if(rows.length===0){
        alert("No data found in Excel file");
        return;
      }
      let count=0;
      rows.forEach(r=>{
        const user=String(r['User']||'').trim();
        if(!user) return;
        const quality=parseFloat(r[' Quality'])||0;
        const quiz=parseFloat(r['Quiz'])||0;
        const referral=parseFloat(r['Referral TT'])||0;
        const tags=parseFloat(r['TAGS 1'])||0;
        const aht=r['ACHT1'];
        const irt=r['IRT1'];
        if(!AGENT_PERFORMANCE[user]) AGENT_PERFORMANCE[user]={};
        AGENT_PERFORMANCE[user][month]={quality,quiz,referral,tags,aht,irt};
        count++;
      });
      alert('✅ '+month+' data: '+count+' agents loaded');
      console.log('AGENT_PERFORMANCE after upload:', AGENT_PERFORMANCE);
    }catch(err){
      console.error("Error parsing Excel:", err);
      alert('Error: '+err.message);
    }
  };
  reader.readAsArrayBuffer(file);
}

function handleAttendance(input){
  const file=input.files[0];
  if(!file) return;
  const el=document.getElementById('attendanceContent');
  if(!el) return;
  el.innerHTML=`
    <div class="chart-panel">
      <div class="chart-panel-header"><div><div class="chart-panel-title">Attendance — ${file.name}</div><div class="chart-panel-sub">Connect database to process full attendance data</div></div></div>
      <table class="att-table">
        <thead><tr><th>Agent</th><th>Date</th><th>Login</th><th>Logout</th><th>Hours</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Ali Aaqab</td><td>May 11, 2026</td><td>08:02 AM</td><td>04:58 PM</td><td>8h 56m</td><td class="att-status-ok">On time</td></tr>
          <tr><td>Hashim Ramazan</td><td>May 11, 2026</td><td>08:34 AM</td><td>04:45 PM</td><td>8h 11m</td><td class="att-status-late">Late</td></tr>
          <tr><td>Abdullah Alkhudari</td><td>May 11, 2026</td><td>07:58 AM</td><td>05:02 PM</td><td>9h 04m</td><td class="att-status-ok">On time</td></tr>
        </tbody>
      </table>
    </div>`;
}

const KPI_CONTEXT=`You are an AI KPI analyst for STC eChannels CCR team in Kuwait.
Real performance data Jan-Apr 2026. All scores capped at 100%.
Team Ahmed Al Sabea: Abdullah Alkhudari 100%, Abdullah Essam 96%, Nooreldein Ghazi 93%, Omar Hamad 92%, AbdulHadi Ajay 86%, Sultan Nahar 85.5%, Ali Khouder 85%
Team Aziz Al Sabea: Essa Ballan 91%, Faisal Jaber 87%, Mohammad Mejbel 83%, Samy AlRuwaily 83%, Anas O. 80%, Beshayer M. 77%, Hashim Ramazan 62% CRITICAL
Team Abul Hassan: Ali Aaqab 100%, Mohamad K. 98%, AbdulRahman Mohamed 98%, Abrar Alsadi 97%, Moussa Ahmed 93%, Ahmed Ahmad 91%, Bader B. 90.5%, Duaij M. 89.5%
Target: 85%. KPI weights: AHT 25%, Quality 20%, IRT 20%, Quiz 15%, Referral 10%, Tags 5%.
Critical: Hashim Ramazan AHT=0% for 3 months, declining every month.
Give specific professional answers with exact names and percentages.`;

async function sendChat(){
  const inp=document.getElementById('chatInput');
  const msg=inp.value.trim();
  if(!msg) return;
  inp.value='';
  addMsg(msg,'user');
  const loadEl=addMsg('Thinking...','loading');
  try{
    const resp=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,system:KPI_CONTEXT,messages:[{role:'user',content:msg}]})
    });
    if(!resp.ok){
      const err=await resp.json();
      loadEl.textContent='API Error: '+(err.error?.message||'Add your API key to .env file');
      loadEl.className='msg msg-ai';
      return;
    }
    const data=await resp.json();
    loadEl.textContent=data.content?.[0]?.text||'No response.';
    loadEl.className='msg msg-ai';
  }catch(e){
    loadEl.textContent='To enable AI: get API key from console.anthropic.com and add to .env file as CLAUDE_API_KEY=your-key';
    loadEl.className='msg msg-ai';
  }
}

function askAI(prompt){
  document.getElementById('chatInput').value=prompt;
  sendChat();
}

function addMsg(text,type){
  const box=document.getElementById('chatMessages');
  const div=document.createElement('div');
  div.className='msg msg-'+type;
  div.textContent=text;
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
  return div;
}

function logout(){clearAuth();window.location.href='/';}


let AGENT_ATTENDANCE={};
function handleAttendance(input){
  const file=input.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=function(e){
    try{
      const wb=XLSX.read(new Uint8Array(e.target.result),{type:'array'});
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws);
      let count=0;
      rows.forEach(r=>{
        const name=String(r['Agent Name']||'').trim();
        if(!name) return;
        if(!AGENT_ATTENDANCE[name]) AGENT_ATTENDANCE[name]=[];
        AGENT_ATTENDANCE[name].push({startTime:r['Start Date & Time'],endTime:r['End Date & Time'],status:r['Status'],duration:r['Duration']});
        count++;
      });
      alert('✅ Attendance: '+count+' records loaded');
      console.log('AGENT_ATTENDANCE:',AGENT_ATTENDANCE);
    }catch(err){
      alert('Error: '+err.message);
    }
  };
  reader.readAsArrayBuffer(file);
let AGENT_ATTENDANCE={};
function handleAttendance(input){
  const file=input.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=function(e){
    try{
      const wb=XLSX.read(new Uint8Array(e.target.result),{type:'array'});
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws);
      let count=0;
      rows.forEach(r=>{
        const name=String(r['Agent Name']||'').trim();
        if(!name) return;
        if(!AGENT_ATTENDANCE[name]) AGENT_ATTENDANCE[name]=[];
        AGENT_ATTENDANCE[name].push({start:r['Start Date & Time'],end:r['End Date & Time'],status:r['Status'],duration:r['Duration']});
        count++;
      });
      alert('✅ Attendance: '+count+' records loaded');
    }catch(err){alert('Error: '+err.message);}
  };
  reader.readAsArrayBuffer(file);
}
}
window.onload=function(){
  if(!isLoggedIn()){window.location.href='/';return;}
  const user=getUser();
  const av=document.getElementById('navAvatar');
  if(av) av.textContent=(user.full_name||'U').split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
  const nn=document.getElementById('navName');
  if(nn) nn.textContent=user.full_name||'User';
  const nr=document.getElementById('navRole');
  if(nr) nr.textContent=user.role||'';
  renderOverview();
  renderUploadHistory();
};

// Attach KPI upload listener
function attachKPIListener(){
  const kpiInput = document.getElementById('kpiFile');
  if(kpiInput){
    kpiInput.addEventListener('change', function(){
      console.log('KPI file input triggered:', this.files[0]);
      handleKPIUpload(this);
    });
    console.log('KPI listener attached');
  }
}
attachKPIListener();
document.addEventListener('DOMContentLoaded', attachKPIListener);

// Attendance tracking
let AGENT_ATTENDANCE = {};

function handleAttendance(input){
  const file = input.files[0];
  if(!file){
    console.log("No attendance file selected");
    return;
  }
  
  console.log("Processing attendance file:", file.name);
  const reader = new FileReader();
  
  reader.onerror = function(e){
    console.error("File read error:", e);
    alert("Error reading file: "+e);
  };
  
  reader.onload = function(e){
    try{
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, {type:'array'});
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws);
      
      console.log("Attendance rows parsed:", rows.length);
      
      if(rows.length === 0){
        alert("No data found in attendance file");
        return;
      }
      
      // Parse attendance data
      let count = 0;
      rows.forEach(r => {
        const agentName = String(r['Agent Name'] || '').trim();
        if(!agentName) return;
        
        const startTime = r['Start Date & Time'];
        const endTime = r['End Date & Time'];
        const status = String(r['Status'] || '').trim();
        const duration = r['Duration'];
        
        if(!AGENT_ATTENDANCE[agentName]) AGENT_ATTENDANCE[agentName] = [];
        
        AGENT_ATTENDANCE[agentName].push({
          startTime: startTime,
          endTime: endTime,
          status: status,
          duration: duration
        });
        count++;
      });
      
      alert('✅ Attendance data: '+count+' activity records loaded');
      console.log('AGENT_ATTENDANCE:', AGENT_ATTENDANCE);
    }catch(err){
      console.error("Error parsing attendance:", err);
      alert('Error: '+err.message);
    }
  };
  
  reader.readAsArrayBuffer(file);
}


// Attendance tracking
let AGENT_ATTENDANCE = {};

function handleAttendance(input){
  const file = input.files[0];
  if(!file){
    console.log("No attendance file selected");
    return;
  }
  
  console.log("Processing attendance file:", file.name);
  const reader = new FileReader();
  
  reader.onerror = function(e){
    console.error("File read error:", e);
    alert("Error reading file: "+e);
  };
  
  reader.onload = function(e){
    try{
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, {type:'array'});
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws);
      
      console.log("Attendance rows parsed:", rows.length);
      
      if(rows.length === 0){
        alert("No data found in attendance file");
        return;
      }
      
      // Parse attendance data
      let count = 0;
      rows.forEach(r => {
        const agentName = String(r['Agent Name'] || '').trim();
        if(!agentName) return;
        
        const startTime = r['Start Date & Time'];
        const endTime = r['End Date & Time'];
        const status = String(r['Status'] || '').trim();
        const duration = r['Duration'];
        
        if(!AGENT_ATTENDANCE[agentName]) AGENT_ATTENDANCE[agentName] = [];
        
        AGENT_ATTENDANCE[agentName].push({
          startTime: startTime,
          endTime: endTime,
          status: status,
          duration: duration
        });
        count++;
      });
      
      alert('✅ Attendance data: '+count+' activity records loaded');
      console.log('AGENT_ATTENDANCE:', AGENT_ATTENDANCE);
    }catch(err){
      console.error("Error parsing attendance:", err);
      alert('Error: '+err.message);
    }
  };
  
  reader.readAsArrayBuffer(file);
}

