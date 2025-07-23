// Simplified main.js for beginners
// This handles both login and registration forms

// ==========================================
// CONFIGURATION
// ==========================================
const API_BASE_URL = 'http://127.0.0.1:8000/api/auth';

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Show success or error messages to user
function showMessage(message, type = 'error') {
    // Remove any existing message first
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        background-color: ${type === 'success' ? '#28a745' : '#dc3545'};
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Check if email format is valid
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Check if password meets requirements
function isValidPassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
}

// Show loading state on buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.originalText = button.textContent;
        button.textContent = 'Loading...';
        button.style.opacity = '0.6';
    } else {
        button.disabled = false;
        button.textContent = button.originalText;
        button.style.opacity = '1';
    }
}

// ==========================================
// API COMMUNICATION
// ==========================================

// Make API calls to backend
async function callAPI(endpoint, method = 'GET', data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Add authentication token if available
    const token = localStorage.getItem('access_token');
    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    // Add data to request if provided
    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        const result = await response.json();
        
        // Handle errors from server
        if (!response.ok) {
            let errorMessage = 'Something went wrong';
            
            // Handle different error formats
            if (result.non_field_errors) {
                errorMessage = result.non_field_errors[0];
            } else if (result.message) {
                errorMessage = result.message;
            } else {
                // Collect all field errors
                const errors = [];
                for (const field in result) {
                    if (Array.isArray(result[field])) {
                        errors.push(result[field][0]);
                    }
                }
                if (errors.length > 0) {
                    errorMessage = errors.join(', ');
                }
            }
            
            throw new Error(errorMessage);
        }
        
        return result;
    } catch (error) {
        // Handle network errors
        if (error.message === 'Failed to fetch') {
            throw new Error('Cannot connect to server. Please check your internet connection.');
        }
        throw error;
    }
}

// ==========================================
// LOGIN FUNCTIONALITY
// ==========================================

function setupLoginForm() {
    // Get form elements
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const buttons = document.querySelectorAll('button');
    
    if (!form || !usernameInput || !passwordInput) return;
    
    const signInButton = buttons[0];
    const signUpButton = buttons[1];

    // Handle login form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = usernameInput.value.trim();
        const password = passwordInput.value;

        // Basic validation
        if (!email || !password) {
            showMessage('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address');
            return;
        }

        setButtonLoading(signInButton, true);

        try {
            const result = await callAPI('/login/', 'POST', {
                email: email,
                password: password
            });

            showMessage('Login successful!', 'success');
            
            // Save user data
            localStorage.setItem('access_token', result.tokens.access);
            localStorage.setItem('refresh_token', result.tokens.refresh);
            localStorage.setItem('user_data', JSON.stringify(result.user));

            // Redirect to dashboard
            setTimeout(() => {
                window.location.href = '/dashboard.html';
            }, 1500);

        } catch (error) {
            showMessage(error.message);
        } finally {
            setButtonLoading(signInButton, false);
        }
    });

    // Handle sign up button click
    if (signUpButton) {
        signUpButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'signup.html';
        });
    }
}

// ==========================================
// REGISTRATION FUNCTIONALITY
// ==========================================

function setupRegistrationForm() {
    // Get form elements
    const form = document.querySelector('form');
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastname');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('psw');
    const confirmPasswordInput = document.getElementById('psw-repeat');
    const signUpButton = document.querySelector('button');
    
    if (!form || !firstNameInput || !lastNameInput || !usernameInput || !passwordInput || !confirmPasswordInput) return;

    // Handle registration form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = usernameInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            showMessage('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address');
            return;
        }

        if (!isValidPassword(password)) {
            showMessage('Password must be at least 8 characters with uppercase, lowercase, and number');
            return;
        }

        if (password !== confirmPassword) {
            showMessage('Passwords do not match');
            return;
        }

        setButtonLoading(signUpButton, true);

        try {
            const result = await callAPI('/register/', 'POST', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            });

            showMessage('Registration successful! Please login.', 'success');
            
            // Redirect to login page
            setTimeout(() => {
                window.location.href = '/login.html';
            }, 2000);

        } catch (error) {
            showMessage(error.message);
        } finally {
            setButtonLoading(signUpButton, false);
        }
    });
}

// ==========================================
// INITIALIZATION
// ==========================================

// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on and setup accordingly
    if (window.location.pathname.includes('login.html') || window.location.pathname === '/') {
        setupLoginForm();
    } else if (window.location.pathname.includes('signup.html')) {
        setupRegistrationForm();
    }
});

// Add CSS animation for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
