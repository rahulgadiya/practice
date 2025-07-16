// ===== UNIFIED TERMINAL PORTFOLIO SYSTEM =====
// This file combines functionality from main.js, script.js, and super.js
// into a single, optimized, and cohesive JavaScript file for a terminal-style portfolio.

// ===== DYNAMIC CONTENT MANAGEMENT SYSTEM =====
// All portfolio content is managed from this single object.
// This data is a merge of the most complete and updated information from all source files.
const portfolioData = {
    // ===== PERSONAL INFORMATION =====
    personal: {
        name: "Rahul Gadiya",
        title: "CEO & Developer", // Merged from super.js
        email: "rahulajain98@outlook.com",
        phone: "+91 7208866230",
        location: "Mumbai, MH",
        website: "https://rahulgadiya.com", // From super.js
        linkedin: "https://linkedin.com/in/rahulgadiya",
        github: "https://github.com/rahulgadiya",
        twitter: "https://twitter.com/rahulgadiya" // From super.js
    },

    // ===== PROJECTS =====
    // Combines projects from all files, ensuring unique IDs where possible.
    projects: [
        {
            id: "terminal-portfolio",
            title: "Terminal Portfolio Website",
            description: "A retro-style portfolio website with terminal interface and matrix background effects",
            technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"], // Added Canvas API from super_js.js
            status: "Completed",
            category: "Web Development",
            date: "2024-01",
            links: {
                demo: "https://rahulgadiya.com/terminal-portfolio", // Updated from super_js.js
                github: "https://github.com/rahulgadiya/terminal-portfolio"
            },
            features: [ // From super_js.js
                "Terminal-style command interface",
                "Matrix rain background animation",
                "Autocomplete suggestions",
                "Responsive design"
            ]
        },
        {
            id: "business-platform", // Unique ID for the second project
            title: "Business Management Platform",
            description: "Full-stack business solution with analytics and reporting dashboard", // More detailed description from super_js.js
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            status: "In Progress",
            category: "Full Stack", // From super_js.js
            date: "2024-02",
            links: {
                demo: "https://rahulgadiya.com/business-demo", // Example link from super_js.js
                github: "https://github.com/rahulgadiya/business-platform" // Example link from super_js.js
            },
            features: [ // From super_js.js
                "User authentication and authorization",
                "Analytics dashboard",
                "Report generation",
                "Admin management system"
            ]
        }
    ],

    // ===== SKILLS =====
    // Merged and expanded skill sets, ensuring comprehensive coverage.
    skills: {
        "Programming Languages": [
            { name: "JavaScript", level: "Advanced", experience: "5+ years" },
            { name: "Python", level: "Advanced", experience: "4+ years" },
            { name: "TypeScript", level: "Intermediate", experience: "3+ years" }, // From super_js.js
            { name: "Java", level: "Intermediate", experience: "3+ years" } // From super_js.js
        ],
        "Frontend Technologies": [
            { name: "React", level: "Advanced", experience: "4+ years" },
            { name: "Vue.js", level: "Intermediate", experience: "2+ years" }, // From super_js.js
            { name: "HTML5", level: "Advanced", experience: "5+ years" },
            { name: "CSS3/SASS", level: "Advanced", experience: "5+ years" }
        ],
        "Backend Technologies": [
            { name: "Node.js", level: "Advanced", experience: "4+ years" },
            { name: "Express.js", level: "Advanced", experience: "4+ years" }, // Changed from 'Express' to 'Express.js' for consistency
            { name: "MongoDB", level: "Advanced", experience: "3+ years" },
            { name: "REST APIs", level: "Advanced", experience: "4+ years" } // From super_js.js
        ],
        "Tools & Platforms": [ // New category from super_js.js
            { name: "Git", level: "Advanced", experience: "5+ years" },
            { name: "Docker", level: "Intermediate", experience: "3+ years" },
            { name: "AWS", level: "Intermediate", experience: "2+ years" },
            { name: "Linux", level: "Advanced", experience: "4+ years" }
        ]
    },

    // ===== CERTIFICATES =====
    // Included from super_js.js
    certificates: [
        {
            id: "business-leadership",
            title: "Business Leadership Certificate",
            issuer: "Business Academy",
            date: "2023-11",
            validUntil: "2026-11",
            credentialId: "BLC-12345",
            link: "https://businessacademy.com/leadership",
            downloadLink: "certificates/business-leadership.pdf"
        }
    ],

    // ===== RESUME/CV FILES =====
    // Included from super_js.js
    documents: [
        {
            id: "resume-2024",
            title: "Resume 2024",
            type: "PDF",
            size: "245 KB",
            lastUpdated: "2024-01-15",
            downloadLink: "documents/Rahul_Gadiya_Resume_2024.pdf"
        },
        {
            id: "cv-detailed",
            title: "Detailed CV",
            type: "PDF",
            size: "387 KB",
            lastUpdated: "2024-01-10",
            downloadLink: "documents/Rahul_Gadiya_CV_Detailed.pdf"
        }
    ],

    // ===== BLOG POSTS =====
    // Included from super_js.js
    blog: [
        {
            id: "terminal-ui-guide",
            title: "Building a Terminal UI with CSS and JavaScript",
            excerpt: "A comprehensive guide to creating terminal-style interfaces for web applications",
            date: "2024-01-20",
            readTime: "8 min read",
            category: "Web Development",
            tags: ["CSS", "JavaScript", "UI/UX", "Terminal"],
            link: "blog/terminal-ui-guide.html"
        },
        {
            id: "business-automation",
            title: "Business Process Automation: Best Practices",
            excerpt: "Learn how to streamline your business operations with automation techniques",
            date: "2024-01-10",
            readTime: "12 min read",
            category: "Business",
            tags: ["Automation", "Business", "Efficiency", "Technology"],
            link: "blog/business-automation.html"
        }
    ],

    // ===== ASCII ART (from super.js) =====
    asciiArt: {
        welcome: `
    ╔══════════════════════════════════════════════════════════╗
    ║                    TERMINAL PORTFOLIO                    ║
    ║                                                          ║
    ║    ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗    ║
    ║    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║    ║
    ║       ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║    ║
    ║       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║    ║
    ║       ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║    ║
    ║       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝    ║
    ║                                                          ║
    ║                    Welcome to my world                   ║
    ╚══════════════════════════════════════════════════════════╝
        `,
        logo: `
    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    █ ██▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀██ █
    █ ██  ██████╗  ██████╗ ██████╗ ████████╗  ██ █
    █ ██  ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝  ██ █
    █ ██  ██████╔╝██║   ██║██████╔╝   ██║     ██ █
    █ ██  ██╔═══╝ ██║   ██║██╔══██╗   ██║     ██ █
    █ ██  ██║     ╚██████╔╝██║  ██║   ██║     ██ █
    █ ██  ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝     ██ █
    █ ██▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄██ █
    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
        `,
        tree: `
                           ♠♠♠♠♠♠♠
                         ♠♠♠♠♠♠♠♠♠♠♠
                        ♠♠♠♠♠♠♠♠♠♠♠♠♠
                       ♠♠♠♠♠♠♠♠♠♠♠♠♠♠♠
                        ♠♠♠♠♠♠♠♠♠♠♠♠♠
                         ♠♠♠♠♠♠♠♠♠♠♠
                           ♠♠♠♠♠♠♠
                             |||
                             |||
                             |||
                        _____|_____
        `
    }
};

