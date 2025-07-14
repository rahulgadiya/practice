// ===== DYNAMIC CONTENT MANAGEMENT SYSTEM =====
// This is where you can easily add new content without touching HTML or CSS
// Simply add new objects to the appropriate arrays below

const portfolioData = {
    // ===== PERSONAL INFORMATION =====
    personal: {
        name: "John Developer",
        title: "Full Stack Developer",
        email: "john.developer@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        website: "https://johndeveloper.com",
        linkedin: "https://linkedin.com/in/johndeveloper",
        github: "https://github.com/johndeveloper",
        twitter: "https://twitter.com/johndeveloper"
    },

    // ===== PROJECTS =====
    // To add a new project, simply add a new object to this array
    projects: [
        {
            id: "terminal-portfolio",
            title: "Terminal Portfolio Website",
            description: "A retro-style portfolio website with terminal interface and matrix background effects",
            technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
            status: "Completed",
            category: "Web Development",
            date: "2024-01",
            links: {
                demo: "https://example.com/terminal-portfolio",
                github: "https://github.com/johndeveloper/terminal-portfolio"
            },
            features: [
                "Terminal-style command interface",
                "Matrix rain background animation",
                "Autocomplete suggestions",
                "Responsive design"
            ]
        },
        {
            id: "ecommerce-platform",
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with payment integration and admin dashboard",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Express"],
            status: "In Progress",
            category: "Full Stack",
            date: "2024-02",
            links: {
                demo: "https://example.com/ecommerce-demo",
                github: "https://github.com/johndeveloper/ecommerce-platform"
            },
            features: [
                "User authentication and authorization",
                "Shopping cart and checkout system",
                "Payment processing with Stripe",
                "Admin dashboard for inventory management"
            ]
        },
        {
            id: "weather-app",
            title: "Real-time Weather App",
            description: "Weather tracking application with geolocation and forecast features",
            technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
            status: "Completed",
            category: "Frontend",
            date: "2023-12",
            links: {
                demo: "https://example.com/weather-app",
                github: "https://github.com/johndeveloper/weather-app"
            },
            features: [
                "Current weather conditions",
                "5-day weather forecast",
                "Geolocation support",
                "Interactive weather charts"
            ]
        }
    ],

    // ===== SKILLS =====
    // Organized by categories for better presentation
    skills: {
        "Programming Languages": [
            { name: "JavaScript", level: "Advanced", experience: "5+ years" },
            { name: "Python", level: "Advanced", experience: "4+ years" },
            { name: "TypeScript", level: "Intermediate", experience: "2+ years" },
            { name: "Java", level: "Intermediate", experience: "3+ years" },
            { name: "C++", level: "Intermediate", experience: "2+ years" }
        ],
        "Frontend Technologies": [
            { name: "React", level: "Advanced", experience: "4+ years" },
            { name: "Vue.js", level: "Intermediate", experience: "2+ years" },
            { name: "HTML5", level: "Advanced", experience: "5+ years" },
            { name: "CSS3/SASS", level: "Advanced", experience: "5+ years" },
            { name: "Webpack", level: "Intermediate", experience: "3+ years" }
        ],
        "Backend Technologies": [
            { name: "Node.js", level: "Advanced", experience: "4+ years" },
            { name: "Express.js", level: "Advanced", experience: "4+ years" },
            { name: "Django", level: "Intermediate", experience: "3+ years" },
            { name: "Flask", level: "Intermediate", experience: "2+ years" },
            { name: "REST APIs", level: "Advanced", experience: "4+ years" }
        ],
        "Databases": [
            { name: "MongoDB", level: "Advanced", experience: "3+ years" },
            { name: "PostgreSQL", level: "Advanced", experience: "4+ years" },
            { name: "MySQL", level: "Intermediate", experience: "3+ years" },
            { name: "Redis", level: "Intermediate", experience: "2+ years" }
        ],
        "Tools & Platforms": [
            { name: "Git", level: "Advanced", experience: "5+ years" },
            { name: "Docker", level: "Intermediate", experience: "3+ years" },
            { name: "AWS", level: "Intermediate", experience: "2+ years" },
            { name: "Linux", level: "Advanced", experience: "4+ years" },
            { name: "CI/CD", level: "Intermediate", experience: "2+ years" }
        ]
    },

    // ===== CERTIFICATES =====
    // Add your certificates here
    certificates: [
        {
            id: "aws-cloud-practitioner",
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023-11",
            validUntil: "2026-11",
            credentialId: "AWS-CCP-12345",
            link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
            downloadLink: "certificates/aws-cloud-practitioner.pdf"
        },
        {
            id: "react-advanced",
            title: "Advanced React Development",
            issuer: "Tech Academy",
            date: "2023-09",
            validUntil: null,
            credentialId: "REACT-ADV-67890",
            link: "https://techacademy.com/react-advanced",
            downloadLink: "certificates/react-advanced.pdf"
        }
    ],

    // ===== RESUME/CV FILES =====
    documents: [
        {
            id: "resume-2024",
            title: "Resume 2024",
            type: "PDF",
            size: "245 KB",
            lastUpdated: "2024-01-15",
            downloadLink: "documents/John_Developer_Resume_2024.pdf"
        },
        {
            id: "cv-detailed",
            title: "Detailed CV",
            type: "PDF",
            size: "387 KB",
            lastUpdated: "2024-01-10",
            downloadLink: "documents/John_Developer_CV_Detailed.pdf"
        }
    ],

    // ===== BLOG POSTS =====
    // Add your blog posts or articles here
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
            id: "react-performance",
            title: "Optimizing React Performance: Best Practices",
            excerpt: "Learn how to improve your React application's performance with these proven techniques",
            date: "2024-01-10",
            readTime: "12 min read",
            category: "React",
            tags: ["React", "Performance", "Optimization", "JavaScript"],
            link: "blog/react-performance.html"
        }
    ]
};

