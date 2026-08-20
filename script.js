// ===================================
// INTERATIVIDADE E ANIMAÇÕES (script.js)
// ===================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Rolagem Suave para os Links da Navegação
    const navLinks = document.querySelectorAll('nav a, .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Verifica se o link é uma âncora interna (#)
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 2. Animação de Aparição dos Cards (Scroll Reveal)
    const cards = document.querySelectorAll('.card');

    // Configura os cards com opacidade zero e deslocamento inicial via JS
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const observerOptions = {
        threshold: 0.2 // Dispara quando 20% do card estiver visível
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        cardObserver.observe(card);
    });

    // 3. Feedback Interativo no Botão Principal
    const heroBtn = document.querySelector('.hero .btn');

    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            console.log('Usuário interessado em fazer parte do projeto!');
        });
    }
});