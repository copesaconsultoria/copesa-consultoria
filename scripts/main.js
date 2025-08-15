// Año dinámico y menú accesible
document.addEventListener('DOMContentLoaded', () => {
  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');
  if (btn && menu){
    btn.addEventListener('click', () => {
      const abierto = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!abierto));
      menu.classList.toggle('abierto');
    });
  }
});
