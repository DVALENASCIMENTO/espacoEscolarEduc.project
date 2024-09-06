// Função para alterar o conteúdo da seção "Metodologia de Ensino"
document.getElementById('change-content').addEventListener('click', function() {
    const content = document.getElementById('metodologia-content');
    
    if (content.innerHTML === 'Adotamos uma abordagem personalizada e interativa, usando tecnologia e avaliações diagnósticas para oferecer o melhor suporte aos nossos alunos.') {
        content.innerHTML = 'Acreditamos no desenvolvimento contínuo dos nossos alunos, oferecendo também suporte emocional e motivacional.';
    } else {
        content.innerHTML = 'Adotamos uma abordagem personalizada e interativa, usando tecnologia e avaliações diagnósticas para oferecer o melhor suporte aos nossos alunos.';
    }
});

// Animação para o título "Espaço Escolar Educ"
window.addEventListener('load', function() {
    const headerTitle = document.getElementById('header-title');
    headerTitle.classList.add('animate-title');
});

// Modal de Contato
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Acordeão FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tema Escuro
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
