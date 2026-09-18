/**
 * AapV - Core Application & AI Gateway Server (SIH 2026)
 * Supports Express and standalone Node.js HTTP runtime without extra setup.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Load environment variables from .env if present
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const idx = trimmed.indexOf('=');
        if (idx !== -1) {
          const key = trimmed.substring(0, idx).trim();
          const val = trimmed.substring(idx + 1).trim();
          if (!process.env[key]) process.env[key] = val;
        }
      }
    });
  }
} catch (e) {
  console.warn('Could not read .env file:', e.message);
}

const PORT = process.env.PORT || 3000;
const AI_API_KEY = process.env.AI_API_KEY || 'AQ.Ab8RN6K8ik7Rm3yoG4FyfpoTCWcWdV2S6mqRcVz1HBXq86iCYQ';
const AI_MODEL = process.env.AI_MODEL || 'gemini-3.6-flash';
const AI_ENDPOINT = process.env.AI_ENDPOINT || 'https://generativelanguage.googleapis.com/v1beta/models';

// MIME types mapping
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg'
};

// Knowledge base representation for pseudo data
const AAPV_PSEUDO_DATA = {
  stats: {
    totalSubmissions: 2481,
    activePrototypes: 428,
    completedSolutions: 126,
    activeDistricts: 24
  },
  projects: [
    {
      id: "AAPV-2026-0842",
      title: "Low-cost Rural Water Purification",
      domain: "water",
      district: "Dumka",
      status: "ongoing",
      progress: 68,
      lead: "BIT Mesra • Dr. Ananya Kumar",
      beneficiaries: "4,200 villagers in Shikaripara",
      details: "High iron & bacterial contamination in 8 handpumps. Developing graphene-sand solar filter."
    },
    {
      id: "AAPV-2026-0914",
      title: "IoT Smart Soil Moisture & Drip Irrigation",
      domain: "agri",
      district: "Hazaribagh",
      status: "ongoing",
      progress: 45,
      lead: "VBU Hazaribagh • Prof. Rajesh Sinha",
      beneficiaries: "350 vegetable farmers in Ichak",
      details: "Automated moisture sensors with low-power solar micro-controllers."
    },
    {
      id: "AAPV-2026-1033",
      title: "Decentralized Solar Cold Storage for SHG Produce",
      domain: "env",
      district: "Giridih",
      status: "ongoing",
      progress: 78,
      lead: "NIT Jamshedpur • Dr. Priya Verma",
      beneficiaries: "180 Women SHG Members",
      details: "Thermal battery field trials for tomato and chilli produce preservation."
    },
    {
      id: "AAPV-2026-0412",
      title: "Arsenic & Iron Well Water Filtration Unit",
      domain: "water",
      district: "Dhanbad",
      status: "completed",
      progress: 100,
      lead: "IIT (ISM) Dhanbad • Environmental Lab",
      beneficiaries: "5,600 residents in Nirsa",
      details: "Fully installed and community-managed drinking well filtration."
    },
    {
      id: "AAPV-2026-0529",
      title: "Community Biogas & Waste-to-Energy Unit",
      domain: "env",
      district: "Ranchi",
      status: "completed",
      progress: 100,
      lead: "Birsa Agricultural University (BAU) Ranchi",
      beneficiaries: "140 households in Ormanjhi",
      details: "Cattle dung waste transformed into clean cooking fuel and organic fertilizer."
    },
    {
      id: "AAPV-2026-0681",
      title: "Smart Low-Cost Solar Classroom Lighting & Projector",
      domain: "edu",
      district: "East Singhbhum",
      status: "completed",
      progress: 100,
      lead: "Kolhan University • Chaibasa",
      beneficiaries: "1,150 students across 8 tribal schools",
      details: "Off-grid classroom lighting and digital education stations in Ghatshila."
    },
    {
      id: "AAPV-2026-1188",
      title: "Suspended Bamboo-Steel Footbridge for Monsoon Access",
      domain: "infra",
      district: "Simdega",
      status: "available",
      progress: 15,
      lead: "Open for University Adoption",
      beneficiaries: "2,800 villagers",
      details: "Safe river crossing for school children during heavy monsoons."
    },
    {
      id: "AAPV-2026-1205",
      title: "Natural Gravity-Fed Spring Water Piping System",
      domain: "water",
      district: "Khunti",
      status: "available",
      progress: 10,
      lead: "Open for University Adoption",
      beneficiaries: "950 tribal residents",
      details: "High altitude natural spring water piping to downhill hamlets."
    }
  ]
};

/**
 * Dynamic Intelligent Local Categorizer (Used if offline or upstream rate-limited)
 * Calculates nuanced continuous urgency scores, specific departments, matching faculties and CSR budgets.
 */
