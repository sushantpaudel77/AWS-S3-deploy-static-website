// Mobile menu toggle
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
}

// Header scroll effect
function setupHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll <= 0) {
            header.classList.remove('header-scroll');
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            header.style.transform = 'translateY(0)';
            header.classList.add('header-scroll');
        }

        lastScroll = currentScroll;
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');

            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// Scroll to section helper function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Interactive Demo Functions
function setupInteractiveDemo() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.demo-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateDemoView(tab.textContent.trim());
        });
    });
}

function updateDemoView(tabName) {
    const output = document.querySelector('.output-content');
    let content = '';

    switch(tabName) {
        case 'Terminal':
            content = `user@cloudops:~$ Connected to CloudOps Hub Demo Environment\n\n`;
            content += `Type commands above to simulate DevOps operations...\n`;
            content += `Available commands: deploy, scale, monitor, rollback\n`;
            break;
        case 'Pipeline':
            content = `Pipeline Visualization:\n\n`;
            content += `[Build] → [Test] → [Deploy] → [Monitor]\n`;
            content += `Status: Ready\n`;
            content += `Last Run: ${new Date().toLocaleString()}\n`;
            content += `Next Run: ${new Date(Date.now() + 3600000).toLocaleTimeString()}\n`;
            break;
        case 'Monitoring':
            content = `System Monitoring Dashboard:\n\n`;
            content += `CPU Usage: ${Math.floor(Math.random() * 30) + 50}%\n`;
            content += `Memory Usage: ${Math.floor(Math.random() * 20) + 60}%\n`;
            content += `Network: ${Math.floor(Math.random() * 5) + 2} Mbps\n`;
            content += `Uptime: ${Math.floor(Math.random() * 20) + 90} days\n`;
            content += `Alerts: 0 active\n`;
            break;
    }

    output.textContent = content;
}

function runCommand(command) {
    const output = document.querySelector('.output-content');
    let response = '';
    const timestamp = new Date().toLocaleTimeString();

    switch(command) {
        case 'deploy':
            response = `[${timestamp}] Starting deployment...\n`;
            response += `[${timestamp}] Building container images\n`;
            response += `[${timestamp}] Pushing images to registry\n`;
            response += `[${timestamp}] Updating Kubernetes deployments\n`;
            response += `[${timestamp}] Deployment successful! ✅\n`;
            response += `[${timestamp}] New version v1.2.3 is now live\n`;
            break;
        case 'scale':
            const replicas = Math.floor(Math.random() * 5) + 2;
            response = `[${timestamp}] Scaling application...\n`;
            response += `[${timestamp}] Current replicas: 2\n`;
            response += `[${timestamp}] Scaling to ${replicas} replicas\n`;
            response += `[${timestamp}] Scaling deployment frontend\n`;
            response += `[${timestamp}] Scaling deployment backend\n`;
            response += `[${timestamp}] Scaling complete (${replicas} replicas) ⚖️\n`;
            break;
        case 'monitor':
            response = `[${timestamp}] Running health checks...\n`;
            response += `[${timestamp}] Checking cluster nodes: 3/3 healthy\n`;
            response += `[${timestamp}] Checking pods: 12/12 running\n`;
            response += `[${timestamp}] Checking services: all endpoints available\n`;
            response += `[${timestamp}] System health: EXCELLENT 🟢\n`;
            break;
        case 'rollback':
            response = `[${timestamp}] Initiating rollback...\n`;
            response += `[${timestamp}] Reverting to version v1.2.2\n`;
            response += `[${timestamp}] Scaling down current deployment\n`;
            response += `[${timestamp}] Deploying previous version\n`;
            response += `[${timestamp}] Rollback complete! 🔄\n`;
            break;
    }

    output.textContent += `\nuser@cloudops:~$ ${command}\n${response}`;
    output.scrollTop = output.scrollHeight;
}

function clearOutput() {
    const output = document.querySelector('.output-content');
    output.textContent = 'Welcome to CloudOps Hub Demo Terminal\nType commands above to simulate DevOps operations...';
}

// Stats counter animation
function animateStats() {
    const counters = [
        { element: 'projectCount', target: 247, duration: 2000 },
        { element: 'uptimeCount', target: 99.9, duration: 2500, isDecimal: true },
        { element: 'clientCount', target: 128, duration: 3000 },
        { element: 'deploymentCount', target: 42, duration: 1500 }
    ];

    counters.forEach(counter => {
        const element = document.getElementById(counter.element);
        const start = 0;
        const increment = counter.target / (counter.duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= counter.target) {
                clearInterval(timer);
                current = counter.target;
            }

            if (counter.isDecimal) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupHeaderScroll();
    setupSmoothScrolling();
    setupInteractiveDemo();
    animateStats();

    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-badge, .hero h1, .hero-subtitle, .hero-buttons, .hero-stats');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
