// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Service details modal simulation
function showServiceDetails(service) {
    const details = {
        cloud: "Cloud Migration includes assessment, planning, migration strategy, and post-migration optimization with focus on security and scalability.",
        devops: "DevOps Automation covers CI/CD setup, infrastructure automation, deployment strategies, and monitoring implementation.",
        monitoring: "Monitoring solutions include comprehensive metrics collection, intelligent alerting, performance dashboards, and log management.",
        security: "Security services encompass vulnerability scanning, compliance auditing, security automation, and threat detection."
    };
    
    alert(`Service Details:\n\n${details[service]}`);
}

// Animated counters
function animateCounters() {
    const counters = [
        { id: 'projectCount', target: 150, suffix: '+' },
        { id: 'uptimeCount', target: 99.9, suffix: '%' },
        { id: 'clientCount', target: 50, suffix: '+' },
        { id: 'deploymentCount', target: 1000, suffix: '+' }
    ];

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        let current = 0;
        const increment = counter.target / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= counter.target) {
                current = counter.target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + counter.suffix;
        }, 20);
    });
}

// Demo terminal simulator
function runCommand(command) {
    const output = document.getElementById('demoOutput');
    const timestamp = new Date().toLocaleTimeString();
    
    const commands = {
        deploy: `[${timestamp}] ✅ Initializing deployment pipeline...
[${timestamp}] ⚡ Building Docker image from Dockerfile
[${timestamp}] 🔄 Pushing image to container registry
[${timestamp}] ☸️  Deploying to Kubernetes cluster
[${timestamp}] 🔍 Running health checks
[${timestamp}] ✅ Deployment completed successfully - Application is live!`,
        
        scale: `[${timestamp}] 📈 Analyzing current resource usage
[${timestamp}] 🎯 Scaling service replicas from 3 to 5
[${timestamp}] ⚖️  Updating load balancer configuration
[${timestamp}] 🔄 Distributing traffic across new instances
[${timestamp}] ✅ Auto-scaling configured - Service scaled successfully`,
        
        monitor: `[${timestamp}] 📊 Collecting system metrics...
[${timestamp}] 🔋 CPU Usage: 45% | Memory: 62% | Disk: 78%
[${timestamp}] 🌐 Response Time: 120ms | Throughput: 1.2k req/sec
[${timestamp}] ⚡ Network I/O: 50MB/s | Active Connections: 234
[${timestamp}] ✅ System Status: HEALTHY - All services operational`,
        
        rollback: `[${timestamp}] ⏪ Detecting previous stable version
[${timestamp}] 🔄 Initiating rollback to version v1.2.3
[${timestamp}] 🛑 Stopping current deployment
[${timestamp}] ⚡ Restoring previous container images
[${timestamp}] 🔍 Verifying rollback integrity
[${timestamp}] ✅ Rollback completed successfully - Service restored`
    };
    
    output.innerHTML += '\n\n' + commands[command];
    output.scrollTop = output.scrollHeight;
}

function clearOutput() {
    document.getElementById('demoOutput').innerHTML = 'Welcome to CloudOps Hub Demo Terminal\nType commands above to simulate DevOps operations...';
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(11, 13, 18, 0.98)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(11, 13, 18, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Initialize animations when page loads
window.addEventListener('load', function() {
    setTimeout(animateCounters, 1000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all service cards and tool items
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const toolItems = document.querySelectorAll('.tool-item');
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
    
    toolItems.forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });
});

// Add some professional interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add typing effect to hero section
    const heroText = document.querySelector('.hero h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        heroText.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Add subtle animation to stats when they're visible
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateCounters, 500);
                    statsObserver.unobserve(entry.target);
                }
            });
        });
        
        statsObserver.observe(statsSection);
    }
});