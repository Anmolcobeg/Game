/* ============================================================
   Earth Day Explorer — script.js
   ============================================================ */

// ── Data ─────────────────────────────────────────────────────

const facts = [
  {
    emoji: "🌊",
    title: "71% of Earth is Water",
    body: "Over two-thirds of Earth's surface is covered by oceans. Yet 97% of that water is saltwater — leaving only about 3% as freshwater, and most of that is locked in glaciers and ice caps."
  },
  {
    emoji: "🌳",
    title: "Trees talk underground",
    body: "Forests communicate through a vast fungal network called the 'Wood Wide Web'. Trees share nutrients and send chemical warning signals to each other through underground mycorrhizal fungal threads."
  },
  {
    emoji: "⚡",
    title: "100 lightning strikes per second",
    body: "At any given moment, around 2,000 thunderstorms are active across Earth, producing approximately 100 lightning strikes every single second — that's over 8 million bolts per day."
  },
  {
    emoji: "🏔️",
    title: "Everest isn't the tallest from Earth's core",
    body: "Mauna Kea in Hawaii is taller than Mount Everest when measured from its oceanic base. And Ecuador's Mount Chimborazo is closest to the stars, since Earth bulges at the equator."
  },
  {
    emoji: "🦠",
    title: "Bacteria outnumber human cells",
    body: "Your body contains about 37 trillion human cells — but roughly 38 trillion bacterial cells. You are, by cell count, slightly more microbe than human!"
  },
  {
    emoji: "🌡️",
    title: "Earth's inner core is as hot as the Sun's surface",
    body: "The temperature at Earth's inner core reaches approximately 5,100–6,000°C — comparable to the surface of the Sun. Yet it remains solid due to the extreme pressure from above."
  },
  {
    emoji: "🐋",
    title: "Blue whales are the largest creatures ever",
    body: "Blue whales are the largest animals known to have ever existed — bigger than any dinosaur. Their hearts alone weigh around 180 kg and can be heard from 2 kilometres away."
  },
  {
    emoji: "🌬️",
    title: "Oxygen comes mostly from the ocean",
    body: "Over 50% of Earth's oxygen is produced by phytoplankton — microscopic marine organisms — not by forests. The Amazon produces about 20%, earning it the nickname 'lungs of the Earth.'"
  },
  {
    emoji: "💎",
    title: "Diamonds rain on Neptune",
    body: "Scientists believe it rains diamonds inside Neptune and Uranus. The extreme pressure converts carbon into diamond crystals that sink through the planet's interior."
  },
  {
    emoji: "🐢",
    title: "Plastic takes 450 years to break down",
    body: "A single plastic bottle can take 450 years to decompose. Every piece of plastic ever made still exists on Earth in some form — that's every piece since the 1950s."
  },
  {
    emoji: "🌸",
    title: "Plants communicate with chemicals",
    body: "When a plant is attacked by insects, it releases volatile chemicals into the air. Neighbouring plants detect these signals and preemptively boost their own chemical defences."
  },
  {
    emoji: "🌀",
    title: "The ozone layer is healing",
    body: "Thanks to the 1987 Montreal Protocol banning CFCs, the ozone hole over Antarctica has been steadily shrinking. Scientists expect it to fully recover by the 2060s — a rare environmental success story."
  }
];

