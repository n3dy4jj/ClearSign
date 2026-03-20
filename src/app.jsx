import { useState, useRef, useEffect, createContext, useContext } from "react";

/* ═══════════════════════════════════════════════════════════════════
   CLEARSIGN v4  ·  Official Brand Colors Applied
   Navy #0F2540 · Gold #F5C518 · Safe #00A86B
   Warn #E8850A · Danger #E63946 · Canvas #F7F8FA
═══════════════════════════════════════════════════════════════════ */

const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html,body{height:100%;overflow:hidden;}
    #root{height:100%;}
    body{font-family:'Plus Jakarta Sans',sans-serif;background:#F7F8FA;color:#0F2540;-webkit-font-smoothing:antialiased;}
    ::-webkit-scrollbar{width:3px;height:3px;}
    ::-webkit-scrollbar-thumb{background:#BCC5D0;border-radius:99px;}
    input,textarea,select,button{font-family:'Plus Jakarta Sans',sans-serif;}

    :root {
      /* Primary Navy */
      --n950:#050E1C; --n900:#0F2540; --n800:#1B3A57; --n700:#264D70;
      --n600:#306088; --n400:#5A85B8; --n200:#A8C3DC; --n100:#D6E6F2; --n50:#EBF4FA;
      /* Gold Accent */
      --g700:#8A6200; --g600:#C8960A; --g500:#F5C518; --g400:#FADA48;
      --g300:#FDE882; --g100:#FEF8D8; --g50:#FFFDF0;
      /* Safe Green */
      --safe:#00A86B; --safe2:#28C76F; --safe3:#4ECDA4;
      --safe-bg:#E8FAF2; --safe-border:#4ECDA4;
      /* Warning Amber */
      --warn:#E8850A; --warn2:#F5A623; --warn3:#FFC55A;
      --warn-bg:#FFF8E8; --warn-border:#FFC55A;
      /* Danger Red */
      --danger:#E63946; --danger2:#FF4D4F; --danger3:#FF7A7C;
      --danger-bg:#FFF0F0; --danger-border:#FF7A7C;
      /* Info Blue */
      --info:#4DA8DA; --info2:#72BDE4; --info-bg:#EBF6FD; --info-border:#B0D8F0;
      /* Neutrals */
      --ink900:#1A2332; --ink700:#344256; --ink500:#4A5568;
      --ink400:#6B7A8D; --ink300:#8896A7; --ink200:#BCC5D0;
      --grey100:#DCE2EA; --grey50:#F1F3F5; --canvas:#F7F8FA; --surface:#FFFFFF;
      /* Shadows */
      --sh-sm:0 2px 10px rgba(15,37,64,.07);
      --sh-md:0 4px 20px rgba(15,37,64,.10);
      --sh-lg:0 8px 40px rgba(15,37,64,.14);
    }

    @keyframes fadeUp   {from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeIn   {from{opacity:0}to{opacity:1}}
    @keyframes scaleIn  {from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
    @keyframes spin     {to{transform:rotate(360deg)}}
    @keyframes pulse    {0%,100%{opacity:1}50%{opacity:.3}}
    @keyframes scan     {0%{top:4%}50%{top:86%}100%{top:4%}}
    @keyframes float    {0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    @keyframes ripple   {0%{transform:scale(1);opacity:.4}100%{transform:scale(2.5);opacity:0}}
    @keyframes countUp  {from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}
    @keyframes shimmer  {0%{background-position:-400px 0}100%{background-position:400px 0}}
    @keyframes onbFloat {0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(-12px) rotate(1.5deg)}}
    @keyframes slideRight{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}

    .fu{animation:fadeUp .5s cubic-bezier(.4,0,.2,1) both;}
    .fi{animation:fadeIn .35s ease both;}
    .si{animation:scaleIn .4s cubic-bezier(.4,0,.2,1) both;}
    .sr{animation:slideRight .4s cubic-bezier(.4,0,.2,1) both;}
    .d1{animation-delay:.06s}.d2{animation-delay:.12s}.d3{animation-delay:.18s}
    .d4{animation-delay:.24s}.d5{animation-delay:.30s}.d6{animation-delay:.36s}

    .card-hvr{transition:transform .2s,box-shadow .2s,border-color .2s;cursor:pointer;}
    .card-hvr:hover{transform:translateY(-3px);box-shadow:var(--sh-lg);border-color:var(--n200)!important;}

    .input-f{width:100%;background:var(--surface);border:1.5px solid var(--grey100);border-radius:13px;padding:13px 16px;color:var(--ink900);font-size:14.5px;outline:none;transition:border-color .2s,box-shadow .2s;}
    .input-f::placeholder{color:var(--ink300);}
    .input-f:focus{border-color:var(--n800);box-shadow:0 0 0 3px var(--n50);}

    .btn-navy{display:flex;align-items:center;justify-content:center;gap:8px;background:var(--n800);color:white;border:none;border-radius:13px;font-weight:700;font-size:15px;cursor:pointer;transition:all .2s;letter-spacing:.01em;}
    .btn-navy:hover{background:var(--n700);box-shadow:0 6px 20px rgba(27,58,87,.35);}
    .btn-navy:disabled{opacity:.35;cursor:not-allowed;box-shadow:none;}
    .btn-gold{display:flex;align-items:center;justify-content:center;gap:8px;background:var(--g500);color:var(--n900);border:none;border-radius:13px;font-weight:800;font-size:15px;cursor:pointer;transition:all .2s;letter-spacing:.01em;}
    .btn-gold:hover{background:var(--g400);box-shadow:0 6px 20px rgba(245,197,24,.4);}
    .btn-gold:disabled{opacity:.35;cursor:not-allowed;box-shadow:none;}
    .btn-outline{display:flex;align-items:center;justify-content:center;gap:8px;background:transparent;color:var(--n800);border:1.5px solid var(--n200);border-radius:13px;font-weight:600;font-size:14px;cursor:pointer;transition:all .2s;}
    .btn-outline:hover{border-color:var(--n800);background:var(--n50);}
    .btn-ghost{display:flex;align-items:center;justify-content:center;gap:8px;background:var(--n50);color:var(--n800);border:1px solid var(--n100);border-radius:13px;font-weight:600;cursor:pointer;transition:all .2s;}
    .btn-ghost:hover{background:var(--n100);}

    .tab-pill{display:flex;align-items:center;gap:6px;padding:8px 14px;border:1px solid var(--grey100);border-radius:99px;background:var(--surface);cursor:pointer;font-size:12.5px;font-weight:500;color:var(--ink400);transition:all .2s;white-space:nowrap;}
    .tab-pill.on{border-color:var(--n800);background:var(--n50);color:var(--n800);font-weight:700;}

    .section-header{display:flex;align-items:center;gap:8px;margin-bottom:16px;}
    .section-eyebrow{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--ink400);}
    .h-serif{font-family:'Playfair Display',serif;}

    .skeleton{background:linear-gradient(90deg,var(--grey50) 25%,var(--grey100) 50%,var(--grey50) 75%);background-size:400px 100%;animation:shimmer 1.4s infinite;}
  `}</style>
);

/* ─── SAMPLE DOCUMENTS ───────────────────────────────────────── */
const SAMPLES = {
  lease:      { label:"🏠 Residential Lease", desc:"High-risk Brooklyn lease — landlord-heavy terms", text:`RESIDENTIAL LEASE AGREEMENT — 45 Elm Street, Apt 3B, Brooklyn NY 11201\nBetween Meridian Properties LLC ("Landlord") and Tenant. 12-month term beginning February 1, 2025.\nRENT: $3,200/month. Late fee $150 after the 5th. Landlord may increase rent up to 8% annually with 30 days notice.\nSECURITY DEPOSIT: $6,400. Landlord retains at sole discretion.\nEARLY TERMINATION: Tenant liable for all remaining rent PLUS $6,400 early termination penalty.\nNOTICE TO VACATE: 60 days written notice required or lease auto-renews 12 months at market rate.\nINDEMNIFICATION: Tenant indemnifies Landlord from all claims, costs, and attorneys fees regardless of fault.\nENTRY: Landlord may enter at any time with or without notice.\nARBITRATION: All disputes resolved by binding arbitration. Tenant waives jury trial.` },
  employment: { label:"💼 Employment Contract", desc:"Aggressive non-compete, IP, clawback clauses", text:`EMPLOYMENT AGREEMENT — TechVentures Inc.\nPosition: Senior Software Engineer | $145,000/yr | March 1, 2025\nAT-WILL: Terminated by either party anytime without cause.\nNON-COMPETE: 24 months post-termination, no competing business in United States including any technology company.\nINTELLECTUAL PROPERTY: All work — during or outside working hours — is sole Company property.\nOVERTIME: Exempt. May work beyond 40 hours without additional pay.\nCONFIDENTIALITY: Perpetual, even after employment ends.\nCLASS ACTION WAIVER: All disputes via binding arbitration only.\nCLAWBACK: Company may reclaim bonuses if Employee resigns within 12 months.` },
  nda:        { label:"🤝 NDA Agreement", desc:"5-year broad restrictions with heavy penalties", text:`NON-DISCLOSURE AGREEMENT\nBetween: Nexus Ventures LLC and Recipient.\nCONFIDENTIAL INFORMATION: All information shared verbally or in writing, whether marked confidential or not.\nOBLIGATIONS: Strict confidence for FIVE (5) years.\nRESTRICTIONS: No disclosure, copying, reverse engineering, or commercial use without written consent.\nPENALTIES: Injunctive relief and monetary damages including lost profits and attorneys fees.\nJURISDICTION: Delaware law. Exclusive jurisdiction in Delaware courts.\nSURVIVAL: Trade secret obligations survive indefinitely.` },
};

const MOCK_DOCS = [
  { id:1, documentType:"Residential Lease Agreement", riskScore:8, overallVerdict:"AVOID",     summary:"Landlord-favored lease with aggressive penalties and auto-renewal.", date:"2025-03-10T09:30:00Z", category:"Lease",      tags:["Auto-renewal","Indemnification"] },
  { id:2, documentType:"Employment Contract",         riskScore:7, overallVerdict:"NEGOTIATE", summary:"Tech job with broad 24-month non-compete across all US tech companies.",  date:"2025-03-08T14:20:00Z", category:"Employment", tags:["Non-compete","IP ownership"] },
  { id:3, documentType:"NDA Agreement",               riskScore:6, overallVerdict:"NEGOTIATE", summary:"5-year NDA covering verbal and written info with Delaware jurisdiction.",  date:"2025-03-05T11:00:00Z", category:"NDA",        tags:["5-year term","Broad scope"] },
  { id:4, documentType:"Freelance Service Agreement", riskScore:3, overallVerdict:"SIGN",      summary:"Fair freelance contract with reasonable payment and IP terms.",            date:"2025-02-28T08:45:00Z", category:"Freelance",  tags:["Fair payment","IP transfer"] },
];

const MOCK_NOTIFS = [
  { id:1, type:"alert",   icon:"🚨", title:"High Risk Detected",       body:"Your Employment Contract contains a broad IP clause worth reviewing.", time:"2m ago",  read:false },
  { id:2, type:"reminder",icon:"📅", title:"Lease Renewal in 60 Days", body:"Your Residential Lease renews May 1st. Review your options now.",     time:"1h ago",  read:false },
  { id:3, type:"insight", icon:"💡", title:"New AI Insight",            body:"The arbitration clause in your NDA may not be enforceable locally.",  time:"3h ago",  read:true  },
  { id:4, type:"success", icon:"✅", title:"Analysis Complete",         body:"Freelance Agreement analyzed — Risk: 3/10. Safe to sign.",            time:"2d ago",  read:true  },
];

const FAQS = [
  { q:"Is my document data private?",             a:"Yes — all documents are end-to-end encrypted. The AI processes anonymously; your personal details are never stored without permission. Enable auto-delete to remove scans after 30 days." },
  { q:"What types of documents does ClearSign support?", a:"Leases, employment contracts, NDAs, freelance agreements, service contracts, loan agreements, terms of service, and subscription agreements." },
  { q:"Is ClearSign a replacement for a lawyer?", a:"No. ClearSign helps you understand contracts in plain English and spot risks. For complex legal matters, always consult a licensed attorney." },
  { q:"How accurate is the AI analysis?",         a:"Our AI is highly accurate for clause detection, but legal interpretation varies by jurisdiction. Always verify critical clauses with a professional." },
  { q:"What is the free plan limit?",             a:"5 document scans per month. Pro Plan ($12/mo) gives unlimited scans, email templates, contract comparison, and priority AI." },
];

/* ─── API ──────────────────────────────────────────────────── */
async function analyzeDoc(text) {
  const prompt = `You are ClearSign AI — a trusted legal document analyst. Return ONLY valid JSON.\n{\n"documentType":"string",\n"riskScore":1-10,\n"overallVerdict":"SIGN"|"NEGOTIATE"|"AVOID",\n"verdictReason":"one honest sentence",\n"summary":"2-3 plain-English sentences",\n"quickFacts":["5 key facts the user must know"],\n"riskBreakdown":{"financialRisk":0-100,"legalLiability":0-100,"hiddenObligations":0-100,"terminationFlex":0-100},\n"clauses":[{"title":"","originalText":"max 100 chars","plainEnglish":"","risk":"low|medium|high","commonality":"e.g. appears in 70% of leases","tip":""}],\n"redFlags":[{"emoji":"🚨","title":"","description":"","severity":"high|medium"}],\n"negotiationSuggestions":[{"item":"","ask":"specific request","reason":"","priority":"high|medium|low"}],\n"scenarios":[{"question":"What if scenario","answer":"consequence"}]\n}\n5-7 clauses, 3-6 flags, 3-5 suggestions, 3 scenarios. Say 'you'. Be direct.\n\nDocument:\n"""\n${text.slice(0,6000)}\n"""`;
  const r = await fetch("https://api.anthropic.com/v1/messages", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1000, messages:[{role:"user",content:prompt}] }) });
  const d = await r.json();
  const raw = d.content?.find(b=>b.type==="text")?.text||"{}";
  return JSON.parse(raw.replace(/```json|```/g,"").trim());
}
async function chatWithDoc(q, a) {
  const prompt = `You are ClearSign AI. Answer about this ${a.documentType||"contract"} (risk: ${a.riskScore}/10). Clauses: ${(a.clauses||[]).map(c=>c.title).join(", ")}. Question: "${q}". Answer in 2-4 sentences. Direct and honest.`;
  const r = await fetch("https://api.anthropic.com/v1/messages", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1000, messages:[{role:"user",content:prompt}] }) });
  const d = await r.json();
  return d.content?.find(b=>b.type==="text")?.text||"Couldn't process that.";
}

/* ─── HELPERS ──────────────────────────────────────────────── */
const rC  = r => r==="high"?"var(--danger)":r==="medium"?"var(--warn)":"var(--safe)";
const rBg = r => r==="high"?"var(--danger-bg)":r==="medium"?"var(--warn-bg)":"var(--safe-bg)";
const rBd = r => r==="high"?"var(--danger-border)":r==="medium"?"var(--warn-border)":"var(--safe-border)";
const nC  = n => n>70?"var(--danger)":n>40?"var(--warn)":"var(--safe)";
const VMAP = {
  SIGN:      { e:"✅", lb:"Safe to Sign",    c:"var(--safe)",   bg:"var(--safe-bg)",   bd:"var(--safe-border)"   },
  NEGOTIATE: { e:"🟡", lb:"Negotiate First", c:"var(--warn)",   bg:"var(--warn-bg)",   bd:"var(--warn-border)"   },
  AVOID:     { e:"🚫", lb:"Avoid Signing",   c:"var(--danger)", bg:"var(--danger-bg)", bd:"var(--danger-border)" },
};
const timeAgo = d => { const s=(new Date()-new Date(d))/1000; if(s<60)return "just now"; if(s<3600)return `${Math.floor(s/60)}m ago`; if(s<86400)return `${Math.floor(s/3600)}h ago`; return `${Math.floor(s/86400)}d ago`; };
const catColor = c => ({Lease:"var(--warn)",Employment:"var(--info)",NDA:"var(--danger)",Freelance:"var(--safe)",Terms:"var(--n400)"}[c]||"var(--ink400)");
const catBg    = c => ({Lease:"var(--warn-bg)",Employment:"var(--info-bg)",NDA:"var(--danger-bg)",Freelance:"var(--safe-bg)",Terms:"var(--n50)"}[c]||"var(--grey50)");

/* ─── ICONS ────────────────────────────────────────────────── */
const I = ({n,s=20,c="currentColor",sw=1.8}) => {
  const p = {
    home:    <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    scan:    <><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></>,
    lib:     <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></>,
    bell:    <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></>,
    user:    <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    shield:  <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    chat:    <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></>,
    scale:   <><line x1="12" y1="22" x2="12" y2="6"/><line x1="6" y1="22" x2="18" y2="22"/><polyline points="6 12 3 6 9 6 6 12"/><polyline points="18 12 15 6 21 6 18 12"/></>,
    alert:   <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    check:   <><polyline points="20 6 9 17 4 12"/></>,
    x:       <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    chevR:   <><polyline points="9 18 15 12 9 6"/></>,
    chevD:   <><polyline points="6 9 12 15 18 9"/></>,
    arrowL:  <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>,
    send:    <><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></>,
    zap:     <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>,
    eye:     <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    eyeOff:  <><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>,
    lock:    <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>,
    mail:    <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    file:    <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    book:    <><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></>,
    star:    <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
    search:  <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    plus:    <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    percent: <><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></>,
    play:    <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></>,
    help:    <><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    edit:    <><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    activity:<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
    history: <><polyline points="12 8 12 12 14 14"/><path d="M3.05 11a9 9 0 100 2"/><polyline points="3 3 3 7 7 7"/></>,
    trash:   <><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6m4-6v6"/><path d="M9 6V4h6v2"/></>,
    settings:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>,
    google:  <><path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 01-5.279-5.28 5.27 5.27 0 015.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 00-8.934 8.934 8.907 8.907 0 008.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/></>,
    apple:   <><path d="M14.94 5.19A4.38 4.38 0 0016 2a4.44 4.44 0 00-3 1.52 4.17 4.17 0 00-1 3.09 3.69 3.69 0 002.94-1.42zm2.52 7.44a4.51 4.51 0 012.16-3.81 4.66 4.66 0 00-3.66-2c-1.56-.16-3 .91-3.83.91-.83 0-2-.89-3.3-.87a4.92 4.92 0 00-4.14 2.53C2.93 12 4.24 16 6 18.47c.8 1.21 1.8 2.55 3.12 2.5s1.75-.82 3.28-.82 2 .82 3.3.79 2.22-1.24 3.06-2.45a11 11 0 001.38-2.85 4.41 4.41 0 01-2.68-4.01z"/></>,
    ms:      <><path d="M3 3h9v9H3z" fill="currentColor" stroke="none"/><path d="M13 3h9v9h-9z" fill="currentColor" stroke="none" opacity=".7"/><path d="M3 13h9v9H3z" fill="currentColor" stroke="none" opacity=".7"/><path d="M13 13h9v9h-9z" fill="currentColor" stroke="none" opacity=".5"/></>,
    refresh: <><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></>,
    download:<><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    thumbUp: <><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></>,
    compare: <><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></>,
  };
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">{p[n]}</svg>;
};

/* ─── SHARED COMPONENTS ────────────────────────────────────── */
const Logo = ({size=32}) => (
  <div style={{display:"flex",alignItems:"center",gap:10}}>
    <div style={{width:size,height:size,borderRadius:size*.28,background:"var(--n800)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 3px 12px rgba(27,58,87,.25)",flexShrink:0}}>
      <I n="scale" s={size*.54} c="var(--g500)" sw={2.2}/>
    </div>
    <div>
      <div style={{fontFamily:"'Playfair Display',serif",fontSize:size*.62,fontWeight:900,color:"var(--n900)",letterSpacing:"-.02em",lineHeight:1}}>ClearSign</div>
      <div style={{fontSize:size*.25,color:"var(--ink400)",letterSpacing:".10em",textTransform:"uppercase",fontWeight:600,lineHeight:1.3}}>AI Legal</div>
    </div>
  </div>
);

const Avatar = ({name,size=36}) => {
  const initials = name?.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase()||"?";
  return <div style={{width:size,height:size,borderRadius:size*.3,background:"var(--n800)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontSize:size*.38,fontWeight:900,color:"var(--g500)",flexShrink:0,boxShadow:"0 2px 10px rgba(27,58,87,.2)"}}>{initials}</div>;
};

const Ring = ({score,size=116}) => {
  const r=size*.42, circ=2*Math.PI*r, pct=score/10;
  const col=score<=3?"var(--safe)":score<=6?"var(--warn)":"var(--danger)";
  const lbl=score<=3?"Low Risk":score<=6?"Moderate":"High Risk";
  return(
    <div style={{position:"relative",width:size,height:size,flexShrink:0}}>
      <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--grey100)" strokeWidth={size*.072}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={col} strokeWidth={size*.072}
          strokeDasharray={circ} strokeDashoffset={circ*(1-pct)} strokeLinecap="round"
          style={{transition:"stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1)"}}/>
      </svg>
      <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:size*.28,fontWeight:900,color:col,lineHeight:1,animation:"countUp .8s both"}}>{score}</div>
        <div style={{fontSize:size*.09,color:"var(--ink400)",fontWeight:600,letterSpacing:".05em"}}>/10</div>
        <div style={{fontSize:size*.085,fontWeight:800,color:col,marginTop:2,textTransform:"uppercase",letterSpacing:".04em"}}>{lbl}</div>
      </div>
    </div>
  );
};

const Bar = ({label,value,delay=0}) => {
  const col=nC(value);
  return(
    <div style={{marginBottom:12}}>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:13,fontWeight:500,color:"var(--ink500)",marginBottom:5}}>
        <span>{label}</span><span style={{color:col,fontWeight:700}}>{value}%</span>
      </div>
      <div style={{height:6,background:"var(--grey100)",borderRadius:99,overflow:"hidden"}}>
        <div style={{height:"100%",width:`${value}%`,background:col,borderRadius:99,transition:`width 1.3s ${delay}s cubic-bezier(.4,0,.2,1)`}}/>
      </div>
    </div>
  );
};

const Toggle = ({on,fn}) => (
  <div onClick={fn} style={{width:46,height:26,borderRadius:99,background:on?"var(--n800)":"var(--grey100)",cursor:"pointer",position:"relative",transition:"background .25s",flexShrink:0,boxShadow:on?"0 2px 8px rgba(27,58,87,.3)":"none"}}>
    <div style={{position:"absolute",top:3,left:on?23:3,width:20,height:20,borderRadius:"50%",background:"white",transition:"left .25s",boxShadow:"0 1px 4px rgba(0,0,0,.2)"}}/>
  </div>
);

/* ─── CLAUSE CARD ──────────────────────────────────────────── */
const ClauseCard = ({c,i}) => {
  const [open,setOpen] = useState(false);
  const rc=rC(c.risk), rbg=rBg(c.risk), rbd=rBd(c.risk);
  return(
    <div className="fu" style={{animationDelay:`${i*.07}s`,background:"var(--surface)",border:`1px solid ${open?rbd:"var(--grey100)"}`,borderRadius:14,marginBottom:10,overflow:"hidden",transition:"border-color .2s",boxShadow:"var(--sh-sm)"}}>
      <div onClick={()=>setOpen(!open)} style={{display:"flex",alignItems:"center",gap:12,padding:"14px 18px",cursor:"pointer"}}>
        <div style={{width:10,height:10,borderRadius:"50%",background:rc,flexShrink:0,boxShadow:`0 0 0 3px ${rc}22`}}/>
        <span style={{flex:1,fontWeight:700,fontSize:14,color:"var(--ink900)"}}>{c.title}</span>
        <span style={{fontSize:11,fontWeight:800,color:rc,background:rbg,padding:"3px 10px",borderRadius:99,letterSpacing:".05em",textTransform:"uppercase",border:`1px solid ${rc}33`}}>{c.risk}</span>
        <div style={{color:"var(--ink300)",transform:open?"rotate(90deg)":"none",transition:"transform .2s"}}><I n="chevR" s={14} c="var(--ink300)"/></div>
      </div>
      {open&&(
        <div className="fi" style={{padding:"0 18px 18px",borderTop:"1px solid var(--grey50)",paddingTop:16}}>
          {c.originalText&&<div style={{background:"var(--canvas)",borderLeft:`3px solid ${rc}`,padding:"9px 14px",borderRadius:"0 10px 10px 0",marginBottom:14,fontStyle:"italic",fontSize:13,color:"var(--ink400)",lineHeight:1.65}}>"{c.originalText}"</div>}
          <div style={{fontSize:13.5,lineHeight:1.72,color:"var(--ink700)",marginBottom:c.tip?12:0}}>
            <span style={{fontWeight:800,color:rc}}>Plain English: </span>{c.plainEnglish}
          </div>
          {c.commonality&&<div style={{display:"flex",alignItems:"center",gap:7,fontSize:12,color:"var(--ink400)",margin:"10px 0"}}><I n="percent" s={12} c="var(--ink300)"/>{c.commonality}</div>}
          {c.tip&&<div style={{display:"flex",gap:10,padding:"11px 14px",background:"var(--g50)",border:"1px solid var(--g300)",borderRadius:11}}><span style={{fontSize:16}}>💡</span><span style={{fontSize:13,color:"var(--ink700)",lineHeight:1.65}}>{c.tip}</span></div>}
        </div>
      )}
    </div>
  );
};

/* ─── DOC CARD ─────────────────────────────────────────────── */
const DocCard = ({doc,onClick}) => {
  const vd=VMAP[doc.overallVerdict]||VMAP.NEGOTIATE;
  const col=doc.riskScore<=3?"var(--safe)":doc.riskScore<=6?"var(--warn)":"var(--danger)";
  return(
    <div className="card-hvr fu" onClick={()=>onClick&&onClick(doc)}
      style={{background:"var(--surface)",borderRadius:16,border:"1px solid var(--grey100)",padding:"16px 18px",boxShadow:"var(--sh-sm)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:11}}>
        <div style={{flex:1,paddingRight:12}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
            <span style={{fontSize:11.5,fontWeight:700,color:catColor(doc.category),background:catBg(doc.category),padding:"3px 9px",borderRadius:99,border:`1px solid ${catColor(doc.category)}33`}}>{doc.category}</span>
            <span style={{fontSize:11,color:"var(--ink300)"}}>{timeAgo(doc.date)}</span>
          </div>
          <div style={{fontWeight:800,fontSize:14.5,color:"var(--n900)",lineHeight:1.3,marginBottom:5}}>{doc.documentType}</div>
          <div style={{fontSize:12.5,color:"var(--ink400)",lineHeight:1.55}}>{doc.summary.slice(0,72)}…</div>
        </div>
        <div style={{textAlign:"center",flexShrink:0}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:26,fontWeight:900,color:col,lineHeight:1}}>{doc.riskScore}</div>
          <div style={{fontSize:10,color:"var(--ink300)",fontWeight:600}}>/10</div>
        </div>
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",gap:6}}>
          {doc.tags?.slice(0,2).map(t=><span key={t} style={{fontSize:11,color:"var(--ink400)",background:"var(--grey50)",border:"1px solid var(--grey100)",padding:"2px 8px",borderRadius:99}}>{t}</span>)}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:700,color:vd.c}}>
          <span style={{fontSize:14}}>{vd.e}</span>{vd.lb}
        </div>
      </div>
    </div>
  );
};

/* ─── BOTTOM NAV ───────────────────────────────────────────── */
const BottomNav = ({active,set}) => {
  const tabs=[
    {id:"dashboard",ic:"home",lb:"Home"},
    {id:"library",  ic:"lib", lb:"Library"},
    {id:"upload",   ic:"scan",lb:"Scan",  primary:true},
    {id:"ask",      ic:"chat",lb:"Ask AI"},
    {id:"profile",  ic:"user",lb:"Profile"},
  ];
  return(
    <nav style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,zIndex:200,background:"var(--surface)",backdropFilter:"blur(20px)",borderTop:"1px solid var(--grey100)",display:"flex",justifyContent:"space-around",alignItems:"center",padding:"10px 0 max(8px,env(safe-area-inset-bottom))",boxShadow:"0 -4px 20px rgba(15,37,64,.06)"}}>
      {tabs.map(t=>(
        <button key={t.id} onClick={()=>set(t.id)}
          style={{display:"flex",flexDirection:"column",alignItems:"center",gap:t.primary?0:4,background:"none",border:"none",cursor:"pointer",padding:"4px 12px",transition:"all .2s",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
          {t.primary?(
            <div style={{width:50,height:50,borderRadius:18,background:"var(--n800)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 4px 16px rgba(27,58,87,.3)${active===t.id?",0 0 0 3px var(--n50)":""}`,transform:`translateY(-10px)${active===t.id?" scale(1.07)":""}`,transition:"all .2s"}}>
              <I n={t.ic} s={22} c="var(--g500)" sw={2.4}/>
            </div>
          ):(
            <>
              <div style={{color:active===t.id?"var(--n800)":"var(--ink300)",transition:"color .2s"}}>
                <I n={t.ic} s={20} c={active===t.id?"var(--n800)":"var(--ink300)"}/>
              </div>
              <span style={{fontSize:10.5,fontWeight:active===t.id?800:400,color:active===t.id?"var(--n800)":"var(--ink300)",letterSpacing:".02em"}}>{t.lb}</span>
              {active===t.id&&<div style={{width:4,height:4,borderRadius:"50%",background:"var(--g500)",marginTop:1}}/>}
            </>
          )}
        </button>
      ))}
    </nav>
  );
};

