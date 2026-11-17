# Blog personal de Sofía Flores

Sitio estático HTML/CSS/JavaScript listo para Vercel.

## Personalización
1. Coloca tus imágenes en `images/` con los nombres indicados en `images/LEEME.txt`.
2. Edita la biografía, título y correo en `index.html`.
3. Edita los arreglos `eventos`, `galeria` y `redes` en `script.js`. Para mostrar una red social, escribe su URL HTTPS real.
4. Para agregar más eventos o fotos, duplica un objeto del arreglo correspondiente y apunta a una imagen existente.

## Publicación en Vercel
1. Sube la carpeta del proyecto a un repositorio GitHub.
2. En Vercel, selecciona **Add New > Project** e importa el repositorio.
3. Framework Preset: **Other**. Build Command: vacío. Output Directory: vacío (raíz del proyecto).
4. Haz clic en Deploy.

No requiere npm ni compilación. `vercel.json` configura cabeceras y URLs limpias.
