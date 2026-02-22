const tools = [
  {
    name: 'Design Storm Generator',
    type: 'Web App',
    audience: 'Beginner',
    tags: ['Rainfall', 'Design', 'SWMM'],
    description: 'Generate design storm hyetographs quickly with defensible assumptions and clean exports.',
    previews: [
      {
        src: 'assets/designstorms_1.png',
        alt: 'Design storm input form with map location picker, NOAA depth table, and storm parameters',
        caption: 'Configure location, return period, duration, and distribution method.',
      },
      {
        src: 'assets/designstorms_2.png',
        alt: 'Hyetograph and cumulative mass curve charts with storm data table',
        caption: 'Instantly preview intensity charts and export to CSV or DAT.',
      },
    ],
    url: 'https://rossv.github.io/designstorms/',
    owner: 'Model Toolkit',
  },
  {
    name: 'Plot Digitizer',
    type: 'Downloadable App',
    audience: 'Intermediate',
    tags: ['Data', 'QA/QC', 'Visualization'],
    description: 'Extract points from legacy figures and scanned plots for model calibration and validation.',
    previews: [
      {
        src: 'assets/plotdigitizer_1.png',
        alt: 'Plot Digitizer main interface with calibration panel and blank workspace',
        caption: 'Load any image or PDF and calibrate axes before digitizing.',
      },
      {
        src: 'assets/plotdigitizer_2.png',
        alt: 'Parabolic curve loaded in the workspace ready for point capture',
        caption: 'Digitize curves manually or with the Smart Wand auto-trace tool.',
      },
    ],
    url: 'https://rossv.github.io/plotdigitizer/',
    owner: 'Model Toolkit',
  },
  {
    name: 'Rainfall Downloader',
    type: 'Installable Script',
    audience: 'Beginner',
    tags: ['Rainfall', 'Automation'],
    description: 'Download and organize rainfall data from common sources in model-ready formats.',
    previews: [
      {
        src: makePreviewGraphic('Station Select', 'Region and gauge filters', '#335c67', '#fff3b0'),
        alt: 'Map-based rainfall station picker with filter panel',
        caption: 'Filter stations by region and data quality metrics.',
      },
      {
        src: makePreviewGraphic('Download Queue', 'Batch export jobs', '#264653', '#2a9d8f'),
        alt: 'Queue table listing rainfall files pending export',
        caption: 'Queue multi-station exports in model-ready file formats.',
      },
    ],
    url: 'https://rossv.github.io/rainfalldownload/',
    owner: 'Model Toolkit',
  },
  {
    name: 'SWMM Comparison',
    type: 'Third-Party Web Tool',
    audience: 'Advanced',
    tags: ['SWMM', 'Benchmarking'],
    description: 'Compare SWMM model behavior and outcomes across runs to spot meaningful differences.',
    previews: [
      {
        src: 'assets/swmm_comparison_1.png',
        alt: 'SWMM Comparison App showing sections panel and map view of a drainage network',
        caption: 'Load two SWMM files and highlight added, removed, or changed elements.',
      },
    ],
    url: 'https://meyerd851-lab.github.io/SWMM_Comparison/',
    owner: 'Third-party',
  },
  {
    name: 'SWMM5 Report Stats',
    type: 'Third-Party Web Tool',
    audience: 'Intermediate',
    tags: ['SWMM', 'Reporting'],
    description: 'Summarize SWMM report outputs and identify actionable performance indicators.',
    previews: [
      {
        src: 'assets/swmm5stats_1.png',
        alt: 'SWMM5 Report Analyzer landing page with file upload and quick start options',
        caption: 'Upload a .rpt file or load a sample to explore 52+ report sections.',
      },
    ],
    url: 'https://swmm5rptstats.com/',
    owner: 'Third-party',
  },
  {
    name: 'Model Run Organizer',
    type: 'Installable Script',
    audience: 'Intermediate',
    tags: ['Automation', 'QA/QC'],
    description: 'Organize scenarios and model run artifacts for repeatable review and sign-off workflows.',
    previews: [
      {
        src: makePreviewGraphic('Run Library', 'Scenario folders and status', '#2f3e46', '#84a98c'),
        alt: 'List of model run folders with status labels',
        caption: 'Track scenario status with standardized run folders.',
      },
      {
        src: makePreviewGraphic('Review Ready', 'Audit trail included', '#5f0f40', '#9a031e'),
        alt: 'Audit timeline for model run approvals',
        caption: 'Maintain a clear audit trail through review and sign-off.',
      },
    ],
    url: '#',
    owner: 'Model Toolkit',
  },
  {
    name: 'Time-Series Gap Filler',
    type: 'Downloadable App',
    audience: 'Advanced',
    tags: ['Data', 'Automation', 'QA/QC'],
    description: 'Diagnose and repair gaps in hydromet time-series prior to model ingestion.',
    previews: [
      {
        src: makePreviewGraphic('Gap Detection', 'Flag missing intervals', '#6d597a', '#b56576'),
        alt: 'Time-series chart with highlighted missing intervals',
        caption: 'Detect and highlight problematic intervals in long records.',
      },
      {
        src: makePreviewGraphic('Fill Methods', 'Compare interpolation options', '#355070', '#43aa8b'),
        alt: 'Comparison chart of interpolation methods applied to gaps',
        caption: 'Compare fill strategies before committing repaired values.',
      },
    ],
    url: '#',
    owner: 'Model Toolkit',
  },
];

