// Portfolio Projects Database and Directory Search/Filter Logic

const projects = [
    // Public Projects
    {
        name: "minecraft-Server-Idler",
        desc: "Minecraft server auto-start socket listener on port 25565, RCON idle auto-stop manager, and a Gemini-2.5-Flash chat assistant integrations.",
        tags: ["Python", "Gemini API", "RCON", "Sockets"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/minecraft-Server-Idler"
    },
    {
        name: "TCGScanner",
        desc: "A Next.js full-stack web application designed to scan trading cards, fetch card rarities, check values, and organize binders.",
        tags: ["Next.js", "React", "Prisma ORM", "TailwindCSS"],
        category: "web",
        visibility: "public",
        url: "https://github.com/ColbyJacks/TCGScanner"
    },
    {
        name: "ESP32-LLM-Assistant",
        desc: "Voice-activated localized LLM hardware assistant streaming audio feeds (PCM/RAW) from an ESP32 to a custom Ollama Flask backend.",
        tags: ["C++", "Arduino", "Flask", "Ollama", "IoT"],
        category: "web",
        visibility: "public",
        url: "https://github.com/ColbyJacks/ESP32-LLM-Assistant"
    },
    {
        name: "Radar",
        desc: "CSI radar signal sensing and RuView visualization. Includes firmware build files, signal extraction, and analysis scripts.",
        tags: ["Python", "Rust", "C", "Firmware", "Data Analysis"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/Radar"
    },
    {
        name: "NFC-Radio",
        desc: "An audio playback controller for NFC Radio. Automatically detects physical NFC tag swipes to catalog and play audio tracks.",
        tags: ["Python", "C++", "Arduino", "Audio Processing"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/NFC-Radio"
    },
    {
        name: "Youtube-to-Media",
        desc: "A lightweight media downloader script that takes YouTube URLs, downloads video streams, and converts audio files.",
        tags: ["Python", "Media API", "Automation"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/Youtube-to-Media"
    },
    {
        name: "Clone-TTS",
        desc: "An open-source frontend and backend voice cloning and text-to-speech rendering application wrapper.",
        tags: ["React", "Python", "TTS API", "AI Voice"],
        category: "web",
        visibility: "public",
        url: "https://github.com/ColbyJacks/Clone-TTS"
    },
    {
        name: "CowBoySpaceRogueLike",
        desc: "A fully developed Unity Roguelike game featuring cowboy space adventure mechanics, custom assets, and UI state controllers.",
        tags: ["Unity", "C#", "Game Development", "UI System"],
        category: "unity",
        visibility: "public",
        url: "https://github.com/ColbyJacks/CowBoySpaceRogueLike"
    },
    {
        name: "ROGUELIKEFPS",
        desc: "First-Person Shooter (FPS) Roguelike game built in Unity, featuring procedural layout generation, weapon systems, and AI behaviors.",
        tags: ["Unity", "C#", "3D FPS", "AI Enemy Pathfinding"],
        category: "unity",
        visibility: "public",
        url: "https://github.com/ColbyJacks/ROGUELIKEFPS"
    },
    {
        name: "DiscordBot",
        desc: "A customized Discord chat bot implemented in Python, offering automated moderation, message logs, and server stats.",
        tags: ["Python", "Discord.py", "API Bot"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/DiscordBot"
    },
    {
        name: "ClipThat!",
        desc: "Audio and video clipper tool designed to capture highlights, trim timelines, and render clips locally.",
        tags: ["Python", "Video Processing", "GUI Tool"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/ClipThat"
    },
    {
        name: "CamToAscii",
        desc: "Real-time camera feed to ASCII art converter, rendering video feeds as styled characters directly on screen.",
        tags: ["Python", "Pygame", "Computer Vision"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/CamToAscii"
    },
    {
        name: "PythonTetris",
        desc: "Classic Tetris game implementation in Python featuring sprite styling, score caching, and speed multipliers.",
        tags: ["Python", "Pygame", "Game Loop"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/PythonTetris"
    },
    {
        name: "virtualCamera",
        desc: "Virtual camera feed controller that hijacks video devices to output customized, dynamic image sequences.",
        tags: ["Python", "Virtual Webcam", "OS Hijack"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/virtualCamera"
    },
    {
        name: "Valorant BOT",
        desc: "Automated Valorant helper bot utilizing Python OpenCV frame tracking and AutoHotkey shortcuts.",
        tags: ["Python", "AutoHotkey", "Computer Vision"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/Valorant-BOT"
    },
    {
        name: "ColbyJack Mod",
        desc: "NeoForge mod for IntelliJ IDEA Java/Kotlin. Adds custom assets, blocks, and events to the game client.",
        tags: ["Java", "Kotlin", "NeoForge", "Gradle"],
        category: "java",
        visibility: "public",
        url: "https://github.com/ColbyJacks/ColbyJack"
    },
    {
        name: "ColbyJacks Mod",
        desc: "IntelliJ IDEA Java/Kotlin NeoForge Mod. An advanced revision featuring custom items, player saves, and client registries.",
        tags: ["Java", "Kotlin", "NeoForge", "Gradle"],
        category: "java",
        visibility: "public",
        url: "https://github.com/ColbyJacks/ColbyJacks"
    },
    {
        name: "PipTheChatBot",
        desc: "An interactive web chatbot implemented as a single-page HTML application using vanilla JS.",
        tags: ["HTML", "CSS", "JavaScript", "Chat UI"],
        category: "web",
        visibility: "public",
        url: "https://github.com/ColbyJacks/PipTheChatBot"
    },
    {
        name: "Web-Tetris",
        desc: "A fully responsive HTML5/JS single-page Tetris game featuring audio channels and high-score saving.",
        tags: ["HTML", "CSS", "JavaScript", "Game Loop"],
        category: "web",
        visibility: "public",
        url: "https://github.com/ColbyJacks/Web-Tetris"
    },
    {
        name: "Python-Utilities",
        desc: "A combined archive of loose utility Python scripts, including camera captures, email schedulers, and audio tools.",
        tags: ["Python", "System Utilities", "Loose Scripts"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/Python-Utilities"
    },

    // Private Projects
    {
        name: "Trading System",
        desc: "Quantitative algorithmic trading suite running statistical arbitrage, mean reversion, and momentum strategies with ledger logs.",
        tags: ["Python", "JSON Ledgers", "Algos", "Private Archive"],
        category: "python",
        visibility: "private",
        url: "https://github.com/ColbyJacks/Trading"
    },
    {
        name: "FleetWebsite",
        desc: "A backend Flask web application backed by a relational SQLite database mapping delivery fleet inventory tracking.",
        tags: ["Python", "Flask", "SQLite", "Private Archive"],
        category: "web",
        visibility: "private",
        url: "https://github.com/ColbyJacks/FleetWebsite"
    },
    {
        name: "Local-Image-Gen",
        desc: "A responsive local web UI dashboard designed for stable diffusion text-to-image and image-to-image generation.",
        tags: ["Python", "HTML/CSS", "JavaScript", "Private Archive"],
        category: "web",
        visibility: "private",
        url: "https://github.com/ColbyJacks/Local-Image-Gen"
    },
    {
        name: "ShortsClips Pipeline",
        desc: "Automated video clipping pipeline utilizing OpenCV frame tracking to automatically crop streamers' facecams to vertical format.",
        tags: ["Python", "OpenCV", "Video Editing", "Private Archive"],
        category: "python",
        visibility: "private",
        url: "https://github.com/ColbyJacks/ShortsClips"
    },
    {
        name: "MontageMaker",
        desc: "Automated stream montage editor combining timeline analyzers and editor scripts with a responsive React timeline interface.",
        tags: ["React", "Python", "Timeline Edit", "Private Archive"],
        category: "web",
        visibility: "private",
        url: "https://github.com/ColbyJacks/MontageMaker"
    },
    {
        name: "ClockINsAndOuts",
        desc: "Work hours tracker utility designed to log in-game and daily task timings, compiling logs to dynamic outputs.",
        tags: ["Python", "Time Tracking", "Private Archive"],
        category: "python",
        visibility: "private",
        url: "https://github.com/ColbyJacks/ClockINsAndOuts"
    },
    {
        name: "DataScience_Assignment_1",
        desc: "A series of data science statistical mapping assignments completed during undergraduate studies.",
        tags: ["Python", "Data Analysis", "Academic", "Private Archive"],
        category: "python",
        visibility: "private",
        url: "https://github.com/ColbyJacks/DataScience-Assignment-1"
    },
    {
        name: "DataStructures Project 2",
        desc: "Academic Java data structures compiler, mapping heaps, linked lists, and binary search trees.",
        tags: ["Java", "Data Structures", "Academic", "Private Archive"],
        category: "java",
        visibility: "private",
        url: "https://github.com/ColbyJacks/DataStructures-Project-2"
    },
    {
        name: "CS3443 Assignment 0",
        desc: "Java application implementing object-oriented concepts and design patterns for CS3443 assignment A0.",
        tags: ["Java", "OOP Design", "Academic", "Private Archive"],
        category: "java",
        visibility: "private",
        url: "https://github.com/ColbyJacks/CS3443-A0"
    }
];

// DOM Elements
const projectsDirectory = document.getElementById("projects-directory");
const searchInput = document.getElementById("project-search");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("no-results");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

// Mobile Menu Toggle
if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        navToggle.classList.toggle("active");
        
        // Change burger icon
        const icon = navToggle.querySelector("i");
        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // Close menu when clicking a nav link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
                navToggle.classList.remove("active");
                const icon = navToggle.querySelector("i");
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });
}

// Render Project Cards
function renderProjects(filteredProjects) {
    if (!projectsDirectory) return;
    
    projectsDirectory.innerHTML = "";
    
    if (filteredProjects.length === 0) {
        noResults.style.display = "block";
        return;
    } else {
        noResults.style.display = "none";
    }
    
    filteredProjects.forEach(project => {
        const card = document.createElement("div");
        card.className = "directory-card";
        
        const isPrivate = project.visibility === "private";
        const lockIcon = isPrivate ? '<i class="fa-solid fa-lock" style="font-size:0.85rem; color:#718096; margin-left: 6px;" title="Private Archive"></i>' : '';
        
        const tagsHTML = project.tags.map(tag => `<span class="mini-tag">${tag}</span>`).join("");
        
        card.innerHTML = `
            <div>
                <h4>${project.name} ${lockIcon}</h4>
                <p>${project.desc}</p>
            </div>
            <div>
                <div class="tag-wrap">
                    ${tagsHTML}
                </div>
                <a href="${project.url}" target="_blank" class="project-link">View Repo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        `;
        projectsDirectory.appendChild(card);
    });
}

// Filter and Search Logic
function filterAndSearchProjects() {
    const activeFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter");
    const searchQuery = searchInput.value.toLowerCase().trim();
    
    const filtered = projects.filter(project => {
        const matchesCategory = activeFilter === "all" || project.category === activeFilter;
        
        const matchesSearch = project.name.toLowerCase().includes(searchQuery) ||
                              project.desc.toLowerCase().includes(searchQuery) ||
                              project.tags.some(tag => tag.toLowerCase().includes(searchQuery));
                              
        return matchesCategory && matchesSearch;
    });
    
    renderProjects(filtered);
}

// Event Listeners
if (searchInput) {
    searchInput.addEventListener("input", filterAndSearchProjects);
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        filterAndSearchProjects();
    });
});

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
    renderProjects(projects);
});