function localCategorize(text, location = '') {
  const lower = (text + ' ' + location).toLowerCase();
  
  // 1. Calculate dynamic urgency score (0.48 to 0.98)
  let urgencyScore = 0.55;
  if (/death|poison|arsenic|fluoride|outbreak|epidemic|icu|ambulance|casualty|collapse|flood|urgent|emergency|danger|risk|starvation|fatal|toxic/.test(lower)) {
    urgencyScore += 0.28;
  }
  if (/ill|sick|vomit|diarrhea|infection|children|child|infant|women|girl|pregnant|student|students|patient|hospital/.test(lower)) {
    urgencyScore += 0.10;
  }
  if (/months|month|years|year|weeks|week|since|daily|long time|frequently/.test(lower)) {
    urgencyScore += 0.05;
  }
  if (/village|entire|whole|all|hundreds|panchayat|community|block|tola|families|people/.test(lower)) {
    urgencyScore += 0.06;
  }
  urgencyScore = Math.min(0.98, Math.max(0.48, Math.round(urgencyScore * 100) / 100));
  const urgency = urgencyScore >= 0.80 ? "High" : (urgencyScore >= 0.60 ? "Medium" : "Low");

  // 2. Domain classification with specific department matching
  let category = "infra";
  let categoryLabel = "Rural Infrastructure, Roads & Connectivity";
  let suggestedDept = "Rural Development Department & Panchayati Raj Engineering Wing";
  let matchedFaculty = "Civil Highway Engineering • Geospatial Survey Cell";
  let baseFacultyScore = 87;
  let baseFunding = 360000;

  // Water & Sanitation
  if (/water|handpump|पानी|चापाकल|दᱟᱜ|fluoride|arsenic|contamin|well|नल|filter|pipe|borewell|tank|chlorin|drinking|jal|swachh/.test(lower)) {
    category = "water";
    categoryLabel = "Water Quality & Rural Sanitation";
    baseFunding = 380000;
    if (/arsenic|fluoride|poison|toxic|yellow|smell|chem|test|lab|quality/.test(lower)) {
      suggestedDept = "DWSD State Water Quality Directorate & Jal Jeevan Lab";
      matchedFaculty = "Environmental Toxicologists • Chemical Sciences • Water Filtration";
      baseFacultyScore = 94;
    } else if (/pipe|tap|jal jeevan|valve|supply|tank|distribution/.test(lower)) {
      suggestedDept = "Panchayati Raj Piped Water Supply Division (Har Ghar Jal)";
      matchedFaculty = "Civil Water Hydraulics • Rural Piped Systems • IoT Monitoring";
      baseFacultyScore = 91;
    } else if (/handpump|chaapkal|चापाकल|boring|borewell|repair|mechanic/.test(lower)) {
      suggestedDept = "District Jal Swachhata Division (DWSD Mechanics & Repair Cell)";
      matchedFaculty = "Mechanical Engineering • Groundwater Hydrogeology Lab";
      baseFacultyScore = 89;
    } else {
      suggestedDept = "District Jal Swachhata Division (DWSD Jharkhand)";
      matchedFaculty = "Environmental Eng. • Chemistry • Rural Water Systems";
      baseFacultyScore = 91;
    }
  }
  // Agriculture & Irrigation
  else if (/crop|farm|irrigation|धान|फसल|किसान|ᱪᱟᱥ|soil|seed|canal|नहर|paddy|pest|drought|kharif|rabi|mand|fertiliz|kendra/.test(lower)) {
    category = "agri";
    categoryLabel = "Agriculture, Irrigation & Agritech";
    baseFunding = 420000;
    if (/canal|nahar|dam|irrigation|lift|water resource|drought|bore/.test(lower)) {
      suggestedDept = "Minor Irrigation Directorate & Water Resources Department";
      matchedFaculty = "Agricultural Water Resources • Smart Micro-Irrigation Lab";
      baseFacultyScore = 93;
    } else if (/pest|disease|worm|keeda|fungus|blight|seed|fertiliz/.test(lower)) {
      suggestedDept = "District Krishi Vigyan Kendra (KVK) & Plant Protection Directorate";
      matchedFaculty = "Agronomy • Botanical Diagnostics • Organic Entomology";
      baseFacultyScore = 94;
    } else {
      suggestedDept = "Department of Agriculture, Animal Husbandry & Co-operative Development";
      matchedFaculty = "Agricultural Eng. • Soil Health Informatics • Post-Harvest Lab";
      baseFacultyScore = 89;
    }
  }
  // Environment & Renewable Energy
  else if (/electric|power|solar|waste|plastic|कचरा|बिजली|cold storage|पॉलिथीन|dung|forest|pollution|carbon|battery|wind/.test(lower)) {
    category = "env";
    categoryLabel = "Renewable Energy & Environmental Preservation";
    baseFunding = 460000;
    if (/solar|panel|microgrid|light|street light|inverter|solar pump/.test(lower)) {
      suggestedDept = "Jharkhand Renewable Energy Development Agency (JREDA Solar Cell)";
      matchedFaculty = "Electrical Power Systems • Photovoltaic & Micro-Grid Lab";
      baseFacultyScore = 93;
    } else if (/waste|garbage|plastic|dump|polythene|recycl/.test(lower)) {
      suggestedDept = "State Pollution Control Board & District Solid Waste Management Cell";
      matchedFaculty = "Environmental Chemical Engineering • Polymer Recycling Lab";
      baseFacultyScore = 90;
    } else {
      suggestedDept = "Dept of Forest, Environment & Climate Change (Territorial Division)";
      matchedFaculty = "Environmental Conservation • Remote Sensing & Forestry Systems";
      baseFacultyScore = 88;
    }
  }
  // Education & Skill Development
  else if (/school|student|teacher|classroom|स्कूल|बच्चे|पढ़ाई|ᱟᱥᱲᱟ|toilet|blackboard|college|book|library|desk|bench|midday|anganwadi/.test(lower)) {
    category = "edu";
    categoryLabel = "Education Infrastructure & Digital Learning";
    baseFunding = 290000;
    if (/toilet|sanitation|water|girl|hygiene|washroom/.test(lower)) {
      suggestedDept = "Jharkhand Education Project Council (JEPC) School Sanitation Cell";
      matchedFaculty = "Civil Sanitation Engineering • Public Health In Schools";
      baseFacultyScore = 92;
    } else if (/roof|building|wall|crack|ceiling|boundary|infrastructure/.test(lower)) {
      suggestedDept = "District Superintendent of Education (DSE Infra Works Wing)";
      matchedFaculty = "Structural Civil Engineering • Rural Disaster-Resilient Architecture";
      baseFacultyScore = 91;
    } else {
      suggestedDept = "Dept of School Education & Literacy (Samagra Shiksha Abhiyan)";
      matchedFaculty = "Educational Technology • EdTech Hardware & Vernacular Learning";
      baseFacultyScore = 88;
    }
  }
  // Health & Public Safety
  else if (/health|hospital|clinic|doctor|medicine|अस्पताल|दवा|रोग|बीमार|fever|ambulance|phc|chc|nurse|treatment|surgery|opd|rabies|snake/.test(lower)) {
    category = "health";
    categoryLabel = "Public Health & Primary Healthcare (PHC)";
    baseFunding = 480000;
    if (/medicine|dawa|injection|saline|oxygen|pharmacy|shortage/.test(lower)) {
      suggestedDept = "Jharkhand Medical Services & Infrastructure Development Corp (JMSICL)";
      matchedFaculty = "Biomedical Engineering • Pharmaceutical Logistics Systems";
      baseFacultyScore = 94;
    } else if (/ambulance|108|emergency|trauma|critical|death/.test(lower)) {
      suggestedDept = "Emergency Medical Relief Wing & State 108 Ambulance Directorate";
      matchedFaculty = "Critical Care Systems • Tele-Emergency Mobile Health Unit";
      baseFacultyScore = 95;
    } else {
      suggestedDept = "Department of Health, Medical Education & Family Welfare (Civil Surgeon Office)";
      matchedFaculty = "Community Public Health • Diagnostics & Telemedicine Lab";
      baseFacultyScore = 92;
    }
  }
  // Rural Infrastructure & Roads
  else {
    category = "infra";
    categoryLabel = "Rural Infrastructure, Roads & Connectivity";
    baseFunding = 390000;
    if (/bridge|pul|culvert|river|stream|causeway/.test(lower)) {
      suggestedDept = "Rural Works Department (RWD Special Bridge Division)";
      matchedFaculty = "Structural Bridge Engineering • Hydrological Runoff Modeling";
      baseFacultyScore = 93;
    } else if (/road|sadak|pothole|tar|connectivity|mud|unpaved/.test(lower)) {
      suggestedDept = "Pradhan Mantri Gram Sadak Yojana (PMGSY Implementation Unit)";
      matchedFaculty = "Highway & Pavement Engineering • Geotechnical Stabilization";
      baseFacultyScore = 91;
    } else {
      suggestedDept = "Rural Development Department & Panchayati Raj Engineering Wing";
      matchedFaculty = "Rural Civil Engineering • Drainage & Geo-Survey Cell";
      baseFacultyScore = 88;
    }
  }

  // 3. Dynamic CSR funding calculation
  const fundCalc = Math.round((baseFunding * (0.6 + urgencyScore * 0.7) + (text.length * 900)) / 10000) * 10000;
  const csrFunding = '₹' + fundCalc.toLocaleString('en-IN');

  // 4. Dynamic faculty match score
  const matchScore = Math.min(98, baseFacultyScore + (text.length % 5));

  // 5. Dynamic synthesized summary / title
  const locPrefix = location ? `${location}: ` : '';
  const firstSentence = text.split(/[.\n।]/)[0].trim();
  const summary = (locPrefix + (firstSentence.length > 85 ? firstSentence.substring(0, 82) + '…' : firstSentence));

  return {
    category,
    categoryLabel,
    urgency,
    urgencyScore,
    suggestedDept,
    matchedFaculty,
    matchScore,
    csrFunding,
    summary
  };
}