function makePreviewGraphic(title, subtitle, startColor, endColor) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${startColor}" />
          <stop offset="100%" stop-color="${endColor}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#bg)" />
      <rect x="70" y="110" width="1060" height="500" rx="24" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.26)" />
      <circle cx="180" cy="180" r="18" fill="rgba(255,255,255,0.58)" />
      <circle cx="240" cy="180" r="18" fill="rgba(255,255,255,0.28)" />
      <rect x="130" y="250" width="940" height="28" rx="14" fill="rgba(255,255,255,0.3)" />
      <rect x="130" y="304" width="760" height="28" rx="14" fill="rgba(255,255,255,0.22)" />
      <rect x="130" y="358" width="860" height="28" rx="14" fill="rgba(255,255,255,0.3)" />
      <rect x="130" y="456" width="340" height="94" rx="16" fill="rgba(255,255,255,0.22)" />
      <text x="130" y="610" font-size="66" font-family="Inter, Arial, sans-serif" fill="rgba(255,255,255,0.96)" font-weight="700">${title}</text>
      <text x="130" y="654" font-size="34" font-family="Inter, Arial, sans-serif" fill="rgba(255,255,255,0.86)">${subtitle}</text>
    </svg>
  `;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const state = {
  search: '',
  types: new Set(),
  audiences: new Set(),
  tags: new Set(),
};

const els = {
  toolSections: document.getElementById('toolSections'),
  resultCount: document.getElementById('resultCount'),
  searchInput: document.getElementById('searchInput'),
  typeFilters: document.getElementById('typeFilters'),
  audienceFilters: document.getElementById('audienceFilters'),
  tagFilters: document.getElementById('tagFilters'),
  clearFilters: document.getElementById('clearFilters'),
  themeToggle: document.getElementById('themeToggle'),
  authBtn: document.getElementById('authBtn'),
  helpBtn: document.getElementById('helpBtn'),
  helpModal: document.getElementById('helpModal'),
  closeHelpModal: document.getElementById('closeHelpModal'),
  toolModal: document.getElementById('toolModal'),
  closeToolModal: document.getElementById('closeToolModal'),
  modalBody: document.getElementById('modalBody'),
};

const helpTabs = document.querySelectorAll('.tab-btn');
const helpContents = document.querySelectorAll('.tab-content');

helpTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    helpTabs.forEach((t) => t.classList.remove('active'));
    helpContents.forEach((c) => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
  });
});

const THEME_KEY = 'model-toolkit-theme';


const SECTION_DEFS = [
  {
    key: 'web',
    title: 'Web Tools',
    icon: '🌐',
    subtitle: 'Browser-based tools with instant access and no local install.',
    className: 'section-web',
    matchesTool: (tool) => tool.type === 'Web App',
    matchesTypeFilter: (type) => type === 'Web App',
  },
  {
    key: 'local',
    title: 'Local Tools',
    icon: '⚙️',
    subtitle: 'Apps and scripts intended for local workflows and batch operations.',
    className: 'section-local',
    matchesTool: (tool) => tool.type === 'Downloadable App' || tool.type === 'Installable Script',
    matchesTypeFilter: (type) => type === 'Downloadable App' || type === 'Installable Script',
  },
  {
    key: 'third-party',
    title: 'Third-Party Tools',
    icon: '🔗',
    subtitle: 'Trusted external tools maintained by partners and the wider community.',
    className: 'section-third-party',
    matchesTool: (tool) => tool.type === 'Third-Party Web Tool',
    matchesTypeFilter: (type) => type === 'Third-Party Web Tool',
  },
];


/* ── Water / Pipe-Network Schematic Background ── */
function initSubwayBackground() {
  const canvas = document.getElementById('subwayCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  /* ── Water-themed palette ── */
  function getColors() {
    const isDark = document.documentElement.dataset.theme === 'dark';
    return {
      // Pipe colors — blues, teals, aqua
      pipes: isDark
        ? ['#1a6e9e', '#1b8a8a', '#2674b8', '#38a0a0', '#1d5c8c', '#2e8b8b']
        : ['#90c5e3', '#7ec8c8', '#a0d4ed', '#6fbcbc', '#b0d9f0', '#8ad4d4'],
      // Pipe outline (darker stroke behind)
      pipeOutline: isDark ? 'rgba(8,30,55,0.5)' : 'rgba(40,80,120,0.08)',
      // Junction / manhole node
      junctionFill: isDark ? 'rgba(30,70,110,0.55)' : 'rgba(70,140,190,0.18)',
      junctionRing: isDark ? 'rgba(80,170,230,0.35)' : 'rgba(50,120,170,0.16)',
      // Flow particle
      flowDot: isDark ? 'rgba(120,210,255,0.72)' : 'rgba(30,110,180,0.45)',
      flowGlow: isDark ? 'rgba(80,200,255,0.3)' : 'rgba(50,140,210,0.2)',
      // Ripple at junctions
      ripple: isDark ? 'rgba(80,190,240,0.18)' : 'rgba(40,120,180,0.1)',
      pipeWidth: isDark ? 2.2 : 2.5,
      pipeAlpha: isDark ? 0.2 : 0.14,
    };
  }

  let colors = getColors();
  let pipes = [];
  let flowParticles = [];
  let ripples = [];       // { x, y, age, maxAge, maxR }
  let animId = null;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    generateNetwork();
  }

  /* ── Generate a pipe route (orthogonal segments) ── */
  function generatePipe(color) {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const points = [];
    const startEdge = Math.floor(Math.random() * 4);
    let x, y, dir;

    switch (startEdge) {
      case 0: x = Math.random() * W; y = -20; dir = 'down'; break;
      case 1: x = W + 20; y = Math.random() * H; dir = 'left'; break;
      case 2: x = Math.random() * W; y = H + 20; dir = 'up'; break;
      default: x = -20; y = Math.random() * H; dir = 'right'; break;
    }
    points.push({ x, y });

    const segCount = 4 + Math.floor(Math.random() * 5);
    for (let i = 0; i < segCount; i++) {
      const segLen = 100 + Math.random() * 280;
      switch (dir) {
        case 'right': x += segLen; break;
        case 'left': x -= segLen; break;
        case 'down': y += segLen; break;
        case 'up': y -= segLen; break;
      }
      points.push({ x, y });
      if (dir === 'right' || dir === 'left') {
        dir = Math.random() > 0.5 ? 'down' : 'up';
      } else {
        dir = Math.random() > 0.5 ? 'right' : 'left';
      }
    }

    // Cumulative distance for flow interpolation
    let totalLen = 0;
    const dists = [0];
    for (let i = 1; i < points.length; i++) {
      const dx = points[i].x - points[i - 1].x;
      const dy = points[i].y - points[i - 1].y;
      totalLen += Math.sqrt(dx * dx + dy * dy);
      dists.push(totalLen);
    }

    return { points, color, totalLen, dists };
  }

  function generateNetwork() {
    colors = getColors();
    const count = Math.max(6, Math.min(12, Math.floor(window.innerWidth / 160)));
    pipes = [];
    for (let i = 0; i < count; i++) {
      pipes.push(generatePipe(colors.pipes[i % colors.pipes.length]));
    }
    // 2–3 flow particles per pipe
    flowParticles = [];
    pipes.forEach((pipe, pi) => {
      const n = 2 + Math.floor(Math.random() * 2);
      for (let j = 0; j < n; j++) {
        flowParticles.push({
          pipeIdx: pi,
          progress: Math.random(),
          speed: 0.00015 + Math.random() * 0.00035,
          trail: [],
        });
      }
    });
    ripples = [];
  }

  /* ── Interpolate along a pipe ── */
  function getPointAt(pipe, t) {
    const d = t * pipe.totalLen;
    for (let i = 1; i < pipe.points.length; i++) {
      if (d <= pipe.dists[i]) {
        const seg = pipe.dists[i] - pipe.dists[i - 1];
        const segT = seg > 0 ? (d - pipe.dists[i - 1]) / seg : 0;
        return {
          x: pipe.points[i - 1].x + (pipe.points[i].x - pipe.points[i - 1].x) * segT,
          y: pipe.points[i - 1].y + (pipe.points[i].y - pipe.points[i - 1].y) * segT,
        };
      }
    }
    const last = pipe.points[pipe.points.length - 1];
    return { x: last.x, y: last.y };
  }

  let lastTime = 0;

  function draw(time) {
    const dt = lastTime ? time - lastTime : 16;
    lastTime = time;
    const W = window.innerWidth;
    const H = window.innerHeight;
    ctx.clearRect(0, 0, W, H);

    /* ── Draw pipes (double-stroke for pipe outline look) ── */
    pipes.forEach((pipe) => {
      // Outer outline stroke
      ctx.beginPath();
      ctx.moveTo(pipe.points[0].x, pipe.points[0].y);
      for (let i = 1; i < pipe.points.length; i++) {
        ctx.lineTo(pipe.points[i].x, pipe.points[i].y);
      }
      ctx.strokeStyle = colors.pipeOutline;
      ctx.lineWidth = colors.pipeWidth + 2;
      ctx.globalAlpha = colors.pipeAlpha * 0.6;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      // Inner pipe color
      ctx.beginPath();
      ctx.moveTo(pipe.points[0].x, pipe.points[0].y);
      for (let i = 1; i < pipe.points.length; i++) {
        ctx.lineTo(pipe.points[i].x, pipe.points[i].y);
      }
      ctx.strokeStyle = pipe.color;
      ctx.lineWidth = colors.pipeWidth;
      ctx.globalAlpha = colors.pipeAlpha;
      ctx.stroke();

      /* ── Junction / manhole nodes ── */
      for (let i = 1; i < pipe.points.length - 1; i++) {
        const p = pipe.points[i];
        // Outer ring
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.strokeStyle = colors.junctionRing;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        // Inner fill
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = colors.junctionFill;
        ctx.fill();
      }
    });

    /* ── Animate flow particles ── */
    flowParticles.forEach((fp) => {
      const pipe = pipes[fp.pipeIdx];
      if (!pipe) return;

      fp.progress += fp.speed * dt;

      // When a particle reaches the end, spawn a ripple and restart
      if (fp.progress >= 1) {
        const endPt = pipe.points[pipe.points.length - 1];
        ripples.push({ x: endPt.x, y: endPt.y, age: 0, maxAge: 1200, maxR: 14 });
        fp.progress = 0;
        fp.trail = [];
      }

      const pos = getPointAt(pipe, fp.progress);

      // Maintain a trail (last N positions)
      fp.trail.push({ x: pos.x, y: pos.y });
      if (fp.trail.length > 6) fp.trail.shift();

      // Draw trail (fading tail behind the particle)
      for (let ti = 0; ti < fp.trail.length - 1; ti++) {
        const alpha = (ti / fp.trail.length) * 0.3;
        const r = 1.5 + (ti / fp.trail.length) * 1.5;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(fp.trail[ti].x, fp.trail[ti].y, r, 0, Math.PI * 2);
        ctx.fillStyle = colors.flowDot;
        ctx.fill();
      }

      // Flow glow
      ctx.globalAlpha = 0.35;
      const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 10);
      grad.addColorStop(0, colors.flowGlow);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(pos.x - 10, pos.y - 10, 20, 20);

      // Main flow dot
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = colors.flowDot;
      ctx.fill();
    });

    /* ── Ripple effects at arrival nodes ── */
    for (let ri = ripples.length - 1; ri >= 0; ri--) {
      const rp = ripples[ri];
      rp.age += dt;
      if (rp.age > rp.maxAge) { ripples.splice(ri, 1); continue; }
      const t = rp.age / rp.maxAge;
      const r = t * rp.maxR;
      ctx.globalAlpha = (1 - t) * 0.5;
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, r, 0, Math.PI * 2);
      ctx.strokeStyle = colors.ripple;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // Second concentric ring, slightly delayed
      if (t > 0.2) {
        const t2 = (t - 0.2) / 0.8;
        const r2 = t2 * rp.maxR * 0.7;
        ctx.globalAlpha = (1 - t2) * 0.3;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, r2, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(draw);
  }

  // Observe theme changes
  const observer = new MutationObserver(() => { colors = getColors(); });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  resize();
  animId = requestAnimationFrame(draw);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });
}

function applyTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = nextTheme;
  els.themeToggle.setAttribute('aria-pressed', String(nextTheme === 'dark'));
  localStorage.setItem(THEME_KEY, nextTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme ?? (prefersDark ? 'dark' : 'light'));
}

const getUnique = (key) => [...new Set(tools.flatMap((t) => (Array.isArray(t[key]) ? t[key] : [t[key]])))]
  .sort((a, b) => a.localeCompare(b));

function makeChip(value, filterSet, container) {
  const btn = document.createElement('button');
  btn.className = 'chip';
  btn.type = 'button';
  btn.textContent = value;
  btn.addEventListener('click', () => {
    if (filterSet.has(value)) {
      filterSet.delete(value);
      btn.classList.remove('active');
    } else {
      filterSet.add(value);
      btn.classList.add('active');
    }
    render();
  });
  container.appendChild(btn);
}

function populateFilters() {
  getUnique('type').forEach((t) => makeChip(t, state.types, els.typeFilters));
  getUnique('audience').forEach((a) => makeChip(a, state.audiences, els.audienceFilters));
  getUnique('tags').forEach((tag) => makeChip(tag, state.tags, els.tagFilters));
}

function matchesFilters(tool) {
  const q = state.search.toLowerCase();
  const inSearch =
    !q ||
    [tool.name, tool.description, tool.type, tool.audience, ...tool.tags].join(' ').toLowerCase().includes(q);

  const inType = state.types.size === 0 || state.types.has(tool.type);
  const inAudience = state.audiences.size === 0 || state.audiences.has(tool.audience);
  const inTags = state.tags.size === 0 || tool.tags.some((tag) => state.tags.has(tag));
  return inSearch && inType && inAudience && inTags;
}

function openTool(tool) {
  const launchMarkup = tool.url && tool.url !== '#'
    ? `<a class="btn btn-primary" href="${tool.url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:0.4rem;text-decoration:none;margin-top:1rem;">Open Tool <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>`
    : '<p class="muted" style="margin-top:1rem;font-size:0.9rem;">🚧 Launch link coming soon for this tool.</p>';

  els.modalBody.innerHTML = `
    <h3 style="margin-bottom:0.5rem;">${tool.name}</h3>
    <div class="meta-row" style="margin-bottom:0.9rem;">
      <span class="pill">${tool.type}</span>
      <span class="pill">${tool.audience}</span>
      <span class="pill">${tool.owner}</span>
    </div>
    <p class="muted" style="margin-bottom:1rem;">${tool.description}</p>
    <div style="border-top:1px solid var(--border-soft);padding-top:0.9rem;">
      <p style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin:0 0 0.5rem;">Disciplines</p>
      <div class="meta-row">
        ${tool.tags.map((tag) => `<span class="pill">${tag}</span>`).join('')}
      </div>
    </div>
    ${launchMarkup}
  `;
  els.toolModal.showModal();
}

function getLaunchBtnClass(sectionKey) {
  if (sectionKey === 'web') return 'launch-btn-web';
  if (sectionKey === 'local') return 'launch-btn-local';
  if (sectionKey === 'third-party') return 'launch-btn-third';
  return '';
}

function render() {
  const filtered = tools.filter(matchesFilters);
  els.resultCount.textContent = String(filtered.length);

  // Update hero count too
  const heroCount = document.getElementById('heroToolCount');
  if (heroCount) heroCount.textContent = String(tools.length);

  const hasTypeFilter = state.types.size > 0;
  const visibleSections = SECTION_DEFS.filter((section) => (
    !hasTypeFilter || [...state.types].some((type) => section.matchesTypeFilter(type))
  ));

  els.toolSections.innerHTML = '';

  if (filtered.length === 0) {
    els.toolSections.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <p>No tools match your current filters.</p>
        <button class="btn btn-ghost" onclick="document.getElementById('clearFilters').click()">Clear filters</button>
      </div>`;
    return;
  }

  visibleSections.forEach((section) => {
    const sectionTools = filtered.filter((tool) => section.matchesTool(tool));
    if (sectionTools.length === 0) return;

    const sectionEl = document.createElement('section');
    sectionEl.className = `tool-section ${section.className}`;
    sectionEl.innerHTML = `
      <header class="tool-section-head">
        <h4><span aria-hidden="true">${section.icon}</span>${section.title}</h4>
        <p>${section.subtitle}</p>
      </header>
      <div class="tool-grid" data-section-grid></div>
    `;

    const sectionGrid = sectionEl.querySelector('[data-section-grid]');
    const btnClass = getLaunchBtnClass(section.key);

    sectionTools.forEach((tool) => {
      const card = document.createElement('article');
      card.className = 'tool-card';

      const launchMarkup = tool.url && tool.url !== '#'
        ? `<a class="launch-btn ${btnClass}" href="${tool.url}" target="_blank" rel="noopener noreferrer">Launch ↗</a>`
        : '<span class="muted" style="font-size:0.82rem;">Coming soon</span>';

      const tagPills = tool.tags.slice(0, 2).map((t) => `<span class="pill">${t}</span>`).join('');
      card.innerHTML = `
        <div class="tool-card-body">
          <h4>${tool.name}</h4>
          <div class="meta-row" style="margin-bottom:0.3rem;">
            <span class="pill">${tool.type}</span>
            <span class="pill">${tool.audience}</span>
            ${tagPills}
          </div>
          <p>${tool.description}</p>
        </div>
        <div class="tool-card-footer">
          ${launchMarkup}
          <button class="link-btn" type="button">Details</button>
        </div>
      `;

      const previewSection = createPreviewCarousel(tool.previews || []);
      if (previewSection) {
        card.prepend(previewSection);
      }

      card.querySelector('.link-btn').addEventListener('click', () => openTool(tool));
      sectionGrid.appendChild(card);
    });

    els.toolSections.appendChild(sectionEl);
  });

  if (!els.toolSections.childElementCount) {
    els.toolSections.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <p>No tools match your current filters.</p>
        <button class="btn btn-ghost" onclick="document.getElementById('clearFilters').click()">Clear filters</button>
      </div>`;
  }
}

function createPreviewCarousel(previews) {
  if (!previews.length) return null;

  const wrapper = document.createElement('section');
  wrapper.className = 'preview-carousel';
  wrapper.setAttribute('aria-label', 'Tool preview images');

  const track = document.createElement('div');
  track.className = 'preview-track';

  previews.forEach((preview, index) => {
    const slide = document.createElement('figure');
    slide.className = 'preview-slide';
    slide.innerHTML = `
      <img src="${preview.src}" alt="${preview.alt}" loading="lazy" />
      <figcaption>${preview.caption}</figcaption>
    `;
    slide.dataset.index = String(index);
    track.appendChild(slide);
  });

  const controls = document.createElement('div');
  controls.className = 'preview-controls';

  const prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  prevBtn.className = 'preview-nav';
  prevBtn.setAttribute('aria-label', 'Previous preview image');
  prevBtn.textContent = '‹';

  const nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.className = 'preview-nav';
  nextBtn.setAttribute('aria-label', 'Next preview image');
  nextBtn.textContent = '›';

  const dots = document.createElement('div');
  dots.className = 'preview-dots';
  const dotEls = previews.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'preview-dot';
    dot.setAttribute('aria-label', `Go to preview ${index + 1}`);
    dot.addEventListener('click', () => scrollToIndex(index));
    dots.appendChild(dot);
    return dot;
  });

  function scrollToIndex(index) {
    const slideWidth = track.clientWidth;
    track.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
  }

  function updateActive() {
    const index = Math.round(track.scrollLeft / track.clientWidth) || 0;
    dotEls.forEach((dot, i) => dot.classList.toggle('active', i === index));
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= previews.length - 1;
  }

  prevBtn.addEventListener('click', () => {
    const index = Math.max(0, Math.round(track.scrollLeft / track.clientWidth) - 1);
    scrollToIndex(index);
  });

  nextBtn.addEventListener('click', () => {
    const index = Math.min(previews.length - 1, Math.round(track.scrollLeft / track.clientWidth) + 1);
    scrollToIndex(index);
  });

  track.addEventListener('scroll', () => window.requestAnimationFrame(updateActive));
  window.requestAnimationFrame(updateActive);

  controls.append(prevBtn, dots, nextBtn);
  wrapper.append(track, controls);
  return wrapper;
}

els.searchInput.addEventListener('input', (e) => {
  state.search = e.target.value.trim();
  render();
});

els.clearFilters.addEventListener('click', () => {
  state.search = '';
  state.types.clear();
  state.audiences.clear();
  state.tags.clear();
  els.searchInput.value = '';
  document.querySelectorAll('.chip').forEach((chip) => chip.classList.remove('active'));
  render();
});

els.themeToggle.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === 'light' ? 'dark' : 'light');
});

els.authBtn.addEventListener('click', () => {
  alert('Authentication coming soon: planned support for Okta and Azure AD SSO.');
});

els.helpBtn.addEventListener('click', () => els.helpModal.showModal());
els.closeHelpModal.addEventListener('click', () => els.helpModal.close());
els.closeToolModal.addEventListener('click', () => els.toolModal.close());

populateFilters();
initTheme();
initSubwayBackground();
render();

