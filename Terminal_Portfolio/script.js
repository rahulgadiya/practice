// ===== DYNAMIC CONTENT MANAGEMENT SYSTEM =====
const portfolioData = {
    // ===== PERSONAL INFORMATION =====
    personal: {
        name: "Rahul Gadiya",
        title: "CEO & Developer", // Merged from super.js
        email: "rahulajain98@outlook.com",
        phone: "+91 7208866230",
        location: "Mumbai, MH",
        website: "https://rahulgadiya.com", // From super.js
        linkedin: "https://linkedin.com/in/rahulgadiya", // From super.js
        github: "https://github.com/rahulgadiya",
        twitter: "https://twitter.com/rahulgadiya" // From super.js
    },

    // ===== PROJECTS =====
    // Combines projects from all files, ensuring unique IDs where possible.
    projects: [
        {
            id: "terminal-portfolio",
            title: "Terminal Portfolio Website",
            description: "A retro-style portfolio website with terminal interface and matrix background effects", // More detailed description
            technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"], // Added Canvas API
            status: "Completed",
            category: "Web Development", // Added category
            date: "2024-01",
            links: {
                demo: "https://rahulgadiya.com/terminal-portfolio",
                github: "https://github.com/rahulgadiya/terminal-portfolio"
            },
            features: [
                "Terminal-style command interface",
                "Matrix rain background animation",
                "Autocomplete suggestions",
                "Responsive design"
            ]
        },
        {
            id: "business-platform",
            title: "Business Management Platform",
            description: "Full-stack business solution with analytics and reporting dashboard",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            status: "In Progress",
            category: "Full Stack",
            date: "2024-02",
            links: {
                demo: "https://rahulgadiya.com/business-demo",
                github: "https://github.com/rahulgadiya/business-platform"
            },
            features: [
                "User authentication and authorization",
                "Analytics dashboard",
                "Report generation",
                "Admin management system"
            ]
        },
        {
            id: "automation-suite",
            title: "Business Automation Suite",
            description: "Streamlining operations through automated workflows for enhanced productivity",
            technologies: ["Python", "Django", "PostgreSQL", "Redis"],
            status: "Completed",
            category: "Automation",
            date: "2023-12",
            links: {
                demo: "https://rahulgadiya.com/automation",
                github: "https://github.com/rahulgadiya/automation-suite"
            },
            features: [
                "Automated data processing",
                "Workflow scheduling",
                "Integration with third-party APIs",
                "Customizable reporting"
            ]
        }
    ],

    // ===== SKILLS =====
    // Consolidated from various sections, with added TypeScript and Tailwind CSS
    skills: {
        "Programming Languages": ["JavaScript", "Python", "TypeScript", "Java", "PHP"],
        "Frontend Technologies": ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
        "Backend Technologies": ["Node.js", "Express", "Django", "MongoDB", "PostgreSQL"],
        "Tools & DevOps": ["Git", "Docker", "AWS", "Linux", "Jenkins"]
    },

    // ===== CERTIFICATES =====
    // New section based on added data
    certificates: [
        {
            id: "blc-2023",
            title: "Business Leadership Certificate",
            issuer: "Business Academy",
            date: "2023-11",
            validUntil: "2026-11",
            link: "https://businessacademy.com/leadership"
        },
        {
            id: "aws-dev",
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2023-08",
            validUntil: "2026-08",
            link: "https://aws.amazon.com/certification/"
        }
    ],

    // ===== FILE SYSTEM SIMULATION =====
    // Provides content for `cat` command, enhanced with more detailed info
    files: {
        "about.txt": `About Rahul Gadiya
==================

I'm a passionate CEO and Developer with expertise in full-stack development
and business leadership. Based in Mumbai, I focus on creating innovative
solutions that drive business growth.

Key Areas:
- Full-stack web development
- Business automation
- Team leadership
- Product strategy

I believe in combining technical excellence with business acumen to create
meaningful impact in the digital world.`,

        "resume.txt": `RAHUL GADIYA - CEO & Developer
==============================

Contact Information:
- Email: rahulajain98@outlook.com
- Phone: +91 7208866230
- Location: Mumbai, MH
- Website: https://rahulgadiya.com
- GitHub: https://github.com/rahulgadiya
- LinkedIn: https://linkedin.com/in/rahulgadiya

Professional Summary:
Dynamic CEO and Developer with extensive experience in full-stack development,
business leadership, and digital innovation. Proven track record of building
scalable solutions and leading high-performing teams.

Technical Skills:
- Languages: JavaScript, Python, TypeScript, Java
- Frontend: React, Vue.js, HTML5, CSS3
- Backend: Node.js, Express, Django, MongoDB
- Tools: Git, Docker, AWS, Linux

Current Projects:
- Terminal Portfolio Website (Completed)
- Business Management Platform (In Progress)
- Automation Suite (Completed)`,

        "projects.txt": `CURRENT PROJECTS
================

1. Terminal Portfolio Website
   Status: Completed (Jan 2024)
   Tech: HTML5, CSS3, JavaScript, Canvas API
   Description: Retro-style portfolio with terminal interface
   Links: Demo: https://rahulgadiya.com/terminal-portfolio, Code: https://github.com/rahulgadiya/terminal-portfolio

2. Business Management Platform
   Status: In Progress (Feb 2024)
   Tech: React, Node.js, MongoDB, Express
   Description: Analytics dashboard and business tools
   Links: Demo: https://rahulgadiya.com/business-demo, Code: https://github.com/rahulgadiya/business-platform

3. Business Automation Suite
   Status: Completed (Dec 2023)
   Tech: Python, Django, PostgreSQL, Redis
   Description: Automated workflow solutions
   Links: Demo: https://rahulgadiya.com/automation, Code: https://github.com/rahulgadiya/automation-suite`,

        "contact.txt": `CONTACT INFORMATION
==================

Primary Contact:
Email: rahulajain98@outlook.com
Phone: +91 7208866230

Location:
Mumbai, Maharashtra, India

Online Presence:
Website: https://rahulgadiya.com
GitHub: https://github.com/rahulgadiya
LinkedIn: https://linkedin.com/in/rahulgadiya
Twitter: https://twitter.com/rahulgadiya

Business Hours:
Monday - Friday: 9:00 AM - 6:00 PM IST
Response time: Within 24 hours

Available for:
- Business collaborations
- Technical consulting
- Project partnerships
- Speaking engagements`,

        "skills.txt": `TECHNICAL SKILLS
================

Programming Languages:
- JavaScript (Expert)
- Python (Expert)
- TypeScript (Advanced)
- Java (Intermediate)
- PHP (Intermediate)

Frontend Technologies:
- React (Expert)
- Vue.js (Advanced)
- HTML5 (Expert)
- CSS3 (Expert)
- Tailwind CSS (Advanced)

Backend Technologies:
- Node.js (Expert)
- Express (Expert)
- Django (Advanced)
- MongoDB (Advanced)
- PostgreSQL (Advanced)

Tools & DevOps:
- Git (Expert)
- Docker (Advanced)
- AWS (Advanced)
- Linux (Advanced)
- Jenkins (Intermediate)

Business Skills:
- Team Leadership
- Product Strategy
- Business Development
- Project Management`,

        "certificates.txt": `CERTIFICATIONS
==============

1. Business Leadership Certificate
   Issuer: Business Academy
   Date: Nov 2023 (Valid until Nov 2026)
   Verify: https://businessacademy.com/leadership

2. AWS Certified Developer
   Issuer: Amazon Web Services
   Date: Aug 2023 (Valid until Aug 2026)
   Verify: https://aws.amazon.com/certification/`
    }
};

