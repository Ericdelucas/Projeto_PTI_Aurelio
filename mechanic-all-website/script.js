// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Donation button functionality
document.querySelector('.donate-btn.pix').addEventListener('click', () => {
    alert('Funcionalidade PIX será implementada em breve!');
});

document.querySelector('.donate-btn.international').addEventListener('click', () => {
    alert('Funcionalidade PayPal será implementada em breve!');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg-elements');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Dynamic gear rotation based on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const gears = document.querySelectorAll('.gear');
    
    gears.forEach((gear, index) => {
        const speed = (index + 1) * 0.5;
        gear.style.transform = `rotate(${scrolled * speed}deg)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Social media links (placeholder functionality)
document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = card.classList[1];
        alert(`Link para ${platform} será adicionado em breve!`);
    });
});

// Member links functionality
document.querySelectorAll('.member-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Links dos membros serão adicionados quando as informações estiverem disponíveis!');
    });
});

// Add hover sound effect (optional)
function addHoverSounds() {
    const buttons = document.querySelectorAll('button, .cta-button, .nav-link, .social-card');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Placeholder for sound effect
            // You can add actual sound files later
        });
    });
}

// Initialize hover sounds
addHoverSounds();

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on load
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Add particle effect to hero section (simple version)
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            opacity: 0.5;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        hero.appendChild(particle);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    .particle {
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

