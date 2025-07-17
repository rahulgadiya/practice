// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '☀️ Light';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙 Dark';
    }
}

// Command execution functionality
function executeCommand(command) {
    const outputContainer = document.getElementById('outputContainer');
    const searchInput = document.getElementById('searchInput');
    
    // Clear input and add command to output
    searchInput.value = '';
    
    const outputLine = document.createElement('div');
    outputLine.className = 'output-line';
    
    outputLine.innerHTML = `
        <div class="command-line">$ ${command}</div>
        <div class="section">
            <h2>${command.charAt(0).toUpperCase() + command.slice(1)}</h2>
            <p>Command "${command}" executed successfully. This is where the ${command} content would appear.</p>
        </div>
    `;
    
    outputContainer.appendChild(outputLine);
    outputContainer.scrollTop = outputContainer.scrollHeight;
}

// Handle Enter key in search input
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const command = e.target.value.trim();
        if (command) {
            executeCommand(command);
        }
    }
});
