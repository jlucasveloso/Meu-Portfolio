// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito simples de fade-in para os projetos
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.bg-gray-800');
    projects.forEach(project => {
        project.style.opacity = '0';
        project.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            project.style.opacity = '1';
        }, 200);
    });
});
