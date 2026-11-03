# Oftálmica — sitio web institucional

Sitio estático de Oftálmica, Centro de Microcirugía Ocular (Bell Ville, Córdoba).

## Contenido

- `index.html`: contenido, datos institucionales y enlaces.
- `css/style.css`: identidad visual, diseño y responsive.
- `js/script.js`: menú móvil, animaciones de entrada, navegación activa y año del pie.
- `assets/images/`: logo proporcionado y selección optimizada de fotos reales del consultorio y sus profesionales.

No utiliza PHP, base de datos ni herramientas de compilación.

## Ver el sitio localmente

Abrí `index.html` en tu navegador. Para un entorno de desarrollo opcional, también podés usar la extensión **Live Server** de Visual Studio Code, pero no es obligatoria.

Las tipografías DM Sans e Instrument Serif se cargan desde Google Fonts cuando hay conexión, con tipografías alternativas disponibles sin conexión.

## Publicar en GitHub Pages

1. Creá un repositorio en GitHub, por ejemplo `oftalmica-web`.
2. Subí **el contenido de esta carpeta** a la raíz del repositorio: `index.html`, `css`, `js`, `assets` y `README.md`.
3. En GitHub, abrí **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**, rama **main**, carpeta **/(root)**, y guardá.
5. GitHub te mostrará la dirección publicada, por ejemplo `https://TU-USUARIO.github.io/oftalmica-web/`.

No necesitás instalar Node.js, npm ni ejecutar `build`.

Si más adelante vas a usar `oftalmica.com.ar` como dominio propio, hay que configurar primero DNS y **Custom domain** en GitHub Pages. No cambies la configuración del dominio actual hasta tener lista la nueva publicación.

## Personalización

- Reemplazá las fotos manteniendo los nombres actuales de los archivos, o actualizá sus rutas en `index.html`.
- Si necesitás ajustar colores, cambiá las variables de `:root` al principio de `css/style.css`.
- Los botones de turnos llevan a WhatsApp `+54 9 3537 666224`.
- Correo actualizado: `secretariaoftalmica182@gmail.com`.
- Consultorio: Belgrano 182, Bell Ville, Córdoba.

## Datos a verificar antes de publicar

- **Urgencias:** se informa atención de urgencias oftalmológicas **las 24 horas**, dato confirmado por el consultorio. Número publicado: `3537 603891`.
- **Teléfono fijo:** se conserva `3537 417600` según el sitio anterior; comprobar que sigue vigente.
- **Horarios:** figura lunes a viernes, 08:00–12:00 y 16:00–20:00; confirmar vigencia.
- **Matrículas y prácticas médicas:** copiadas de la web actual y de las instrucciones recibidas; confirmar si existieron modificaciones.
- **Privacidad y permisos:** comprobar que las fotografías de los profesionales cuentan con autorización para publicarse.

## Notas de implementación

Se usan rutas relativas para que los archivos funcionen en GitHub Pages, incluso bajo `/nombre-del-repositorio/`.
Los servicios se muestran en listas desplegables HTML nativas (`<details>`), que funcionan sin JavaScript.
El diseño contempla navegación por teclado, textos alternativos para fotos y preferencia por movimiento reducido.
Las fotografías se exportaron a WebP de tamaño reducido, con leves ajustes técnicos de luz en algunos interiores y sin alteraciones de personas, infraestructura ni contenido.

## Actualizaciones de diseño (v3)

- Portada y fotografía principal más luminosas, respetando la imagen original.
- Retratos médicos más pequeños, sin agrandados ni efectos de zoom, con composición editorial.
- Numeraciones decorativas eliminadas de fotografías y títulos de sección.
- Textos y tamaños de lectura pulidos, especialmente en computadora.
- Cinta de servicios adaptable sin scroll horizontal en celulares.
- Se destaca la disponibilidad de urgencias oftalmológicas las 24 horas.
# oftalmica
