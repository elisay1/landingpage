# 🏔️ Chilia Pataz - Landing Page Turística

Una elegante landing page diseñada para promocionar el turismo en el distrito de Chilia, Pataz, La Libertad. Esta página web moderna y responsiva destaca los destinos turísticos, tours grupales y emprendimientos locales de esta hermosa región andina.

## ✨ Características Principales

- **🎨 Diseño Moderno**: Interfaz atractiva con animaciones y efectos visuales
- **📱 Totalmente Responsivo**: Adaptado para móviles, tablets y desktop
- **🎭 Animaciones Suaves**: Efectos de reveal y transiciones elegantes
- **🌄 Galería de Destinos**: Showcases de lugares turísticos con información detallada
- **👥 Tours Grupales**: Integración con WhatsApp para reservas
- **🏪 Emprendimientos Locales**: Promoción de productos artesanales
- **🤝 Sección de Colaboradores**: Reconocimiento a quienes apoyan el turismo
- **📞 Contacto Directo**: Enlaces a redes sociales y WhatsApp

## 🚀 Demo

Visita la página web: [Ver Demo](https://elisay1.github.io/landingpage/)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6**: Interactividad y animaciones
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografías optimizadas

## 📂 Estructura del Proyecto

```
landingpage/
├── index.html          # Página principal
├── estilo.css          # Estilos y animaciones
├── script.js           # Funcionalidad interactiva
├── img/                # Imágenes de destinos y contenido
│   ├── nunamarca.jpg
│   ├── apushallas.jpg
│   ├── catarataschinchupata.jpg
│   ├── LAGUNA HUGIA.jpg
│   ├── corraldepiedras.JPG
│   ├── texteleria.jpg
│   ├── lacteos.jpg
│   └── agricultura.jpg
├── sounds/             # Archivos de audio (si aplica)
└── README.md          # Este archivo
```

## 🎯 Secciones Principales

### 🏠 Hero Section
- Título impactante con llamada a la acción
- Mensaje de bienvenida atractivo
- Navegación fluida a secciones

### 🗺️ Destinos Mágicos
- **Centro Arqueológico Nunamarca**: Sitio histórico explorado por Julio C. Tello
- **Cerro Apushallas**: Majestuoso protector del pueblo
- **Cataratas de Machaypunko**: Espectaculares cascadas naturales
- **Laguna de Huagia**: Emblemática laguna en las alturas
- **Corral de Piedras**: Estructuras circulares prehistóricas

### 🚶‍♂️ Tours Disponibles
- **Aventura en las Alturas**: Expedición al Cerro Apushallas
- Duración: 8+ horas
- Modalidad: Paseo grupal
- Integración con WhatsApp para reservas

### 🏪 Emprendimientos Locales
- **Tejidos Tradicionales**: Ponchos y mantas con técnicas ancestrales
- **Productos Lácteos**: Quesos y mantequilla artesanal
- **Productos Agrícolas**: Papa nativa, olluco, trigo de altura

### 🤝 Colaboradores
- Municipalidad Distrital de Chilia
- Comunidad Campesina
- Desarrolladores y promotores turísticos

## 🚀 Instalación y Uso

1. **Clona el repositorio**:
```bash
git clone https://github.com/elisay1/landingpage.git
```

2. **Navega al directorio**:
```bash
cd landingpage
```

3. **Abre en el navegador**:
```bash
# Opción 1: Doble clic en index.html
# Opción 2: Usar un servidor local
python -m http.server 8000
# Luego visita http://localhost:8000
```

## 🎨 Personalización

### Modificar Destinos
```html
<!-- En index.html, sección destinos -->
<div class="destino-card reveal">
    <img src="img/tu-imagen.jpg" alt="Nuevo Destino">
    <div class="destino-info">
        <h3>Nombre del Destino</h3>
        <p>Descripción del lugar...</p>
        <div class="destino-meta">
            <span><i class="fas fa-clock"></i> Duración</span>
            <span><i class="fas fa-hiking"></i> Dificultad</span>
        </div>
    </div>
</div>
```

### Personalizar Colores
```css
/* En estilo.css */
:root {
    --primary-color: #037381;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    --text-color: #333;
}
```

### Agregar Nuevos Tours
```html
<!-- En index.html, sección tours -->
<div class="tour-card reveal">
    <div class="tour-header">
        <img src="img/nuevo-tour.jpg" alt="Nuevo Tour">
    </div>
    <div class="tour-content">
        <h3>Nombre del Tour</h3>
        <p>Descripción del tour...</p>
        <ul class="tour-details">
            <li><i class="fas fa-calendar"></i> Duración: X horas</li>
            <li><i class="fas fa-users"></i> Modalidad</li>
            <li><i class="fas fa-map-marker-alt"></i> Ubicación</li>
        </ul>
        <a href="WHATSAPP_LINK" class="whatsapp-button-1">
            Unirse al Grupo
        </a>
    </div>
</div>
```

## 📱 Integraciones

### WhatsApp
- **Tours**: Grupos de WhatsApp para reservas
- **Contacto**: Enlace directo para consultas
- **Colaboración**: Canal para nuevos socios

### Redes Sociales
- **Facebook**: [Chilia Bonito Lugar](https://www.facebook.com/chillia.bonitolugar.3)
- **TikTok**: [@chillia.pataz](https://www.tiktok.com/@chillia.pataz)
- **Instagram**: [@chiliabonitolugar](https://www.instagram.com/chiliabonitolugar/)

## 🌐 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, Tablet, Móvil
- **Resoluciones**: Adaptado desde 320px hasta 1920px+

## 🔧 Funcionalidades JavaScript

- **Menú Hamburguesa**: Navegación móvil
- **Smooth Scrolling**: Desplazamiento suave
- **Reveal Animations**: Animaciones al hacer scroll
- **Responsive Menu**: Menú adaptativo

## 📈 Mejoras Futuras

- [ ] Sistema de reservas online
- [ ] Mapa interactivo de destinos
- [ ] Galería de fotos expandible
- [ ] Testimonios de visitantes
- [ ] Blog de noticias turísticas
- [ ] Multi-idioma (Quechua, Inglés)
- [ ] Integración con redes sociales
- [ ] Sistema de calificaciones

## 🎯 Objetivos del Proyecto

- **Promocionar** el turismo en Chilia, Pataz
- **Conectar** turistas con guías locales
- **Impulsar** emprendimientos locales
- **Preservar** la cultura y tradiciones
- **Generar** oportunidades económicas

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaSeccion`)
3. Commit tus cambios (`git commit -m 'Agregar nueva sección'`)
4. Push a la rama (`git push origin feature/NuevaSeccion`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🏔️ Sobre Chilia

Chilia es uno de los trece distritos de la provincia de Pataz, en el departamento de La Libertad, Perú. Ubicado en la cordillera de los Andes, este distrito se caracteriza por su rica historia, arquitectura pre-inca y paisajes naturales espectaculares.

## 📞 Contacto

Para más información sobre turismo en Chilia:
- **Teléfono**: +51 921 674 886
- **Ubicación**: Chilia, Pataz, La Libertad
- **WhatsApp**: [Contactar](https://api.whatsapp.com/send?phone=+51921674886&text=%C2%A1Hola!%20Cual%20es%20tu%20consulta)

## 👨‍💻 Desarrollador

**Elisay Jiménez** - Desarrollador Full Stack

- 🌐 Website: [elisaycode.com](https://elisaycode.com)
- 📧 Email: elisaycode@gmail.com
- 💼 LinkedIn: [linkedin.com/in/elisaycode](https://linkedin.com/in/elisaycode)
- 🐦 Twitter: [@elisaycode](https://twitter.com/elisaycode)
- 📘 Facebook: [facebook.com/elisaycode](https://facebook.com/elisaycode)
- 📸 Instagram: [@elisaycode](https://instagram.com/elisaycode)
- 🎵 TikTok: [@elisaycode](https://tiktok.com/@elisaycode)
- 💻 GitHub: [github.com/elisay1](https://github.com/elisay1)
- 🎬 YouTube: [youtube.com/@elisaycode](https://youtube.com/@elisaycode)

## 🙏 Agradecimientos

- Comunidad de Chilia por su apoyo
- Municipalidad Distrital de Chilia
- Fotógrafos locales por las imágenes
- Comunidad de desarrolladores
- Todos los que promueven el turismo local

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella!

🏔️ **¡Descubre la magia de Chilia Pataz!**