// ==================== CONFIGURATION ====================
// CHANGE PASSWORD HERE - Just edit this single line!
const DEFAULT_PASSWORD = "cyber2024";

// Password hashing function (simple hash for frontend-only use)
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString();
}

// ==================== GAME DATABASE ====================
const games = [
    {
        title: "1v1.LOL",
        description: "Build and battle in this fast-paced shooter",
        url: "https://1v1.lol",
        image: "🎯"
    },
    {
        title: "Slope",
        description: "Control the ball down endless slopes",
        url: "https://slope-game.github.io/rPo2RgB/",
        image: "🎲"
    },
    {
        title: "Run 3",
        description: "Run through space tunnels in this endless runner",
        url: "https://run3-game.github.io/Run3/",
        image: "🏃"
    },
    {
        title: "2048",
        description: "Combine tiles to reach 2048",
        url: "https://play2048.co/",
        image: "🔢"
    },
    {
        title: "Tetris",
        description: "Classic block-stacking puzzle game",
        url: "https://tetris.com/play-tetris",
        image: "🧱"
    },
    {
        title: "Snake",
        description: "Grow your snake by eating food",
        url: "https://playsnake.org/",
        image: "🐍"
    },
    {
        title: "Basketball Stars",
        description: "Slam dunk in this basketball game",
        url: "https://basketball-stars.io/",
        image: "🏀"
    },
    {
        title: "Tunnel Rush",
        description: "Speed through colorful tunnels",
        url: "https://tunnelrush.github.io/",
        image: "🌀"
    },
    {
        title: "Retro Bowl",
        description: "Manage your football team to victory",
        url: "https://retrobowl.github.io/game.html",
        image: "🏈"
    },
    {
        title: "Friday Night Funkin'",
        description: "Rhythm battle music game",
        url: "https://fridaynightfunkin.github.io/",
        image: "🎵"
    },
    {
        title: "Geometry Dash",
        description: "Jump and fly through danger",
        url: "https://scratch.mit.edu/projects/105500895/",
        image: "📐"
    },
    {
        title: "Subway Surfers",
        description: "Run and dodge trains in this endless runner",
        url: "https://poki.com/en/g/subway-surfers",
        image: "🚇"
    },
    {
        title: "Shell Shockers",
        description: "Egg-based multiplayer shooter",
        url: "https://shellshock.io/",
        image: "🥚"
    },
    {
        title: "Krunker",
        description: "Fast-paced pixelated FPS",
        url: "https://krunker.io/",
        image: "🎮"
    },
    {
        title: "Agar.io",
        description: "Grow your cell and consume others",
        url: "https://agar.io/",
        image: "⚪"
    },
    {
        title: "Slither.io",
        description: "Snake game meets multiplayer action",
        url: "https://slither.io/",
        image: "🐍"
    },
    {
        title: "Paper.io 2",
        description: "Conquer territory in this multiplayer game",
        url: "https://paper-io.com/",
        image: "📄"
    },
    {
        title: "Chess",
        description: "Play chess against the computer",
        url: "https://www.chess.com/play/computer",
        image: "♟️"
    },
    {
        title: "Duck Life",
        description: "Train your duck to become a champion",
        url: "https://duckling.io/",
        image: "🦆"
    },
    {
        title: "Cookie Clicker",
        description: "Click cookies to build your empire",
        url: "https://orteil.dashnet.org/cookieclicker/",
        image: "🍪"
    }
];

// ==================== STATE MANAGEMENT ====================
let currentSection = "home";
let timerInterval = null;
let timerSeconds = 0;
let settingsUnlocked = false;

// ==================== INTRO ANIMATION ====================
window.addEventListener('load', () => {
    const introScreen = document.getElementById('intro-screen');
    const passwordScreen = document.getElementById('password-screen');
    
    // Show intro
    introScreen.classList.add('active');
    
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('portalAuth') === simpleHash(getStoredPassword());
    
    // Transition from intro to password or main site
    setTimeout(() => {
        introScreen.classList.remove('active');
        
        if (isAuthenticated) {
            // Skip password screen if already authenticated
            document.getElementById('main-site').classList.add('active');
        } else {
            // Show password screen
            passwordScreen.classList.add('active');
        }
    }, 5000);
});

// ==================== PASSWORD MANAGEMENT ====================
function getStoredPassword() {
    return localStorage.getItem('portalPassword') || DEFAULT_PASSWORD;
}

function setStoredPassword(newPassword) {
    localStorage.setItem('portalPassword', newPassword);
}

// Password screen submission
document.getElementById('password-submit').addEventListener('click', checkPassword);
document.getElementById('password-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkPassword();
});