const questions = [
  {
    cat: "Oceans",
    q: "What percentage of Earth's surface is covered by water?",
    opts: ["51%", "61%", "71%", "81%"],
    ans: 2,
    exp: "71% of Earth's surface is water, making it the 'Blue Planet'. Most of this is saltwater in the world's oceans."
  },
  {
    cat: "Atmosphere",
    q: "Approximately how many lightning strikes hit Earth every second?",
    opts: ["10", "50", "100", "500"],
    ans: 2,
    exp: "About 100 lightning bolts strike Earth every second, totalling over 8 million flashes per day across 2,000 active thunderstorms."
  },
  {
    cat: "Climate",
    q: "Which international agreement was key to healing the ozone layer?",
    opts: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Geneva Treaty"],
    ans: 2,
    exp: "The 1987 Montreal Protocol successfully phased out CFCs, allowing the ozone layer to steadily heal — expected to fully recover by the 2060s."
  },
  {
    cat: "Biology",
    q: "Where does more than half of Earth's oxygen come from?",
    opts: ["The Amazon rainforest", "The Sahara desert", "Ocean phytoplankton", "Grasslands"],
    ans: 2,
    exp: "Marine phytoplankton produce over 50% of Earth's oxygen through photosynthesis — more than all forests combined."
  },
  {
    cat: "Geography",
    q: "Which mountain is actually closest to outer space (farthest from Earth's centre)?",
    opts: ["Mount Everest", "Mauna Kea", "Mount Kilimanjaro", "Mount Chimborazo"],
    ans: 3,
    exp: "Mount Chimborazo in Ecuador sits on Earth's equatorial bulge, making its summit the point farthest from Earth's centre — closer to space than Everest's peak."
  },
  {
    cat: "Conservation",
    q: "How long does a plastic bottle typically take to break down?",
    opts: ["10 years", "50 years", "200 years", "450 years"],
    ans: 3,
    exp: "Plastic bottles take approximately 450 years to decompose, meaning every plastic bottle ever made still exists on Earth in some form."
  },
  {
    cat: "Earth Science",
    q: "What is the approximate temperature at Earth's inner core?",
    opts: ["500°C", "1,000°C", "3,000°C", "5,500°C"],
    ans: 3,
    exp: "Earth's inner core reaches about 5,100–6,000°C — similar to the surface of the Sun — yet remains solid due to immense pressure."
  },
  {
    cat: "Ecology",
    q: "What network do trees use to share nutrients underground?",
    opts: ["Root networks", "Mycorrhizal fungal networks", "Water table connections", "Soil bacterial chains"],
    ans: 1,
    exp: "Trees communicate through mycorrhizal fungi — the 'Wood Wide Web' — sharing sugars, water, and even chemical distress signals with neighbouring trees."
  },
  {
    cat: "Wildlife",
    q: "How much does the heart of a blue whale approximately weigh?",
    opts: ["10 kg", "50 kg", "180 kg", "500 kg"],
    ans: 2,
    exp: "A blue whale's heart weighs around 180 kg — roughly the size of a small car. Its heartbeat can be detected from 3 km away."
  },
  {
    cat: "Pollution",
    q: "About what fraction of Earth's freshwater is locked in glaciers and ice caps?",
    opts: ["One quarter", "Two thirds", "One tenth", "Half"],
    ans: 1,
    exp: "About two-thirds of Earth's freshwater is frozen in glaciers and ice caps. Only a tiny fraction — about 0.3% of all water — is accessible in rivers and lakes."
  }
];

// ── State ─────────────────────────────────────────────────────

let selectedMode = 'facts';
let currentFact  = 0;
let currentQ     = 0;
let score        = 0;
let answered     = false;

// ── Screen Helpers ────────────────────────────────────────────

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── Mode Selection ────────────────────────────────────────────

function selectMode(m) {
  selectedMode = m;
  ['facts', 'quiz', 'both'].forEach(x => {
    document.getElementById('mode-' + x).classList.toggle('selected', x === m);
  });
}

// ── Start Game ────────────────────────────────────────────────

function startGame() {
  if (selectedMode === 'quiz') {
    showScreen('quiz-screen');
    initQuiz();
  } else {
    showScreen('fact-screen');
    showFact(0);
  }
}

// ── Fact Explorer ─────────────────────────────────────────────

function showFact(i) {
  currentFact = (i + facts.length) % facts.length;
  const f = facts[currentFact];

  document.getElementById('fact-emoji').textContent = f.emoji;
  document.getElementById('fact-title').textContent = f.title;
  document.getElementById('fact-body').textContent  = f.body;
  document.getElementById('fact-num').textContent   = `Fact ${currentFact + 1} of ${facts.length}`;

  // Re-trigger slide-in animation
  const card = document.getElementById('fact-card');
  card.style.animation = 'none';
  void card.offsetWidth; // force reflow
  card.style.animation  = '';
}

function nextFact() { showFact(currentFact + 1); }
function prevFact() { showFact(currentFact - 1); }

