document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // 1. Lógica del Modo Oscuro (Dark Mode)
    // =========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    // Función para cambiar los iconos según el tema actual
    const updateIcons = (isDark) => {
        if (isDark) {
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        } else {
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
        }
    };

    // Verificar preferencia guardada o preferencia del sistema
    const userTheme = localStorage.getItem('color-theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Aplicar tema inicial
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateIcons(false);
    }

    // Event Listener para el botón de cambio de tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Alternar clase 'dark' en el elemento HTML
            document.documentElement.classList.toggle('dark');

            // Verificar si ahora es dark
            const isDark = document.documentElement.classList.contains('dark');

            // Guardar preferencia en localStorage
            localStorage.setItem('color-theme', isDark ? 'dark' : 'light');

            // Actualizar iconos
            updateIcons(isDark);
        });
    }

    // =========================================
    // 2. Menú Móvil (Hamburguesa)
    // =========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            // Alternar visibilidad (usando clases de Tailwind 'hidden' o personalizadas)
            mobileMenu.classList.toggle('hidden');

            // Opcional: Cambiar icono de hamburguesa a 'X' si tu HTML tiene esa estructura
            const iconOpen = mobileMenuBtn.querySelector('.icon-open');
            const iconClose = mobileMenuBtn.querySelector('.icon-close');

            if(iconOpen && iconClose) {
                iconOpen.classList.toggle('hidden');
                iconClose.classList.toggle('hidden');
            }
        });
    }

    // =========================================
    // 3. Animaciones al hacer Scroll (Fade In)
    // =========================================
    // Selecciona todos los elementos con la clase .fade-in-section definida en CSS
    const fadeElements = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // =========================================
    // 4. Año Dinámico en el Footer
    // =========================================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});