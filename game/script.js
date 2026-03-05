const KG_RECIPES = [
  {
    name: "Sinangag (Garlic Fried Rice)",
    emoji: "🍚",
    steps: [
      { action: "Sauté garlic",   correct: "🧄 Garlic",        distractors: ["🧅 Onion","🌶️ Chili","🫚 Oil","🍅 Tomato"] },
      { action: "Add cold rice",  correct: "🍚 Cold Rice",      distractors: ["🍞 Bread","🥔 Potato","🥚 Egg","🌽 Corn"] },
      { action: "Season it",      correct: "🧂 Salt",           distractors: ["🍯 Sugar","🌿 Basil","🫙 Vinegar","🌶️ Chili"] },
    ]
  },
  {
    name: "Scrambled Eggs",
    emoji: "🥚",
    steps: [
      { action: "Crack eggs",     correct: "🥚 Egg",            distractors: ["🥛 Milk","🧀 Cheese","🫚 Oil","🥔 Potato"] },
      { action: "Add milk",       correct: "🥛 Milk",           distractors: ["💧 Water","🧃 Juice","🍶 Soy Sauce","🍋 Lemon"] },
      { action: "Cook in pan",    correct: "🍳 Pan",            distractors: ["🥘 Pot","🫕 Wok","🍲 Casserole","🥗 Bowl"] },
    ]
  },
  {
    name: "Nilaga (Boiled Beef Soup)",
    emoji: "🍖",
    steps: [
      { action: "Boil beef",      correct: "🥩 Beef",           distractors: ["🍗 Chicken","🐟 Fish","🥓 Bacon","🦐 Shrimp"] },
      { action: "Add potato",     correct: "🥔 Potato",         distractors: ["🌽 Corn","🧅 Onion","🥦 Broccoli","🥕 Carrot"] },
      { action: "Add cabbage",    correct: "🥬 Cabbage",        distractors: ["🥗 Lettuce","🫑 Bell Pepper","🍅 Tomato","🥦 Broccoli"] },
      { action: "Season broth",   correct: "🧂 Salt",           distractors: ["🫙 Vinegar","🌶️ Chili","🍯 Sugar","🧄 Garlic"] },
    ]
  },
  {
    name: "Sinigang (Tamarind Soup)",
    emoji: "🍜",
    steps: [
      { action: "Boil pork",           correct: "🥩 Pork Ribs",   distractors: ["🍗 Chicken","🐟 Fish","🦐 Shrimp","🥓 Bacon"] },
      { action: "Add tamarind mix",    correct: "🍋 Tamarind Mix", distractors: ["🍊 Calamansi","🫙 Vinegar","🌶️ Chili","🧂 Salt"] },
      { action: "Add kangkong",        correct: "🥬 Kangkong",     distractors: ["🥦 Broccoli","🥕 Carrot","🌽 Corn","🍅 Tomato"] },
      { action: "Add fish sauce",      correct: "🫙 Fish Sauce",   distractors: ["🧂 Salt","🍯 Sugar","🧄 Garlic","🌶️ Chili"] },
    ]
  },
  {
    name: "Fried Tilapia",
    emoji: "🐟",
    steps: [
      { action: "Prepare tilapia",  correct: "🐟 Tilapia",  distractors: ["🦐 Shrimp","🥩 Beef","🍗 Chicken","🦑 Squid"] },
      { action: "Season fish",      correct: "🧂 Salt",     distractors: ["🍯 Sugar","🌶️ Chili","🫙 Vinegar","🍋 Lemon"] },
      { action: "Heat oil",         correct: "🫚 Oil",      distractors: ["💧 Water","🥛 Milk","🍶 Soy Sauce","🍊 Juice"] },
      { action: "Fry until golden", correct: "🍳 Pan",      distractors: ["🥘 Pot","🫕 Wok","🍲 Casserole","🥗 Bowl"] },
    ]
  },
  {
    name: "Ginisang Munggo",
    emoji: "🫘",
    steps: [
      { action: "Sauté onion",    correct: "🧅 Onion",       distractors: ["🥕 Carrot","🍅 Tomato","🫑 Bell Pepper","🌽 Corn"] },
      { action: "Add mung beans", correct: "🫘 Mung Beans",  distractors: ["🥜 Peanuts","🌾 Rice","🥔 Potato","🍚 Cooked Rice"] },
      { action: "Add pork",       correct: "🥩 Pork",        distractors: ["🍗 Chicken","🥚 Egg","🧀 Cheese","🐟 Fish"] },
      { action: "Add malunggay",  correct: "🌿 Malunggay",   distractors: ["🥬 Cabbage","🍃 Basil","🌱 Spinach","🥦 Broccoli"] },
    ]
  },
  {
    name: "Pancit Bihon",
    emoji: "🍝",
    steps: [
      { action: "Soak noodles",        correct: "🍝 Bihon Noodles", distractors: ["🍜 Miki","🍞 Bread","🌾 Rice","🥔 Potato"] },
      { action: "Sauté garlic",        correct: "🧄 Garlic",        distractors: ["🌶️ Chili","🫚 Oil","🍯 Sugar","🧅 Onion"] },
      { action: "Add chicken",         correct: "🍗 Chicken",       distractors: ["🥩 Beef","🐟 Fish","🦐 Shrimp","🥚 Egg"] },
      { action: "Season w/ soy sauce", correct: "🍶 Soy Sauce",     distractors: ["🧂 Salt","🫙 Vinegar","🌶️ Chili","🍯 Sugar"] },
    ]
  },
  {
    name: "Chicken Adobo",
    emoji: "🍗",
    steps: [
      { action: "Marinate in soy sauce", correct: "🍶 Soy Sauce", distractors: ["🧂 Salt","🍯 Honey","🫙 Fish Sauce","🌶️ Chili"] },
      { action: "Add vinegar",           correct: "🫙 Vinegar",   distractors: ["🍋 Lemon","🧃 Juice","💧 Water","🍊 Calamansi"] },
      { action: "Add bay leaf",          correct: "🌿 Bay Leaf",  distractors: ["🍃 Basil","🌱 Thyme","🥬 Kangkong","🌿 Malunggay"] },
      { action: "Brown in pan",          correct: "🍳 Pan",       distractors: ["🥘 Pot","🫕 Wok","🍲 Casserole","🥗 Bowl"] },
    ]
  },
  {
    name: "Tortang Talong",
    emoji: "🍆",
    steps: [
      { action: "Grill eggplant", correct: "🍆 Eggplant", distractors: ["🥔 Potato","🌽 Corn","🥦 Broccoli","🫑 Bell Pepper"] },
      { action: "Peel & flatten", correct: "🍴 Fork",     distractors: ["🥄 Spoon","🔪 Knife","🍳 Pan","🥘 Pot"] },
      { action: "Dip in egg",     correct: "🥚 Egg",      distractors: ["🥛 Milk","🧀 Cheese","🍯 Sugar","🫚 Oil"] },
      { action: "Fry it",         correct: "🫚 Oil",      distractors: ["💧 Water","🧂 Salt","🍋 Lemon","🍶 Soy Sauce"] },
    ]
  },
  {
    name: "Arroz Caldo",
    emoji: "🍲",
    steps: [
      { action: "Sauté ginger",      correct: "🫚 Ginger",     distractors: ["🧄 Garlic","🧅 Onion","🌶️ Chili","🍅 Tomato"] },
      { action: "Add chicken",       correct: "🍗 Chicken",    distractors: ["🥩 Beef","🐟 Fish","🥚 Egg","🦐 Shrimp"] },
      { action: "Add rice",          correct: "🌾 Rice",       distractors: ["🍝 Noodles","🍞 Bread","🥔 Potato","🫘 Beans"] },
      { action: "Season with patis", correct: "🫙 Fish Sauce", distractors: ["🧂 Salt","🍯 Sugar","🍶 Soy Sauce","🫙 Vinegar"] },
    ]
  },
];

