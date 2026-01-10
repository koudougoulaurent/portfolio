// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 102, 255, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 102, 255, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing Effect
const typingText = document.querySelector('.typing-text');
const roles = [
    'Développeur Full Stack',
    'Administrateur Réseau',
    'Technicien en Maintenance',
    'Développeur Web & Mobile'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

setTimeout(type, 1000);

// Smooth scroll for anchor links
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

// Intersection Observer for animations - Combined with new observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe elements for animation
document.querySelectorAll('.stat-card, .skill-category, .timeline-item, .education-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Projects data - will be populated with actual projects
const projects = [
    {
        title: "KBIS International Immobilière",
        description: "Application complète et intégrée de gestion immobilière développée pour KBIS International Immobilière, une entreprise Burkinabè. Système de gestion des propriétés, contrats, paiements, utilisateurs avec tableau de bord analytique et recherche intelligente.",
        images: ["images/projects/kbis-immobilier.png"],
        tags: ["Django", "Python", "PostgreSQL", "Bootstrap", "JavaScript"],
        github: "https://github.com/koudougoulaurent/appli_KBIS.git",
        demo: ""
    },
    {
        title: "AppScolaire - Gestion Scolaire",
        description: "Application web complète de gestion scolaire pour écoles primaires et maternelles. Gestion des élèves, enseignants, classes, notes, présences, frais scolaires et communications parents-école. Interface intuitive avec authentification sécurisée et tableaux de bord détaillés.",
        images: ["images/projects/appscolaire.png"],
        tags: ["React", "Express.js", "Node.js", "MongoDB", "JWT", "Material-UI"],
        github: "https://github.com/koudougoulaurent/gestionscolaire.git",
        demo: ""
    },
    {
        title: "WiFi Zone - Hotspot Mikrotik",
        description: "Système complet de gestion de tickets Wi-Fi pour hotspot Mikrotik. Solution d'envergure avec paiement automatisé via Orange Money et Moov Money, génération automatique de codes d'accès, tableau de bord administrateur avancé, gestion des profils et utilisateurs. Connexion sans interaction humaine pour une expérience utilisateur optimale.",
        images: [
            "images/projects/wifi-hotspot-paiement.png",
            "images/projects/wifi-hotspot-connexion.png",
            "images/projects/wifi-hotspot-confirmation.png",
            "images/projects/wifi-hotspot-admin-login.png",
            "images/projects/wifi-hotspot-dashboard.png",
            "images/projects/wifi-hotspot-profils.png",
            "images/projects/wifi-hotspot-utilisateurs.png",
            "images/projects/wifi-hotspot-paiements.png"
        ],
        tags: ["PHP", "Mikrotik API", "MySQL", "Orange Money API", "Bootstrap", "JavaScript"],
        github: "https://github.com/koudougoulaurent/soutenance.git",
        demo: ""
    }
];

// Function to load projects
function loadProjects() {
    console.log('=== DEBUT CHARGEMENT PROJETS ===');
    console.log('Nombre de projets:', projects.length);
    
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) {
        console.error('Projects grid not found');
        return;
    }
    
    console.log('projectsGrid trouvé:', projectsGrid);
    
    if (projects.length === 0) {
        console.warn('Aucun projet à charger');
        return;
    }
    
    // Vider complètement le conteneur
    projectsGrid.innerHTML = '';
    console.log('Conteneur vidé');
    
    projects.forEach((project, index) => {
        console.log(`Ajout du projet ${index + 1}:`, project.title);
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const hasMultipleImages = project.images.length > 1;
        const currentImageIndex = 0;
        
        projectCard.innerHTML = `
            <div class="project-image-container" data-current-index="0">
                <div class="project-image">
                    <img src="${project.images[0]}" alt="${project.title}" class="clickable-image project-img" title="Cliquer pour agrandir" onerror="this.src='https://via.placeholder.com/400x250/252525/0066ff?text=${encodeURIComponent(project.title)}'; console.error('Image non trouvée:', '${project.images[0]}')">
                    <div class="project-overlay">
                        ${project.github ? `<a href="${project.github}" target="_blank" title="Voir sur GitHub" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" target="_blank" title="Voir la démo" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i></a>` : ''}
                    </div>
                </div>
                ${hasMultipleImages ? `
                    <button class="carousel-btn carousel-prev" title="Image précédente">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="carousel-btn carousel-next" title="Image suivante">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <div class="carousel-indicators">
                        ${project.images.map((_, i) => `<span class="indicator ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
        console.log(`Projet ${index + 1} ajouté au DOM`);
        
        // Add click event to the project image
        const projectImage = projectCard.querySelector('.project-img');
        projectImage.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openLightbox(this.src, this.alt);
        });
        
        // Carousel functionality for multiple images
        if (hasMultipleImages) {
            const container = projectCard.querySelector('.project-image-container');
            const img = projectCard.querySelector('.project-img');
            const prevBtn = projectCard.querySelector('.carousel-prev');
            const nextBtn = projectCard.querySelector('.carousel-next');
            const indicators = projectCard.querySelectorAll('.indicator');
            
            const updateImage = (newIndex) => {
                const currentIndex = parseInt(container.dataset.currentIndex);
                if (newIndex < 0) newIndex = project.images.length - 1;
                if (newIndex >= project.images.length) newIndex = 0;
                
                container.dataset.currentIndex = newIndex;
                img.src = project.images[newIndex];
                
                indicators.forEach((ind, i) => {
                    ind.classList.toggle('active', i === newIndex);
                });
            };
            
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const currentIndex = parseInt(container.dataset.currentIndex);
                updateImage(currentIndex - 1);
            });
            
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const currentIndex = parseInt(container.dataset.currentIndex);
                updateImage(currentIndex + 1);
            });
            
            indicators.forEach((indicator, i) => {
                indicator.addEventListener('click', (e) => {
                    e.stopPropagation();
                    updateImage(i);
                });
            });
        }
        
        // Animation temporairement désactivée pour test
        /*
        setTimeout(() => {
            projectCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            projectCard.style.opacity = '1';
            projectCard.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
        */
    });
    
    console.log(`=== ${projects.length} projets chargés avec succès ===`);
}