function checkPassword() {
    const input = document.getElementById('password-input');
    const error = document.getElementById('password-error');
    const passwordScreen = document.getElementById('password-screen');
    const mainSite = document.getElementById('main-site');
    
    if (input.value === getStoredPassword()) {
        // Store authentication
        localStorage.setItem('portalAuth', simpleHash(getStoredPassword()));
        
        // Transition to main site
        passwordScreen.classList.remove('active');
        setTimeout(() => {
            mainSite.classList.add('active');
        }, 300);
        
        error.textContent = '';
        input.value = '';
    } else {
        error.textContent = '❌ Incorrect password';
        input.value = '';
        input.parentElement.style.animation = 'none';
        setTimeout(() => {
            input.parentElement.style.animation = 'shake 0.5s';
        }, 10);
    }
}

// ==================== NAVIGATION ====================
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content-section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.dataset.section;
        navigateToSection(sectionId);
    });
});

function navigateToSection(sectionId) {
    // Update nav items
    navItems.forEach(nav => nav.classList.remove('active'));
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    
    // Update sections
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(`${sectionId}-section`).classList.add('active');
    
    currentSection = sectionId;
    
    // Reset settings lock when leaving settings
    if (sectionId !== 'settings') {
        settingsUnlocked = false;
        document.getElementById('settings-locked').style.display = 'block';
        document.getElementById('settings-unlocked').classList.add('hidden');
        document.getElementById('settings-password').value = '';
        document.getElementById('settings-error').textContent = '';
    }
}

// Feature card navigation
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
        const section = card.dataset.navigate;
        if (section) {
            navigateToSection(section);
        }
    });
});

// ==================== GAMES SECTION ====================
const gamesGrid = document.getElementById('games-grid');
const gameContainer = document.getElementById('game-container');
const gameIframe = document.getElementById('game-iframe');
const backToGamesBtn = document.getElementById('back-to-games');

// Populate games grid
function populateGames() {
    gamesGrid.innerHTML = '';
    games.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-image" style="display: flex; align-items: center; justify-content: center; font-size: 4rem;">
                ${game.image}
            </div>
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-description">${game.description}</div>
            </div>
        `;
        gameCard.addEventListener('click', () => loadGame(game.url));
        gamesGrid.appendChild(gameCard);
    });
}

function loadGame(url) {
    gameIframe.src = url;
    gamesGrid.classList.add('hidden');
    gameContainer.classList.remove('hidden');
}

backToGamesBtn.addEventListener('click', () => {
    gameIframe.src = '';
    gameContainer.classList.add('hidden');
    gamesGrid.classList.remove('hidden');
});

// Initialize games
populateGames();

// ==================== ENIGMA GAMES ====================
const enigmaSearchBtn = document.getElementById('enigma-search-btn');
const enigmaSearchInput = document.getElementById('enigma-search');
const enigmaFrameContainer = document.getElementById('enigma-frame-container');
const enigmaIframe = document.getElementById('enigma-iframe');
const enigmaBackBtn = document.getElementById('enigma-back-btn');

enigmaSearchBtn.addEventListener('click', performEnigmaSearch);
enigmaSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performEnigmaSearch();
});

function performEnigmaSearch() {
    const query = enigmaSearchInput.value.trim();
    if (query) {
        // Create Google search URL for games
        const searchUrl = `https://www.google.com/search?igu=1&q=${encodeURIComponent(query + ' game')}`;
        enigmaIframe.src = searchUrl;
        enigmaFrameContainer.classList.remove('hidden');
    }
}

enigmaBackBtn.addEventListener('click', () => {
    enigmaIframe.src = '';
    enigmaFrameContainer.classList.add('hidden');
    enigmaSearchInput.value = '';
});

// ==================== TOOLS SECTION ====================

// Notes Tool
const notesArea = document.getElementById('notes-area');
const saveNotesBtn = document.getElementById('save-notes');

// Load saved notes
notesArea.value = localStorage.getItem('portalNotes') || '';

saveNotesBtn.addEventListener('click', () => {
    localStorage.setItem('portalNotes', notesArea.value);
    saveNotesBtn.textContent = '✓ Saved!';
    setTimeout(() => {
        saveNotesBtn.textContent = 'Save Notes';
    }, 2000);
});

// Timer Tool
const timerDisplay = document.getElementById('timer-display');
const timerStartBtn = document.getElementById('timer-start');
const timerStopBtn = document.getElementById('timer-stop');
const timerResetBtn = document.getElementById('timer-reset');

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

timerStartBtn.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
        timerStartBtn.textContent = 'Running...';
    }
});

timerStopBtn.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerStartBtn.textContent = 'Start';
    }
});

timerResetBtn.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timerSeconds = 0;
    updateTimerDisplay();
    timerStartBtn.textContent = 'Start';
});

