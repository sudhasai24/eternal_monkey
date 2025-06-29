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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
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
            websiteLink: "https://sajinpsudhakaran.com"
        }
    ],
    love: [
        {
            title: "First Love",
            content: [
                "In the garden of first love,",
                "Every flower blooms with light,",
                "Stars descend from realms above",
                "To witness hearts take their first flight.",
                "",
                "Time stands still in lover's gaze,",
                "Words become unnecessary things,",
                "In the silence, love displays",
                "The music that eternity sings."
            ],
            websiteLink: "https://sajinpsudhakaran.com"
        },
        {
            title: "Eternal Bond",
            content: [
                "Beyond the veil of flesh and bone,",
                "Two souls recognize their kin,",
                "In love, we're never truly alone,",
                "The journey out leads back within.",
                "",
                "Through lifetimes we have danced this dance,",
                "In different forms, the same sweet song,",
                "Love gives every soul a chance",
                "To find where they have always belonged."
            ],
            websiteLink: "https://sajinpsudhakaran.com"
        }
    ],
    dreams: [
        {
            title: "Night Visions",
            content: [
                "In dreams, the boundaries dissolve,",
                "Between the real and the imagined,",
                "Here mysteries begin to revolve",
                "Around truths that can't be fathioned.",
                "",
                "The dreamer and the dream are one,",
                "In landscapes painted by the soul,",
                "When morning comes and night is done,",
                "We wake to play our waking role."
            ],
            websiteLink: "https://sajinpsudhakaran.com"
        },
        {
            title: "Lucid Moments",
            content: [
                "In the space between sleep and wake,",
                "Consciousness expands its wings,",
                "Reality begins to shake",
                "As awareness gently sings.",
                "",
                "Here the dreamer takes control,",
                "Of the visions that unfold,",
                "And discovers that the soul",
                "Has stories yet to be told."
            ],
            websiteLink: "https://sajinpsudhakaran.com"
        }
    ],
    healing: [
        {
            title: "Broken to Whole",
            content: [
                "In the breaking, light gets in,",
                "Through the cracks of wounded hearts,",
                "Healing is where we begin",
                "To understand our truest parts.",
                "",
                "Scars become our sacred maps,",
                "Showing where we've learned to grow,",
                "In the space between collapse",
                "And rising, wisdom starts to flow."
            ],
            websiteLink: "https://sajinpsudhakaran.com"
        },
        {
            title: "Phoenix Rising",
            content: [
                "From ashes of what used to be,",
                "A stronger self begins to rise,",
                "The fire that once consumed me",
                "Now lights the wisdom in my eyes.",
                "",
                "Each ending births a new beginning,",
                "Each loss reveals a hidden gain,",
                "In losing, we are truly winning",
                "The strength to rise through joy and pain."
            ],
            websiteLink: "https://sajinpsudhakaran.com"
        }
    ],
    memories: [
        {
            title: "Faded Photographs",
            content: [
                "In yellowed photographs I find",
                "The faces of forgotten days,",
                "Each image holds within its mind",
                "The echo of love's gentle ways.",
                "",
                "Time may blur the sharpest edges,",
                "But cannot dim the heart's true sight,",
                "Memory keeps its sacred pledges",
                "To hold our loved ones in the light."
            ],
            websiteLink: "https://sajinpsudhakaran.com"
        },
        {
            title: "Time's River",
            content: [
                "Memories flow like rivers deep,",
                "Carrying treasures from the past,",
                "Some we hold and some we keep,",
                "Others flow away too fast.",
                "",
                "But in the current's gentle flow,",
                "We find the gold of who we are,",
                "Each memory helps us to know",
                "We've traveled both near and far."
            ],
            websiteLink: "https://sajinpsudhakaran.com"
        }
    ],
    hope: [
        {
            title: "Dawn's Promise",
            content: [
                "Even in the darkest night,",
                "Dawn waits patiently to break,",
                "Hope is the eternal light",
                "That keeps our weary souls awake.",
                "",
                "No winter lasts forever long,",
                "No storm can rage without an end,",
                "In hope, we find our truest song,",
                "On hope, our spirits can depend."
            ],
            websiteLink: "https://sajinpsudhakaran.com"
        },
        {
            title: "Faith's Whisper",
            content: [
                "When the world seems lost in shadow,",
                "And the path ahead unclear,",
                "Faith whispers soft and mellow,",
                "'Trust, for I am always here.'",
                "",
                "Not in grand displays of power,",
                "But in quiet, gentle ways,",
                "Faith sustains us hour by hour",
                "Through our darkest, longest days."
            ],
            websiteLink: "https://sajinpsudhakaran.com"
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

// Get last four lines of poem for preview
function getLastFourLines(content) {
    const nonEmptyLines = content.filter(line => line.trim() !== '');
    return nonEmptyLines.slice(-4);
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
    
    // Get preview lines (last 4 lines)
    const previewLines = getLastFourLines(poem.content);
    const previewContent = previewLines.map(line => `<div class="poem-line">${line}</div>`).join('');
    
    poemDiv.innerHTML = `
        <div class="poem-header">
            <h3 class="poem-title">${poem.title}</h3>
            <span class="expand-icon">${isExpanded ? '−' : '+'}</span>
        </div>
        <div class="poem-content">
            ${isExpanded ? contentLines : previewContent}
        </div>
        ${isExpanded ? `
            <div class="poem-author">
                <span class="author-credit">- by Sajin P Sudhakaran</span>
            </div>
            <div class="poem-share">
                <div class="share-title">Share this poem</div>
                <div class="share-buttons">
                    <button class="share-btn" onclick="sharePoem('${poem.title}', '${poemId}', 'twitter')">
                        🐦 Twitter
                    </button>
                    <button class="share-btn" onclick="sharePoem('${poem.title}', '${poemId}', 'facebook')">
                        📘 Facebook
                    </button>
                    <button class="share-btn" onclick="sharePoem('${poem.title}', '${poemId}', 'whatsapp')">
                        💬 WhatsApp
                    </button>
                    <button class="share-btn" onclick="copyPoemLink('${poemId}')">
                        🔗 Copy Link
                    </button>
                </div>
            </div>
            <div class="poem-website-link">
                <a href="${poem.websiteLink}" class="website-poem-link" target="_blank">
                    🌐 Visit Sajin P Sudhakaran's Website
                </a>
            </div>
        ` : ''}
        <div class="poem-footer">
            ${isExpanded ? '' : 'Click to expand...'}
        </div>
    `;
    
    poemDiv.addEventListener('click', (e) => {
        if (!e.target.closest('.share-btn') && !e.target.closest('.website-poem-link')) {
            togglePoemExpansion(poemId);
        }
    });
    
    return poemDiv;
}

// Share poem function
function sharePoem(title, poemId, platform) {
    const url = `${window.location.origin}${window.location.pathname}#${poemId}`;
    const text = `Check out this beautiful poem "${title}" by Sajin P Sudhakaran`;
    
    switch (platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'whatsapp':
            window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
            break;
    }
}

// Copy poem link function
function copyPoemLink(poemId) {
    const url = `${window.location.origin}${window.location.pathname}#${poemId}`;
    navigator.clipboard.writeText(url).then(() => {
        // Show a temporary success message
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        btn.style.background = 'rgba(34, 197, 94, 0.2)';
        btn.style.borderColor = 'rgba(34, 197, 94, 0.3)';
        btn.style.color = '#22c55e';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.color = '';
        }, 2000);
    });
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
        if (!isNavigationLocked) {
            expandNavigation();
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
    }, 800);
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
        expandNavigation();
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