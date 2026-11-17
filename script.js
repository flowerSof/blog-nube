// EDITA AQUÍ tus eventos, fotografías y enlaces personales.
const eventos = [
  { titulo: 'Mi primer evento', fecha: '2026 · PERÚ', descripcion: 'Describe aquí el evento, dónde se realizó y qué aprendiste.', imagen: 'images/evento1.jpg' },
  { titulo: 'Una experiencia especial', fecha: '2026 · PERÚ', descripcion: 'Comparte un recuerdo, encuentro, conferencia o actividad.', imagen: 'images/evento2.jpg' },
  { titulo: 'Nuevas conexiones', fecha: '2026 · PERÚ', descripcion: 'Cuenta por qué fue importante esta experiencia para ti.', imagen: 'images/evento3.jpg' }
];
const galeria = [
  { imagen: 'images/evento1.jpg', texto: 'Recuerdo 01' },
  { imagen: 'images/evento2.jpg', texto: 'Recuerdo 02' },
  { imagen: 'images/evento3.jpg', texto: 'Recuerdo 03' }
];
// Sustituye # por tus enlaces reales. Los enlaces vacíos no se mostrarán.
const redes = [
  { nombre: 'Instagram ↗', url: '' },
  { nombre: 'TikTok ↗', url: '' },
  { nombre: 'LinkedIn ↗', url: '' },
  { nombre: 'GitHub ↗', url: '' }
];
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const eventGrid = document.querySelector('#event-grid');
eventos.forEach(evento => {
  const card = document.createElement('article'); card.className = 'event-card';
  card.innerHTML = `<img src="${escapeHTML(evento.imagen)}" alt="${escapeHTML(evento.titulo)}" loading="lazy"><div class="details"><span class="date">${escapeHTML(evento.fecha)}</span><h3>${escapeHTML(evento.titulo)}</h3><p>${escapeHTML(evento.descripcion)}</p></div>`;
  const img = card.querySelector('img'); img.addEventListener('error', () => { const fallback=document.createElement('div');fallback.className='event-fallback';fallback.textContent='Agrega una fotografía';img.replaceWith(fallback); });
  eventGrid.appendChild(card);
});
const galleryGrid = document.querySelector('#gallery-grid');
const lightbox = document.querySelector('#lightbox'); const lightboxImage = document.querySelector('#lightbox-image');
galeria.forEach(foto => {
  const button = document.createElement('button'); button.className='gallery-item'; button.type='button'; button.setAttribute('aria-label', `Ampliar ${foto.texto}`);
  button.innerHTML = `<img src="${escapeHTML(foto.imagen)}" alt="${escapeHTML(foto.texto)}" loading="lazy"><span>${escapeHTML(foto.texto)}</span>`;
  const img=button.querySelector('img'); img.addEventListener('error',()=>{const fallback=document.createElement('div');fallback.className='fallback';fallback.textContent='Agrega una imagen';img.replaceWith(fallback);});
  button.addEventListener('click',()=>{if (!button.querySelector('img')) return;lightboxImage.src=foto.imagen;lightboxImage.alt=foto.texto;lightbox.showModal();});galleryGrid.appendChild(button);
});
document.querySelector('#close-lightbox').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});
const socials=document.querySelector('#socials');redes.filter(red=>/^https:\/\//i.test(red.url)).forEach(red=>{const a=document.createElement('a');a.href=red.url;a.textContent=red.nombre;a.target='_blank';a.rel='noopener noreferrer';socials.appendChild(a);});
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('#nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
document.querySelector('#year').textContent=new Date().getFullYear();