// ===== ASCII ART =====
const asciiArt = {
    welcome: `
╔══════════════════════════════════════════════════════════╗
║                    WELCOME TO RAHUL GADIYA'S CLI         ║
╚══════════════════════════════════════════════════════════╝
    
    ██████╗  █████╗ ██╗  ██╗██╗   ██╗██╗     
    ██╔══██╗██╔══██╗██║  ██║██║   ██║██║     
    ██████╔╝███████║███████║██║   ██║██║     
    ██╔══██╗██╔══██║██╔══██║██║   ██║██║     
    ██║  ██║██║  ██║██║  ██║╚██████╔╝███████╗
    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
`
};

// ===== TERMINAL CLASS =====
class TerminalPortfolio {
	constructor() {
		this.searchInput = document.getElementById('searchInput');
		this.outputContainer = document.getElementById('outputContainer');
		this.themeToggle = document.querySelector('.theme-toggle');
		this.commandHistory = [];
		this.historyIndex = -1;
		this.currentPath = '/home/rahul/';
		this.init();
	}

	init() {
		this.setupEventListeners();
		this.applyTheme(this.getSavedTheme() || 'dark');
		this.showWelcome();
		this.focusInput();
	}

	setupEventListeners() {
		this.searchInput.addEventListener('keydown', (e) => this.handleKeyDown(e));
		
		if (this.themeToggle) {
			this.themeToggle.addEventListener('click', () => this.toggleTheme());
		}
		
		document.addEventListener('click', (e) => {
			if (!e.target.closest('.search-container')) {
				this.focusInput();
			}
		});
	}