// ===== CORE TERMINAL CLASS =====
// This class encapsulates all terminal functionalities, including input handling,
// command processing, output display, theme management, and background effects.
class TerminalPortfolio {
    constructor() {
        // DOM elements
        this.searchInput = document.getElementById('searchInput');
        this.outputContainer = document.getElementById('outputContainer');
        this.suggestions = document.getElementById('suggestions'); // For autocomplete suggestions
        this.themeToggle = document.getElementById('themeToggle'); // For theme switching
        this.matrixCanvas = document.getElementById('matrixBg'); // Canvas for matrix background

        // State variables
        this.commandHistory = [];
        this.historyIndex = -1;
        this.matrixInterval = null; // To store the interval ID for matrix animation

        // Initialize the terminal
        this.init();
    }

    /**
     * Initializes the terminal by setting up event listeners, applying theme,
     * creating the matrix background, and displaying the welcome message.
     */
    init() {
        this.setupEventListeners();
        // Apply saved theme or default to dark, then create matrix background
        this.applyTheme(localStorage.getItem('theme') || 'dark');
        // Display initial welcome message
        this.executeCommand('welcome', true);
        this.focusInput();
    }

    // ===== EVENT LISTENERS =====
    /**
     * Sets up all necessary event listeners for user interaction.
     */
    setupEventListeners() {
        // Listen for input changes to show suggestions
        this.searchInput.addEventListener('input', (e) => {
            this.showSuggestions(e.target.value);
        });

        // Listen for keyboard events in the search input (Enter, ArrowUp/Down, Tab, Escape)
        this.searchInput.addEventListener('keydown', (e) => this.handleKeyDown(e));

        // Toggle theme on click of the theme toggle button
        if (this.themeToggle) { // Ensure themeToggle exists
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Focus input when clicking anywhere on the document, unless it's a suggestion item
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container') && !e.target.closest('.suggestion-item')) {
                this.focusInput();
            }
        });

        // Recreate matrix background on window resize to ensure responsiveness
        window.addEventListener('resize', () => this.recreateMatrixBackground());
    }

    // ===== COMMAND PROCESSING =====
    /**
     * Handles keyboard events, primarily for command input and history navigation.
     * @param {KeyboardEvent} e - The keyboard event object.
     */
    handleKeyDown(e) {
        switch (e.key) {
            case 'Enter':
                e.preventDefault(); // Prevent default form submission
                this.executeCommand(this.searchInput.value);
                break;
            case 'ArrowUp':
                e.preventDefault(); // Prevent cursor from moving to start of line
                this.navigateHistory('up');
                break;
            case 'ArrowDown':
                e.preventDefault(); // Prevent cursor from moving to end of line
                this.navigateHistory('down');
                break;
            case 'Escape':
                this.hideSuggestions(); // Hide suggestions on Escape key
                break;
            case 'Tab':
                e.preventDefault(); // Prevent default tab behavior
                this.autoCompleteCommand();
                break;
        }
    }

    /**
     * Executes a given command by parsing it and calling the appropriate handler.
     * @param {string} command - The command string entered by the user.
     * @param {boolean} [isInitial=false] - True if this is the initial welcome command.
     */
    executeCommand(command, isInitial = false) {
        const trimmedCommand = command.trim();
        if (!trimmedCommand) return;

        // Add command to history only if it's not the initial welcome message
        if (!isInitial) {
            this.addToHistory(trimmedCommand);
            this.displayCommand(trimmedCommand); // Display the command typed by the user
        }

        const [cmd, ...args] = trimmedCommand.toLowerCase().split(' ');

        // Handle commands in order of precedence: theme, search, system, content
        if (cmd === 'theme') {
            this.toggleTheme();
            this.displayOutput('Theme switched.');
        } else if (this.handleSearchCommand(trimmedCommand)) {
            // Handled by handleSearchCommand
        } else if (this.handleSystemCommand(cmd)) {
            // Handled by handleSystemCommand
        } else if (this.handleContentCommand(cmd)) {
            // Handled by handleContentCommand
        } else {
            // Default action: if no other command matches, perform a Google search
            this.displayOutput(`Command not found. Defaulting to Google search for: "${trimmedCommand}"`);
            this.openSearch('https://www.google.com/search?q=', trimmedCommand);
        }

        this.clearInput(); // Clear the input field after command execution
    }

    /**
     * Handles specific search engine commands (e.g., :g, :b).
     * @param {string} command - The full command string.
     * @returns {boolean} - True if a search command was handled, false otherwise.
     */
    handleSearchCommand(command) {
        const searchEngines = {
            ':g': { name: 'Google', url: 'https://www.google.com/search?q=' },
            ':b': { name: 'Bing', url: 'https://www.bing.com/search?q=' },
            ':d': { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' },
            ':e': { name: 'Ecosia', url: 'https://www.ecosia.org/search?q=' },
            ':y': { name: 'Yahoo', url: 'https://search.yahoo.com/search?p=' }
        };

        for (const prefix in searchEngines) {
            if (command.startsWith(prefix + ' ')) {
                const query = command.substring(prefix.length + 1);
                const engine = searchEngines[prefix];
                this.openSearch(engine.url, query);
                this.displayOutput(`Searching ${engine.name} for: "${query}"...`);
                return true;
            }
        }
        return false;
    }

    /**
     * Handles system-level commands (e.g., clear, help, whoami).
     * @param {string} cmd - The base command.
     * @returns {boolean} - True if a system command was handled, false otherwise.
     */
    handleSystemCommand(cmd) {
        const commands = {
            'clear': () => this.clearOutput(),
            'ls': () => this.listSections(),
            'whoami': () => this.showWhoAmI(),
            'date': () => this.showDate(),
            'help': () => this.showHelp(),
            'tree': () => this.showTree() // Added from super_js.js
        };
        if (commands[cmd]) {
            commands[cmd]();
            return true;
        }
        return false;
    }

    /**
     * Handles commands related to displaying portfolio content (e.g., about, projects, skills).
     * @param {string} cmd - The base command.
     * @returns {boolean} - True if a content command was handled, false otherwise.
     */
    handleContentCommand(cmd) {
        const commands = {
            'welcome': () => this.showWelcomeMessage(),
            'about': () => this.showAbout(),
            'projects': () => this.showProjects(),
            'skills': () => this.showSkills(),
            'contact': () => this.showContact(),
            'certificates': () => this.showCertificates(), // Added from super_js.js
            'resume': () => this.showDocuments(),
            'blog': () => this.showBlog() // Added from super_js.js
        };
        if (commands[cmd]) {
            // Add a slight delay for content commands to simulate loading
            this.displayOutput(`Loading ${cmd}...`, 'info-text');
            setTimeout(() => {
                commands[cmd]();
            }, 300); // Short delay
            return true;
        }
        return false;
    }

    // ===== SEARCH FUNCTIONALITY =====
    /**
     * Opens a new tab with a search query.
     * @param {string} url - The base URL of the search engine.
     * @param {string} query - The search query.
     */
    openSearch(url, query) {
        window.open(url + encodeURIComponent(query), '_blank');
    }

    // ===== CONTENT DISPLAY METHODS =====
    /**
     * Displays the initial welcome message with navigation links.
     */
    showWelcomeMessage() {
        this.clearOutput(); // Clear existing output
        const content = `
            <div class="output-line">
                <div class="command-line">$ ./welcome.sh</div>
                <div class="section">
                    <pre>${portfolioData.asciiArt.welcome}</pre>
                    <h2>Welcome to the Terminal Portfolio of ${portfolioData.personal.name}</h2>
                    <p>Type 'help' to see a list of available commands, or click on the suggestions below.</p>
                    <div class="nav-links">
                        <a href="#" class="nav-link" onclick="terminalPortfolio.executeCommand('about')">about</a>
                        <a href="#" class="nav-link" onclick="terminalPortfolio.executeCommand('projects')">projects</a>
                        <a href="#" class="nav-link" onclick="terminalPortfolio.executeCommand('skills')">skills</a>
                        <a href="#" class="nav-link" onclick="terminalPortfolio.executeCommand('contact')">contact</a>
                        <a href="#" class="nav-link" onclick="terminalPortfolio.executeCommand('resume')">resume</a>
                        <a href="#" class="nav-link" onclick="terminalPortfolio.executeCommand('blog')">blog</a>
                    </div>
                </div>
            </div>`;
        this.addOutput(content, '', true); // Use addOutput with raw=true for HTML content
    }

    /**
     * Displays information about the portfolio owner.
     */
    showAbout() {
        const p = portfolioData.personal;
        const content = `
            <div class="section">
                <h2>About ${p.name}</h2>
                <p><strong>Title:</strong> ${p.title}</p>
                <p><strong>Location:</strong> ${p.location}</p>
                <p>
                    I am a passionate and driven professional with a love for technology and problem-solving.
                    This interactive terminal is a showcase of my work and skills.
                </p>
                <p>Type 'contact' to see how to get in touch!</p>
            </div>
        `;
        this.addOutput(content);
    }

    /**
     * Displays the list of projects from portfolioData.
     */
    showProjects() {
        let content = '<div class="section"><h2>My Projects</h2>';
        if (portfolioData.projects.length === 0) {
            content += '<p>No projects listed yet. Check back soon!</p>';
        } else {
            portfolioData.projects.forEach(p => {
                const statusClass = p.status === 'Completed' ? 'success-text' : 'warning-text';
                content += `
                    <div class="content-card">
                        <h3>${p.title}</h3>
                        <div class="meta">
                            <span class="${statusClass}">${p.status}</span> • ${p.category} • ${p.date}
                        </div>
                        <p>${p.description}</p>
                        <p><strong>Technologies:</strong> ${p.technologies.join(', ')}</p>
                        <div class="nav-links">
                            ${p.links.demo && p.links.demo !== '#' ? `<a href="${p.links.demo}" target="_blank" class="download-link">Demo</a>` : ''}
                            ${p.links.github && p.links.github !== '#' ? `<a href="${p.links.github}" target="_blank" class="download-link">GitHub</a>` : ''}
                        </div>
                        ${p.features && p.features.length > 0 ? `<p><strong>Features:</strong> ${p.features.join(', ')}</p>` : ''}
                    </div>
                `;
            });
        }
        content += '</div>';
        this.addOutput(content);
    }

    /**
     * Displays the list of skills from portfolioData, categorized.
     */
    showSkills() {
        let content = '<div class="section"><h2>Technical Skills</h2>';
        Object.entries(portfolioData.skills).forEach(([category, skills]) => {
            content += `<h3 style="color: #00ff41; margin-top: 20px; margin-bottom: 10px;">${category}</h3>`;
            skills.forEach(skill => {
                const levelClass = skill.level === 'Advanced' ? 'success-text' : skill.level === 'Intermediate' ? 'warning-text' : 'info-text';
                content += `<div style="margin-bottom: 8px;"><span>${skill.name}</span> - <span class="${levelClass}">${skill.level}</span> (${skill.experience})</div>`;
            });
        });
        content += '</div>';
        this.addOutput(content);
    }

    /**
     * Displays contact information.
     */
    showContact() {
        const p = portfolioData.personal;
        const content = `
            <div class="section">
                <h2>Get In Touch</h2>
                <p><strong>Email:</strong> <a href="mailto:${p.email}" class="download-link">${p.email}</a></p>
                <p><strong>Phone:</strong> ${p.phone}</p>
                <div class="nav-links" style="margin-top: 15px;">
                    <a href="${p.github}" target="_blank" class="download-link">GitHub</a>
                    ${p.linkedin && p.linkedin !== '#' ? `<a href="${p.linkedin}" target="_blank" class="download-link">LinkedIn</a>` : ''}
                    ${p.twitter && p.twitter !== '#' ? `<a href="${p.twitter}" target="_blank" class="download-link">Twitter</a>` : ''}
                    ${p.website && p.website !== '#' ? `<a href="${p.website}" target="_blank" class="download-link">Website</a>` : ''}
                </div>
                <p style="margin-top: 15px;">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
            </div>`;
        this.addOutput(content);
    }

    /**
     * Displays the list of certificates.
     */
    showCertificates() {
        let content = '<div class="section"><h2>Certificates & Certifications</h2>';

        if (portfolioData.certificates.length === 0) {
            content += '<p>No certificates added yet.</p>';
        } else {
            portfolioData.certificates.forEach(cert => {
                const validStatus = cert.validUntil ?
                    `Valid until: ${cert.validUntil}` :
                    'No expiration';
                content += `
                    <div class="content-card">
                        <h3>${cert.title}</h3>
                        <div class="meta">
                            ${cert.issuer} • ${cert.date} • ${validStatus}
                        </div>
                        <p><strong>Credential ID:</strong> ${cert.credentialId}</p>
                        <div class="nav-links">
                            <a href="${cert.link}" target="_blank" class="nav-link">View Certificate</a>
                            ${cert.downloadLink ? `<a href="${cert.downloadLink}" download class="nav-link">Download</a>` : ''}
                        </div>
                    </div>
                `;
            });
        }

        content += '</div>';
        this.addOutput(content);
    }

    /**
     * Displays the list of documents (e.g., resume).
     */
    showDocuments() {
        let content = '<div class="section"><h2>Resume & Documents</h2>';
        if (portfolioData.documents.length === 0) {
            content += '<p>No documents available.</p>';
        } else {
            portfolioData.documents.forEach(doc => {
                content += `
                    <div class="content-card">
                        <h3>${doc.title}</h3>
                        <div class="meta">${doc.type} • ${doc.size} • Last updated: ${doc.lastUpdated}</div>
                        <div class="nav-links">
                            <a href="${doc.downloadLink}" download class="download-link">Download ${doc.type}</a>
                        </div>
                    </div>`;
            });
        }
        content += '</div>';
        this.addOutput(content);
    }

    /**
     * Displays the list of blog posts.
     */
    showBlog() {
        let content = '<div class="section"><h2>Blog Posts & Articles</h2>';

        if (portfolioData.blog.length === 0) {
            content += '<p>No blog posts available yet.</p>';
        } else {
            portfolioData.blog.forEach(post => {
                content += `
                    <div class="content-card">
                        <h3>${post.title}</h3>
                        <div class="meta">
                            ${post.date} • ${post.readTime} • ${post.category}
                        </div>
                        <p>${post.excerpt}</p>
                        <div class="tags">
                            ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <div class="nav-links">
                            <a href="${post.link}" target="_blank" class="nav-link">Read Article</a>
                        </div>
                    </div>
                `;
            });
        }

        content += '</div>';
        this.addOutput(content);
    }

    // ===== SYSTEM COMMANDS DISPLAY =====
    /**
     * Displays a comprehensive help message listing all available commands.
     */
    showHelp() {
        const content = `
            <div class="section">
                <h2>Available Commands</h2>
                <div style="display: flex; gap: 40px; flex-wrap: wrap;">
                    <div>
                        <h3 style="color:#44ff44; margin-bottom:10px;">Content</h3>
                        <div class="file-tree">
                            <div class="file-tree-item">about - Learn about me</div>
                            <div class="file-tree-item">projects - View my projects</div>
                            <div class="file-tree-item">skills - See my technical skills</div>
                            <div class="file-tree-item">contact - Get my contact information</div>
                            <div class="file-tree-item">certificates - View my certificates</div>
                            <div class="file-tree-item">resume - Download my resume</div>
                            <div class="file-tree-item">blog - Read my blog posts</div>
                        </div>
                    </div>
                    <div>
                        <h3 style="color:#44ff44; margin-bottom:10px;">System</h3>
                        <div class="file-tree">
                            <div class="file-tree-item">help - Show this help message</div>
                            <div class="file-tree-item">clear - Clear terminal</div>
                            <div class="file-tree-item">whoami - Display my info</div>
                            <div class="file-tree-item">date - Show current date</div>
                            <div class="file-tree-item">ls - List all sections</div>
                            <div class="file-tree-item">tree - Show site structure (ASCII)</div>
                            <div class="file-tree-item">theme - Toggle light/dark theme</div>
                        </div>
                    </div>
                    <div>
                        <h3 style="color:#44ff44; margin-bottom:10px;">Web Search</h3>
                        <div class="file-tree">
                            <div class="file-tree-item">:g &lt;query&gt; - Search on Google</div>
                            <div class="file-tree-item">:b &lt;query&gt; - Search on Bing</div>
                            <div class="file-tree-item">:d &lt;query&gt; - Search on DuckDuckGo</div>
                            <div class="file-tree-item">:e &lt;query&gt; - Search on Ecosia</div>
                            <div class="file-tree-item">:y &lt;query&gt; - Search on Yahoo</div>
                        </div>
                    </div>
                </div>
                <p style="margin-top: 20px;">Use Tab for autocomplete and arrow keys for command history.<br>
                If no prefix is used, the search will default to Google.</p>
            </div>`;
        this.addOutput(content);
    }

    /**
     * Lists all available content sections.
     */
    listSections() {
        const sections = ['about', 'projects', 'skills', 'contact', 'certificates', 'resume', 'blog'];
        let output = '<div class="file-tree">';
        sections.forEach(s => { output += `<div class="file-tree-item">${s}/</div>`; });
        output += '</div>';
        this.addOutput(output, 'success-text');
    }

    /**
     * Displays information about the user/portfolio owner.
     */
    showWhoAmI() {
        this.addOutput(`user: ${portfolioData.personal.name} (${portfolioData.personal.title})`, 'success-text');
    }

    /**
     * Displays the current date and time.
     */
    showDate() {
        this.addOutput(new Date().toLocaleString(), 'info-text');
    }

    /**
     * Displays an ASCII art representation of the site structure.
     */
    showTree() {
        this.addOutput('<pre>' + portfolioData.asciiArt.tree + '</pre>');
    }

    // ===== COMMAND HISTORY & AUTOCOMPLETE =====
    /**
     * Navigates through the command history.
     * @param {'up'|'down'} direction - The direction to navigate.
     */
    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;
        if (direction === 'up') {
            if (this.historyIndex < this.commandHistory.length - 1) this.historyIndex++;
        } else { // direction === 'down'
            if (this.historyIndex > 0) this.historyIndex--;
            else { // If at the beginning of history, clear input
                this.historyIndex = -1;
                this.searchInput.value = '';
                return;
            }
        }
        this.searchInput.value = this.commandHistory[this.historyIndex];
    }

    /**
     * Adds a command to the history.
     * @param {string} command - The command to add.
     */
    addToHistory(command) {
        this.commandHistory.unshift(command); // Add to the beginning
        if (this.commandHistory.length > 50) this.commandHistory.pop(); // Keep history size limited
        this.historyIndex = -1; // Reset history index when new command is added
    }

    /**
     * Attempts to autocomplete the current input based on available commands.
     */
    autoCompleteCommand() {
        const query = this.searchInput.value.toLowerCase();
        const matches = this.findMatches(query);

        if (matches.length > 0) {
            this.searchInput.value = matches[0].value;
            this.hideSuggestions(); // Hide suggestions after autocomplete
        }
    }

    // ===== SUGGESTIONS SYSTEM =====
    /**
     * Shows command suggestions based on the current input query.
     * @param {string} query - The current value of the input field.
     */
    showSuggestions(query) {
        if (!query.trim()) {
            this.hideSuggestions();
            return;
        }

        const matches = this.findMatches(query);

        if (matches.length > 0) {
            this.renderSuggestions(matches);
        } else {
            this.hideSuggestions();
        }
    }

    /**
     * Finds matching commands based on the query.
     * @param {string} query - The search query.
     * @returns {Array<Object>} - An array of matching command objects.
     */
    findMatches(query) {
        const matches = [];
        const queryLower = query.toLowerCase();

        // Define all possible commands for suggestions
        const allCommands = {
            // Content commands
            'about': 'Learn about me',
            'projects': 'View my projects',
            'skills': 'See my technical skills',
            'contact': 'Get my contact information',
            'certificates': 'View my certificates',
            'resume': 'Download resume and documents',
            'blog': 'Read my blog posts',
            // System commands
            'clear': 'Clear terminal',
            'ls': 'List all sections',
            'whoami': 'Display current user',
            'date': 'Show current date',
            'tree': 'Show site structure',
            'help': 'Show available commands',
            'theme': 'Toggle light/dark theme', // Added theme command
            // Search prefixes
            ':g ': 'Search on Google',
            ':b ': 'Search on Bing',
            ':d ': 'Search on DuckDuckGo',
            ':e ': 'Search on Ecosia',
            ':y ': 'Search on Yahoo'
        };

        for (const cmd in allCommands) {
            if (cmd.startsWith(queryLower)) {
                matches.push({ value: cmd, description: allCommands[cmd] });
            }
        }

        return matches.slice(0, 8); // Limit to 8 suggestions
    }

    /**
     * Renders the suggestions in the suggestions container.
     * @param {Array<Object>} matches - Array of matching command objects.
     */
    renderSuggestions(matches) {
        const html = matches.map(match =>
            `<div class="suggestion-item" onclick="terminalPortfolio.selectSuggestion('${match.value.trim()}')">
                <span style="color: #44ff44;">${match.value.trim()}</span> - ${match.description}
            </div>`
        ).join('');

        this.suggestions.innerHTML = html;
        this.suggestions.style.display = 'block';
    }

    /**
     * Selects a suggestion and either executes it or populates the input field.
     * @param {string} command - The command value from the suggestion.
     */
    selectSuggestion(command) {
        this.searchInput.value = command;
        this.hideSuggestions();
        // If the command doesn't end with a space (like search prefixes), execute it immediately
        if (!command.endsWith(' ')) {
            this.executeCommand(command);
        }
        this.focusInput();
    }

    /**
     * Hides the suggestions container.
     */
    hideSuggestions() {
        this.suggestions.style.display = 'none';
    }

    // ===== OUTPUT & INPUT MANAGEMENT =====
    /**
     * Adds content to the output container.
     * @param {string} content - The HTML content to add.
     * @param {string} [className=''] - Optional CSS class for the output line.
     * @param {boolean} [raw=false] - If true, content is inserted directly without wrapping in .section.
     */
    addOutput(content, className = '', raw = false) {
        const outputLine = document.createElement('div');
        outputLine.className = `output-line ${className}`;

        if (raw) {
            outputLine.innerHTML = content;
        } else {
            const section = document.createElement('div');
            section.className = 'section';
            section.innerHTML = content;
            outputLine.appendChild(section);
        }
        this.outputContainer.appendChild(outputLine);
        this.scrollToBottom();
    }

    /**
     * Displays the command that was just executed by the user.
     * @param {string} command - The command string.
     */
    displayCommand(command) {
        const commandElement = document.createElement('div');
        commandElement.className = 'command-line';
        commandElement.textContent = `$ ${command}`;
        this.outputContainer.appendChild(commandElement);
        this.scrollToBottom();
    }

    /**
     * Clears all content from the output container.
     */
    clearOutput() {
        this.outputContainer.innerHTML = '';
        this.clearInput(); // Also clear input when output is cleared
    }

    /**
     * Clears the input field and hides suggestions.
     */
    clearInput() {
        this.searchInput.value = '';
        this.hideSuggestions();
        this.focusInput();
    }

    /**
     * Scrolls the output container to the bottom.
     */
    scrollToBottom() {
        this.outputContainer.scrollTop = this.outputContainer.scrollHeight;
    }

    /**
     * Sets focus on the input field.
     */
    focusInput() {
        this.searchInput.focus();
    }

    // ===== THEME MANAGEMENT =====
    /**
     * Toggles between 'dark' and 'light' themes.
     */
    toggleTheme() {
        const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }

    /**
     * Applies the specified theme and saves the preference.
     * @param {'dark'|'light'} theme - The theme to apply.
     */
    applyTheme(theme) {
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme); // Save user's preference
        this.recreateMatrixBackground(); // Re-create matrix with new theme colors
    }

    // ===== MATRIX BACKGROUND =====
    /**
     * Creates and animates the matrix background effect on the canvas.
     */
    createMatrixBackground() {
        // Clear any existing interval to prevent multiple animations
        if (this.matrixInterval) clearInterval(this.matrixInterval);
        // If canvas doesn't exist, create it dynamically
        if (!this.matrixCanvas) {
            const canvas = document.createElement('canvas');
            canvas.id = 'matrixBg';
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.zIndex = '-1';
            document.body.insertBefore(canvas, document.body.firstChild);
            this.matrixCanvas = canvas;
        }

        const ctx = this.matrixCanvas.getContext('2d');
        const resizeCanvas = () => {
            this.matrixCanvas.width = window.innerWidth;
            this.matrixCanvas.height = window.innerHeight;
        };
        resizeCanvas(); // Initial resize

        const matrix = "01"; // Characters for the matrix rain
        const fontSize = 12;
        const columns = this.matrixCanvas.width / fontSize;
        // Initialize drops array, each element represents the Y position of a character in a column
        const drops = Array.from({ length: columns }).fill(1);

        const theme = document.body.dataset.theme;
        // Set colors based on the current theme
        const bgColor = theme === 'dark' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(245, 245, 245, 0.04)';
        const charColor = theme === 'dark' ? '#00ff41' : '#c800c8'; // Green for dark, purple for light

        const draw = () => {
            // Draw a semi-transparent rectangle to create the fading trail effect
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, this.matrixCanvas.width, this.matrixCanvas.height);

            ctx.fillStyle = charColor; // Matrix character color
            ctx.font = `${fontSize}px monospace`;

            // Loop through each column
            for (let i = 0; i < drops.length; i++) {
                // Get a random character from the matrix string
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                // Draw the character
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // If the character has fallen off the bottom of the screen,
                // or randomly, reset it to the top
                if (drops[i] * fontSize > this.matrixCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++; // Move the character down
            }
        };
        // Set the animation interval
        this.matrixInterval = setInterval(draw, 40); // Adjusted interval for smoother animation
    }

    /**
     * Clears the existing matrix interval and recreates the background.
     * Useful for theme changes or window resizing.
     */
    recreateMatrixBackground() {
        clearInterval(this.matrixInterval);
        this.createMatrixBackground();
    }
}

