# SINCRONIA APP

(ES) Sincronía es una aplicación que te permite reproducir audios de manera asíncrona, todo a través de salas.

En cuanto a su funcionamiento, está desarrollada con tecnologías web y móviles como React y React Native.

## Instalación

Para instalar la aplicación, primero tienes que descargar el proyecto y luego ejecutar el comando:

### `npm start`

Después de instlar todas las dependencias con el comando anteiror, ya puedes ejecutar y comprobar el correcto funcionamiento de la app a través del [localhost:30000](http://localhost:3000).

## Construir y desplegar

Para instalar la aplicación, lo primero que se tiene que hacer es escribir la siguiente depdendencia dentro del `pachage.json`:

### `homepage": URL_DE_LA_PÁGINA,`

Por ejemplo:

```json
{
    "name": "sincronia-frontend",
     "version": "0.1.0",
     "homepage": "http://prueba.me", 
}
```

Lo siguiente es ejecutar el comando:

### `npm build`

Que al terminar de ejecutarse creará los archivos de instalación dentro del directorio `/build`, en la raiz del proyecto:.

## Subir al servidor

Lo único que se tiene que hacer es subir los archivos dentro de la carperta `/build`, dentro del directorio de tu sitio web.

Y listo, está completamente desplegado.

### Servidores Apache

En el caos de usar servidores Apache, se debe configurar dentro del archivo `.htaccess` lo siguiente:

```html
   RewriteEngine On 
   RewriteBase / 
   RewriteRule ^index.html$ - [L] 
   RewriteCond %{REQUEST_FILENAME} !-f 
   RewriteCond %{REQUEST_FILENAME} !-d 
   RewriteCond %{REQUEST_FILENAME} !-l 
   RewriteRule . /index.html [L]
```