// ===== CORE FUNCTIONALITY =====
class TerminalPortfolio {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.outputContainer = document.getElementById('outputContainer');
        this.suggestions = document.getElementById('suggestions');
        this.commandHistory = [];
        this.historyIndex = -1;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.createMatrixBackground();
        this.focusInput();
    }

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        this.searchInput.addEventListener('input', (e) => {
            this.showSuggestions(e.target.value);
        });

        this.searchInput.addEventListener('keydown', (e) => {
            this.handleKeyDown(e);
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.hideSuggestions();
            }
        });

        window.addEventListener('resize', () => {
            this.recreateMatrixBackground();
        });
    }

    // ===== COMMAND PROCESSING =====
    handleKeyDown(e) {
        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                this.executeCommand(this.searchInput.value);
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.navigateHistory('up');
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.navigateHistory('down');
                break;
            case 'Escape':
                this.hideSuggestions();
                break;
            case 'Tab':
                e.preventDefault();
                this.autoCompleteCommand();
                break;
        }
    }

    executeCommand(command) {
        const cmd = command.toLowerCase().trim();
        if (!cmd) return;

        this.addToHistory(command);
        this.addOutput(`$ ${command}`);

        // System commands
        if (this.handleSystemCommand(cmd)) return;

        // Content commands
        if (this.handleContentCommand(cmd)) return;

        // Default: command not found
        this.addOutput(`Command not found: ${command}. Type 'help' for available commands.`, 'error-text');
        this.clearInput();
    }

    handleSystemCommand(cmd) {
        switch (cmd) {
            case 'clear':
                this.clearOutput();
                return true;
            case 'ls':
                this.listSections();
                return true;
            case 'whoami':
                this.showWhoAmI();
                return true;
            case 'date':
                this.showDate();
                return true;
            case 'tree':
                this.showTree();
                return true;
            case 'help':
                this.showHelp();
                return true;
            default:
                return false;
        }
    }

    handleContentCommand(cmd) {
        const commands = {
            'about': () => this.showAbout(),
            'projects': () => this.showProjects(),
            'skills': () => this.showSkills(),
            'contact': () => this.showContact(),
            'certificates': () => this.showCertificates(),
            'resume': () => this.showDocuments(),
            'blog': () => this.showBlog()
        };

        if (commands[cmd]) {
            this.addOutput(`Loading ${cmd}...`, 'warning-text');
            setTimeout(() => {
                commands[cmd]();
            }, 500);
            return true;
        }

        return false;
    }

    // ===== CONTENT DISPLAY METHODS =====
    showAbout() {
        const personal = portfolioData.personal;
        const content = `
            <div class="section">
                <h2>About ${personal.name}</h2>
                <p><strong>Title:</strong> ${personal.title}</p>
                <p><strong>Location:</strong> ${personal.location}</p>
                <p><strong>Website:</strong> <a href="${personal.website}" target="_blank" class="download-link">${personal.website}</a></p>
                <p>I'm a passionate developer who loves creating digital experiences. With expertise in web development, 
                I enjoy building applications that solve real-world problems and deliver exceptional user experiences.</p>
            </div>
        `;
        this.addOutput(content);
        this.clearInput();
    }

    showProjects() {
        let content = '<div class="section"><h2>My Projects</h2>';
        
        portfolioData.projects.forEach(project => {
            const statusClass = project.status === 'Completed' ? 'success-text' : 'warning-text';
            content += `
                <div class="content-card">
                    <h3>${project.title}</h3>
                    <div class="meta">
                        <span class="${statusClass}">${project.status}</span> • 
                        ${project.category} • 
                        ${project.date}
                    </div>
                    <p>${project.description}</p>
                    <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                    <div class="nav-links">
                        ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" class="download-link">Demo</a>` : ''}
                        ${project.links.github ? `<a href="${project.links.github}" target="_blank" class="download-link">GitHub</a>` : ''}
                    </div>
                </div>
            `;
        });
        
        content += '</div>';
        this.addOutput(content);
        this.clearInput();
    }

    showSkills() {
        let content = '<div class="section"><h2>Technical Skills</h2>';
        
        Object.entries(portfolioData.skills).forEach(([category, skills]) => {
            content += `<h3 style="color: #44ff44; margin-top: 20px; margin-bottom: 10px;">${category}</h3>`;
            skills.forEach(skill => {
                const levelClass = skill.level === 'Advanced' ? 'success-text' : 
                                 skill.level === 'Intermediate' ? 'warning-text' : 'info-text';
                content += `
                    <div style="margin-bottom: 8px;">
                        <span class="highlight">${skill.name}</span> - 
                        <span class="${levelClass}">${skill.level}</span> 
                        (${skill.experience})
                    </div>
                `;
            });
        });
        
        content += '</div>';
        this.addOutput(content);
        this.clearInput();
    }

    showContact() {
        const personal = portfolioData.personal;
        const content = `
            <div class="section">
                <h2>Get In Touch</h2>
                <p><strong>Email:</strong> <a href="mailto:${personal.email}" class="download-link">${personal.email}</a></p>
                <p><strong>Phone:</strong> ${personal.phone}</p>
                <p><strong>Location:</strong> ${personal.location}</p>
                <div class="nav-links" style="margin-top: 15px;">
                    <a href="${personal.linkedin}" target="_blank" class="download-link">LinkedIn</a>
                    <a href="${personal.github}" target="_blank" class="download-link">GitHub</a>
                    <a href="${personal.twitter}" target="_blank" class="download-link">Twitter</a>
                    <a href="${personal.website}" target="_blank" class="download-link">Website</a>
                </div>
                <p style="margin-top: 15px;">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
            </div>
        `;
        this.addOutput(content);
        this.clearInput();
    }

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
                            <a href="${cert.link}" target="_blank" class="download-link">View Certificate</a>
                            ${cert.downloadLink ? `<a href="${cert.downloadLink}" download class="download-link">Download</a>` : ''}
                        </div>
                    </div>
                `;
            });
        }
        
        content += '</div>';
        this.addOutput(content);
        this.clearInput();
    }

    showDocuments() {
        let content = '<div class="section"><h2>Resume & Documents</h2>';
        
        if (portfolioData.documents.length === 0) {
            content += '<p>No documents available.</p>';
        } else {
            portfolioData.documents.forEach(doc => {
                content += `
                    <div class="content-card">
                        <h3>${doc.title}</h3>
                        <div class="meta">
                            ${doc.type} • ${doc.size} • Last updated: ${doc.lastUpdated}
                        </div>
                        <div class="nav-links">
                            <a href="${doc.downloadLink}" download class="download-link">Download ${doc.type}</a>
                        </div>
                    </div>
                `;
            });
        }
        
        content += '</div>';
        this.addOutput(content);
        this.clearInput();
    }

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
                            <a href="${post.link}" target="_blank" class="download-link">Read Article</a>
                        </div>
                    </div>
                `;
            });
        }
        
        content += '</div>';
        this.addOutput(content);
        this.clearInput();
    }

    // ===== SYSTEM COMMANDS =====
    showHelp() {
        const content = `
            <div class="section">
                <h2>Available Commands</h2>
                <div class="file-tree">
                    <div class="file-tree-item">about - Learn about me</div>
                    <div class="file-tree-item">projects - View my projects</div>
                    <div class="file-tree-item">skills - See my technical skills</div>
                    <div class="file-tree-item">contact - Get my contact information</div>
                    <div class="file-tree-item">certificates - View my certificates</div>
                    <div class="file-tree-item">resume - Download resume and documents</div>
                    <div class="file-tree-item">blog - Read my blog posts</div>
                    <div class="file-tree-item">clear - Clear terminal</div>
                    <div class="file-tree-item">ls - List all sections</div>
                    <div class="file-tree-item">whoami - Display current user</div>
                    <div class="file-tree-item">date - Show current date</div>
                    <div class="file-tree-item">tree - Show site structure</div>
                    <div class="file-tree-item">help - Show this help message</div>
                </div>
                <p style="margin-top: 15px;">Use Tab for autocomplete and arrow keys for command history.</p>
            </div>
        `;
        this.addOutput(content);
        this.clearInput();
    }

    listSections() {
        this.addOutput('Available sections:', 'success-text');
        const sections = ['about', 'projects', 'skills', 'contact', 'certificates', 'resume', 'blog'];
        sections.forEach(section => {
            this.addOutput(`  ${section}/`, 'nav-link');
        });
        this.clearInput();
    }

    showWhoAmI() {
        this.addOutput(`developer@portfolio:~$ Current user: ${portfolioData.personal.name} (${portfolioData.personal.title})`, 'success-text');
        this.clearInput();
    }

    showDate() {
        this.addOutput(`Current date: ${new Date().toLocaleString()}`, 'success-text');
        this.clearInput();
    }

    showTree() {
        this.addOutput('Site structure:', 'success-text');
        const tree = `
