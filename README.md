# Password Generator App

Una aplicación web interactiva que permite a los usuarios generar contraseñas seguras y personalizadas. Este proyecto está basado en el desafío "Password Generator" de Frontend Mentor.

## Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación y Uso](#-instalación-y-uso)
- [Capturas de Pantalla](#-capturas-de-pantalla)

## Descripción General

Este proyecto es un generador de contraseñas de una sola página (SPA). El usuario puede seleccionar la longitud deseada de la contraseña y qué tipo de caracteres incluir (letras mayúsculas, letras minúsculas, números y símbolos). La aplicación evalúa la fuerza de la contraseña generada y proporciona una forma rápida de copiarla al portapapeles.

## Características

- **Generación Personalizada:** Elige la longitud de la contraseña mediante un control deslizante interactivo (1-20 caracteres).
- **Filtros de Caracteres:** Incluye o excluye mayúsculas, minúsculas, números y símbolos.
- **Medidor de Fuerza:** Un algoritmo evalúa visualmente la fuerza de la contraseña generada (Demasiado débil, Débil, Media, Fuerte) basándose en la longitud y la variedad de caracteres.
- **Copiar al Portapapeles:** Copia la contraseña generada con un solo clic.
- **Diseño Responsivo:** Interfaz adaptada para dispositivos móviles y de escritorio.

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica.
- **Tailwind CSS (vía CDN):** Para un estilizado rápido, moderno y responsivo sin necesidad de archivos CSS externos. Se configuraron colores y fuentes personalizadas.
- **JavaScript (Vanilla):** Lógica de generación aleatoria, manipulación del DOM, cálculo de fuerza y uso de la API del portapapeles (`navigator.clipboard`).

## Instalación y Uso

Dado que este proyecto no requiere un entorno de compilación complejo (Node.js, Webpack, etc.) debido al uso del CDN de Tailwind, probarlo es sumamente sencillo:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone 