	handleKeyDown(e) {
		switch (e.key) {
			case 'Enter':
				e.preventDefault();
				this.executeCommand(this.searchInput.value.trim());
				break;
			case 'ArrowUp':
				e.preventDefault();
				this.navigateHistory('up');
				break;
			case 'ArrowDown':
				e.preventDefault();
				this.navigateHistory('down');
				break;
			case 'Tab':
				e.preventDefault();
				this.autoComplete();
				break;
			case 'l':
				if (e.ctrlKey) {
					e.preventDefault();
					this.clearScreen();
				}
				break;
		}
	}

	executeCommand(command) {
		if (!command) return;

		this.addToHistory(command);
		this.displayCommand(command);

		const [cmd, ...args] = command.split(' ');
		this.processCommand(cmd.toLowerCase(), args);

		this.clearInput();
	}

	processCommand(cmd, args) {
		const commands = {
			'help':     () => this.showHelp(),
			'about':    () => this.showAbout(),
			'projects': () => this.showProjects(),
			'skills':   () => this.showSkills(),
			'contact':  () => this.showContact(),
			'ls':       () => this.listFiles(),
			'cat':      () => this.displayFile(args[0]),
			'clear':    () => this.clearScreen(),
			'theme':    () => this.toggleTheme(),
			'whoami':   () => this.showWhoami()
		};

		if (commands[cmd]) {
			commands[cmd]();
		} else {
			this.showError(`Command '${cmd}' not found. Type 'help' for available commands.`);
		}
	}

	// ===== COMMAND IMPLEMENTATIONS =====
	showHelp() {
		const helpText = `
            <div class="help-section">
                <h3>Available Commands:</h3>
                <div class="command-list">
                    <div class="command-item"><span class="cmd">help</span> - Show this help message</div>
                    <div class="command-item"><span class="cmd">about</span> - Show about information</div>
                    <div class="command-item"><span class="cmd">projects</span> - Display my projects</div>
                    <div class="command-item"><span class="cmd">skills</span> - Show technical skills</div>
                    <div class="command-item"><span class="cmd">contact</span> - Display contact information</div>
                    <div class="command-item"><span class="cmd">ls</span> - List available files</div>
                    <div class="command-item"><span class="cmd">cat [file]</span> - Display file contents</div>
                    <div class="command-item"><span class="cmd">clear</span> - Clear terminal screen</div>
                    <div class="command-item"><span class="cmd">theme</span> - Toggle light/dark theme</div>
                    <div class="command-item"><span class="cmd">whoami</span> - Display user information</div>
                </div>
                <p><strong>Tips:</strong></p>
                <ul>
                    <li>Use arrow keys (↑↓) to navigate command history</li>
                    <li>Use Tab for auto-completion</li>
                    <li>Use Ctrl+L to clear screen</li>
                    <li>Try '<span class="cmd">cat resume.txt</span>' or '<span class="cmd">cat about.txt</span>' for detailed info</li>
                </ul>
            </div>
        `;
		this.writeToTerminal(helpText);
	}

	showAbout() {
		const aboutData = portfolioData.files['about.txt'];
		this.writeToTerminal(`<pre class="file-content">${aboutData}</pre>`);
	}

	showProjects() {
		let projectsHtml = '<div class="projects-section"><h3>My Projects</h3>';
		
		portfolioData.projects.forEach(project => {
			projectsHtml += `
                <div class="project-item">
                    <h4>${project.title} <span class="status ${project.status.toLowerCase().replace(' ', '-')}">[${project.status}]</span></h4>
                    <p>${project.description}</p>
                    <p><strong>Tech:</strong> ${project.technologies.join(', ')}</p>
                    <p><strong>Date:</strong> ${project.date}</p>
                    ${project.links.demo ? `<p><strong>Demo:</strong> <a href="${project.links.demo}" target="_blank">${project.links.demo}</a></p>` : ''}
                    ${project.links.github ? `<p><strong>Code:</strong> <a href="${project.links.github}" target="_blank">${project.links.github}</a></p>` : ''}
                </div>
            `;
		});
		
		projectsHtml += '</div>';
		this.writeToTerminal(projectsHtml);
	}

	showSkills() {
		let skillsHtml = '<div class="skills-section"><h3>Technical Skills</h3>';
		
		for (const [category, skills] of Object.entries(portfolioData.skills)) {
			skillsHtml += `
                <div class="skill-category">
                    <h4>${category}:</h4>
                    <p>${skills.join(', ')}</p>
                </div>
            `;
		}
		
		skillsHtml += '</div>';
		this.writeToTerminal(skillsHtml);
	}

	showContact() {
		const contactData = portfolioData.files['contact.txt'];
		this.writeToTerminal(`<pre class="file-content">${contactData}</pre>`);
	}

