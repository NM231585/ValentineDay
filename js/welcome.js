// Script para la pantalla de bienvenida
document.addEventListener('DOMContentLoaded', function() {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const welcomeButton = document.getElementById('welcomeButton');
    
    // Prevenir que la animación typewriter inicie automáticamente
    window.animationStarted = false;
    
    welcomeButton.addEventListener('click', function() {
        // Agregar clase para animación de salida
        welcomeOverlay.classList.add('slide-up');
        
        // Después de la animación, remover el overlay y comenzar typewriter
        setTimeout(() => {
            welcomeOverlay.style.display = 'none';
            
            // Iniciar la animación typewriter
            if (typeof animateText === 'function') {
                animateText();
            }
        }, 1000); // Duración de la animación
    });
    
    // Efecto de hover en el botón
    welcomeButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    welcomeButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