const KG_DIFFICULTY = {
  easy:   { time: 45, options: 3, pointsPerStep: 100 },
  medium: { time: 35, options: 4, pointsPerStep: 150 },
  hard:   { time: 25, options: 5, pointsPerStep: 200 },
};

const kg = {
  diff:          "easy",
  score:         0,
  dishes:        0,
  correctTaps:   0,
  combo:         1,
  bestCombo:     1,
  recipe:        null,
  stepIdx:       0,
  timeLeft:      0,
  timerInterval: null,
  running:       false,
};

let kgScreens = {};
let kgEl      = {};

function kgInit() {
  kgScreens = {
    start: document.getElementById('kg-start'),
    game:  document.getElementById('kg-game'),
    over:  document.getElementById('kg-over'),
  };
  kgEl = {
    score:      document.getElementById('kg-score'),
    dishes:     document.getElementById('kg-dishes'),
    combo:      document.getElementById('kg-combo'),
    timerBar:   document.getElementById('kg-timer-bar'),
    dishEmoji:  document.getElementById('kg-dish-emoji'),
    dishName:   document.getElementById('kg-dish-name'),
    stepsList:  document.getElementById('kg-steps-list'),
    progress:   document.getElementById('kg-progress'),
    feedback:   document.getElementById('kg-feedback'),
    comboD:     document.getElementById('kg-combo-display'),
    grid:       document.getElementById('kg-grid'),
    finalScore: document.getElementById('kg-final-score'),
    statDishes: document.getElementById('kg-stat-dishes'),
    statCorrect:document.getElementById('kg-stat-correct'),
    statCombo:  document.getElementById('kg-stat-combo'),
    gradeBox:   document.getElementById('kg-grade-box'),
    overTitle:  document.getElementById('kg-over-title'),
    gradeMsg:   document.getElementById('kg-grade-msg'),
  };

  document.querySelectorAll('.kg-diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.kg-diff-btn').forEach(b => b.classList.remove('sel'));
      btn.classList.add('sel');
      kg.diff = btn.dataset.diff;
    });
  });

  document.getElementById('kg-start-btn').addEventListener('click', kgStartGame);
  document.getElementById('kg-retry-btn').addEventListener('click', kgStartGame);
  document.getElementById('kg-menu-btn').addEventListener('click', () => {
    clearInterval(kg.timerInterval);
    kg.running = false;
    kgShowScreen('start');
  });
}

