// Efecto de desplazamiento suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');
    const menuItems = document.querySelectorAll('nav ul li a');
  
    // Mostrar/ocultar menú
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  
    // Cerrar menú al hacer clic en una opción
    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        navLinks.classList.remove('active');
      });
    });
  });