/* ─── TOP HEADER ───────────────────────────────────────────── */
const TopHeader = ({user,notifCount,onNotif,onProfile}) => (
  <div style={{position:"sticky",top:0,zIndex:100,background:"rgba(255,255,255,.95)",backdropFilter:"blur(20px)",borderBottom:"1px solid var(--grey100)",padding:"13px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0 1px 8px rgba(15,37,64,.05)"}}>
    <Logo size={28}/>
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <button onClick={onNotif} style={{position:"relative",background:"var(--grey50)",border:"1px solid var(--grey100)",borderRadius:11,width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"background .15s"}}
        onMouseEnter={e=>e.currentTarget.style.background="var(--n50)"}
        onMouseLeave={e=>e.currentTarget.style.background="var(--grey50)"}>
        <I n="bell" s={17} c="var(--ink500)"/>
        {notifCount>0&&<div style={{position:"absolute",top:-4,right:-4,width:17,height:17,borderRadius:"50%",background:"var(--danger)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:"white",border:"2px solid white"}}>{notifCount}</div>}
      </button>
      <div onClick={onProfile} style={{cursor:"pointer"}}><Avatar name={user?.name||"User"} size={36}/></div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════
   SCREENS
══════════════════════════════════════════════════════════════ */

/* ── AUTH ──────────────────────────────────────────────────── */
const AuthScreen = ({onAuth}) => {
  const [mode,setMode]=useState("login");
  const [form,setForm]=useState({name:"",email:"",password:""});
  const [showPw,setShowPw]=useState(false);
  const [loading,setLoading]=useState(false);
  const [step,setStep]=useState(0);
  const [error,setError]=useState("");

  const submit=async()=>{
    setError("");
    if(!form.email){setError("Email is required.");return;}
    if(mode!=="forgot"&&!form.password){setError("Password is required.");return;}
    if(mode==="signup"&&!form.name){setError("Full name is required.");return;}
    setLoading(true);
    await new Promise(r=>setTimeout(r,1200));
    setLoading(false);
    if(mode==="signup")setStep(1);
    else onAuth({name:form.name||"Alex Johnson",email:form.email,plan:"free",scansUsed:3,scansLeft:2,joined:"March 2025"});
  };

  const SocialBtn=({ic,lb,col})=>(
    <button onClick={()=>onAuth({name:"Alex Johnson",email:"alex@example.com",plan:"free",scansUsed:3,scansLeft:2,joined:"March 2025"})}
      style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:7,padding:"11px 8px",background:"var(--surface)",border:"1.5px solid var(--grey100)",borderRadius:12,cursor:"pointer",fontSize:13,fontWeight:600,color:"var(--ink700)",transition:"all .2s",fontFamily:"'Plus Jakarta Sans',sans-serif"}}
      onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--n200)";e.currentTarget.style.background="var(--n50)";}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--grey100)";e.currentTarget.style.background="var(--surface)";}}>
      <I n={ic} s={15} c={col}/>{lb}
    </button>
  );

  if(step===1) return(
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,textAlign:"center",background:"var(--canvas)"}}>
      <div className="si" style={{width:72,height:72,borderRadius:24,background:"var(--safe-bg)",border:"2px solid var(--safe-border)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:22}}>
        <I n="mail" s={32} c="var(--safe)"/>
      </div>
      <div style={{fontFamily:"'Playfair Display',serif",fontSize:26,fontWeight:900,color:"var(--n900)",marginBottom:8}}>Check your email</div>
      <div style={{fontSize:15,color:"var(--ink500)",lineHeight:1.7,marginBottom:28,maxWidth:280}}>We sent a link to <strong style={{color:"var(--n800)"}}>{form.email}</strong></div>
      <button className="btn-navy" style={{width:"100%",maxWidth:320,padding:"14px"}} onClick={()=>onAuth({name:form.name||"Alex Johnson",email:form.email,plan:"free",scansUsed:0,scansLeft:5,joined:"March 2025"})}>
        <I n="check" s={17} c="white" sw={2.5}/> Continue to App
      </button>
    </div>
  );

  return(
    <div style={{minHeight:"100vh",background:"var(--canvas)",display:"flex",flexDirection:"column",overflow:"hidden",position:"relative"}}>
      {/* Top navy banner */}
      <div style={{background:"var(--n800)",padding:"40px 28px 56px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-40,right:-40,width:200,height:200,borderRadius:"50%",background:"rgba(245,197,24,.12)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:-60,left:-40,width:180,height:180,borderRadius:"50%",background:"rgba(255,255,255,.04)",pointerEvents:"none"}}/>
        <div className="fu" style={{display:"flex",justifyContent:"center",marginBottom:24}}>
          <div style={{width:60,height:60,borderRadius:20,background:"var(--g500)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 6px 24px rgba(245,197,24,.45)",animation:"float 3.5s ease-in-out infinite"}}>
            <I n="scale" s={30} c="var(--n900)" sw={2.2}/>
          </div>
        </div>
        <div className="fu d1" style={{textAlign:"center"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:900,color:"white",marginBottom:6}}>ClearSign</div>
          <div style={{fontSize:14.5,color:"rgba(255,255,255,.65)",lineHeight:1.65,maxWidth:260,margin:"0 auto"}}>Understand any contract before you sign.</div>
        </div>
      </div>

      {/* Card pulls up over banner */}
      <div style={{flex:1,padding:"0 20px 40px",marginTop:-24,position:"relative",zIndex:1}}>
        <div className="fu d2" style={{background:"var(--surface)",borderRadius:22,border:"1px solid var(--grey100)",padding:"28px 22px",boxShadow:"var(--sh-md)"}}>
          {mode!=="forgot"&&(
            <div style={{display:"flex",background:"var(--grey50)",borderRadius:12,padding:4,marginBottom:22,border:"1px solid var(--grey100)"}}>
              {["login","signup"].map(m=>(
                <button key={m} onClick={()=>setMode(m)}
                  style={{flex:1,padding:"10px",border:"none",borderRadius:9,background:mode===m?"var(--n800)":"transparent",cursor:"pointer",fontSize:13.5,fontWeight:700,color:mode===m?"white":"var(--ink400)",transition:"all .2s",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
                  {m==="login"?"Sign In":"Sign Up"}
                </button>
              ))}
            </div>
          )}

          {error&&<div className="fi" style={{background:"var(--danger-bg)",border:"1px solid var(--danger-border)",borderRadius:11,padding:"11px 14px",marginBottom:16,fontSize:13.5,color:"var(--danger)",display:"flex",gap:8,alignItems:"center"}}><I n="alert" s={15} c="var(--danger)"/>{error}</div>}

          {mode==="forgot"?(
            <>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,color:"var(--n900)",marginBottom:6}}>Reset Password</div>
              <div style={{fontSize:13.5,color:"var(--ink400)",marginBottom:20,lineHeight:1.65}}>Enter your email and we'll send a reset link.</div>
              <label style={{fontSize:12,fontWeight:800,color:"var(--ink500)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:7,display:"block"}}>Email Address</label>
              <div style={{position:"relative",marginBottom:18}}>
                <input className="input-f" type="email" placeholder="you@example.com" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} style={{paddingLeft:42}}/>
                <div style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}><I n="mail" s={16} c="var(--ink300)"/></div>
              </div>
              <button className="btn-navy" style={{width:"100%",padding:"14px",marginBottom:14}} onClick={submit} disabled={loading}>
                {loading?<><div style={{width:18,height:18,border:"2px solid rgba(255,255,255,.3)",borderTopColor:"white",borderRadius:"50%",animation:"spin .7s linear infinite"}}/> Sending…</>:<><I n="send" s={16} c="white" sw={2.5}/> Send Reset Link</>}
              </button>
              <button onClick={()=>setMode("login")} style={{background:"none",border:"none",color:"var(--ink400)",cursor:"pointer",fontSize:13.5,fontWeight:600,display:"block",textAlign:"center",width:"100%"}}>← Back to Sign In</button>
            </>
          ):(
            <>
              {mode==="signup"&&(
                <div style={{marginBottom:16}}>
                  <label style={{fontSize:12,fontWeight:800,color:"var(--ink500)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:7,display:"block"}}>Full Name</label>
                  <div style={{position:"relative"}}>
                    <input className="input-f" placeholder="Alex Johnson" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} style={{paddingLeft:42}}/>
                    <div style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}><I n="user" s={16} c="var(--ink300)"/></div>
                  </div>
                </div>
              )}
              <div style={{marginBottom:16}}>
                <label style={{fontSize:12,fontWeight:800,color:"var(--ink500)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:7,display:"block"}}>Email Address</label>
                <div style={{position:"relative"}}>
                  <input className="input-f" type="email" placeholder="you@example.com" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} style={{paddingLeft:42}}/>
                  <div style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}><I n="mail" s={16} c="var(--ink300)"/></div>
                </div>
              </div>
              <div style={{marginBottom:22}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}>
                  <label style={{fontSize:12,fontWeight:800,color:"var(--ink500)",letterSpacing:".08em",textTransform:"uppercase"}}>Password</label>
                  {mode==="login"&&<button onClick={()=>setMode("forgot")} style={{background:"none",border:"none",color:"var(--n800)",cursor:"pointer",fontSize:12.5,fontWeight:700}}>Forgot?</button>}
                </div>
                <div style={{position:"relative"}}>
                  <input className="input-f" type={showPw?"text":"password"} placeholder={mode==="signup"?"Create a strong password":"Enter password"} value={form.password} onChange={e=>setForm(f=>({...f,password:e.target.value}))} style={{paddingLeft:42,paddingRight:42}}/>
                  <div style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)"}}><I n="lock" s={16} c="var(--ink300)"/></div>
                  <button onClick={()=>setShowPw(!showPw)} style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:2}}><I n={showPw?"eyeOff":"eye"} s={16} c="var(--ink300)"/></button>
                </div>
                {mode==="signup"&&<div style={{display:"flex",gap:6,marginTop:8}}>{["8+ chars","Uppercase","Number"].map((r,i)=><span key={r} style={{fontSize:11,padding:"2px 9px",borderRadius:99,background:i===0&&form.password.length>=8||i===1&&/[A-Z]/.test(form.password)||i===2&&/\d/.test(form.password)?"var(--safe-bg)":"var(--grey50)",color:i===0&&form.password.length>=8||i===1&&/[A-Z]/.test(form.password)||i===2&&/\d/.test(form.password)?"var(--safe)":"var(--ink300)",border:"1px solid var(--grey100)"}}>{r}</span>)}</div>}
              </div>

              <button className="btn-navy" style={{width:"100%",padding:"15px",marginBottom:18,fontSize:15}} onClick={submit} disabled={loading}>
                {loading?<><div style={{width:18,height:18,border:"2px solid rgba(255,255,255,.3)",borderTopColor:"white",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>{mode==="signup"?"Creating…":"Signing in…"}</>:<><I n="zap" s={18} c="white" sw={2.5}/>{mode==="signup"?"Create Account":"Sign In"}</>}
              </button>

              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:18}}>
                <div style={{flex:1,height:1,background:"var(--grey100)"}}/>
                <span style={{fontSize:12,color:"var(--ink300)",fontWeight:600}}>or continue with</span>
                <div style={{flex:1,height:1,background:"var(--grey100)"}}/>
              </div>
              <div style={{display:"flex",gap:10}}>
                <SocialBtn ic="google" lb="Google" col="#EA4335"/>
                <SocialBtn ic="apple"  lb="Apple"  col="var(--ink900)"/>
                <SocialBtn ic="ms"     lb="MS"     col="#0078D4"/>
              </div>
            </>
          )}
        </div>
        {mode!=="forgot"&&<div style={{textAlign:"center",marginTop:18,fontSize:13.5,color:"var(--ink400)"}}>
          {mode==="login"?"Don't have an account? ":"Already a member? "}
          <button onClick={()=>setMode(mode==="login"?"signup":"login")} style={{background:"none",border:"none",color:"var(--n800)",cursor:"pointer",fontWeight:800,fontSize:13.5}}>
            {mode==="login"?"Sign Up Free":"Sign In"}
          </button>
        </div>}
        <div style={{textAlign:"center",marginTop:14,fontSize:12,color:"var(--ink300)"}}>🔒 End-to-end encrypted · GDPR compliant</div>
      </div>
    </div>
  );
};

