// Poetry data organized by sections
const poetryData = {
    nature: [
        {
            title: "Morning Mist",
            content: [
                "Through veils of silver morning mist,",
                "The ancient trees stand sentinel,",
                "Their whispered secrets, softly kissed",
                "By dawn's first light, ethereal.",
                "",
                "In solitude I find my peace,",
                "Where nature's symphony unfolds,",
                "And all the world's chaotic cease",
                "In stories that the forest holds."
            ],
            amazonLink: "https://amazon.com/dp/POEM1ID"
        },
        {
            title: "River's Song",
            content: [
                "The river sings its ancient song,",
                "Of journeys through the mountain stone,",
                "Of seasons passed and seasons long,",
                "Of paths that lead us back to home.",
                "",
                "Each ripple holds a memory,",
                "Each current speaks of time's flow,",
                "In water's endless reverie,",
                "We learn what we need to know."
            ],
            amazonLink: "https://amazon.com/dp/POEM2ID"
        },
        {
            title: "Solitary Oak",
            content: [
                "Beneath the solitary oak,",
                "I sit and watch the world go by,",
                "Its branches shelter every folk",
                "Who seek the wisdom of the sky.",
                "",
                "Roots deep in earth, crown touching cloud,",
                "A bridge between the low and high,",
                "Teaching us to stand unbowed",
                "While reaching for the endless sky."
            ],
            amazonLink: "https://amazon.com/dp/POEM3ID"
        }
    ],
    contemplation: [
        {
            title: "Inner Silence",
            content: [
                "In the cathedral of the mind,",
                "Where thoughts like incense rise and fall,",
                "I seek the peace I hope to find",
                "Beyond the ego's urgent call.",
                "",
                "Silence speaks in tongues unknown,",
                "To those who learn to truly hear,",
                "In stillness, truth is clearly shown,",
                "When noise of world disappears."
            ],
            amazonLink: "https://amazon.com/dp/POEM4ID"
        },
        {
            title: "The Observer",
            content: [
                "Who watches when the watcher sleeps?",
                "Who knows the knower's deepest thought?",
                "In consciousness, the mystery keeps",
                "The answers that cannot be taught.",
                "",
                "I am the witness and the seen,",
                "The question and the answer too,",
                "In this eternal dance between",
                "The false self and the ever-true."
            ],
            amazonLink: "https://amazon.com/dp/POEM5ID"
        },
        {
            title: "Meditation",
            content: [
                "Sitting still, the world moves on,",
                "While I remain the center calm,",
                "Like lotus blooming at the dawn,",
                "My spirit rises like a psalm.",
                "",
                "Breath by breath, I come to know",
                "The space between each thought and word,",
                "Where peace and understanding grow",
                "In silence, clearly seen and heard."
            ],
            amazonLink: "https://amazon.com/dp/POEM6ID"
        }
    ],
    journey: [
        {
            title: "The Path",
            content: [
                "Every step upon this path",
                "Leads deeper into mystery,",
                "Through joy and sorrow, love and wrath,",
                "Toward our truest destiny.",
                "",
                "The journey is the destination,",
                "Each moment holds eternity,",
                "In walking comes the revelation",
                "That we are already free."
            ],
            amazonLink: "https://amazon.com/dp/POEM7ID"
        },
        {
            title: "Crossroads",
            content: [
                "At every crossroads of the heart,",
                "We choose which story we will tell,",
                "Each ending is another start,",
                "Each farewell, another hello.",
                "",
                "The paths diverge and paths converge,",
                "All leading to the same bright shore,",
                "Where separate selves begin to merge",
                "With what we've always been before."
            ],
            amazonLink: "https://amazon.com/dp/POEM8ID"
        },
        {
            title: "Homecoming",
            content: [
                "After wandering far and wide,",
                "Through valleys deep and mountains high,",
                "I find the treasure was inside",
                "The seeker's ever-searching eye.",
                "",
                "Home was never left behind,",
                "It traveled with me all along,",
                "In every moment, peace I find",
                "In consciousness, my truest song."
            ],
            amazonLink: "https://amazon.com/dp/POEM9ID"
        }
    ],
    wisdom: [
        {
            title: "Ancient Teaching",
            content: [
                "The sages spoke in riddles deep,",
                "Of truths too vast for words to hold,",
                "Their wisdom, like a treasure, keep",
                "In hearts more precious than pure gold.",
                "",
                "What can be spoken is not true,",
                "What's true cannot be fully said,",
                "The Way that can be walked by you",
                "Is not the Way that must be led."
            ],
            amazonLink: "https://amazon.com/dp/POEM10ID"
        },
        {
            title: "The Teacher",
            content: [
                "Every moment is a teacher,",
                "Every breath a sacred text,",
                "Life itself the greatest preacher",
                "Of what comes after and what's next.",
                "",
                "In the ordinary, find the holy,",
                "In the simple, see the profound,",
                "Walk the earth both high and lowly,",
                "Where the lost are always found."
            ],
            amazonLink: "https://amazon.com/dp/POEM11ID"
        },
        {
            title: "Paradox",
            content: [
                "To gain, we must learn how to lose,",
                "To lead, we must learn how to serve,",
                "To win, we must know how to choose",
                "The path that others won't preserve.",
                "",
                "In emptiness, we find fullness,",
                "In silence, hear the loudest sound,",
                "In darkness, see with perfect clearness",
                "The light that's always been around."
            ],
            amazonLink: "https://amazon.com/dp/POEM12ID"
        }
    ],
    seasons: [
        {
            title: "Spring Awakening",
            content: [
                "From winter's deep and dreamless sleep,",
                "The earth awakens, green and new,",
                "What seemed forever lost to keep",
                "Returns in morning's crystal dew.",
                "",
                "In every seed, a promise lies,",
                "Of what will be and what has been,",
                "The cycle turns, the spirit flies",
                "To realms where death has never been."
            ],
            amazonLink: "https://amazon.com/dp/POEM13ID"
        },
        {
            title: "Summer's Fullness",
            content: [
                "In summer's golden, blazing height,",
                "All life reaches toward the sun,",
                "In abundance, pure delight,",
                "The many dance as if they're one.",
                "",
                "This is the season of the heart,",
                "When love flows freely, without end,",
                "Where every ending is a start,",
                "And every stranger is a friend."
            ],
            amazonLink: "https://amazon.com/dp/POEM14ID"
        },
        {
            title: "Autumn's Wisdom",
            content: [
                "The leaves release their hold on high,",
                "And dance their way to earth below,",
                "Teaching us how to say goodbye",
                "With grace, and let our treasures go.",
                "",
                "In letting go, we find our strength,",
                "In falling, learn how to be free,",
                "The tree will go to any length",
                "To show us our true destiny."
            ],
            amazonLink: "https://amazon.com/dp/POEM15ID"
        },
        {
            title: "Winter's Rest",
            content: [
                "In winter's quiet, deep repose,",
                "The world retreats to inner space,",
                "Where wisdom grows and spirit knows",
                "The beauty of unhurried grace.",
                "",
                "Beneath the snow, life waits in trust,",
                "For spring's return and warmth's embrace,",
                "From seeming death, life always must",
                "Emerge renewed in time and place."
            ],
            amazonLink: "https://amazon.com/dp/POEM16ID"
        }
    ]
};