// Random Number Generator
const randomDisplay = document.getElementById('random-display');
const randomMinInput = document.getElementById('random-min');
const randomMaxInput = document.getElementById('random-max');
const randomGenerateBtn = document.getElementById('random-generate');

randomGenerateBtn.addEventListener('click', () => {
    const min = parseInt(randomMinInput.value) || 1;
    const max = parseInt(randomMaxInput.value) || 100;
    
    if (min >= max) {
        randomDisplay.textContent = '⚠️';
        return;
    }
    
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    randomDisplay.textContent = random;
    
    // Animate
    randomDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        randomDisplay.style.transform = 'scale(1)';
    }, 200);
});

// ==================== SETTINGS SECTION ====================

// Settings unlock
const settingsUnlockBtn = document.getElementById('settings-unlock');
const settingsPasswordInput = document.getElementById('settings-password');
const settingsError = document.getElementById('settings-error');
const settingsLocked = document.getElementById('settings-locked');
const settingsUnlockedDiv = document.getElementById('settings-unlocked');

settingsUnlockBtn.addEventListener('click', unlockSettings);
settingsPasswordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') unlockSettings();
});

function unlockSettings() {
    if (settingsPasswordInput.value === getStoredPassword()) {
        settingsUnlocked = true;
        settingsLocked.style.display = 'none';
        settingsUnlockedDiv.classList.remove('hidden');
        settingsError.textContent = '';
        settingsPasswordInput.value = '';
    } else {
        settingsError.textContent = '❌ Incorrect password';
        settingsPasswordInput.value = '';
    }
}

// Lock settings
document.getElementById('settings-lock-btn').addEventListener('click', () => {
    settingsUnlocked = false;
    settingsLocked.style.display = 'block';
    settingsUnlockedDiv.classList.add('hidden');
    
    // Clear password change fields
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
    document.getElementById('change-password-msg').textContent = '';
});

// Change password
const changePasswordBtn = document.getElementById('change-password-btn');
const currentPasswordInput = document.getElementById('current-password');
const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const changePasswordMsg = document.getElementById('change-password-msg');

changePasswordBtn.addEventListener('click', () => {
    const current = currentPasswordInput.value;
    const newPass = newPasswordInput.value;
    const confirm = confirmPasswordInput.value;
    
    // Clear previous message
    changePasswordMsg.textContent = '';
    changePasswordMsg.className = 'settings-message';
    
    // Validate
    if (!current || !newPass || !confirm) {
        changePasswordMsg.textContent = '❌ All fields are required';
        changePasswordMsg.classList.add('error');
        return;
    }
    
    if (current !== getStoredPassword()) {
        changePasswordMsg.textContent = '❌ Current password is incorrect';
        changePasswordMsg.classList.add('error');
        return;
    }
    
    if (newPass !== confirm) {
        changePasswordMsg.textContent = '❌ New passwords do not match';
        changePasswordMsg.classList.add('error');
        return;
    }
    
    if (newPass.length < 4) {
        changePasswordMsg.textContent = '❌ Password must be at least 4 characters';
        changePasswordMsg.classList.add('error');
        return;
    }
    
    // Update password
    setStoredPassword(newPass);
    localStorage.setItem('portalAuth', simpleHash(newPass));
    
    changePasswordMsg.textContent = '✓ Password changed successfully!';
    changePasswordMsg.classList.add('success');
    
    // Clear inputs
    currentPasswordInput.value = '';
    newPasswordInput.value = '';
    confirmPasswordInput.value = '';
    
    // Auto-clear message after 3 seconds
    setTimeout(() => {
        changePasswordMsg.textContent = '';
        changePasswordMsg.className = 'settings-message';
    }, 3000);
});

// Theme selection (visual only for now)
const themeOptions = document.querySelectorAll('.theme-option');
themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        themeOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        // Theme switching could be implemented here in the future
    });
});

// ==================== UTILITY FUNCTIONS ====================

// Prevent default behavior for development
document.addEventListener('contextmenu', (e) => {
    // Allow right-click for normal use
});

// Random display transition
randomDisplay.style.transition = 'transform 0.2s';

// Console welcome message
console.log('%c🔮 Cyber Portal Loaded Successfully! 🔮', 
    'color: #00d9ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00d9ff;');
console.log('%cDefault Password: ' + DEFAULT_PASSWORD, 
    'color: #00ff88; font-size: 14px;');
console.log('%cChange the password in script.js (line 3) or through Settings', 
    'color: #a0b3cc; font-size: 12px;');

// ==================== MOBILE MENU TOGGLE ====================
// Add mobile menu button functionality here if needed
// For now, sidebar is always visible on desktop and hidden on mobile

// Auto-logout on page close (optional - comment out if you want persistent login)
// window.addEventListener('beforeunload', () => {
//     localStorage.removeItem('portalAuth');
// });