/* ── ONBOARDING ────────────────────────────────────────────── */
const OnboardingScreen = ({user,onDone}) => {
  const [step,setStep]=useState(0);
  const [eli15,setEli15]=useState(false);

  const steps=[
    { icon:"📄", title:"Upload any contract",  subtitle:eli15?"Drop in a lease, job letter, or boring terms page.":"Upload or paste any legal document — leases, contracts, NDAs, and more.",
      visual:(
        <div style={{width:180,height:148,background:"var(--surface)",borderRadius:18,border:"1px solid var(--grey100)",display:"flex",flexDirection:"column",padding:16,gap:8,position:"relative",animation:"onbFloat 3.5s ease-in-out infinite",boxShadow:"var(--sh-md)"}}>
          {[100,70,90,55,80].map((w,i)=><div key={i} style={{height:7,width:`${w}%`,background:`rgba(27,58,87,${.08+i*.02})`,borderRadius:5}}/>)}
          <div style={{position:"absolute",bottom:-12,right:-12,width:34,height:34,borderRadius:12,background:"var(--n800)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(27,58,87,.3)"}}><I n="scan" s={17} c="var(--g500)" sw={2.5}/></div>
        </div>
      )
    },
    { icon:"🤖", title:"AI reads every clause", subtitle:eli15?"The AI reads the boring legal stuff and explains it in plain English!":"Our AI scans every clause and translates legal jargon into simple, direct English.",
      visual:(
        <div style={{display:"flex",flexDirection:"column",gap:8,animation:"onbFloat 3.5s ease-in-out infinite"}}>
          {[{risk:"high",t:"Indemnification"},{risk:"medium",t:"Auto-renewal"},{risk:"low",t:"Notice period"}].map((c,i)=>(
            <div key={i} style={{background:"var(--surface)",borderRadius:11,padding:"10px 14px",border:`1px solid ${rBd(c.risk)}`,display:"flex",alignItems:"center",gap:10,boxShadow:"var(--sh-sm)",width:200}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:rC(c.risk),flexShrink:0}}/>
              <span style={{fontSize:12.5,fontWeight:600,color:"var(--ink900)"}}>{c.t}</span>
              <span style={{fontSize:10.5,fontWeight:800,color:rC(c.risk),background:rBg(c.risk),padding:"2px 8px",borderRadius:99,marginLeft:"auto",textTransform:"uppercase"}}>{c.risk}</span>
            </div>
          ))}
        </div>
      )
    },
    { icon:"⚖️", title:"Decide with confidence", subtitle:eli15?"Get a clear score, warnings, and exactly what to do next — sign, negotiate, or walk away!":"Get a risk score, plain-English summary, and AI verdict so you always know exactly what you're signing.",
      visual:(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10,animation:"onbFloat 3.5s ease-in-out infinite"}}>
          <Ring score={7} size={96}/>
          <div style={{background:"var(--danger-bg)",border:"1px solid var(--danger-border)",borderRadius:12,padding:"9px 14px",display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:16}}>🚨</span><span style={{fontSize:12.5,fontWeight:700,color:"var(--danger)"}}>Auto-renewal detected</span>
          </div>
        </div>
      )
    }
  ];
  const s=steps[step];

  return(
    <div style={{minHeight:"100vh",background:"var(--canvas)",display:"flex",flexDirection:"column"}}>
      <div style={{padding:"22px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",gap:7}}>
          {steps.map((_,i)=><div key={i} style={{width:i===step?24:8,height:8,borderRadius:99,background:i===step?"var(--n800)":"var(--grey100)",transition:"all .3s"}}/>)}
        </div>
        <button onClick={onDone} style={{background:"none",border:"none",color:"var(--ink400)",cursor:"pointer",fontSize:13.5,fontWeight:600}}>Skip</button>
      </div>

      <div style={{padding:"0 24px 10px"}}>
        <button onClick={()=>setEli15(!eli15)}
          style={{display:"flex",alignItems:"center",gap:8,background:eli15?"var(--n50)":"var(--surface)",border:`1.5px solid ${eli15?"var(--n800)":"var(--grey100)"}`,borderRadius:99,padding:"7px 14px",cursor:"pointer",fontSize:12.5,fontWeight:700,color:eli15?"var(--n800)":"var(--ink400)",transition:"all .2s"}}>
          <span style={{fontSize:14}}>🎓</span>{eli15?"ELI15 mode on":"Explain Like I'm 15"}
        </button>
      </div>

      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 28px",gap:28}}>
        <div className="si" style={{display:"flex",justifyContent:"center"}}>{s.visual}</div>
        <div className="fu" style={{textAlign:"center"}}>
          <div style={{fontSize:40,marginBottom:12}}>{s.icon}</div>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:27,fontWeight:900,color:"var(--n900)",marginBottom:10,lineHeight:1.2}}>{s.title}</div>
          <div style={{fontSize:15,color:"var(--ink500)",lineHeight:1.75,maxWidth:300,margin:"0 auto"}}>{s.subtitle}</div>
        </div>
      </div>

      <div style={{padding:"0 24px 48px"}}>
        {step<steps.length-1?(
          <button className="btn-navy" style={{width:"100%",padding:"15px",fontSize:15}} onClick={()=>setStep(step+1)}>
            Next <I n="chevR" s={17} c="white" sw={2.5}/>
          </button>
        ):(
          <button className="btn-navy" style={{width:"100%",padding:"15px",fontSize:15}} onClick={onDone}>
            <I n="zap" s={17} c="white" sw={2.5}/>Let's Get Started
          </button>
        )}
        <div style={{textAlign:"center",marginTop:14,fontSize:13.5,color:"var(--ink400)"}}>Welcome, <strong style={{color:"var(--n800)"}}>{user?.name?.split(" ")[0]||"there"}</strong> 👋</div>
      </div>
    </div>
  );
};

