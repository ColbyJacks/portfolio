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