/**
 * Call upstream AI model for problem categorization
 */
async function callAiCategorization(text, location = '') {
  if (!AI_API_KEY || AI_API_KEY.includes('AIzaSy_REPLACE')) {
    return localCategorize(text, location);
  }

  const prompt = `You are the backend AI triage engine for AapV, Jharkhand's civic grievance platform.
Categorize this citizen grievance into exactly one of these domains: "water", "agri", "env", "edu", "health", "infra".
Assess the urgency ("High", "Medium", or "Low"), assign an urgencyScore between 0.45 and 0.99, select the best matching Jharkhand state department, and suggest university research disciplines.
Respond ONLY with valid JSON matching this schema:
{
  "category": "water" | "agri" | "env" | "edu" | "health" | "infra",
  "categoryLabel": string (e.g. "Water Quality & Sanitation"),
  "urgency": "High" | "Medium" | "Low",
  "urgencyScore": number (e.g. 0.92),
  "suggestedDept": string,
  "matchedFaculty": string,
  "matchScore": number (percentage between 78 and 98),
  "csrFunding": string (e.g. "₹4,20,000"),
  "summary": string (concise 1-sentence issue summary)
}

Citizen Problem: "${text}"
Location: "${location || 'Jharkhand'}"`;

  const modelsToTry = [AI_MODEL, 'gemini-3.6-flash', 'gemini-flash-latest'];

  for (const model of modelsToTry) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6500);

      const apiUrl = `${AI_ENDPOINT}/${model}:generateContent?key=${AI_API_KEY}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" }
        }),
        signal: controller.signal
      });
      clearTimeout(timeout);

      if (response.ok) {
        const data = await response.json();
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (replyText) {
          let cleaned = replyText.trim();
          if (cleaned.startsWith('```json')) cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '');
          else if (cleaned.startsWith('```')) cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '');
          const parsed = JSON.parse(cleaned);
          if (parsed && parsed.category) {
            return parsed;
          }
        }
      } else {
        console.warn(`Upstream model ${model} status ${response.status}`);
      }
    } catch (err) {
      console.warn(`Upstream model ${model} error:`, err.message);
    }
  }

  return localCategorize(text, location);
}

