const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu a');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Lógica para el botón 'Leer más sobre mí'
const readMoreBtn = document.getElementById('read-more-btn');
const moreAboutText = document.getElementById('more-about');

if (readMoreBtn && moreAboutText) {
    readMoreBtn.addEventListener('click', () => {
        moreAboutText.classList.toggle('open');

        if (moreAboutText.classList.contains('open')) {
            readMoreBtn.textContent = 'Mostrar menos';
        } else {
            readMoreBtn.textContent = 'Leer más sobre mí';
        }
    });
}


// LÓGICA DEL MODAL DE PROYECTOS
const projectCards = document.querySelectorAll('.project-card');
const modalOverlay = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTags = document.getElementById('modal-tags');

if (projectCards.length > 0 && modalOverlay) {
    // Abrir modal con la información de la tarjeta presionada
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            const img = card.getAttribute('data-img');
            const tags = card.getAttribute('data-tags').split(',');

            modalImg.src = img;
            modalTitle.textContent = title;
            modalDesc.textContent = desc;

            // Cargar etiquetas en el modal
            modalTags.innerHTML = '';
            tags.forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag.trim();
                modalTags.appendChild(span);
            });

            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
        });
    });

    // Función para cerrar modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restablece el scroll
    };

    modalCloseBtn.addEventListener('click', closeModal);

    // Cerrar si hace clic fuera de la ventana
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}