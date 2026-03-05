const database = [
    { 
        name: "Cookery: Sautéing Onions", 
        steps: ["Heat pan on medium-high", "Add oil or butter", "Toss in diced onions", "Sauté until translucent", "Season with salt/pepper"], 
        fails: ["Add onions to a cold pan", "Wash onions after dicing"] 
    },
    { 
        name: "Cookery: Boiling Pasta", 
        steps: ["Fill pot with water", "Add plenty of salt", "Bring to a rolling boil", "Cook pasta until al dente", "Drain and reserve water"], 
        fails: ["Rinse pasta with cold water", "Add oil to the water"] 
    },
    { 
        name: "Safety: HACCP Sanitizing", 
        steps: ["Scrape food off plates", "Wash with warm soapy water", "Rinse with clean water", "Submerge in sanitizer solution", "Air dry on a clean rack"], 
        fails: ["Dry plates with a dirty towel", "Use cold water for grease"] 
    },
    { 
        name: "Skills: Making Brown Stock", 
        steps: ["Roast bones until brown", "Add mirepoix and brown", "Cover with cold water", "Simmer and skim impurities", "Strain through cheesecloth"], 
        fails: ["Boil the stock rapidly", "Stir the stock constantly"] 
    },
    { 
        name: "Preparation: Deep Frying", 
        steps: ["Heat oil to 180°C", "Pat the food dry", "Lower food gently into oil", "Fry until golden brown", "Drain on paper towels"], 
        fails: ["Drop wet food into hot oil", "Overcrowd the fryer basket"] 
    }
];

let currentRecipe = {};
let gameItems = [];
let timeLeft = 35;
let level = 1;
let timerId;
let dragStartIndex;

let touchDragIndex = null;
let touchClone = null;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initLevel() {
    const list = document.getElementById('step-list');
    list.innerHTML = '';
    
    currentRecipe = database[Math.floor(Math.random() * database.length)];
    const randomFail = currentRecipe.fails[Math.floor(Math.random() * currentRecipe.fails.length)];
    gameItems = [...currentRecipe.steps, randomFail];
    shuffle(gameItems);

    document.getElementById('recipe-name').innerText = currentRecipe.name;
    document.getElementById('level-display').innerText = level;

    gameItems.forEach((step, index) => {
        const li = document.createElement('li');
        li.setAttribute('data-index', index);
        li.draggable = true;
        li.innerText = step;
        
        li.addEventListener('dragstart', () => {
            dragStartIndex = index;
            li.classList.add('dragging');
        });

        li.addEventListener('dragend', () => {
            li.classList.remove('dragging');
        });
        
        li.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        
        li.addEventListener('drop', () => {
            const dragEndIndex = +li.getAttribute('data-index');
            swapItems(dragStartIndex, dragEndIndex);
        });

        li.addEventListener('touchstart', onTouchStart, { passive: true });
        li.addEventListener('touchmove', onTouchMove, { passive: false });
        li.addEventListener('touchend', onTouchEnd);
        
        list.appendChild(li);
    });
}

function swapItems(fromIndex, toIndex) {
    if (fromIndex === toIndex) return;
    const temp = gameItems[fromIndex];
    gameItems[fromIndex] = gameItems[toIndex];
    gameItems[toIndex] = temp;
    renderList();
}

function renderList() {
    const listItems = document.querySelectorAll('#step-list li');
    listItems.forEach((li, i) => {
        li.innerText = gameItems[i];
        li.setAttribute('data-index', i);
    });
}

function onTouchStart(e) {
    const li = e.currentTarget;
    touchDragIndex = +li.getAttribute('data-index');

    touchClone = li.cloneNode(true);
    touchClone.style.position = 'fixed';
    touchClone.style.zIndex = '9999';
    touchClone.style.opacity = '0.85';
    touchClone.style.pointerEvents = 'none';
    touchClone.style.width = li.offsetWidth + 'px';
    touchClone.style.margin = '0';
    touchClone.style.left = li.getBoundingClientRect().left + 'px';
    touchClone.style.top = li.getBoundingClientRect().top + 'px';
    document.body.appendChild(touchClone);

    li.classList.add('dragging');
}

function onTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];

    if (touchClone) {
        touchClone.style.left = (touch.clientX - touchClone.offsetWidth / 2) + 'px';
        touchClone.style.top = (touch.clientY - touchClone.offsetHeight / 2) + 'px';
    }

    const list = document.getElementById('step-list');
    const items = list.querySelectorAll('li:not(.dragging)');
    items.forEach(item => item.classList.remove('drag-over'));

    const target = getTouchTarget(touch.clientX, touch.clientY);
    if (target) target.classList.add('drag-over');
}

function onTouchEnd(e) {
    const touch = e.changedTouches[0];
    const target = getTouchTarget(touch.clientX, touch.clientY);

    if (target !== null) {
        const toIndex = +target.getAttribute('data-index');
        swapItems(touchDragIndex, toIndex);
    }

    if (touchClone) {
        touchClone.remove();
        touchClone = null;
    }

    document.querySelectorAll('#step-list li').forEach(li => {
        li.classList.remove('dragging', 'drag-over');
    });

    touchDragIndex = null;
}

function getTouchTarget(x, y) {
    const list = document.getElementById('step-list');
    const items = list.querySelectorAll('li');
    for (const item of items) {
        if (item.classList.contains('dragging')) continue;
        const rect = item.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            return item;
        }
    }
    return null;
}

function startGame() {
    level = 1;
    timeLeft = 35;
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('feedback').innerText = "";
    initLevel();
    startTimer();
}

function startTimer() {
    clearInterval(timerId);
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            showGameOver();
        }
    }, 1000);
}

function checkOrder() {
    const isWin = JSON.stringify(gameItems.slice(0, 5)) === JSON.stringify(currentRecipe.steps);
    if (isWin) {
        level++;
        timeLeft += 10; 
        initLevel();
        document.getElementById('feedback').innerText = "Order Up! +10s";
        document.getElementById('feedback').style.color = "#2ecc71";
    } else {
        document.getElementById('feedback').innerText = "Dish Rejected! Fix the order.";
        document.getElementById('feedback').style.color = "#e74c3c";
    }
}

function showGameOver() {
    const overlay = document.getElementById('overlay');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-desc');
    const btn = document.getElementById('restart-btn');
    
    overlay.style.display = 'flex';
    title.innerText = "STATION CLOSED!";
    desc.innerText = `Final Career Level: ${level - 1}`;
    btn.innerText = "START NEW SHIFT";
}