	listFiles() {
		const files = Object.keys(portfolioData.files);
		let fileList = '<div class="file-list"><h3>Available Files:</h3>';
		
		files.forEach(file => {
			fileList += `<div class="file-item">${file}</div>`;
		});
		
		fileList += '<p class="file-hint">Use "cat [filename]" to view file contents</p></div>';
		this.writeToTerminal(fileList);
	}

	displayFile(filename) {
		if (!filename) {
			this.showError('Usage: cat [filename]. Use "ls" to see available files.');
			return;
		}

		const fileContent = portfolioData.files[filename];
		if (fileContent) {
			this.writeToTerminal(`<pre class="file-content">${fileContent}</pre>`);
		} else {
			this.showError(`File '${filename}' not found. Use "ls" to see available files.`);
		}
	}

	showWhoami() {
		const personal = portfolioData.personal;
		const whoamiText = `
            <div class="whoami-section">
                <h3>${personal.name}</h3>
                <p><strong>Title:</strong> ${personal.title}</p>
                <p><strong>Location:</strong> ${personal.location}</p>
                <p><strong>Email:</strong> ${personal.email}</p>
                <p><strong>Website:</strong> <a href="${personal.website}" target="_blank">${personal.website}</a></p>
            </div>
        `;
		this.writeToTerminal(whoamiText);
	}

	showWelcome() {
		const welcomeText = `
            <div class="welcome-section">
                <pre class="ascii-art">${asciiArt.welcome}</pre>
                <p>Welcome to my interactive terminal portfolio!</p>
                <p>Type <span class="cmd">help</span> to see available commands.</p>
            </div>
        `;
		this.writeToTerminal(welcomeText);
	}

	// ===== UTILITY METHODS =====
	clearScreen() {
		this.outputContainer.innerHTML = '';
	}

	clearInput() {
		this.searchInput.value = '';
	}

	focusInput() {
		this.searchInput.focus();
	}

	addToHistory(command) {
		this.commandHistory.push(command);
		this.historyIndex = this.commandHistory.length;
	}

	navigateHistory(direction) {
		if (direction === 'up' && this.historyIndex > 0) {
			this.historyIndex--;
			this.searchInput.value = this.commandHistory[this.historyIndex];
		} else if (direction === 'down' && this.historyIndex < this.commandHistory.length - 1) {
			this.historyIndex++;
			this.searchInput.value = this.commandHistory[this.historyIndex];
		} else if (direction === 'down' && this.historyIndex === this.commandHistory.length - 1) {
			this.historyIndex = this.commandHistory.length;
			this.searchInput.value = '';
		}
	}

	autoComplete() {
		const input = this.searchInput.value.toLowerCase();
		const commands = ['help', 'about', 'projects', 'skills', 'contact', 'ls', 'cat', 'clear', 'theme', 'whoami'];
		const files = Object.keys(portfolioData.files);
		
		const allOptions = [...commands, ...files];
		const matches = allOptions.filter(option => option.startsWith(input));
		
		if (matches.length === 1) {
			this.searchInput.value = matches[0];
		}
	}

	displayCommand(command) {
		const commandElement = document.createElement('div');
		commandElement.className = 'command-line';
		commandElement.innerHTML = `<span class="prompt">${this.currentPath}$</span> ${command}`;
		this.outputContainer.appendChild(commandElement);
		this.scrollToBottom();
	}

	writeToTerminal(content) {
		const outputElement = document.createElement('div');
		outputElement.className = 'command-output';
		outputElement.innerHTML = content;
		this.outputContainer.appendChild(outputElement);
		this.scrollToBottom();
	}

	showError(message) {
		this.writeToTerminal(`<div class="error-message">Error: ${message}</div>`);
	}

	scrollToBottom() {
		this.outputContainer.scrollTop = this.outputContainer.scrollHeight;
	}

	// ===== THEME METHODS =====
	toggleTheme() {
		const currentTheme = document.body.getAttribute('data-theme');
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';
		this.applyTheme(newTheme);
		this.saveTheme(newTheme);
		this.writeToTerminal(`<div class="theme-message">Theme switched to ${newTheme} mode</div>`);
	}

	applyTheme(theme) {
		document.body.setAttribute('data-theme', theme);
	}

	saveTheme(theme) {
		// Note: Using a simple variable instead of localStorage for compatibility
		this.currentTheme = theme;
	}

	getSavedTheme() {
		return this.currentTheme || 'dark';
	}
}

// ===== INITIALIZE TERMINAL =====
document.addEventListener('DOMContentLoaded', () => {
    new TerminalPortfolio();
});
