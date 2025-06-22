// Função para redirecionar para o formulário de interesse
function redirectToForm() {
    // Adiciona uma pequena animação antes do redirecionamento
    const button = document.querySelector('.atelier-cta-button');
    
    if (button) {
        // Animação de clique
        button.style.transform = 'scale(0.95)';
        button.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            
            // Redireciona para o formulário após a animação
            setTimeout(() => {
                window.open('./formulario.html', '_blank');
            }, 100);
        }, 100);
    } else {
        // Fallback direto se o botão não for encontrado
        window.open('./formulario.html', '_blank');
    }
}

// Adiciona efeitos de hover e interatividade
document.addEventListener('DOMContentLoaded', function() {
    // Efeito parallax suave no scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.atelier-header');
        const speed = scrolled * 0.3;
        
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Animação de entrada para os cards quando entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa os cards de showcase
    const craftShowcases = document.querySelectorAll('.craft-showcase');
    craftShowcases.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Observa os itens de destaque
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.3}s, transform 0.6s ease ${index * 0.3}s`;
        observer.observe(item);
    });
    
    // Efeito de brilho no botão CTA
    const ctaButton = document.querySelector('.atelier-cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #d4a5a5, #c17767)';
            this.style.boxShadow = '0 15px 45px rgba(139, 111, 71, 0.3)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, var(--terracotta), var(--dusty-rose))';
            this.style.boxShadow = 'var(--shadow-medium)';
        });
    }
    
    // Adiciona efeito de hover nas imagens
    const craftImages = document.querySelectorAll('.craft-image');
    craftImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Efeito de flutuação no logo
    const mainLogo = document.querySelector('.main-logo');
    if (mainLogo) {
        let isHovering = false;
        
        mainLogo.addEventListener('mouseenter', function() {
            isHovering = true;
            this.style.animation = 'logoFloat 2s ease-in-out infinite';
        });
        
        mainLogo.addEventListener('mouseleave', function() {
            isHovering = false;
            this.style.animation = 'none';
        });
    }
    
    // Adiciona CSS para animações personalizadas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes logoFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        
        .craft-image {
            transition: transform 0.3s ease;
        }
        
        .main-logo {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Função para smooth scroll (caso seja necessário no futuro)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Prevenção de clique duplo no botão
let isRedirecting = false;

document.addEventListener('click', function(e) {
    if (e.target.closest('.atelier-cta-button') && !isRedirecting) {
        isRedirecting = true;
        setTimeout(() => {
            isRedirecting = false;
        }, 2000);
    }
});

// Adiciona efeito de partículas flutuantes (opcional)
function createFloatingParticles() {
    const container = document.querySelector('.atelier-container');
    if (!container) return;
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--dusty-rose);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.3;
            animation: floatParticle ${5 + Math.random() * 5}s linear infinite;
            left: ${Math.random() * 100}vw;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        document.body.appendChild(particle);
        
        // Remove a partícula após a animação
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 10000);
    }
}

// Adiciona CSS para partículas flutuantes
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Inicia as partículas flutuantes a cada 3 segundos
setInterval(createFloatingParticles, 3000);



