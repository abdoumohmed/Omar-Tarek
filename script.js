// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const contactForm = document.getElementById('contactForm');
const userInfo = document.getElementById('userInfo');
const caseList = document.getElementById('caseList');
const appointmentList = document.getElementById('appointmentList');

// Check if user is logged in
function checkLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        loginBtn.textContent = 'Dashboard';
        loginBtn.href = 'dashboard.html';
    } else {
        loginBtn.textContent = 'Login';
        loginBtn.href = 'login.html';
    }
}

// Login functionality
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Simple authentication (replace with proper authentication in a real application)
        if (email && password) {
            const user = { email };
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid email or password');
        }
    });
}

// Signup functionality
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Simple user registration (replace with proper registration in a real application)
        const user = { name, email };
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    });
}

// Contact form functionality
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form submission (replace with proper form handling in a real application)
        alert(`Thank you for your message, ${name}! We will get back to you soon.`);
        contactForm.reset();
    });
}

// Logout functionality
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    });
}

// Dashboard functionality
function loadDashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    userInfo.innerHTML = `<h2>Welcome, ${user.email}</h2>`;

    // Sample data (replace with real data in a production environment)
    const cases = [
        { id: 1, title: 'Corporate Merger' },
        { id: 2, title: 'Intellectual Property Dispute' },
    ];

    const appointments = [
        { id: 1, date: '2024-08-15', time: '10:00 AM' },
        { id: 2, date: '2024-08-20', time: '2:00 PM' },
    ];

    caseList.innerHTML = cases.map(c => `<li>Case #${c.id}: ${c.title}</li>`).join('');
    appointmentList.innerHTML = appointments.map(a => `<li>${a.date} at ${a.time}</li>`).join('');
}

// Initialize
checkLoggedIn();

if (window.location.pathname.includes('dashboard.html')) {
    loadDashboard();
}
const translations = {
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        login: "Login",
        // Add more translations as needed
    },
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        contact: "اتصل بنا",
        login: "تسجيل الدخول",
        // Add more translations as needed
    }
};
let currentLang = 'en';

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
}

function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLang][key];
    });
}

document.getElementById('languageToggle').addEventListener('click', switchLanguage);

const newElement = document.createElement('p');
newElement.setAttribute('data-translate', 'dynamicContent');
newElement.textContent = 'This is dynamic content';
document.body.appendChild(newElement);

function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLang][key];
    });
}
