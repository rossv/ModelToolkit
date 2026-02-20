const tools = [
  {
    name: 'Design Storm Generator',
    type: 'Web App',
    audience: 'Beginner',
    tags: ['Rainfall', 'Design', 'SWMM'],
    software: ['PCSWMM'],
    description: 'Generate design storm hyetographs quickly with defensible assumptions and clean exports.',
    url: '#',
    owner: 'Model Toolkit',
  },
  {
    name: 'Plot Digitizer',
    type: 'Downloadable App',
    audience: 'Intermediate',
    tags: ['Data', 'QA/QC', 'Visualization'],
    software: ['Any'],
    description: 'Extract points from legacy figures and scanned plots for model calibration and validation.',
    url: '#',
    owner: 'Model Toolkit',
  },
  {
    name: 'Rainfall Downloader',
    type: 'Installable Script',
    audience: 'Beginner',
    tags: ['Rainfall', 'Automation'],
    software: ['PCSWMM', 'Infoworks ICM', 'HEC-RAS', 'Any'],
    description: 'Download and organize rainfall data from common sources in model-ready formats.',
    url: '#',
    owner: 'Model Toolkit',
  },
  {
    name: 'SWMM Comparison',
    type: 'Third-Party Web Tool',
    audience: 'Advanced',
    tags: ['SWMM', 'Benchmarking'],
    software: ['PCSWMM'],
    description: 'Compare SWMM model behavior and outcomes across runs to spot meaningful differences.',
    url: 'https://meyerd851-lab.github.io/SWMM_Comparison/',
    owner: 'Third-party',
  },
  {
    name: 'SWMM5 Report Stats',
    type: 'Third-Party Web Tool',
    audience: 'Intermediate',
    tags: ['SWMM', 'Reporting'],
    software: ['PCSWMM'],
    description: 'Summarize SWMM report outputs and identify actionable performance indicators.',
    url: 'https://swmm5rptstats.com/',
    owner: 'Third-party',
  },
  {
    name: 'Model Run Organizer',
    type: 'Installable Script',
    audience: 'Intermediate',
    tags: ['Automation', 'QA/QC'],
    software: ['Infoworks ICM', 'HEC-RAS'],
    description: 'Organize scenarios and model run artifacts for repeatable review and sign-off workflows.',
    url: '#',
    owner: 'Model Toolkit',
  },
  {
    name: 'Culvert Capacity Checker',
    type: 'Web App',
    audience: 'Beginner',
    tags: ['Hydraulics', 'Design'],
    software: ['HEC-RAS'],
    description: 'Estimate culvert capacity with an approachable interface for rapid screening.',
    url: '#',
    owner: 'Model Toolkit',
  },
  {
    name: 'Time-Series Gap Filler',
    type: 'Downloadable App',
    audience: 'Advanced',
    tags: ['Data', 'Automation', 'QA/QC'],
    software: ['Any'],
    description: 'Diagnose and repair gaps in hydromet time-series prior to model ingestion.',
    url: '#',
    owner: 'Model Toolkit',
  },
];

const state = {
  search: '',
  types: new Set(),
  audiences: new Set(),
  tags: new Set(),
  software: new Set(),
};

const els = {
  toolGrid: document.getElementById('toolGrid'),
  resultCount: document.getElementById('resultCount'),
  searchInput: document.getElementById('searchInput'),
  typeFilters: document.getElementById('typeFilters'),
  audienceFilters: document.getElementById('audienceFilters'),
  tagFilters: document.getElementById('tagFilters'),
  softwareFilters: document.getElementById('softwareFilters'),
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
  getUnique('software').forEach((value) => makeChip(value, state.software, els.softwareFilters));
}

function matchesFilters(tool) {
  const q = state.search.toLowerCase();
  const inSearch =
    !q ||
    [tool.name, tool.description, tool.type, tool.audience, ...tool.tags, ...tool.software]
      .join(' ')
      .toLowerCase()
      .includes(q);

  const inType = state.types.size === 0 || state.types.has(tool.type);
  const inAudience = state.audiences.size === 0 || state.audiences.has(tool.audience);
  const inTags = state.tags.size === 0 || tool.tags.some((tag) => state.tags.has(tag));
  const inSoftware = state.software.size === 0 || tool.software.some((item) => state.software.has(item));
  return inSearch && inType && inAudience && inTags && inSoftware;
}

function openTool(tool) {
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
    <h4>Software</h4>
    <div class="meta-row">
      ${tool.software.map((item) => `<span class="pill">${item}</span>`).join('')}
    </div>
    <p class="muted" style="margin-top: 1rem;">Future enhancement: role-based visibility and personalized recommendations after Okta / Azure AD sign-in.</p>
    <a class="link" href="${tool.url}" target="_blank" rel="noopener noreferrer">Open Tool ↗</a>
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
        <a class="link" href="${tool.url}" target="_blank" rel="noopener noreferrer">Launch ↗</a>
        <button class="link-btn" type="button">Details</button>
      </footer>
    `;

    card.querySelector('button').addEventListener('click', () => openTool(tool));
    els.toolGrid.appendChild(card);
  });
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
  state.software.clear();
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
