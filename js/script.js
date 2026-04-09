document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const id = this.getAttribute('href');
        const section = document.querySelector(id);

        section.scrollIntoView({
            behavior: 'smooth'
        })
    })
})

document.getElementById('botao-wpp').addEventListener('click', function() {
    const numero = "5599999999999";
    const mensagem = "Olá! Gostaria de fazer uma encomenda.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
});

const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.getElementById('whatsapp-float').addEventListener('click', () => {
  const numero = "5599999999999";
  const mensagem = "Olá! Gostaria de fazer uma encomenda.";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
});