portfolio/
├── about/
├── projects/
├── skills/
├── contact/
├── certificates/
├── resume/
└── blog/
        `;
        this.addOutput(tree, 'file-tree');
        this.clearInput();
    }

    // ===== SUGGESTIONS SYSTEM =====
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

    findMatches(query) {
        const matches = [];
        const queryLower = query.toLowerCase();

        // Content commands
        const contentCommands = {
            'about': 'Learn about me',
            'projects': 'View my projects',
            'skills': 'See my technical skills',
            'contact': 'Get my contact information',
            'certificates': 'View my certificates',
            'resume': 'Download resume and documents',
            'blog': 'Read my blog posts'
        };

        // System commands
        const systemCommands = {
            'clear': 'Clear terminal',
            'ls': 'List all sections',
            'whoami': 'Display current user',
            'date': 'Show current date',
            'tree': 'Show site structure',
            'help': 'Show available commands'
        };

        // Search content commands
        Object.entries(contentCommands).forEach(([cmd, desc]) => {
            if (cmd.includes(queryLower)) {
                matches.push({ type: 'content', value: cmd, description: desc });
            }
        });

        // Search system commands
        Object.entries(systemCommands).forEach(([cmd, desc]) => {
            if (cmd.includes(queryLower)) {
                matches.push({ type: 'system', value: cmd, description: desc });
            }
        });

        // Search within project names
        portfolioData.projects.forEach(project => {
            if (project.title.toLowerCase().includes(queryLower) || 
                project.technologies.some(tech => tech.toLowerCase().includes(queryLower))) {
                matches.push({ 
                    type: 'project', 
                    value: 'projects', 
                    description: `Project: ${project.title}` 
                });
            }
        });

        return matches.slice(0, 8); // Limit to 8 suggestions
    }

    renderSuggestions(matches) {
        const html = matches.map(match => 
            `<div class="suggestion-item" onclick="terminalPortfolio.selectSuggestion('${match.value}')">
                <span class="highlight">${match.value}</span> - ${match.description}
            </div>`
        ).join('');
        
        this.suggestions.innerHTML = html;
        this.suggestions.style.display = 'block';
    }

    selectSuggestion(command) {
        this.searchInput.value = command;
        this.hideSuggestions();
        this.executeCommand(command);
    }

    hideSuggestions() {
        this.suggestions.style.display = 'none';
    }

    autoCompleteCommand() {
        const query = this.searchInput.value.toLowerCase();
        const matches = this.findMatches(query);
        
        if (matches.length > 0) {
            this.searchInput.value = matches[0].value;
        }
    }

    // ===== COMMAND HISTORY =====
    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;

        if (direction === 'up') {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
                this.searchInput.value = this.commandHistory[this.historyIndex];
            }
        } else if (direction === 'down') {
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.searchInput.value = this.commandHistory[this.historyIndex];
            } else if (this.historyIndex === 0) {
                this.historyIndex = -1;
                this.searchInput.value = '';
            }
        }
    }

    addToHistory(command) {
        this.commandHistory.unshift(command);
        this.historyIndex = -1;
        
        // Keep only last 50 commands
        if (this.commandHistory.length > 50) {
            this.commandHistory = this.commandHistory.slice(0, 50);
        }
    }

    // ===== OUTPUT MANAGEMENT =====
    addOutput(content, className = '') {
        const outputLine = document.createElement('div');
        outputLine.className = `output-line ${className}`;
        outputLine.innerHTML = content.replace(/\n/g, '<br>');
        this.outputContainer.appendChild(outputLine);
        this.scrollToBottom();
    }

    clearOutput() {
        this.outputContainer.innerHTML = '';
        this.clearInput();
    }

    clearInput() {
        this.searchInput.value = '';
        this.hideSuggestions();
    }

    scrollToBottom() {
        this.outputContainer.scrollTop = this.outputContainer.scrollHeight;
    }

    focusInput() {
        this.searchInput.focus();
    }

    // ===== MATRIX BACKGROUND =====
    createMatrixBackground() {
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.05';
        
        const ctx = canvas.getContext('2d');
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");
        
        const fontSize = 10;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for(let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px monospace';
            
            for(let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        
        setInterval(draw, 35);
        document.getElementById('matrixBg').appendChild(canvas);
    }

    recreateMatrixBackground() {
        document.getElementById('matrixBg').innerHTML = '';
        this.createMatrixBackground();
    }
}

// ===== GLOBAL FUNCTIONS FOR HTML ONCLICK EVENTS =====
function executeCommand(command) {
    terminalPortfolio.executeCommand(command);
}

// ===== INITIALIZE APPLICATION =====
let terminalPortfolio;

document.addEventListener('DOMContentLoaded', () => {
    terminalPortfolio = new TerminalPortfolio();
});

// ===== UTILITY FUNCTIONS FOR CONTENT MANAGEMENT =====
// These functions can be used by non-developers to easily add content

/**
 * Add a new project to the portfolio
 * @param {Object} project - Project object with required fields
 */
function addProject(project) {
    portfolioData.projects.push(project);
}

/**
 * Add a new skill to a category
 * @param {string} category - Skill category
 * @param {Object} skill - Skill object with name, level, and experience
 */
function addSkill(category, skill) {
    if (!portfolioData.skills[category]) {
        portfolioData.skills[category] = [];
    }
    portfolioData.skills[category].push(skill);
}

/**
 * Add a new certificate
 * @param {Object} certificate - Certificate object with required fields
 */
function addCertificate(certificate) {
    portfolioData.certificates.push(certificate);
}

/**
 * Add a new document
 * @param {Object} document - Document object with required fields
 */
function addDocument(document) {
    portfolioData.documents.push(document);
}

/**
 * Add a new blog post
 * @param {Object} post - Blog post object with required fields
 */
function addBlogPost(post) {
    portfolioData.blog.push(post);
}

// ===== EXAMPLE USAGE FOR NON-DEVELOPERS =====
/*
// To add a new project:
addProject({
    id: "new-project",
    title: "My New Project",
    description: "Description of the project",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Web Development",
    date: "2024-03",
    links: {
        demo: "https://example.com/demo",
        github: "https://github.com/username/project"
    },
    features: ["Feature 1", "Feature 2"]
});

// To add a new skill:
addSkill("Programming Languages", {
    name: "Go",
    level: "Beginner",
    experience: "6 months"
});

// To add a new certificate:
addCertificate({
    id: "new-cert",
    title: "New Certification",
    issuer: "Certification Body",
    date: "2024-03",
    validUntil: "2027-03",
    credentialId: "CERT-12345",
    link: "https://example.com/cert",
    downloadLink: "certificates/new-cert.pdf"
});
*/