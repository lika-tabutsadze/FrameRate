document.addEventListener('DOMContentLoaded', () => {
    BurgerMenu();
});

// ============= BURGER ფუნქციონალი ========== 

function BurgerMenu() {
    const toggle = document.getElementById('burger--toggle');
    const navbar = document.getElementById('navbar');
    
    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
}