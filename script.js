// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || mobileMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Secret Code Validation - Version compatible GitHub Pages
window.checkSecretCode = function() {
    console.log('Fonction checkSecretCode appelée');
    
    var codeInput = document.getElementById('secretCode');
    var secretSection = document.getElementById('secretSection');
    var errorMessage = document.getElementById('errorMessage');
    
    if (!codeInput || !secretSection || !errorMessage) {
        console.error('Éléments DOM non trouvés');
        return;
    }
    
    var enteredCode = codeInput.value.replace(/\s/g, ''); // Enlever espaces
    console.log('Code saisi:', enteredCode);
    
    if (enteredCode === '1234') {
        console.log('Code correct!');
        // Code correct
        secretSection.style.display = 'block';
        errorMessage.style.display = 'none';
        codeInput.disabled = true;
        
        // Scroll vers section secrète
        if (secretSection.scrollIntoView) {
            secretSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        // Animation de succès
        setTimeout(function() {
            secretSection.style.webkitAnimation = 'fadeInSecret 1s ease-in-out';
            secretSection.style.mozAnimation = 'fadeInSecret 1s ease-in-out';
            secretSection.style.animation = 'fadeInSecret 1s ease-in-out';
        }, 100);
        
        // Désactiver input et bouton
        var codeButton = document.querySelector('.code-button');
        if (codeButton) {
            codeButton.disabled = true;
            codeButton.textContent = 'Activé ✓';
            codeButton.style.background = '#4caf50';
            codeButton.style.webkitTransform = 'none';
            codeButton.style.mozTransform = 'none';
            codeButton.style.transform = 'none';
        }
        
    } else {
        console.log('Code incorrect');
        // Code incorrect
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Code incorrect! Essayez encore.';
        
        // Animation de secousse
        codeInput.style.webkitAnimation = 'shake 0.5s ease-in-out';
        codeInput.style.mozAnimation = 'shake 0.5s ease-in-out';
        codeInput.style.animation = 'shake 0.5s ease-in-out';
        
        setTimeout(function() {
            codeInput.style.webkitAnimation = '';
            codeInput.style.mozAnimation = '';
            codeInput.style.animation = '';
        }, 500);
        
        // Vider le champ
        codeInput.value = '';
        if (codeInput.focus) {
            codeInput.focus();
        }
    }
};

// Gestionnaire d'événements pour l'input de code
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé, initialisation...');
    
    var codeInput = document.getElementById('secretCode');
    if (codeInput) {
        console.log('Input trouvé, ajout des événements...');
        
        // Gestionnaire pour filtrer les non-chiffres
        codeInput.addEventListener('input', function(e) {
            // Supprimer tout ce qui n'est pas un chiffre
            this.value = this.value.replace(/[^0-9]/g, '');
            
            // Auto-validation à 4 chiffres
            if (this.value.length === 4) {
                setTimeout(function() {
                    window.checkSecretCode();
                }, 300);
            }
        });
        
        // Gestionnaire pour touche Entrée
        codeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                e.preventDefault();
                window.checkSecretCode();
            }
        });
        
        // Gestionnaire pour coller du texte
        codeInput.addEventListener('paste', function(e) {
            var self = this;
            setTimeout(function() {
                self.value = self.value.replace(/[^0-9]/g, '');
                if (self.value.length > 4) {
                    self.value = self.value.substring(0, 4);
                }
                if (self.value.length === 4) {
                    window.checkSecretCode();
                }
            }, 10);
        });
    } else {
        console.error('Input secretCode non trouvé!');
    }
    
    // Vérifier si tous les éléments sont présents
    var secretSection = document.getElementById('secretSection');
    var errorMessage = document.getElementById('errorMessage');
    
    if (!secretSection) console.error('secretSection non trouvé!');
    if (!errorMessage) console.error('errorMessage non trouvé!');
});

// Supprimer l'ancien code d'ajout de CSS shake
// Le CSS shake est maintenant directement dans styles.css

console.log('Script Spy4Rent chargé avec succès!');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Show/Hide Contact Form
function showContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm.style.display === 'none' || contactForm.style.display === '') {
        contactForm.style.display = 'block';
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add animation
        contactForm.style.opacity = '0';
        contactForm.style.transform = 'translateY(20px)';
        setTimeout(() => {
            contactForm.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            contactForm.style.opacity = '1';
            contactForm.style.transform = 'translateY(0)';
        }, 10);
    } else {
        contactForm.style.display = 'none';
    }
}

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const service = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !service) {
                showAlert('Please fill in all required fields.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                showAlert('Message sent successfully! We\'ll contact you within 24 hours.', 'success');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Hide form after successful submission
                setTimeout(() => {
                    contactForm.style.display = 'none';
                }, 2000);
            }, 1500);
        });
    }
});

// Alert function
function showAlert(message, type = 'info') {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#ff6b35'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 300px;
        font-size: 14px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    alert.textContent = message;
    
    document.body.appendChild(alert);
    
    // Animate in
    setTimeout(() => {
        alert.style.opacity = '1';
        alert.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(alert);
        }, 300);
    }, 5000);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(45, 45, 45, 0.95) 100%)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
        navbar.style.backdropFilter = 'none';
    }
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

// Observe service cards and agent cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card, .agent-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .pulse {
        animation: pulse 2s infinite;
    }
`;
document.head.appendChild(style);

// Add click effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button, .submit-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Service card hover effects with JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Image loading optimization
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmNmIzNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
            this.alt = 'Image not available';
        });
    });
});

// Typing effect for hero title
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
});

// Console easter egg
console.log(`
🕵️ Welcome to Spy4Rent - Professional Temporary Spy Agency 🕵️

    Looking for our source code? 
    Impressive detective work!
    
    This is a demonstration website showcasing:
    ✓ Mobile-responsive design
    ✓ Vanilla JavaScript interactions
    ✓ Modern CSS animations
    ✓ Professional spy-themed UI
    
    Built with ❤️ and vanilla web technologies
    
    Remember: This is a fictional agency for demo purposes only!
`);

// Add some fun interactions
let clickCount = 0;
document.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 10) {
        showAlert('🕵️ Secret Agent mode activated! Welcome to the inner circle.', 'success');
    }
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}