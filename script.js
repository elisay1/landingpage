document.addEventListener("DOMContentLoaded", function() {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Animaciones al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Solo anima una vez
            }
        });
    }, observerOptions);

    // Observar todos los elementos con clase reveal
    document.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lazy loading para imágenes
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Array de mensajes para las notificaciones
const notifications = [
    {
        title: "¡Bienvenido a Chilia Pataz!",
        message: "Descubre la magia de nuestro distrito",
        icon: "fas fa-mountain"
    },
    {
        title: "¡Conoce Nuevos Lugares!",
        message: "Explora nuestras nuevas rutas turísticas",
        icon: "fas fa-route"
    },
    {
        title: "¡Próximo Evento!",
        message: "Publicita tu evento en nuestro calendario",
        icon: "fas fa-calendar"
    },
    {
        title: "¡Artesanía Local!",
        message: "Conoce nuestros emprendimientos",
        icon: "fas fa-store"
    },
    {
        title: "📱 ¡Síguenos en TikTok!",
        message: "Descubre los secretos de Chilia en nuestro nuevo canal",
        icon: "fab fa-tiktok",
    },
    {
        title: "📸 ¡Nueva galería en Instagram!",
        message: "Mira las mejores fotos de nuestros paisajes",
        icon: "fab fa-instagram",
    }
];

// Función para crear y mostrar notificaciones
function showNotification(notification) {
    const notificationElement = document.createElement('div');
    notificationElement.className = 'notification';
    notificationElement.innerHTML = `
        <i class="${notification.icon}"></i>
        <div class="notification-content">
            <h4>${notification.title}</h4>
            <p>${notification.message}</p>
        </div>
    `;

    document.body.appendChild(notificationElement);

      // Reproducir el audio cada vez que se muestra una notificación
  var audio = new Audio("sounds/welcome.mp3");
  audio.play();

    // Eliminar la notificación después de 5 segundos
    setTimeout(() => {
        notificationElement.classList.add('hide');
        setTimeout(() => {
            notificationElement.remove();
        }, 500);
    }, 5000);
}

// Función para mostrar notificaciones periódicamente
function startNotifications() {
    let index = 0;
    
    // Mostrar primera notificación después de 3 segundos
    setTimeout(() => {
        showNotification(notifications[index]);
        index = (index + 1) % notifications.length;
    }, 3000);

    // Mostrar notificaciones subsecuentes cada 15 segundos
    setInterval(() => {
        showNotification(notifications[index]);
        index = (index + 1) % notifications.length;
    }, 15000);
}

// Iniciar el sistema de notificaciones cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    startNotifications();

    // Efecto especial al hacer hover sobre los h2
    document.querySelectorAll('h2').forEach(heading => {
        heading.addEventListener('mouseenter', () => {
            // Crear efecto de partículas o brillos
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            heading.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        });
    });
});

// Función para activar efectos especiales en los h2 periódicamente
function activateHeadingEffects() {
    setInterval(() => {
        document.querySelectorAll('h2').forEach(heading => {
            heading.style.animation = 'none';
            heading.offsetHeight; // Trigger reflow
            heading.style.animation = null;
        });
    }, 10000);
}

activateHeadingEffects();