// State management
let currentSection = 'nature';
let expandedPoems = new Set();
let isNavigationLocked = false;
let autoCollapseTimeout = null;

// DOM elements
const navigation = document.getElementById('navigation');
const mainContent = document.getElementById('mainContent');
const navButtons = document.querySelectorAll('.nav-button');
const navToggle = document.getElementById('navToggle');
const navCollapseBtn = document.getElementById('navCollapseBtn');
const autoOpenTrigger = document.getElementById('autoOpenTrigger');

// Initialize the application
function init() {
    renderAllPoems();
    setupEventListeners();
    setupAutoOpenNavigation();
    
    // Start with collapsed navigation on desktop
    if (window.innerWidth > 1024) {
        navigation.classList.add('collapsed');
        mainContent.classList.add('nav-collapsed');
    }
}

// Render all poems in their respective sections
function renderAllPoems() {
    Object.keys(poetryData).forEach(section => {
        const container = document.getElementById(`${section}-poems`);
        if (container) {
            container.innerHTML = '';
            poetryData[section].forEach((poem, index) => {
                const poemElement = createPoemElement(poem, section, index);
                container.appendChild(poemElement);
            });
        }
    });
}

// Create a poem tile element
function createPoemElement(poem, section, index) {
    const poemId = `${section}-${index}`;
    const isExpanded = expandedPoems.has(poemId);
    
    const poemDiv = document.createElement('div');
    poemDiv.className = `poem-tile ${isExpanded ? 'expanded' : ''}`;
    poemDiv.dataset.poemId = poemId;
    
    const contentLines = poem.content.map(line => {
        if (line === '') {
            return '<div class="poem-line empty"></div>';
        }
        return `<div class="poem-line">${line}</div>`;
    }).join('');
    
    poemDiv.innerHTML = `
        <div class="poem-header">
            <h3 class="poem-title">${poem.title}</h3>
            <span class="expand-icon">${isExpanded ? '−' : '+'}</span>
        </div>
        <div class="poem-content">
            ${isExpanded ? contentLines : `<div class="poem-line">${poem.content[0]}</div>`}
        </div>
        ${isExpanded ? `
            <div class="poem-amazon-link">
                <a href="${poem.amazonLink}" class="amazon-poem-link" target="_blank">
                    🛒 Get this poem as framed art on Amazon
                </a>
            </div>
        ` : ''}
        <div class="poem-footer">
            ${isExpanded ? '- by Sajin P. Sudhakaran' : 'Click to expand...'}
        </div>
    `;
    
    poemDiv.addEventListener('click', () => togglePoemExpansion(poemId));
    
    return poemDiv;
}

