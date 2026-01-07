// Fonctions d'obfuscation globales
var _0x1a2b = function(n) { return String.fromCharCode(n + 48); };
var _0x3c4d = [4, 8, 2];
var _0x5e6f = function() { return _0x3c4d.map(_0x1a2b).join(''); };

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
    
    var digit1 = document.getElementById('digit1');
    var digit2 = document.getElementById('digit2');
    var digit3 = document.getElementById('digit3');
    var secretSection = document.getElementById('secretSection');
    var errorMessage = document.getElementById('errorMessage');
    
    if (!digit1 || !digit2 || !digit3 || !secretSection || !errorMessage) {
        console.error('Éléments DOM non trouvés');
        return;
    }
    
    var enteredCode = digit1.value + digit2.value + digit3.value;
    console.log('Code saisi:', enteredCode);
    
    // Validation obfusquée - multiples méthodes
    var method1 = String.fromCharCode(52, 56, 50);
    var method2 = String((240 * 2) + 2);
    var method3 = [4, 8, 2].join('');
    var method4 = _0x5e6f();
    var method5 = atob('NDgy');  // base64 de "482"
    
    console.log('Methods debug:', {method1, method2, method3, method4, method5});
    console.log('Entered code type:', typeof enteredCode, 'Value:', enteredCode);
    
    var isValid = [method1, method2, method3, method4, method5].includes(enteredCode);
    console.log('Is valid:', isValid);
    
    if (isValid) {
        console.log('Access granted!');
        
        // Lancer l'effet de confetti
        console.log('Lancement du confetti...');
        launchConfetti();
        
        // Code correct
        secretSection.style.display = 'block';
        errorMessage.style.display = 'none';
        digit1.disabled = true;
        digit2.disabled = true;
        digit3.disabled = true;
        
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
        [digit1, digit2, digit3].forEach(function(input) {
            input.style.webkitAnimation = 'shake 0.5s ease-in-out';
            input.style.mozAnimation = 'shake 0.5s ease-in-out';
            input.style.animation = 'shake 0.5s ease-in-out';
        });
        
        setTimeout(function() {
            [digit1, digit2, digit3].forEach(function(input) {
                input.style.webkitAnimation = '';
                input.style.mozAnimation = '';
                input.style.animation = '';
            });
        }, 500);
        
        // Vider les champs
        digit1.value = '';
        digit2.value = '';
        digit3.value = '';
        if (digit1.focus) {
            digit1.focus();
        }
    }
};

// Navigation automatique entre les champs de saisie
document.addEventListener('DOMContentLoaded', function() {
    const digit1 = document.getElementById('digit1');
    const digit2 = document.getElementById('digit2');
    const digit3 = document.getElementById('digit3');
    
    if (digit1 && digit2 && digit3) {
        // Navigation vers le champ suivant
        digit1.addEventListener('input', function() {
            if (this.value.length === 1) {
                digit2.focus();
            }
        });
        
        digit2.addEventListener('input', function() {
            if (this.value.length === 1) {
                digit3.focus();
            }
        });
        
        // Navigation avec backspace
        digit2.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0) {
                digit1.focus();
            }
        });
        
        digit3.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0) {
                digit2.focus();
            }
        });
        
        // Validation automatique quand les 3 champs sont remplis
        digit3.addEventListener('input', function() {
            if (digit1.value && digit2.value && digit3.value) {
                setTimeout(checkSecretCode, 200);
            }
        });
    }
});

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

// Typing effect removed - commented out
/*
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
*/

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

// Effet de confetti optimisé pour mobile
function launchConfetti() {
    console.log('LaunchConfetti appelé!');
    const colors = ['#32CD32', '#DC143C', '#DA70D6', '#ff6b35'];
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);
    console.log('Conteneur de confetti créé et ajouté au DOM');
    
    // Créer 90 confetti (nombre augmenté pour plus d'effet)
    for (let i = 0; i < 90; i++) {
        createConfetti(confettiContainer, colors);
    }
    console.log('90 confetti créés');
    
    // Nettoyer après 8 secondes
    setTimeout(() => {
        if (confettiContainer.parentNode) {
            confettiContainer.parentNode.removeChild(confettiContainer);
            console.log('Confetti nettoyé après 8 secondes');
        }
    }, 8000);
}

function createConfetti(container, colors) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Couleur aléatoire
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = color;
    
    // Position et timing aléatoires
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 4 + 's';
    confetti.style.animationDuration = (Math.random() * 6 + 4) + 's';
    
    // Forme aléatoire (carré ou rectangle)
    if (Math.random() > 0.5) {
        confetti.style.width = '8px';
        confetti.style.height = '8px';
    } else {
        confetti.style.width = '4px';
        confetti.style.height = '12px';
    }
    
    container.appendChild(confetti);
    
    // Rotation aléatoire
    confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
}