function kgShowScreen(name) {
  Object.values(kgScreens).forEach(s => s.classList.remove('active'));
  kgScreens[name].classList.add('active');
}

function kgShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function kgRandomRecipe() {
  return KG_RECIPES[Math.floor(Math.random() * KG_RECIPES.length)];
}

function kgUpdateHUD() {
  kgEl.score.textContent  = kg.score;
  kgEl.dishes.textContent = kg.dishes;
  kgEl.combo.textContent  = `x${kg.combo}`;
}

function kgStartTimer() {
  const cfg = KG_DIFFICULTY[kg.diff];
  kg.timeLeft = cfg.time;
  clearInterval(kg.timerInterval);
  kg.timerInterval = setInterval(() => {
    kg.timeLeft -= 0.2;
    const pct = Math.max(0, (kg.timeLeft / cfg.time) * 100);
    kgEl.timerBar.style.width = pct + '%';
    if (kg.timeLeft <= 0) kgEndGame();
  }, 200);
}

function kgResetTimer() {
  kg.timeLeft = KG_DIFFICULTY[kg.diff].time;
  kgEl.timerBar.style.width = '100%';
}

function kgLoadRecipe() {
  kg.recipe  = kgRandomRecipe();
  kg.stepIdx = 0;
  kgEl.dishEmoji.textContent = kg.recipe.emoji;
  kgEl.dishName.textContent  = kg.recipe.name;
  kgRenderStepTags();
  kgRenderStep();
}

function kgRenderStepTags() {
  kgEl.stepsList.innerHTML = '';
  kg.recipe.steps.forEach((s, i) => {
    const tag = document.createElement('div');
    tag.className = 'kg-step-tag' + (i < kg.stepIdx ? ' done' : '');
    tag.id = `kg-steptag-${i}`;
    const icon = i < kg.stepIdx ? '✅' : (i === kg.stepIdx ? '👉' : '⬜');
    tag.innerHTML = `<span>${icon}</span>${s.action}`;
    kgEl.stepsList.appendChild(tag);
  });
}

function kgRenderStep() {
  const cfg  = KG_DIFFICULTY[kg.diff];
  const step = kg.recipe.steps[kg.stepIdx];

  kgEl.progress.textContent = `Step ${kg.stepIdx + 1} of ${kg.recipe.steps.length} — ${step.action}`;

  const pool    = kgShuffle(step.distractors).slice(0, cfg.options - 1);
  const options = kgShuffle([step.correct, ...pool]);

  kgEl.grid.innerHTML = '';
  options.forEach(opt => {
    const parts = opt.split(' ');
    const em    = parts[0];
    const label = parts.slice(1).join(' ');
    const btn   = document.createElement('button');
    btn.className   = 'kg-ing-btn';
    btn.dataset.val = opt;
    btn.innerHTML   = `<span class="kg-em">${em}</span>${label}`;
    btn.addEventListener('click', kgHandleTap);
    kgEl.grid.appendChild(btn);
  });
}