// Toggle poem expansion
function togglePoemExpansion(poemId) {
    const poemElement = document.querySelector(`[data-poem-id="${poemId}"]`);
    if (!poemElement) return;
    
    if (expandedPoems.has(poemId)) {
        expandedPoems.delete(poemId);
        poemElement.classList.remove('expanded');
    } else {
        expandedPoems.add(poemId);
        poemElement.classList.add('expanded');
    }
    
    // Re-render the specific poem
    const [section, index] = poemId.split('-');
    const poem = poetryData[section][parseInt(index)];
    const newElement = createPoemElement(poem, section, parseInt(index));
    poemElement.replaceWith(newElement);
    
    // Animate the expansion
    if (expandedPoems.has(poemId)) {
        const lines = newElement.querySelectorAll('.poem-line');
        lines.forEach((line, index) => {
            line.style.animationDelay = `${index * 0.1}s`;
            line.classList.add('fade-in');
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            switchSection(section);
        });
    });
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        navigation.classList.toggle('open');
        navToggle.classList.toggle('active');
    });
    
    // Navigation collapse button
    navCollapseBtn.addEventListener('click', () => {
        toggleNavigationLock();
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024 && 
            !navigation.contains(e.target) && 
            !navToggle.contains(e.target) && 
            navigation.classList.contains('open')) {
            navigation.classList.remove('open');
            navToggle.classList.remove('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            navigation.classList.remove('open');
            navToggle.classList.remove('active');
        }
    });
}

// Switch between sections
function switchSection(section) {
    if (section === currentSection) return;
    
    // Update navigation
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === section);
    });
    
    currentSection = section;
    
    // Scroll to the section
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
        sectionElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Setup auto-opening navigation
function setupAutoOpenNavigation() {
    if (window.innerWidth <= 1024) return; // Only on desktop
    
    // Auto-open trigger zone
    if (autoOpenTrigger) {
        autoOpenTrigger.addEventListener('mouseenter', () => {
            if (!isNavigationLocked) {
                expandNavigation();
            }
        });
    }
    
    // Navigation hover events
    navigation.addEventListener('mouseenter', () => {
        if (autoCollapseTimeout) {
            clearTimeout(autoCollapseTimeout);
            autoCollapseTimeout = null;
        }
    });
    
    navigation.addEventListener('mouseleave', () => {
        if (!isNavigationLocked) {
            scheduleAutoCollapse();
        }
    });
}

// Expand navigation
function expandNavigation() {
    navigation.classList.remove('collapsed');
    mainContent.classList.remove('nav-collapsed');
}

// Collapse navigation
function collapseNavigation() {
    navigation.classList.add('collapsed');
    mainContent.classList.add('nav-collapsed');
}

// Schedule auto-collapse
function scheduleAutoCollapse() {
    if (autoCollapseTimeout) {
        clearTimeout(autoCollapseTimeout);
    }
    
    autoCollapseTimeout = setTimeout(() => {
        if (!isNavigationLocked) {
            collapseNavigation();
        }
    }, 1000);
}

// Toggle navigation lock
function toggleNavigationLock() {
    isNavigationLocked = !isNavigationLocked;
    
    if (isNavigationLocked) {
        // Clear any pending auto-collapse
        if (autoCollapseTimeout) {
            clearTimeout(autoCollapseTimeout);
            autoCollapseTimeout = null;
        }
    } else {
        // Resume auto-behavior based on current mouse position
        const rect = navigation.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        const isMouseOverNav = mouseX >= rect.left && mouseX <= rect.right && 
                              mouseY >= rect.top && mouseY <= rect.bottom;
        
        if (!isMouseOverNav) {
            scheduleAutoCollapse();
        }
    }
}

// Update active section based on scroll position
function updateActiveSection() {
    const sections = document.querySelectorAll('.poem-section');
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    
    let activeSection = 'nature';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        
        if (scrollPosition >= sectionTop) {
            activeSection = section.id;
        }
    });
    
    if (activeSection !== currentSection) {
        currentSection = activeSection;
        navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.section === activeSection);
        });
    }
}

// Throttled scroll handler
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(updateActiveSection, 100);
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);