// ===== GLOBAL FUNCTIONS FOR HTML ONCLICK EVENTS =====
// These functions are exposed globally to be called directly from inline HTML event handlers.
/**
 * Global function to execute a command from HTML elements (e.g., navigation links).
 * @param {string} command - The command string to execute.
 */
function executeCommand(command) {
    if (terminalPortfolio) {
        terminalPortfolio.executeCommand(command);
    }
}

// ===== INITIALIZE APPLICATION =====
let terminalPortfolio; // Declare globally to be accessible by global functions

// Ensure the DOM is fully loaded before initializing the TerminalPortfolio.
document.addEventListener('DOMContentLoaded', () => {
    terminalPortfolio = new TerminalPortfolio();
});

// ===== UTILITY FUNCTIONS FOR DYNAMIC CONTENT MANAGEMENT =====
// These functions allow external scripts or future enhancements to dynamically
// add content to the portfolioData object.

/**
 * Add a new project to the portfolio
 * @param {Object} project - The project object to add.
 */
function addProject(project) {
    portfolioData.projects.push(project);
}

/**
 * Add a new skill to a category
 * @param {string} category - The skill category (e.g., "Programming Languages").
 * @param {Object} skill - The skill object to add (e.g., { name: "New Skill", level: "Beginner", experience: "1 year" }).
 */
function addSkill(category, skill) {
    if (!portfolioData.skills[category]) {
        portfolioData.skills[category] = [];
    }
    portfolioData.skills[category].push(skill);
}

/**
 * Add a new certificate to the portfolio.
 * @param {Object} certificate - The certificate object to add.
 */
function addCertificate(certificate) {
    portfolioData.certificates.push(certificate);
}

/**
 * Add a new document (e.g., resume) to the portfolio.
 * @param {Object} document - The document object to add.
 */
function addDocument(document) {
    portfolioData.documents.push(document);
}

/**
 * Add a new blog post to the portfolio.
 * @param {Object} post - The blog post object to add.
 */
function addBlogPost(post) {
    portfolioData.blog.push(post);
}