// Load projects immediately and on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProjects);
} else {
    loadProjects();
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add smooth reveal animation for sections
const revealSections = () => {
    const reveals = document.querySelectorAll('.about, .skills, .experience, .projects, .contact');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealSections);

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const h3 = entry.target.querySelector('h3');
            const target = parseInt(h3.textContent);
            h3.textContent = '0+';
            animateCounter(h3, target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// Page Loader - Fixed
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 800);
    }
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Particles.js Configuration
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#0066ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#0066ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });
}

// Enhanced Intersection Observer with stagger effect
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('fade-in-up');
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.stat-card, .skill-category, .timeline-item, .education-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    staggerObserver.observe(el);
});

// Enhanced form validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Veuillez remplir tous les champs', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Veuillez entrer un email valide', 'error');
        return;
    }
    
    // Create mailto link
    const mailtoLink = `mailto:koudougoulaurent@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\\nEmail: ${email}\\n\\nMessage:\\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    showNotification('Message envoyé avec succès !', 'success');
    contactForm.reset();
});

// Email validation
function isValidEmail(email) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add current year to footer
const currentYear = new Date().getFullYear();
document.querySelectorAll('.footer-bottom p').forEach(p => {
    if (p.textContent.includes('©')) {
        p.textContent = p.textContent.replace('2026', currentYear);
    }
});

// Image Lightbox Functionality
const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

// Function to open lightbox
function openLightbox(imageSrc, caption) {
    lightbox.classList.add('active');
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = caption || '';
    document.body.style.overflow = 'hidden';
}

// Function to close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add click listener to profile image (static)
const profileImage = document.querySelector('.hero-image .clickable-image');
if (profileImage) {
    profileImage.addEventListener('click', function(e) {
        e.preventDefault();
        openLightbox(this.src, this.alt);
    });
}

// Close lightbox on close button click
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

// Close lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

console.log('Portfolio loaded successfully! 🚀');
console.log('Version améliorée avec animations et interactions avancées');