function goToQuiz() {
  showScreen('quiz-screen');
  initQuiz();
}

function goHome() {
  showScreen('intro');
}

// ── Quiz ──────────────────────────────────────────────────────

function initQuiz() {
  currentQ = 0;
  score    = 0;
  answered = false;
  loadQuestion();
}

function loadQuestion() {
  answered = false;

  const q = questions[currentQ];

  document.getElementById('q-progress').textContent  = `Question ${currentQ + 1} of ${questions.length}`;
  document.getElementById('q-score').textContent     = `Score: ${score}`;
  document.getElementById('prog-fill').style.width   = `${((currentQ + 1) / questions.length) * 100}%`;
  document.getElementById('q-cat').textContent       = q.cat;
  document.getElementById('q-text').textContent      = q.q;
  document.getElementById('explanation').style.display = 'none';
  document.getElementById('next-q-btn').style.display  = 'none';

  // Build options
  const grid    = document.getElementById('options-grid');
  const letters = ['A', 'B', 'C', 'D'];
  grid.innerHTML = '';

  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span>${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    grid.appendChild(btn);
  });

  // Re-trigger animation
  const card = document.getElementById('q-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';
}

function selectAnswer(chosen) {
  if (answered) return;
  answered = true;

  const q    = questions[currentQ];
  const btns = document.querySelectorAll('.option-btn');

  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans)   btn.classList.add('correct');
    else if (i === chosen) btn.classList.add('wrong');
  });

  if (chosen === q.ans) score++;
  document.getElementById('q-score').textContent = `Score: ${score}`;

  const expBox = document.getElementById('explanation');
  const prefix = chosen === q.ans ? '<b>✓ Correct!</b> ' : '<b>✗ Not quite.</b> ';
  expBox.innerHTML      = prefix + q.exp;
  expBox.style.display  = 'block';

  if (currentQ < questions.length - 1) {
    document.getElementById('next-q-btn').style.display = 'block';
  } else {
    setTimeout(showResults, 1400);
  }
}

function nextQuestion() {
  currentQ++;
  loadQuestion();
}

// ── Results ───────────────────────────────────────────────────

function showResults() {
  showScreen('results');

  const pct = score / questions.length;
  document.getElementById('res-score').textContent = `${score}/${questions.length}`;

  let title, msg;
  if (pct === 1) {
    title = '🏆 Perfect Score!';
    msg   = "Incredible! You're a true Earth champion. Our planet needs more people like you who understand and care for it.";
  } else if (pct >= 0.8) {
    title = '🌟 Earth Expert!';
    msg   = "Outstanding work! You clearly know and care about our planet. Keep spreading the knowledge!";
  } else if (pct >= 0.6) {
    title = '🌿 Earth Learner';
    msg   = "Good effort! You know a lot about Earth. Explore the fact cards to discover even more amazing things about our home.";
  } else if (pct >= 0.4) {
    title = '🌱 Growing Awareness';
    msg   = "A solid start on your Earth journey! There's so much to discover. Try the Fact Explorer and take the quiz again.";
  } else {
    title = '🌍 Begin the Journey';
    msg   = "The Earth has so many secrets to share! Head back to the Fact Explorer, soak in the knowledge, then give the quiz another try.";
  }

  document.getElementById('res-title').textContent = title;
  document.getElementById('res-msg').textContent   = msg;
}

function restartQuiz() {
  showScreen('quiz-screen');
  initQuiz();
}

// ── Floating Leaves ───────────────────────────────────────────

(function spawnLeaves() {
  const container  = document.getElementById('leaves-container');
  const leafEmojis = ['🍃', '🍂', '🌿', '🍀'];

  for (let i = 0; i < 14; i++) {
    const leaf = document.createElement('div');
    leaf.className    = 'leaf';
    leaf.textContent  = leafEmojis[i % leafEmojis.length];
    leaf.style.left              = (Math.random() * 100) + '%';
    leaf.style.animationDuration = (8 + Math.random() * 12) + 's';
    leaf.style.animationDelay   = (-Math.random() * 12) + 's';
    leaf.style.fontSize          = (16 + Math.random() * 14) + 'px';
    container.appendChild(leaf);
  }
})();