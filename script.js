const tools = [
  {
    name: 'Design Storm Generator',
    type: 'Web App',
    audience: 'Beginner',
    tags: ['Rainfall', 'Design', 'SWMM'],
    description: 'Generate design storm hyetographs quickly with defensible assumptions and clean exports.',
    previews: [
      {
        src: makePreviewGraphic('Storm Inputs', 'Configure return period and duration', '#355c7d', '#6c5b7b'),
        alt: 'Design storm input form with sliders and numeric controls',
        caption: 'Adjust return period, duration, and distribution method before export.',
      },
      {
        src: makePreviewGraphic('Hyetograph', 'Instant visual output', '#1f8a70', '#2a4858'),
        alt: 'Hyetograph preview chart with rainfall bars across time',
        caption: 'Preview generated rainfall intensity patterns instantly.',
      },
    ],
    url: '#',
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
        src: makePreviewGraphic('Raster Capture', 'Digitize legacy plot scans', '#6a4c93', '#1982c4'),
        alt: 'Scanned chart image with interactive digitizing points',
        caption: 'Capture key data points from scanned figures with zoom controls.',
      },
      {
        src: makePreviewGraphic('QA Overlay', 'Point confidence checks', '#0f4c5c', '#2d6a4f'),
        alt: 'Digitized points overlaid with confidence colors on a graph',
        caption: 'Review extracted points with visual QA confidence overlays.',
      },
    ],
    url: '#',
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
    url: '#',
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
        src: makePreviewGraphic('Scenario Diff', 'Compare node and link metrics', '#4a4e69', '#9a8c98'),
        alt: 'Comparison table showing differences across SWMM scenarios',
        caption: 'Highlight run-to-run deltas for key hydraulic metrics.',
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
        src: makePreviewGraphic('Report Dashboard', 'Instant KPI summary', '#3d405b', '#81b29a'),
        alt: 'Dashboard cards summarizing SWMM report KPIs',
        caption: 'Quickly surface key report statistics for review meetings.',
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
    name: 'Culvert Capacity Checker',
    type: 'Web App',
    audience: 'Beginner',
    tags: ['Hydraulics', 'Design'],
    description: 'Estimate culvert capacity with an approachable interface for rapid screening.',
    previews: [
      {
        src: makePreviewGraphic('Capacity Inputs', 'Geometry and roughness', '#1d3557', '#457b9d'),
        alt: 'Form for culvert dimensions, slope, and roughness',
        caption: 'Input culvert geometry and hydraulics assumptions quickly.',
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
  toolGrid: document.getElementById('toolGrid'),
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

const THEME_KEY = 'model-toolkit-theme';


function renderSprites() {
  const field = document.getElementById('spriteField');
  if (!field || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const spriteCount = Math.max(10, Math.min(24, Math.floor(window.innerWidth / 72)));
  const frag = document.createDocumentFragment();

  for (let i = 0; i < spriteCount; i += 1) {
    const sprite = document.createElement('span');
    const size = 4 + Math.random() * 10;
    sprite.className = 'sprite';
    sprite.style.width = `${size.toFixed(1)}px`;
    sprite.style.height = `${size.toFixed(1)}px`;
    sprite.style.left = `${(Math.random() * 100).toFixed(2)}%`;
    sprite.style.top = `${(Math.random() * 100).toFixed(2)}%`;
    sprite.style.animationDuration = `${(10 + Math.random() * 16).toFixed(2)}s`;
    sprite.style.animationDelay = `${(-Math.random() * 14).toFixed(2)}s`;
    sprite.style.opacity = `${(0.08 + Math.random() * 0.2).toFixed(2)}`;
    frag.appendChild(sprite);
  }

  field.replaceChildren(frag);
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
  const launchMarkup = tool.url
    ? '<a class="link" href="' + tool.url + '" target="_blank" rel="noopener noreferrer">Open Tool ↗</a>'
    : '<p class="muted" style="margin-top: 1rem;">Launch link coming soon for this tool.</p>';

  els.modalBody.innerHTML = `
    <h3>${tool.name}</h3>
    <p class="muted">${tool.description}</p>
    <div class="meta-row">
      <span class="pill">${tool.type}</span>
      <span class="pill">${tool.audience}</span>
      <span class="pill">${tool.owner}</span>
    </div>
    <h4>Disciplines</h4>
    <div class="meta-row">
      ${tool.tags.map((tag) => `<span class="pill">${tag}</span>`).join('')}
    </div>
    <p class="muted" style="margin-top: 1rem;">Future enhancement: role-based visibility and personalized recommendations after Okta / Azure AD sign-in.</p>
    ${launchMarkup}
  `;
  els.toolModal.showModal();
}

function render() {
  const filtered = tools.filter(matchesFilters);
  els.resultCount.textContent = String(filtered.length);

  els.toolGrid.innerHTML = '';
  if (filtered.length === 0) {
    els.toolGrid.innerHTML = '<p class="muted">No tools match your current filters. Try clearing filters.</p>';
    return;
  }

  filtered.forEach((tool) => {
    const card = document.createElement('article');
    card.className = 'tool-card';
    const launchMarkup = tool.url
      ? `<a class="link" href="${tool.url}" target="_blank" rel="noopener noreferrer">Launch ↗</a>`
      : '<span class="muted" aria-label="Launch link unavailable">Coming soon</span>';

    card.innerHTML = `
      <div>
        <h4>${tool.name}</h4>
        <div class="meta-row">
          <span class="pill">${tool.type}</span>
          <span class="pill">${tool.audience}</span>
        </div>
      </div>
      <p>${tool.description}</p>
      <footer>
        ${launchMarkup}
        <button class="link-btn" type="button">Details</button>
      </footer>
    `;

    const previewSection = createPreviewCarousel(tool.previews || []);
    if (previewSection) {
      card.prepend(previewSection);
    }

    card.querySelector('button').addEventListener('click', () => openTool(tool));
    els.toolGrid.appendChild(card);
  });
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
renderSprites();
render();

window.addEventListener('resize', renderSprites);
