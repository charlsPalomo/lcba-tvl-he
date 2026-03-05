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
        });
        
        li.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        
        li.addEventListener('drop', (e) => {
            const dragEndIndex = +li.getAttribute('data-index');
            const temp = gameItems[dragStartIndex];
            gameItems[dragStartIndex] = gameItems[dragEndIndex];
            gameItems[dragEndIndex] = temp;
            renderList();
        });
        
        list.appendChild(li);
    });
}

function renderList() {
    const listItems = document.querySelectorAll('#step-list li');
    listItems.forEach((li, i) => {
        li.innerText = gameItems[i];
    });
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