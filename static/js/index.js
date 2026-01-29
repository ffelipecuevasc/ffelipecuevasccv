document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // 1. Lógica del Modo Oscuro (Persistente)
    // =========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Función para aplicar el tema visualmente
    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    }

    // Evento al hacer click en el botón del Footer
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Alternar clase
            htmlElement.classList.toggle('dark');

            // Guardar preferencia en memoria del navegador
            if (htmlElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // =========================================
    // 2. Lógica del Menú Móvil (Navbar)
    // =========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // =========================================
    // 3. Año Dinámico (Opcional, si tienes el ID en el footer)
    // =========================================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});