function kgHandleTap(e) {
  if (!kg.running) return;
  const btn     = e.currentTarget;
  const step    = kg.recipe.steps[kg.stepIdx];
  const correct = btn.dataset.val === step.correct;

  if (correct) {
    btn.classList.add('correct');
    kg.correctTaps++;
    const pts = KG_DIFFICULTY[kg.diff].pointsPerStep * kg.combo;
    kg.score += pts;
    kgShowFeedback(`+${pts} 🎉`, '#22c55e');
    kg.combo++;
    if (kg.combo > kg.bestCombo) kg.bestCombo = kg.combo;
    kgEl.comboD.textContent = kg.combo >= 3 ? `🔥 COMBO x${kg.combo}!` : '';

    kgEl.grid.querySelectorAll('.kg-ing-btn').forEach(b => b.style.pointerEvents = 'none');

    const tag = document.getElementById(`kg-steptag-${kg.stepIdx}`);
    if (tag) {
      tag.classList.add('done');
      tag.querySelector('span').textContent = '✅';
    }

    setTimeout(() => {
      kg.stepIdx++;
      kgUpdateHUD();

      if (kg.stepIdx >= kg.recipe.steps.length) {
        const bonus = 200 * kg.combo;
        kg.score  += bonus;
        kg.dishes += 1;
        kgShowFeedback(`Dish done! +${bonus} bonus 🍽️`, '#f97316');
        kgEl.comboD.textContent = '';
        kgUpdateHUD();
        kgResetTimer();
        setTimeout(kgLoadRecipe, 900);
      } else {
        kgRenderStepTags();
        kgRenderStep();
      }
    }, 500);

  } else {
    btn.classList.add('wrong');
    kg.combo = 1;
    kgEl.comboD.textContent = '';
    kgShowFeedback(`Wrong! Try again 😬`, '#e8392b');
    kgUpdateHUD();
    setTimeout(() => btn.classList.remove('wrong'), 400);
  }
}

let kgFeedbackTimer = null;
function kgShowFeedback(msg, color) {
  kgEl.feedback.textContent   = msg;
  kgEl.feedback.style.color   = color;
  kgEl.feedback.style.opacity = 1;
  clearTimeout(kgFeedbackTimer);
  kgFeedbackTimer = setTimeout(() => { kgEl.feedback.style.opacity = 0.4; }, 900);
}

function kgStartGame() {
  kg.score       = 0;
  kg.dishes      = 0;
  kg.correctTaps = 0;
  kg.combo       = 1;
  kg.bestCombo   = 1;
  kg.running     = true;
  kgUpdateHUD();
  kgShowScreen('game');
  kgLoadRecipe();
  kgStartTimer();
}

function kgEndGame() {
  clearInterval(kg.timerInterval);
  kg.running = false;
  kgShowScreen('over');

  kgEl.finalScore.textContent  = kg.score;
  kgEl.statDishes.textContent  = kg.dishes;
  kgEl.statCorrect.textContent = kg.correctTaps;
  kgEl.statCombo.textContent   = `x${kg.bestCombo}`;

  let grade = '🥄', msg = "Keep practicing — you'll get it!";
  if      (kg.score >= 3000) { grade = '🏆'; msg = 'Outstanding Chef! Punong Guro would be proud! 🌟'; }
  else if (kg.score >= 1800) { grade = '🥇'; msg = 'Excellent work, Kitchen Master! 👩‍🍳'; }
  else if (kg.score >= 900)  { grade = '🥈'; msg = 'Great job! You know your way around the kitchen!'; }
  else if (kg.score >= 300)  { grade = '🥉'; msg = 'Good try! Study your recipes and go again!'; }

  kgEl.gradeBox.textContent  = grade;
  kgEl.overTitle.textContent = kg.score >= 900 ? 'Great Cooking! 🎉' : "Time's Up!";
  kgEl.gradeMsg.textContent  = msg;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', kgInit);
} else {
  kgInit();
}