/**
 * Call upstream AI model for 24/7 AI Sahayak Chatbot
 */
async function callAiChat(message, language = 'en', history = []) {
  const knowledgeContext = `
AapV Live Platform State (Jharkhand):
- Total Citizen Submissions: ${AAPV_PSEUDO_DATA.stats.totalSubmissions}
- Active University Prototypes: ${AAPV_PSEUDO_DATA.stats.activePrototypes}
- Completed & Verified Solutions: ${AAPV_PSEUDO_DATA.stats.completedSolutions}
- Active Districts: 24

Official Pseudo Data Projects:
${AAPV_PSEUDO_DATA.projects.map(p => `• ID ${p.id}: "${p.title}" in ${p.district} (${p.status}, ${p.progress}%). Lead: ${p.lead}. Impact: ${p.beneficiaries}. Details: ${p.details}`).join('\n')}

Role: You are AapV AI Sahayak, the 24/7 Progress & Civic Assistant for Jharkhand. Answer questions accurately based on the above AapV data. Never mention internal model providers or third-party AI brands.
Language Instructions: If asked in Hindi, respond in fluent Hindi. If asked in Santhali or Ol Chiki, respond in Santhali. If English, respond in English. Format your answer with clean HTML paragraphs (<p>) and bold tags (<strong>).`;

  const modelsToTry = [AI_MODEL, 'gemini-3.6-flash', 'gemini-flash-latest'];

  for (const model of modelsToTry) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 7500);

      const apiUrl = `${AI_ENDPOINT}/${model}:generateContent?key=${AI_API_KEY}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: `${knowledgeContext}\n\nUser Question: ${message}` }] }
          ]
        }),
        signal: controller.signal
      });
      clearTimeout(timeout);

      if (response.ok) {
        const data = await response.json();
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (replyText) {
          return { text: replyText };
        }
      }
    } catch (err) {
      console.warn(`Chat model ${model} error:`, err.message);
    }
  }

  // Local knowledge search fallback
  const q = message.toLowerCase();
  for (const project of AAPV_PSEUDO_DATA.projects) {
    if (q.includes(project.id.toLowerCase()) || q.includes(project.id.split('-').pop()) || (q.includes(project.district.toLowerCase()) && q.includes(project.domain))) {
      return {
        text: `<p><strong>Project #${project.id} (${project.district} • ${project.title}):</strong></p>
               <p>Status: <strong>${project.status.toUpperCase()} (${project.progress}% completed)</strong>.</p>
               <p>Lead Institution: <strong>${project.lead}</strong>. Beneficiaries: ${project.beneficiaries}.</p>
               <p><em>Details:</em> ${project.details}</p>`
      };
    }
  }

  if (q.includes('complete') || q.includes('पूर्ण') || q.includes('ᱯᱩᱨᱟᱹᱣ')) {
    const comp = AAPV_PSEUDO_DATA.projects.filter(p => p.status === 'completed');
    return {
      text: `<p>✅ <strong>Top Completed & Verified Community Solutions in Jharkhand (${AAPV_PSEUDO_DATA.stats.completedSolutions} statewide):</strong></p>
             <ul>
               ${comp.map(p => `<li><strong>${p.district} (${p.lead}):</strong> ${p.title} — serving ${p.beneficiaries}.</li>`).join('')}
             </ul>
             <p>All projects are verified and handed over to local Panchayats.</p>`
    };
  }

  if (q.includes('ongoing') || q.includes('progress') || q.includes('चल रही')) {
    const ongoing = AAPV_PSEUDO_DATA.projects.filter(p => p.status === 'ongoing');
    return {
      text: `<p>⚙️ <strong>Active University Prototypes Under Development (${AAPV_PSEUDO_DATA.stats.activePrototypes} statewide):</strong></p>
             <ul>
               ${ongoing.map(p => `<li><strong>${p.district} (${p.progress}%):</strong> ${p.title} by ${p.lead}.</li>`).join('')}
             </ul>`
    };
  }

  if (q.includes('available') || q.includes('adoption') || q.includes('open')) {
    const avail = AAPV_PSEUDO_DATA.projects.filter(p => p.status === 'available');
    return {
      text: `<p>📋 <strong>Community Challenges Verified and Open for University Adoption:</strong></p>
             <ul>
               ${avail.map(p => `<li><strong>#${p.id} (${p.district}):</strong> ${p.title} (${p.beneficiaries}).</li>`).join('')}
             </ul>`
    };
  }

  return {
    text: `<p>Regarding your query: "<em>${message}</em>"</p>
           <p>AapV records show <strong>${AAPV_PSEUDO_DATA.stats.totalSubmissions} citizen grievances</strong>, <strong>${AAPV_PSEUDO_DATA.stats.activePrototypes} active university research prototypes</strong>, and <strong>${AAPV_PSEUDO_DATA.stats.completedSolutions} verified deployed solutions</strong> across Jharkhand.</p>`
  };
}

// Request dispatcher
const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = reqUrl.pathname;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, api-key');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API 1: Problem Categorization
  if (pathname === '/api/categorize' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const text = payload.text || '';
        const location = payload.location || '';
        const result = await callAiCategorization(text, location);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, categorization: result }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // API 2: 24/7 AI Sahayak Chat
  if (pathname === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const message = payload.message || '';
        const language = payload.language || 'en';
        const history = payload.history || [];
        const result = await callAiChat(message, language, history);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, response: result }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // API 3: Health check & pseudo-data stats
  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', data: AAPV_PSEUDO_DATA }));
    return;
  }

  // Static files server
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
  
  // Security check: ensure path is within __dirname
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 fallback
      const notFoundPath = path.join(__dirname, '404.html');
      fs.readFile(notFoundPath, (e404, data404) => {
        if (!e404 && data404) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(data404);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });
});

// Start listener
server.listen(PORT, () => {
  console.log(`[AapV Engine] Gateway running on http://localhost:${PORT}`);
});