/* ── DASHBOARD ─────────────────────────────────────────────── */
const DashboardScreen = ({user,docs,onScan,onDoc}) => {
  const avg=docs.length?Math.round(docs.reduce((a,d)=>a+d.riskScore,0)/docs.length):0;
  const highRisk=docs.filter(d=>d.riskScore>=7).length;
  const g=()=>{const h=new Date().getHours();return h<12?"Good morning":h<17?"Good afternoon":"Good evening";};

  return(
    <div style={{height:"calc(100vh - 60px)",overflowY:"auto",paddingBottom:88}}>
      {/* Navy hero */}
      <div style={{background:"var(--n800)",padding:"24px 20px 32px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-50,right:-50,width:220,height:220,borderRadius:"50%",background:"rgba(245,197,24,.1)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:-30,left:-20,width:160,height:160,borderRadius:"50%",background:"rgba(255,255,255,.04)",pointerEvents:"none"}}/>
        <div className="fu" style={{marginBottom:20}}>
          <div style={{fontSize:14,color:"rgba(255,255,255,.6)",marginBottom:3}}>{g()},</div>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:26,fontWeight:900,color:"white"}}>{user?.name?.split(" ")[0]||"there"} 👋</div>
        </div>
        {/* Stats */}
        <div className="fu d1" style={{display:"flex",gap:10}}>
          {[
            {label:"Documents", value:docs.length,      icon:"file",   col:"var(--g500)"},
            {label:"Avg Risk",  value:`${avg}/10`,       icon:"shield",  col:avg>6?"var(--danger2)":avg>3?"var(--warn2)":"var(--safe2)"},
            {label:"Scans Left",value:user?.scansLeft||0,icon:"zap",    col:"var(--g400)"},
          ].map(s=>(
            <div key={s.label} style={{flex:1,background:"rgba(255,255,255,.08)",borderRadius:14,padding:"14px 10px",textAlign:"center",border:"1px solid rgba(255,255,255,.06)"}}>
              <div style={{marginBottom:6,display:"flex",justifyContent:"center"}}><I n={s.icon} s={16} c={s.col}/></div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:900,color:s.col,lineHeight:1}}>{s.value}</div>
              <div style={{fontSize:10.5,color:"rgba(255,255,255,.45)",marginTop:3,fontWeight:600}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{padding:"20px"}}>
        {/* High-risk alert */}
        {highRisk>0&&(
          <div className="fu" style={{background:"var(--danger-bg)",border:"1.5px solid var(--danger-border)",borderRadius:16,padding:"14px 18px",marginBottom:20,display:"flex",alignItems:"center",gap:12}}>
            <div style={{width:38,height:38,borderRadius:12,background:"var(--danger-bg)",border:"1px solid var(--danger-border)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="alert" s={18} c="var(--danger)"/></div>
            <div style={{flex:1}}>
              <div style={{fontWeight:800,fontSize:13.5,color:"var(--danger)"}}>⚠ {highRisk} High-Risk Document{highRisk>1?"s":""}</div>
              <div style={{fontSize:12.5,color:"var(--ink500)",marginTop:2}}>Review before signing anything</div>
            </div>
            <I n="chevR" s={15} c="var(--danger)"/>
          </div>
        )}

        {/* Quick scan */}
        <div className="fu d1" onClick={onScan} style={{background:"var(--n800)",borderRadius:18,padding:"20px 22px",marginBottom:22,cursor:"pointer",position:"relative",overflow:"hidden",boxShadow:"0 6px 24px rgba(27,58,87,.25)",transition:"all .2s"}}
          onMouseEnter={e=>e.currentTarget.style.background="var(--n700)"}
          onMouseLeave={e=>e.currentTarget.style.background="var(--n800)"}>
          <div style={{position:"absolute",top:-20,right:-20,width:100,height:100,borderRadius:"50%",background:"rgba(245,197,24,.12)",pointerEvents:"none"}}/>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <div style={{width:50,height:50,borderRadius:16,background:"var(--g500)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 4px 14px rgba(245,197,24,.4)"}}>
              <I n="scan" s={24} c="var(--n900)" sw={2.2}/>
            </div>
            <div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:19,fontWeight:800,color:"white"}}>Scan a New Document</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,.6)",marginTop:2}}>Upload, paste, or photograph any contract</div>
            </div>
            <I n="chevR" s={20} c="rgba(255,255,255,.6)"/>
          </div>
        </div>

        {/* Usage bar */}
        {user?.plan==="free"&&(
          <div className="fu d2" style={{background:"var(--surface)",borderRadius:16,border:"1px solid var(--grey100)",padding:"16px 18px",marginBottom:22,boxShadow:"var(--sh-sm)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <div style={{fontWeight:800,fontSize:13.5,color:"var(--n900)"}}>Free Plan Usage</div>
              <span style={{fontSize:11.5,fontWeight:700,color:"var(--n800)",background:"var(--n50)",border:"1px solid var(--n100)",padding:"3px 10px",borderRadius:99}}>5 scans/month</span>
            </div>
            <div style={{height:7,background:"var(--grey50)",borderRadius:99,overflow:"hidden",border:"1px solid var(--grey100)",marginBottom:10}}>
              <div style={{height:"100%",width:`${((user.scansUsed||0)/5)*100}%`,background:`linear-gradient(90deg,var(--n800),var(--n600))`,borderRadius:99,transition:"width 1s ease"}}/>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:12.5,color:"var(--ink400)"}}>{user.scansUsed||0} of 5 used</span>
              <button className="btn-gold" style={{padding:"6px 14px",fontSize:12.5,borderRadius:99}}>Upgrade →</button>
            </div>
          </div>
        )}

        {/* Recent docs */}
        <div className="fu d3">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:800,color:"var(--n900)"}}>Recent Documents</div>
            <button style={{background:"none",border:"none",color:"var(--n800)",cursor:"pointer",fontSize:13,fontWeight:700}}>View all →</button>
          </div>
          {docs.length===0?(
            <div style={{textAlign:"center",padding:"40px 20px",background:"var(--surface)",borderRadius:16,border:"1px solid var(--grey100)"}}>
              <div style={{opacity:.25,marginBottom:12}}><I n="file" s={44} c="var(--ink300)"/></div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:17,color:"var(--ink300)"}}>No documents yet</div>
              <div style={{fontSize:13.5,color:"var(--ink300)",marginTop:5}}>Scan your first contract to get started</div>
            </div>
          ):(
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {docs.slice(0,3).map((d,i)=><DocCard key={d.id||i} doc={d} onClick={onDoc}/>)}
            </div>
          )}
        </div>

        {/* Tip card */}
        <div className="fu d4" style={{marginTop:22,background:"var(--n50)",borderRadius:16,border:"1px solid var(--n100)",padding:"18px 20px"}}>
          <div style={{fontSize:11,fontWeight:800,color:"var(--n600)",letterSpacing:".1em",textTransform:"uppercase",marginBottom:8}}>💡 Pro Tip</div>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:800,color:"var(--n900)",marginBottom:5}}>Compare multiple contracts</div>
          <div style={{fontSize:13.5,color:"var(--ink500)",lineHeight:1.65,marginBottom:14}}>Got two job offers? Upload both and ClearSign tells you which one protects you better.</div>
          <button className="btn-navy" style={{padding:"9px 18px",fontSize:13,borderRadius:10}}>Upgrade to Pro →</button>
        </div>
      </div>
    </div>
  );
};

