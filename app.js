// Portfolio Projects Database and Directory Search/Filter Logic

const projects = [
    {
        name: "minecraft-Server-Idler",
        desc: "Minecraft server auto-start socket listener on port 25565, RCON idle auto-stop manager, and a Gemini-2.5-Flash chat assistant integrations.",
        tags: ["Python", "Gemini API", "RCON", "Sockets"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/minecraft-Server-Idler"
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
        name: "Youtube-to-Media",
        desc: "A lightweight media downloader script that takes YouTube URLs, downloads video streams, and converts audio files.",
        tags: ["Python", "Media API", "Automation"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/Youtube-to-Media"
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
        name: "virtualCamera",
        desc: "Virtual camera feed controller that hijacks video devices to output customized, dynamic image sequences.",
        tags: ["Python", "Virtual Webcam", "OS Hijack"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/virtualCamera"
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
        name: "ClipThat!",
        desc: "Audio and video clipper tool designed to capture highlights, trim timelines, and render clips locally.",
        tags: ["Python", "Video Processing", "GUI Tool"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/ClipThat"
    },
    {
        name: "Valorant BOT",
        desc: "Automated Valorant helper bot utilizing Python OpenCV frame tracking and AutoHotkey shortcuts.",
        tags: ["Python", "AutoHotkey", "Computer Vision"],
        category: "python",
        visibility: "public",
        url: "https://github.com/ColbyJacks/Valorant-BOT"
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
        
        const tagsHTML = project.tags.map(tag => `<span class="mini-tag">${tag}</span>`).join("");
        
        card.innerHTML = `
            <div>
                <h4>${project.name}</h4>
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

// Full-Page Interactive Particle Canvas
const canvas = document.getElementById("bg-canvas");
if (canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
            this.opacity = Math.random() * 0.4 + 0.15;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function init() {
        particles = [];
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 100);
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }
    init();
    
    window.addEventListener("resize", init);
    
    // Mouse hover trackers in viewport space
    let mouse = { x: null, y: null };
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
            
            // Faint connections between nearby dots
            particles.forEach(p2 => {
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 90) {
                    ctx.strokeStyle = `rgba(20, 184, 166, ${0.08 * (1 - dist/90)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
            
            // Mouse connection lines
            if (mouse.x !== null && mouse.y !== null) {
                const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
                if (distToMouse < 140) {
                    const force = (140 - distToMouse) / 140;
                    ctx.strokeStyle = `rgba(16, 185, 129, ${0.12 * force})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// Project Demo Toggle Accordion
const demoToggleBtns = document.querySelectorAll(".btn-demo-toggle");
demoToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const targetDrawer = document.getElementById(targetId);
        
        if (targetDrawer) {
            // Close all other drawers
            document.querySelectorAll(".project-demo-drawer").forEach(drawer => {
                if (drawer !== targetDrawer && drawer.classList.contains("active")) {
                    drawer.classList.remove("active");
                    const matchingBtn = document.querySelector(`[data-target="${drawer.id}"]`);
                    if (matchingBtn) matchingBtn.classList.remove("active");
                }
            });
            
            // Toggle target drawer
            targetDrawer.classList.toggle("active");
            btn.classList.toggle("active");
        }
    });
});

// Web Speech API Voice synthesis demo (Clone-TTS card)
const btnSpeak = document.getElementById("btn-tts-speak");
const ttsInput = document.getElementById("tts-voice-text");
const ttsWave = document.getElementById("tts-wave");
const waveStatus = document.getElementById("waveform-status");

if (btnSpeak && ttsInput && ttsWave && waveStatus) {
    let isSpeaking = false;
    
    btnSpeak.addEventListener("click", () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            ttsWave.classList.remove("playing");
            waveStatus.textContent = "Ready";
            waveStatus.classList.remove("playing");
            btnSpeak.innerHTML = '<i class="fa-solid fa-volume-high"></i> Synthesize';
            isSpeaking = false;
            return;
        }
        
        const text = ttsInput.value.trim();
        if (text === "") return;
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.volume = 0.75; // Set volume to 75%
        
        utterance.onstart = () => {
            isSpeaking = true;
            ttsWave.classList.add("playing");
            waveStatus.textContent = "Speaking...";
            waveStatus.classList.add("playing");
            btnSpeak.innerHTML = '<i class="fa-solid fa-square-stop"></i> Stop';
        };
        
        utterance.onend = () => {
            isSpeaking = false;
            ttsWave.classList.remove("playing");
            waveStatus.textContent = "Ready";
            waveStatus.classList.remove("playing");
            btnSpeak.innerHTML = '<i class="fa-solid fa-volume-high"></i> Synthesize';
        };
        
        utterance.onerror = () => {
            isSpeaking = false;
            ttsWave.classList.remove("playing");
            waveStatus.textContent = "Error";
            waveStatus.classList.remove("playing");
            btnSpeak.innerHTML = '<i class="fa-solid fa-volume-high"></i> Synthesize';
        };
        
        window.speechSynthesis.speak(utterance);
    });
}