/* ── UPLOAD ────────────────────────────────────────────────── */
const UploadScreen = ({onAnalyze,loading}) => {
  const [tab,setTab]=useState("paste");
  const [text,setText]=useState("");
  const [drag,setDrag]=useState(false);
  const fileRef=useRef();
  const readFile=f=>{if(!f)return;const r=new FileReader();r.onload=e=>setText(e.target.result);r.readAsText(f);};

  return(
    <div style={{height:"calc(100vh - 60px)",overflowY:"auto",padding:"20px 20px 90px"}}>
      <div className="fu" style={{marginBottom:20}}>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:900,color:"var(--n900)",marginBottom:6}}>Scan a Document</div>
        <p style={{fontSize:14.5,color:"var(--ink500)",lineHeight:1.7}}>Upload any contract for an instant AI analysis in plain English.</p>
      </div>

      <div className="fu d1" style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:20}}>
        {["🔒 Encrypted","⚡ Instant","🛡️ Private"].map(b=><span key={b} style={{fontSize:12,fontWeight:600,color:"var(--n800)",background:"var(--n50)",border:"1px solid var(--n100)",padding:"5px 12px",borderRadius:99}}>{b}</span>)}
      </div>

      {/* Input card */}
      <div className="fu d2" style={{background:"var(--surface)",border:"1px solid var(--grey100)",borderRadius:20,overflow:"hidden",marginBottom:16,boxShadow:"var(--sh-sm)"}}>
        <div style={{display:"flex",borderBottom:"1px solid var(--grey100)"}}>
          {[{id:"paste",ic:"file",lb:"Paste"},{id:"upload",ic:"scan",lb:"Upload"},{id:"sample",ic:"book",lb:"Samples"}].map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)}
              style={{flex:1,padding:"13px 6px",border:"none",background:tab===t.id?"var(--n50)":"transparent",cursor:"pointer",fontSize:12.5,fontWeight:tab===t.id?700:400,color:tab===t.id?"var(--n800)":"var(--ink400)",display:"flex",flexDirection:"column",alignItems:"center",gap:5,transition:"all .2s",borderBottom:tab===t.id?"2.5px solid var(--n800)":"2.5px solid transparent"}}>
              <I n={t.ic} s={15} c={tab===t.id?"var(--n800)":"var(--ink300)"}/>
              {t.lb}
            </button>
          ))}
        </div>
        <div style={{padding:18}}>
          {tab==="paste"&&<>
            <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your lease, job offer, NDA, terms of service, or any legal document here…"
              style={{width:"100%",minHeight:190,background:"var(--canvas)",border:"1.5px solid var(--grey100)",borderRadius:13,padding:"13px 15px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:14,lineHeight:1.72,color:"var(--ink900)",resize:"vertical",outline:"none",transition:"border-color .2s"}}
              onFocus={e=>e.target.style.borderColor="var(--n800)"}
              onBlur={e=>e.target.style.borderColor="var(--grey100)"}/>
            <div style={{fontSize:12,color:"var(--ink300)",marginTop:7}}>{text.length?`${text.length} chars · ~${Math.ceil(text.split(/\s+/).filter(Boolean).length)} words`:"Paste the full contract for best results"}</div>
          </>}
          {tab==="upload"&&(
            <div onDragOver={e=>{e.preventDefault();setDrag(true)}} onDragLeave={()=>setDrag(false)}
              onDrop={e=>{e.preventDefault();setDrag(false);readFile(e.dataTransfer.files[0])}}
              onClick={()=>fileRef.current.click()}
              style={{border:`2px dashed ${drag?"var(--n800)":"var(--grey100)"}`,borderRadius:16,padding:"44px 20px",textAlign:"center",cursor:"pointer",background:drag?"var(--n50)":"transparent",transition:"all .2s"}}>
              <input ref={fileRef} type="file" accept=".txt,.pdf,.doc,.docx" style={{display:"none"}} onChange={e=>readFile(e.target.files[0])}/>
              <div style={{marginBottom:12,opacity:.4}}><I n="scan" s={36} c="var(--n800)"/></div>
              <div style={{fontWeight:700,fontSize:15,color:"var(--n900)",marginBottom:5}}>Drop your document here</div>
              <div style={{fontSize:13,color:"var(--ink400)"}}>PDF, TXT, DOC — or click to browse</div>
              {text&&<div style={{marginTop:12,fontSize:13,color:"var(--safe)",fontWeight:700}}>✓ Loaded</div>}
            </div>
          )}
          {tab==="sample"&&(
            <div>
              <div style={{fontSize:13.5,color:"var(--ink500)",marginBottom:14}}>Load a pre-built contract to see ClearSign in action:</div>
              {Object.entries(SAMPLES).map(([k,s])=>(
                <button key={k} onClick={()=>{setText(s.text);setTab("paste");}}
                  style={{width:"100%",textAlign:"left",border:"1px solid var(--grey100)",borderRadius:13,padding:"13px 16px",marginBottom:10,background:"var(--canvas)",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",display:"block",transition:"all .2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--n800)";e.currentTarget.style.background="var(--n50)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--grey100)";e.currentTarget.style.background="var(--canvas)";}}>
                  <div style={{fontWeight:700,fontSize:14,color:"var(--n900)"}}>{s.label}</div>
                  <div style={{fontSize:12.5,color:"var(--ink400)",marginTop:3}}>{s.desc}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <button className="btn-navy fu d3" disabled={!text.trim()||loading} onClick={()=>onAnalyze(text)} style={{width:"100%",padding:"16px",fontSize:15,borderRadius:14}}>
        {loading?<><div style={{width:18,height:18,border:"2px solid rgba(255,255,255,.3)",borderTopColor:"white",borderRadius:"50%",animation:"spin .7s linear infinite"}}/> Analyzing…</>:<><I n="zap" s={18} c="white" sw={2.5}/>Analyze Document</>}
      </button>

      <div className="fu d4" style={{marginTop:22}}>
        <div style={{fontSize:11,fontWeight:800,color:"var(--ink400)",letterSpacing:".10em",textTransform:"uppercase",marginBottom:10}}>Supported Types</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
          {["Leases","Employment","NDAs","Freelance","Service","Loans","Terms","Subscriptions"].map(t=>(
            <span key={t} style={{fontSize:12,color:"var(--ink500)",background:"var(--surface)",border:"1px solid var(--grey100)",padding:"4px 11px",borderRadius:99}}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── ANALYZING ─────────────────────────────────────────────── */
const AnalyzingScreen = () => {
  const [step,setStep]=useState(0);
  const steps=["Reading document structure","Detecting clauses & obligations","Scoring risks & red flags","Generating plain-English summary","Building negotiation playbook"];
  useEffect(()=>{const iv=setInterval(()=>setStep(s=>Math.min(s+1,steps.length-1)),1200);return()=>clearInterval(iv);},[]);
  return(
    <div style={{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,textAlign:"center",background:"var(--canvas)"}}>
      <div style={{position:"fixed",top:0,left:0,right:0,height:4,background:"var(--grey50)"}}>
        <div style={{height:"100%",background:`linear-gradient(90deg,var(--n800),var(--n600))`,width:`${(step+1)/steps.length*100}%`,transition:"width 1.2s ease",borderRadius:99}}/>
      </div>

      <div style={{position:"relative",marginBottom:36,animation:"float 3s ease-in-out infinite"}}>
        <div style={{width:128,height:168,background:"var(--surface)",borderRadius:20,border:"1px solid var(--grey100)",boxShadow:"var(--sh-lg)",position:"relative",overflow:"hidden",padding:"16px 14px"}}>
          {[...Array(7)].map((_,i)=><div key={i} style={{height:9,background:`rgba(27,58,87,${.06+i*.025})`,borderRadius:6,marginBottom:11,width:i%3===0?"65%":"100%"}}/>)}
          <div style={{position:"absolute",left:0,right:0,height:2.5,background:`linear-gradient(90deg,transparent,var(--n800),transparent)`,top:"10%",animation:"scan 1.8s ease-in-out infinite"}}/>
        </div>
        {[0,1].map(i=><div key={i} style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:158,height:198,borderRadius:20,border:"1.5px solid rgba(27,58,87,.15)",animation:`ripple 2s ${i*.9}s ease-out infinite`,pointerEvents:"none"}}/>)}
      </div>

      <div style={{fontFamily:"'Playfair Display',serif",fontSize:26,fontWeight:800,color:"var(--n900)",marginBottom:6}}>Analyzing your document</div>
      <div style={{fontSize:14.5,color:"var(--ink400)",marginBottom:32}}>Our AI is reviewing every clause…</div>

      <div style={{width:"100%",maxWidth:320,background:"var(--surface)",borderRadius:18,border:"1px solid var(--grey100)",padding:22,boxShadow:"var(--sh-sm)"}}>
        {steps.map((s,i)=>(
          <div key={s} style={{display:"flex",alignItems:"center",gap:13,marginBottom:i<steps.length-1?13:0,opacity:i<=step?1:.25,transition:`opacity .4s ${i*.08}s`}}>
            <div style={{width:26,height:26,borderRadius:9,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:i<step?"var(--safe)":i===step?"var(--n800)":"var(--grey50)",transition:"background .4s",border:i<step?"none":i===step?"none":"1px solid var(--grey100)"}}>
              {i<step?<I n="check" s={13} c="white" sw={2.5}/>:i===step?<div style={{width:8,height:8,borderRadius:"50%",background:"white",animation:"pulse 1s infinite"}}/>:null}
            </div>
            <span style={{fontSize:13.5,fontWeight:i===step?700:400,color:i<=step?"var(--ink900)":"var(--ink300)"}}>{s}</span>
          </div>
        ))}
      </div>
      <div style={{marginTop:26,fontSize:13,color:"var(--ink300)",lineHeight:1.7,maxWidth:280}}>🔒 End-to-end encrypted. Never stored without permission.</div>
    </div>
  );
};

/* ── RESULTS ───────────────────────────────────────────────── */
const ResultsScreen = ({a,onBack,onAsk}) => {
  const [tab,setTab]=useState("overview");
  if(!a)return null;
  const vd=VMAP[a.overallVerdict]||VMAP.NEGOTIATE;
  const rd=a.riskBreakdown||{};
  const tabs=[{id:"overview",ic:"shield",lb:"Overview"},{id:"clauses",ic:"file",lb:"Clauses"},{id:"flags",ic:"alert",lb:"Flags"},{id:"negotiate",ic:"scale",lb:"Negotiate"},{id:"simulate",ic:"play",lb:"Simulate"}];

  return(
    <div style={{height:"calc(100vh - 60px)",overflowY:"auto",paddingBottom:88}}>
      {/* Navy hero */}
      <div style={{background:"var(--n800)",padding:"20px 20px 24px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-40,right:-40,width:200,height:200,borderRadius:"50%",background:"rgba(245,197,24,.1)",pointerEvents:"none"}}/>
        <button onClick={onBack} style={{display:"flex",alignItems:"center",gap:7,background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.12)",color:"rgba(255,255,255,.75)",borderRadius:99,padding:"7px 14px",fontSize:12.5,cursor:"pointer",marginBottom:18,fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:600,transition:"background .2s"}}
          onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.15)"}
          onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.1)"}>
          <I n="arrowL" s={14} c="rgba(255,255,255,.75)"/> Back
        </button>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:14}}>
          <div style={{flex:1}}>
            <div style={{fontSize:11,fontWeight:800,color:"rgba(255,255,255,.5)",letterSpacing:".10em",textTransform:"uppercase",marginBottom:7}}>Analysis Complete</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:21,fontWeight:800,color:"white",lineHeight:1.2,marginBottom:12}}>{a.documentType||"Legal Document"}</div>
            <div style={{display:"inline-flex",alignItems:"center",gap:10,background:vd.bg,border:`1px solid ${vd.bd}`,borderRadius:12,padding:"10px 14px",marginBottom:12}}>
              <span style={{fontSize:17}}>{vd.e}</span>
              <div>
                <div style={{fontWeight:800,fontSize:13.5,color:vd.c}}>{vd.lb}</div>
                <div style={{fontSize:11.5,color:"var(--ink500)",marginTop:1}}>{a.verdictReason}</div>
              </div>
            </div>
            <div style={{fontSize:13.5,lineHeight:1.72,color:"rgba(255,255,255,.75)"}}>{a.summary}</div>
          </div>
          <Ring score={a.riskScore||5} size={110}/>
        </div>
      </div>

      {/* Ask AI CTA */}
      <div style={{padding:"14px 20px 0"}}>
        <button onClick={onAsk} style={{width:"100%",display:"flex",alignItems:"center",gap:12,padding:"13px 18px",background:"var(--surface)",border:"1px solid var(--grey100)",borderRadius:16,cursor:"pointer",transition:"all .2s",boxShadow:"var(--sh-sm)"}}
          onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--n800)";e.currentTarget.style.background="var(--n50)";}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--grey100)";e.currentTarget.style.background="var(--surface)";}}>
          <div style={{width:36,height:36,borderRadius:12,background:"var(--n800)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <I n="chat" s={17} c="var(--g500)" sw={2.2}/>
          </div>
          <div style={{flex:1,textAlign:"left"}}>
            <div style={{fontWeight:700,fontSize:14,color:"var(--n900)"}}>Ask the AI anything about this contract</div>
            <div style={{fontSize:12.5,color:"var(--ink400)",marginTop:1}}>"Can they fire me without notice?" →</div>
          </div>
          <I n="chevR" s={15} c="var(--n400)"/>
        </button>
      </div>

      {/* Quick facts */}
      {a.quickFacts?.length>0&&(
        <div style={{padding:"14px 20px 0"}}>
          <div style={{fontSize:11,fontWeight:800,color:"var(--ink400)",letterSpacing:".10em",textTransform:"uppercase",marginBottom:10}}>Key Facts</div>
          <div style={{background:"var(--surface)",borderRadius:16,border:"1px solid var(--grey100)",overflow:"hidden",boxShadow:"var(--sh-sm)"}}>
            {a.quickFacts.map((f,i)=>(
              <div key={i} style={{display:"flex",gap:13,padding:"12px 17px",borderBottom:i<a.quickFacts.length-1?"1px solid var(--grey50)":"none",alignItems:"flex-start"}}>
                <div style={{width:22,height:22,borderRadius:8,background:"var(--n50)",border:"1px solid var(--n100)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:11,fontWeight:900,color:"var(--n800)",fontFamily:"'Playfair Display',serif",marginTop:1}}>{i+1}</div>
                <span style={{fontSize:13.5,lineHeight:1.65,color:"var(--ink700)"}}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div style={{padding:"14px 20px 0"}}>
        <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:2}}>
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} className={`tab-pill${tab===t.id?" on":""}`}>
              <I n={t.ic} s={13} c={tab===t.id?"var(--n800)":"var(--ink300)"}/>{t.lb}
            </button>
          ))}
        </div>
      </div>

      <div style={{padding:"14px 20px 0"}}>
        {tab==="overview"&&(
          <div>
            <div style={{background:"var(--surface)",borderRadius:16,border:"1px solid var(--grey100)",padding:20,marginBottom:14,boxShadow:"var(--sh-sm)"}}>
              <div style={{fontWeight:800,fontSize:14.5,color:"var(--n900)",marginBottom:18}}>Risk Breakdown</div>
              <Bar label="Financial Risk"       value={rd.financialRisk||0}     delay={0}  />
              <Bar label="Legal Liability"      value={rd.legalLiability||0}    delay={.08}/>
              <Bar label="Hidden Obligations"   value={rd.hiddenObligations||0} delay={.16}/>
              <Bar label="Termination Flexibility" value={rd.terminationFlex||0}delay={.24}/>
            </div>
            {(a.redFlags||[]).slice(0,3).map((f,i)=>(
              <div key={i} className="fu" style={{animationDelay:`${i*.07}s`,background:"var(--danger-bg)",border:"1px solid var(--danger-border)",borderRadius:15,padding:"14px 17px",marginBottom:10,display:"flex",gap:13}}>
                <span style={{fontSize:20}}>{f.emoji||"🚨"}</span>
                <div>
                  <div style={{fontWeight:800,fontSize:13.5,color:"var(--danger)",marginBottom:4}}>{f.title}</div>
                  <div style={{fontSize:13,color:"var(--ink700)",lineHeight:1.65}}>{f.description}</div>
                </div>
              </div>
            ))}
            {a.redFlags?.length>3&&<button className="btn-outline" style={{width:"100%",padding:"11px",borderColor:"var(--danger-border)",color:"var(--danger)"}} onClick={()=>setTab("flags")}>View {a.redFlags.length-3} more red flags →</button>}
          </div>
        )}
        {tab==="clauses"&&(
          <div>
            <div style={{fontSize:13.5,color:"var(--ink500)",marginBottom:14,lineHeight:1.65}}>Tap any clause to see plain-English explanation.</div>
            {(a.clauses||[]).map((c,i)=><ClauseCard key={i} c={c} i={i}/>)}
          </div>
        )}
        {tab==="flags"&&(
          <div>
            {(a.redFlags||[]).map((f,i)=>(
              <div key={i} className="fu" style={{animationDelay:`${i*.07}s`,background:"var(--surface)",border:`1px solid ${f.severity==="high"?"var(--danger-border)":"var(--warn-border)"}`,borderRadius:16,padding:"17px 19px",marginBottom:12,boxShadow:"var(--sh-sm)"}}>
                <div style={{display:"flex",gap:14}}>
                  <div style={{width:44,height:44,borderRadius:13,background:f.severity==="high"?"var(--danger-bg)":"var(--warn-bg)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{f.emoji||"🚨"}</div>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{fontWeight:800,fontSize:14,color:f.severity==="high"?"var(--danger)":"var(--warn)"}}>{f.title}</span>
                      <span style={{fontSize:10.5,fontWeight:800,color:f.severity==="high"?"var(--danger)":"var(--warn)",background:f.severity==="high"?"var(--danger-bg)":"var(--warn-bg)",padding:"2px 8px",borderRadius:99,textTransform:"uppercase",border:`1px solid ${f.severity==="high"?"var(--danger-border)":"var(--warn-border)"}`}}>{f.severity}</span>
                    </div>
                    <div style={{fontSize:13.5,color:"var(--ink700)",lineHeight:1.7}}>{f.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab==="negotiate"&&(
          <div>
            <div style={{background:"var(--n50)",border:"1px solid var(--n100)",borderRadius:16,padding:18,marginBottom:16}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:19,fontWeight:800,color:"var(--n900)",marginBottom:5}}>Negotiation Playbook</div>
              <div style={{fontSize:13.5,color:"var(--ink500)",lineHeight:1.65}}>Most people don't know contracts are negotiable. Here's exactly what to push back on.</div>
            </div>
            {(a.negotiationSuggestions||[]).map((s,i)=>(
              <div key={i} className="fu" style={{animationDelay:`${i*.07}s`,background:"var(--surface)",borderRadius:16,border:"1px solid var(--grey100)",padding:"16px 19px",marginBottom:12,boxShadow:"var(--sh-sm)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:9}}>
                  <div style={{fontWeight:700,fontSize:14,color:"var(--n900)",flex:1,paddingRight:10}}>📌 {s.item}</div>
                  <span style={{fontSize:10.5,fontWeight:800,padding:"3px 10px",borderRadius:99,background:s.priority==="high"?"var(--danger-bg)":s.priority==="medium"?"var(--warn-bg)":"var(--safe-bg)",color:s.priority==="high"?"var(--danger)":s.priority==="medium"?"var(--warn)":"var(--safe)",textTransform:"uppercase",letterSpacing:".05em",border:`1px solid ${s.priority==="high"?"var(--danger-border)":s.priority==="medium"?"var(--warn-border)":"var(--safe-border)"}`,flexShrink:0}}>{s.priority}</span>
                </div>
                {s.ask&&<div style={{background:"var(--n50)",border:"1px solid var(--n100)",borderRadius:11,padding:"9px 13px",marginBottom:9,fontSize:13.5,color:"var(--n800)",fontWeight:600}}>💬 {s.ask}</div>}
                <div style={{fontSize:13.5,color:"var(--ink500)",lineHeight:1.65}}>{s.reason}</div>
              </div>
            ))}
            <div style={{background:"var(--n800)",borderRadius:16,padding:"20px",textAlign:"center",marginTop:4}}>
              <div style={{fontSize:26,marginBottom:8}}>✉️</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:"white",marginBottom:6}}>Want a negotiation email?</div>
              <div style={{fontSize:13.5,color:"rgba(255,255,255,.6)",marginBottom:16,lineHeight:1.65}}>Ask the AI to draft a professional email for any of these points.</div>
              <button className="btn-gold" style={{width:"100%",padding:"12px"}}>Upgrade to Pro →</button>
            </div>
          </div>
        )}
        {tab==="simulate"&&(
          <div>
            <div style={{background:"var(--surface)",borderRadius:16,border:"1px solid var(--grey100)",padding:17,marginBottom:14,boxShadow:"var(--sh-sm)"}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:800,color:"var(--n900)",marginBottom:5}}>Contract Simulator</div>
              <div style={{fontSize:13.5,color:"var(--ink400)",lineHeight:1.65}}>What happens in real-world situations based on this contract.</div>
            </div>
            {(a.scenarios||[]).map((s,i)=>(
              <div key={i} className="fu" style={{animationDelay:`${i*.07}s`,background:"var(--surface)",borderRadius:16,border:"1px solid var(--grey100)",padding:"16px 18px",marginBottom:12,boxShadow:"var(--sh-sm)"}}>
                <div style={{fontWeight:700,fontSize:14,color:"var(--n900)",marginBottom:10,display:"flex",gap:10}}><span>❓</span>{s.question}</div>
                <div style={{padding:"11px 14px",background:"var(--n50)",border:"1px solid var(--n100)",borderRadius:11,fontSize:13.5,color:"var(--ink700)",lineHeight:1.7}}>{s.answer}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── ASK AI ─────────────────────────────────────────────────── */
const AskScreen = ({a,docText}) => {
  const [msgs,setMsgs]=useState([{role:"ai",text:a?`I've analyzed your ${a.documentType||"document"} (Risk: ${a.riskScore||"?"}/10). Ask me anything — what you can do, what's risky, or what to negotiate.`:"No document loaded yet. Go scan a document first, then come back to ask questions."}]);
  const [input,setInput]=useState("");
  const [busy,setBusy]=useState(false);
  const bottomRef=useRef();
  const quickQ=["What's the biggest risk?","Can I terminate early?","What are my obligations?","Should I sign this?","What rights am I giving up?"];

  const send=async q=>{
    const question=q||input.trim();if(!question||busy||!a)return;
    setInput("");setMsgs(m=>[...m,{role:"user",text:question}]);setBusy(true);
    try{const ans=await chatWithDoc(question,a);setMsgs(m=>[...m,{role:"ai",text:ans}]);}
    catch{setMsgs(m=>[...m,{role:"ai",text:"Sorry, try again."}]);}
    setBusy(false);setTimeout(()=>bottomRef.current?.scrollIntoView({behavior:"smooth"}),100);
  };
  useEffect(()=>bottomRef.current?.scrollIntoView({behavior:"smooth"}),[msgs]);

  return(
    <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 60px)"}}>
      <div style={{padding:"14px 20px",background:"var(--n800)",borderBottom:"1px solid rgba(255,255,255,.08)",flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:38,height:38,borderRadius:12,background:"var(--g500)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 3px 12px rgba(245,197,24,.4)"}}><I n="chat" s={18} c="var(--n900)" sw={2.2}/></div>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:800,color:"white"}}>Ask AI</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,.5)"}}>{a?`Based on: ${a.documentType||"your document"}`:"Scan a document first"}</div>
          </div>
        </div>
      </div>
      {a&&<div style={{padding:"10px 16px",borderBottom:"1px solid var(--grey100)",background:"var(--surface)",flexShrink:0}}>
        <div style={{display:"flex",gap:8,overflowX:"auto"}}>
          {quickQ.map(q=><button key={q} onClick={()=>send(q)} className="tab-pill" style={{fontSize:12}}>{q}</button>)}
        </div>
      </div>}
      <div style={{flex:1,overflowY:"auto",padding:"16px",background:"var(--canvas)"}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",marginBottom:14}}>
            {m.role==="ai"&&<div style={{width:32,height:32,borderRadius:11,background:"var(--n800)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginRight:10,marginTop:2}}><I n="scale" s={14} c="var(--g500)" sw={2.2}/></div>}
            <div style={{maxWidth:"78%",background:m.role==="ai"?"var(--surface)":"var(--n800)",borderRadius:m.role==="ai"?"4px 16px 16px 16px":"16px 4px 16px 16px",padding:"12px 15px",border:m.role==="ai"?"1px solid var(--grey100)":"none",boxShadow:"var(--sh-sm)"}}>
              <div style={{fontSize:14,lineHeight:1.72,color:m.role==="ai"?"var(--ink700)":"white",fontWeight:m.role==="user"?600:400}}>{m.text}</div>
            </div>
          </div>
        ))}
        {busy&&<div style={{display:"flex",gap:10,alignItems:"center",marginBottom:14}}>
          <div style={{width:32,height:32,borderRadius:11,background:"var(--n800)",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="scale" s={14} c="var(--g500)" sw={2.2}/></div>
          <div style={{background:"var(--surface)",border:"1px solid var(--grey100)",borderRadius:"4px 16px 16px 16px",padding:"12px 16px"}}><div style={{display:"flex",gap:5}}>{[0,1,2].map(i=><div key={i} style={{width:7,height:7,borderRadius:"50%",background:"var(--ink300)",animation:`pulse 1.2s ${i*.18}s infinite`}}/>)}</div></div>
        </div>}
        <div ref={bottomRef}/>
      </div>
      <div style={{padding:"12px 16px",background:"var(--surface)",borderTop:"1px solid var(--grey100)",flexShrink:0}}>
        <div style={{display:"flex",gap:10,alignItems:"flex-end"}}>
          <textarea value={input} onChange={e=>setInput(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}
            placeholder={a?"Ask anything about this document…":"Scan a document first"} rows={1} disabled={!a}
            style={{flex:1,background:"var(--canvas)",border:"1.5px solid var(--grey100)",borderRadius:13,padding:"11px 15px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:14,color:"var(--ink900)",resize:"none",outline:"none",lineHeight:1.5,maxHeight:100,transition:"border-color .2s",opacity:a?1:.5}}
            onFocus={e=>e.target.style.borderColor="var(--n800)"}
            onBlur={e=>e.target.style.borderColor="var(--grey100)"}/>
          <button onClick={()=>send()} disabled={!input.trim()||busy||!a}
            style={{width:44,height:44,borderRadius:13,background:input.trim()&&!busy&&a?"var(--n800)":"var(--grey50)",border:`1px solid ${input.trim()&&!busy&&a?"transparent":"var(--grey100)"}`,cursor:input.trim()&&!busy&&a?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .2s",boxShadow:input.trim()&&!busy&&a?"0 4px 14px rgba(27,58,87,.3)":"none"}}>
            <I n="send" s={16} c={input.trim()&&!busy&&a?"var(--g500)":"var(--ink300)"} sw={2.2}/>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── LIBRARY ───────────────────────────────────────────────── */
const LibraryScreen = ({docs,onDoc}) => {
  const [query,setQuery]=useState("");
  const [filter,setFilter]=useState("All");
  const [sortBy,setSortBy]=useState("date");
  const cats=["All","Lease","Employment","NDA","Freelance","Terms"];
  const filtered=docs.filter(d=>filter==="All"||d.category===filter).filter(d=>!query||d.documentType.toLowerCase().includes(query.toLowerCase())||d.summary.toLowerCase().includes(query.toLowerCase())).sort((a,b)=>sortBy==="risk"?b.riskScore-a.riskScore:new Date(b.date)-new Date(a.date));

  return(
    <div style={{height:"calc(100vh - 60px)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{padding:"16px 20px 12px",borderBottom:"1px solid var(--grey100)",background:"var(--surface)",flexShrink:0}}>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,color:"var(--n900)",marginBottom:12}}>Document Library</div>
        <div style={{position:"relative",marginBottom:12}}>
          <input className="input-f" placeholder="Search documents, clauses, terms…" value={query} onChange={e=>setQuery(e.target.value)} style={{paddingLeft:40}}/>
          <div style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)"}}><I n="search" s={16} c="var(--ink300)"/></div>
          {query&&<button onClick={()=>setQuery("")} style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--ink300)"}}><I n="x" s={14}/></button>}
        </div>
        <div style={{display:"flex",gap:7,overflowX:"auto"}}>
          {cats.map(c=><button key={c} className={`tab-pill${filter===c?" on":""}`} onClick={()=>setFilter(c)}>{c}</button>)}
        </div>
      </div>
      <div style={{padding:"10px 20px",borderBottom:"1px solid var(--grey50)",background:"var(--canvas)",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
        <span style={{fontSize:12.5,color:"var(--ink400)",fontWeight:600}}>{filtered.length} document{filtered.length!==1?"s":""}</span>
        <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={{background:"var(--surface)",border:"1px solid var(--grey100)",borderRadius:8,padding:"5px 10px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:12,color:"var(--ink700)",outline:"none",cursor:"pointer"}}>
          <option value="date">Newest</option><option value="risk">Highest Risk</option>
        </select>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"12px 20px 16px",background:"var(--canvas)"}}>
        {filtered.length===0?(
          <div style={{textAlign:"center",padding:"60px 20px"}}>
            <div style={{opacity:.2,marginBottom:14}}><I n="search" s={48} c="var(--ink300)"/></div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:"var(--ink300)",marginBottom:5}}>No documents found</div>
            <div style={{fontSize:13.5,color:"var(--ink300)"}}>{query?"Try a different search":"Scan your first document"}</div>
          </div>
        ):(
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {filtered.map((d,i)=><DocCard key={d.id||i} doc={d} onClick={onDoc}/>)}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── NOTIFICATIONS ─────────────────────────────────────────── */
const NotifPanel = ({notifs,onClose,onMarkRead}) => (
  <div className="fi" style={{position:"fixed",inset:0,zIndex:500,background:"rgba(15,37,64,.35)",backdropFilter:"blur(4px)"}} onClick={onClose}>
    <div className="sr" onClick={e=>e.stopPropagation()} style={{position:"absolute",top:0,right:0,bottom:0,width:"92%",maxWidth:420,background:"var(--surface)",borderLeft:"1px solid var(--grey100)",display:"flex",flexDirection:"column",boxShadow:"-8px 0 40px rgba(15,37,64,.12)"}}>
      <div style={{padding:"20px",borderBottom:"1px solid var(--grey100)",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
        <div>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,color:"var(--n900)"}}>Notifications</div>
          {notifs.filter(n=>!n.read).length>0&&<div style={{fontSize:12.5,color:"var(--ink400)",marginTop:2}}>{notifs.filter(n=>!n.read).length} unread</div>}
        </div>
        <div style={{display:"flex",gap:10}}>
          {notifs.filter(n=>!n.read).length>0&&<button onClick={onMarkRead} className="btn-ghost" style={{padding:"7px 14px",fontSize:12.5}}>Mark read</button>}
          <button onClick={onClose} style={{width:36,height:36,borderRadius:11,background:"var(--grey50)",border:"1px solid var(--grey100)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}><I n="x" s={15} c="var(--ink400)"/></button>
        </div>
      </div>
      <div style={{flex:1,overflowY:"auto"}}>
        {notifs.map((n,i)=>(
          <div key={n.id} style={{display:"flex",gap:13,padding:"15px 20px",borderBottom:"1px solid var(--grey50)",background:n.read?"transparent":"var(--n50)"}}>
            <div style={{width:40,height:40,borderRadius:13,background:n.type==="alert"?"var(--danger-bg)":n.type==="reminder"?"var(--warn-bg)":n.type==="success"?"var(--safe-bg)":"var(--info-bg)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,flexShrink:0}}>{n.icon}</div>
            <div style={{flex:1}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
                <div style={{fontWeight:n.read?500:700,fontSize:13.5,color:n.read?"var(--ink700)":"var(--n900)"}}>{n.title}</div>
                {!n.read&&<div style={{width:8,height:8,borderRadius:"50%",background:"var(--n800)",flexShrink:0,marginTop:5}}/>}
              </div>
              <div style={{fontSize:12.5,color:"var(--ink400)",lineHeight:1.6,marginBottom:4}}>{n.body}</div>
              <div style={{fontSize:11.5,color:"var(--ink300)",fontWeight:600}}>{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ── PROFILE ───────────────────────────────────────────────── */
const ProfileScreen = ({user,onLogout}) => {
  const [section,setSection]=useState(null);
  const [settings,setSettings]=useState({autoDelete:true,anonymize:true,notifications:false,language:"English",complexity:"Simple",aiStyle:"Friendly"});
  const tog=k=>setSettings(x=>({...x,[k]:!x[k]}));

  const Row=({ic,lb,sub,children,last,col})=>(
    <div style={{display:"flex",alignItems:"center",padding:"15px 18px",borderBottom:last?"none":"1px solid var(--grey50)"}}>
      <div style={{width:36,height:36,borderRadius:12,background:col?`${col}18`:"var(--grey50)",display:"flex",alignItems:"center",justifyContent:"center",marginRight:13,flexShrink:0}}><I n={ic} s={17} c={col||"var(--ink400)"}/></div>
      <div style={{flex:1}}><div style={{fontSize:14,fontWeight:600,color:"var(--n900)"}}>{lb}</div>{sub&&<div style={{fontSize:12,color:"var(--ink400)",marginTop:2}}>{sub}</div>}</div>
      {children}
    </div>
  );
  const Sel=({val,opts,onChange})=>(
    <select value={val} onChange={e=>onChange(e.target.value)} style={{background:"var(--grey50)",border:"1px solid var(--grey100)",borderRadius:9,padding:"6px 10px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,color:"var(--ink900)",outline:"none",cursor:"pointer"}}>
      {opts.map(o=><option key={o}>{o}</option>)}
    </select>
  );

  const sections = {
    account:(
      <div style={{height:"calc(100vh - 60px)",overflowY:"auto",padding:"20px 20px 90px"}}>
        <button onClick={()=>setSection(null)} className="btn-ghost" style={{padding:"8px 14px",fontSize:13,marginBottom:22,display:"flex",alignItems:"center",gap:6}}><I n="arrowL" s={14} c="var(--n800)"/> Back</button>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,color:"var(--n900)",marginBottom:20}}>Account Details</div>
        <div style={{background:"var(--surface)",borderRadius:18,border:"1px solid var(--grey100)",padding:20,marginBottom:16,boxShadow:"var(--sh-sm)"}}>
          <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:18,paddingBottom:18,borderBottom:"1px solid var(--grey100)"}}>
            <Avatar name={user?.name||"Alex"} size={56}/>
            <div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:800,color:"var(--n900)"}}>{user?.name||"Alex Johnson"}</div>
              <div style={{fontSize:13,color:"var(--ink400)",marginTop:2}}>{user?.email||"alex@example.com"}</div>
              <div style={{fontSize:12,color:"var(--n800)",fontWeight:700,marginTop:4}}>Free Plan · Joined {user?.joined||"March 2025"}</div>
            </div>
          </div>
          <Row ic="edit" lb="Edit Profile" sub="Update name and photo" col="var(--info)"><I n="chevR" s={14} c="var(--ink300)"/></Row>
          <Row ic="mail" lb="Email Address" sub={user?.email||"alex@example.com"} col="var(--info)"><I n="chevR" s={14} c="var(--ink300)"/></Row>
          <Row ic="lock" lb="Change Password" col="var(--warn)" last><I n="chevR" s={14} c="var(--ink300)"/></Row>
        </div>
        <div style={{background:"var(--surface)",borderRadius:18,border:"1px solid var(--grey100)",overflow:"hidden",boxShadow:"var(--sh-sm)"}}>
          <Row ic="eye" lb="Explanation Style" col="var(--info)"><Sel val={settings.complexity} opts={["Simple","Detailed","Expert"]} onChange={v=>setSettings(x=>({...x,complexity:v}))}/></Row>
          <Row ic="chat" lb="AI Response Style" col="var(--safe)"><Sel val={settings.aiStyle} opts={["Friendly","Formal","Concise"]} onChange={v=>setSettings(x=>({...x,aiStyle:v}))}/></Row>
          <Row ic="book" lb="Language" col="var(--warn)" last><Sel val={settings.language} opts={["English","Spanish","French","German","Mandarin","Portuguese"]} onChange={v=>setSettings(x=>({...x,language:v}))}/></Row>
        </div>
      </div>
    ),
    privacy:(
      <div style={{height:"calc(100vh - 60px)",overflowY:"auto",padding:"20px 20px 90px"}}>
        <button onClick={()=>setSection(null)} className="btn-ghost" style={{padding:"8px 14px",fontSize:13,marginBottom:22,display:"flex",alignItems:"center",gap:6}}><I n="arrowL" s={14} c="var(--n800)"/> Back</button>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,color:"var(--n900)",marginBottom:20}}>Privacy & Security</div>
        <div style={{background:"var(--surface)",borderRadius:18,border:"1px solid var(--grey100)",overflow:"hidden",boxShadow:"var(--sh-sm)"}}>
          <Row ic="trash" lb="Auto-Delete Documents" sub="Remove all scans after 30 days" col="var(--danger)"><Toggle on={settings.autoDelete} fn={()=>tog("autoDelete")}/></Row>
          <Row ic="lock"  lb="End-to-End Encryption" sub="AES-256 always active" col="var(--safe)"><div style={{fontSize:12,color:"var(--safe)",fontWeight:700,display:"flex",alignItems:"center",gap:4}}><I n="check" s={12} c="var(--safe)" sw={2.5}/>Active</div></Row>
          <Row ic="eye"   lb="Anonymized AI Processing" sub="AI never sees personal info" col="var(--info)" last><Toggle on={settings.anonymize} fn={()=>tog("anonymize")}/></Row>
        </div>
        <div style={{marginTop:14,padding:"14px 16px",background:"var(--safe-bg)",border:"1px solid var(--safe-border)",borderRadius:13,fontSize:13,color:"var(--safe)",lineHeight:1.65}}>🔒 Fully GDPR and CCPA compliant. Your data is encrypted in transit and at rest.</div>
      </div>
    ),
    help:(
      <div style={{height:"calc(100vh - 60px)",overflowY:"auto",padding:"20px 20px 90px"}}>
        <button onClick={()=>setSection(null)} className="btn-ghost" style={{padding:"8px 14px",fontSize:13,marginBottom:22,display:"flex",alignItems:"center",gap:6}}><I n="arrowL" s={14} c="var(--n800)"/> Back</button>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,color:"var(--n900)",marginBottom:20}}>Help & Support</div>
        <div style={{display:"flex",gap:12,marginBottom:22}}>
          {[{ic:"chat",lb:"Live Chat",sub:"Usually <5 min"},{ic:"mail",lb:"Email",sub:"Within 24h"}].map(c=>(
            <div key={c.lb} className="card-hvr" style={{flex:1,background:"var(--surface)",borderRadius:14,border:"1px solid var(--grey100)",padding:"16px 12px",textAlign:"center",boxShadow:"var(--sh-sm)"}}>
              <div style={{marginBottom:8,display:"flex",justifyContent:"center"}}><I n={c.ic} s={22} c="var(--n800)"/></div>
              <div style={{fontWeight:700,fontSize:13.5,color:"var(--n900)"}}>{c.lb}</div>
              <div style={{fontSize:12,color:"var(--ink400)",marginTop:3}}>{c.sub}</div>
            </div>
          ))}
        </div>
        <div style={{fontWeight:800,fontSize:15,color:"var(--n900)",marginBottom:12}}>Frequently Asked Questions</div>
        {FAQS.map((f,i)=>{
          const [open,setOpen]=useState(false);
          return(
            <div key={i} style={{background:"var(--surface)",borderRadius:14,border:"1px solid var(--grey100)",marginBottom:8,overflow:"hidden",boxShadow:"var(--sh-sm)"}}>
              <div onClick={()=>setOpen(!open)} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 17px",cursor:"pointer"}}>
                <span style={{fontWeight:600,fontSize:14,color:"var(--n900)",paddingRight:12,flex:1}}>{f.q}</span>
                <div style={{transform:open?"rotate(180deg)":"none",transition:"transform .2s"}}><I n="chevD" s={15} c="var(--ink300)"/></div>
              </div>
              {open&&<div className="fi" style={{padding:"0 17px 15px",borderTop:"1px solid var(--grey50)",paddingTop:13,fontSize:13.5,color:"var(--ink700)",lineHeight:1.72}}>{f.a}</div>}
            </div>
          );
        })}
      </div>
    ),
    feedback:(
      <div style={{height:"calc(100vh - 60px)",overflowY:"auto",padding:"20px 20px 90px"}}>
        <button onClick={()=>setSection(null)} className="btn-ghost" style={{padding:"8px 14px",fontSize:13,marginBottom:22,display:"flex",alignItems:"center",gap:6}}><I n="arrowL" s={14} c="var(--n800)"/> Back</button>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,color:"var(--n900)",marginBottom:6}}>Give Feedback</div>
        <div style={{fontSize:13.5,color:"var(--ink500)",marginBottom:22,lineHeight:1.65}}>Help us improve ClearSign.</div>
        <div style={{background:"var(--surface)",borderRadius:18,border:"1px solid var(--grey100)",padding:20,boxShadow:"var(--sh-sm)"}}>
          <div style={{fontWeight:700,fontSize:14,color:"var(--n900)",marginBottom:12}}>How are we doing?</div>
          <div style={{display:"flex",gap:10,marginBottom:18}}>
            {[1,2,3,4,5].map(r=>(
              <button key={r} style={{flex:1,padding:"11px 4px",borderRadius:12,border:"1.5px solid var(--grey100)",background:"var(--grey50)",cursor:"pointer",fontSize:20,transition:"all .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--n800)";e.currentTarget.style.background="var(--n50)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--grey100)";e.currentTarget.style.background="var(--grey50)"}}>
                ⭐
              </button>
            ))}
          </div>
          <textarea placeholder="What can we improve? What do you love?"
            style={{width:"100%",minHeight:100,background:"var(--canvas)",border:"1.5px solid var(--grey100)",borderRadius:13,padding:"12px 14px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:14,lineHeight:1.72,color:"var(--ink900)",resize:"vertical",outline:"none"}}
            onFocus={e=>e.target.style.borderColor="var(--n800)"}
            onBlur={e=>e.target.style.borderColor="var(--grey100)"}/>
          <button className="btn-navy" style={{width:"100%",padding:"13px",marginTop:14}}>
            <I n="send" s={16} c="white" sw={2.5}/> Submit Feedback
          </button>
        </div>
      </div>
    ),
    activity:(
      <div style={{height:"calc(100vh - 60px)",overflowY:"auto",padding:"20px 20px 90px"}}>
        <button onClick={()=>setSection(null)} className="btn-ghost" style={{padding:"8px 14px",fontSize:13,marginBottom:22,display:"flex",alignItems:"center",gap:6}}><I n="arrowL" s={14} c="var(--n800)"/> Back</button>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,color:"var(--n900)",marginBottom:20}}>Activity History</div>
        <div style={{background:"var(--surface)",borderRadius:18,border:"1px solid var(--grey100)",overflow:"hidden",boxShadow:"var(--sh-sm)"}}>
          {[{icon:"🔍",a:"Analyzed document",d:"Residential Lease Agreement",t:"2h ago",col:"var(--info)"},{icon:"💬",a:"Asked AI",d:"\"Can they raise my rent?\"",t:"2h ago",col:"var(--g500)"},{icon:"📄",a:"Analyzed document",d:"Employment Contract",t:"2d ago",col:"var(--info)"},{icon:"✅",a:"Decision: Signed",d:"Freelance Service Agreement",t:"5d ago",col:"var(--safe)"},{icon:"🤝",a:"Negotiated",d:"NDA Agreement",t:"1wk ago",col:"var(--warn)"}].map((a,i)=>(
            <div key={i} style={{display:"flex",gap:13,padding:"14px 18px",borderBottom:i<4?"1px solid var(--grey50)":"none",alignItems:"flex-start"}}>
              <div style={{width:36,height:36,borderRadius:12,background:"var(--grey50)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,flexShrink:0}}>{a.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:600,fontSize:13.5,color:"var(--n900)"}}>{a.a}</div>
                <div style={{fontSize:12.5,color:"var(--ink400)",marginTop:2}}>{a.d}</div>
              </div>
              <div style={{fontSize:11.5,color:"var(--ink300)",fontWeight:600,flexShrink:0}}>{a.t}</div>
            </div>
          ))}
        </div>
      </div>
    )
  };

  if(section&&sections[section]) return <>{sections[section]}</>;

  return(
    <div style={{height:"calc(100vh - 60px)",overflowY:"auto",paddingBottom:90}}>
      <div style={{background:"var(--n800)",padding:"24px 20px 32px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-40,right:-40,width:180,height:180,borderRadius:"50%",background:"rgba(245,197,24,.12)",pointerEvents:"none"}}/>
        <div className="fu" style={{display:"flex",alignItems:"center",gap:16,marginBottom:20}}>
          <Avatar name={user?.name||"Alex"} size={60}/>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:900,color:"white"}}>{user?.name||"Alex Johnson"}</div>
            <div style={{fontSize:13,color:"rgba(255,255,255,.55)",marginTop:3}}>{user?.email||"alex@example.com"}</div>
            <span style={{display:"inline-block",marginTop:6,fontSize:12,fontWeight:700,color:"var(--g500)",background:"rgba(245,197,24,.15)",border:"1px solid rgba(245,197,24,.3)",padding:"3px 10px",borderRadius:99}}>Free Plan</span>
          </div>
        </div>
        <div className="fu d1" style={{display:"flex",gap:10}}>
          {[{n:"5",l:"Total Scans"},{n:"7.2",l:"Avg Risk"},{n:"2",l:"Saved"},{n:"3",l:"Shared"}].map(s=>(
            <div key={s.l} style={{flex:1,background:"rgba(255,255,255,.07)",borderRadius:12,padding:"11px 8px",textAlign:"center"}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:900,color:"var(--g400)"}}>{s.n}</div>
              <div style={{fontSize:10.5,color:"rgba(255,255,255,.4)",marginTop:3,fontWeight:600}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{padding:"20px"}}>
        <div className="fu" style={{background:"var(--n50)",borderRadius:18,border:"1px solid var(--n100)",padding:20,marginBottom:22}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:800,color:"var(--n900)",marginBottom:5}}>⚡ Upgrade to Pro</div>
          <div style={{fontSize:13.5,color:"var(--ink500)",lineHeight:1.65,marginBottom:14}}>Unlimited scans · Email templates · Compare contracts · Priority AI</div>
          <div style={{height:6,background:"var(--grey100)",borderRadius:99,marginBottom:10,overflow:"hidden"}}>
            <div style={{width:"60%",height:"100%",background:"linear-gradient(90deg,var(--n800),var(--n600))",borderRadius:99}}/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:12.5,color:"var(--ink400)"}}>3 of 5 scans used</span>
            <button className="btn-navy" style={{padding:"8px 18px",fontSize:13,borderRadius:10}}>$12/mo →</button>
          </div>
        </div>

        <div className="fu d1" style={{background:"var(--surface)",borderRadius:18,border:"1px solid var(--grey100)",overflow:"hidden",marginBottom:16,boxShadow:"var(--sh-sm)"}}>
          {[
            {id:"account", ic:"user",     lb:"Account Details",     col:"var(--info)"},
            {id:"privacy", ic:"lock",     lb:"Privacy & Security",   col:"var(--safe)"},
            {id:"activity",ic:"activity", lb:"Activity History",     col:"var(--info)"},
            {id:"help",    ic:"help",     lb:"Help & Support",       col:"var(--g500)"},
            {id:"feedback",ic:"star",     lb:"Feedback",             col:"var(--warn)"},
          ].map((item,i)=>(
            <div key={item.id} onClick={()=>setSection(item.id)}
              style={{display:"flex",alignItems:"center",gap:13,padding:"14px 18px",borderBottom:i<4?"1px solid var(--grey50)":"none",cursor:"pointer",transition:"background .15s"}}
              onMouseEnter={e=>e.currentTarget.style.background="var(--grey50)"}
              onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
              <div style={{width:36,height:36,borderRadius:12,background:`${item.col}18`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n={item.ic} s={17} c={item.col}/></div>
              <span style={{flex:1,fontWeight:600,fontSize:14,color:"var(--n900)"}}>{item.lb}</span>
              <I n="chevR" s={14} c="var(--ink300)"/>
            </div>
          ))}
        </div>

        <button className="btn-outline fu d2" style={{width:"100%",padding:"13px",marginBottom:14}} onClick={onLogout}>Sign Out</button>
        <div style={{textAlign:"center",fontSize:12,color:"var(--ink300)",lineHeight:1.8}}>
          ClearSign v4.0 · <span style={{color:"var(--n800)",cursor:"pointer",fontWeight:600}}>Privacy</span> · <span style={{color:"var(--n800)",cursor:"pointer",fontWeight:600}}>Terms</span><br/>
          ⚖️ Built for everyday people worldwide
        </div>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════════════════════════
   ROOT APP
════════════════════════════════════════════════════════════════ */
export default function App() {
  const [user,setUser]=useState(null);
  const [onboarding,setOnboarding]=useState(false);
  const [screen,setScreen]=useState("dashboard");
  const [analysis,setAnalysis]=useState(null);
  const [docText,setDocText]=useState("");
  const [analyzing,setAnalyzing]=useState(false);
  const [docs,setDocs]=useState(MOCK_DOCS);
  const [notifs,setNotifs]=useState(MOCK_NOTIFS);
  const [showNotifs,setShowNotifs]=useState(false);
  const [toast,setToast]=useState(null);

  const unread=notifs.filter(n=>!n.read).length;
  const showToast=(msg,type="success")=>{setToast({msg,type});setTimeout(()=>setToast(null),3000);};

  const handleAuth=userData=>{setUser(userData);setOnboarding(true);};

  const handleAnalyze=async text=>{
    setDocText(text);setAnalyzing(true);setScreen("analyzing");
    try{
      const r=await analyzeDoc(text);
      r.date=new Date().toISOString();r.id=Date.now();
      r.category=r.documentType?.includes("Lease")?"Lease":r.documentType?.includes("Employment")?"Employment":r.documentType?.includes("NDA")?"NDA":r.documentType?.includes("Freelance")?"Freelance":"Terms";
      r.tags=(r.redFlags||[]).slice(0,2).map(f=>f.title?.slice(0,18)||"");
      setAnalysis(r);setDocs(d=>[r,...d]);setScreen("results");showToast("Analysis complete!");
    }catch{showToast("Analysis failed. Try again.","error");setScreen("upload");}
    setAnalyzing(false);
  };

  if(!user)  return <><G/><AuthScreen onAuth={handleAuth}/></>;
  if(onboarding) return <><G/><OnboardingScreen user={user} onDone={()=>setOnboarding(false)}/></>;

  return(
    <div style={{maxWidth:480,margin:"0 auto",height:"100vh",background:"var(--canvas)",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column"}}>
      <G/>

      {/* Toast */}
      {toast&&(
        <div className="fi" style={{position:"fixed",top:16,left:"50%",transform:"translateX(-50%)",background:toast.type==="error"?"var(--danger)":"var(--n800)",color:"white",padding:"11px 20px",borderRadius:12,zIndex:999,fontSize:13.5,fontWeight:600,boxShadow:"var(--sh-md)",display:"flex",alignItems:"center",gap:8,maxWidth:320,border:`1px solid ${toast.type==="error"?"var(--danger2)":"var(--n600)"}`,whiteSpace:"nowrap"}}>
          {toast.type==="error"?"❌":"✅"} {toast.msg}
        </div>
      )}

      {showNotifs&&<NotifPanel notifs={notifs} onClose={()=>setShowNotifs(false)} onMarkRead={()=>setNotifs(n=>n.map(x=>({...x,read:true})))}/>}

      {screen==="analyzing"?(
        <div style={{flex:1,overflow:"hidden"}}><AnalyzingScreen/></div>
      ):(
        <>
          <TopHeader user={user} notifCount={unread} onNotif={()=>setShowNotifs(true)} onProfile={()=>setScreen("profile")}/>
          <div style={{flex:1,overflow:"hidden",position:"relative",background:"var(--canvas)"}}>
            {screen==="dashboard"&&<DashboardScreen user={user} docs={docs} onScan={()=>setScreen("upload")} onDoc={d=>{setAnalysis(d);setScreen("results");}}/>}
            {screen==="upload"   &&<UploadScreen onAnalyze={handleAnalyze} loading={analyzing}/>}
            {screen==="results"  &&<ResultsScreen a={analysis} onBack={()=>setScreen("dashboard")} onAsk={()=>setScreen("ask")}/>}
            {screen==="library"  &&<LibraryScreen docs={docs} onDoc={d=>{setAnalysis(d);setScreen("results");}}/>}
            {screen==="ask"      &&<AskScreen a={analysis} docText={docText}/>}
            {screen==="profile"  &&<ProfileScreen user={user} onLogout={()=>{setUser(null);setScreen("dashboard");}}/>}
          </div>
          <BottomNav active={screen} set={setScreen}/>
        </>
      )}
    </div>
  );
}