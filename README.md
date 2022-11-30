# 📢 SINCRONIA APP - V0.2

(ES) Sincronía es una aplicación que te permite reproducir audios de manera asíncrona, todo a través de salas.

En cuanto a su funcionamiento, está desarrollada con tecnologías web y móviles como React y React Native.

[Aplicación de ejemplo](https://sincronia.carlosaraiza.me/)

## Instalación

Para instalar la aplicación, primero tienes que descargar el proyecto y luego ejecutar el comando:

### `npm start`

Después de instalar todas las dependencias con el comando anterior, ya puedes ejecutar y comprobar el correcto funcionamiento de la app a través del [localhost:30000](http://localhost:3000).

## Configuración 

Dentro del archivo `.env` en el directorio raiz del proyecto, agrega las licencias y las configuraciones necesarias para que funcione la aplicación:

Ejemplo:

Credenciales para que funcione Pusher

```javascript
    REACT_APP_ID = "1234"
    REACT_APP_KEY="123456789"
    REACT_APP_SECRET = "987654321"
    CREACT_APP_LUSTER = "us2"
```

Agregar la url del endpoint del servidor:

```javascript 
    REACT_APP_ENDPOINT=https://api-sincronia.codigohabil.com/
```

Recuerda que es importante agregar las credenciales, ya que sin estas no funcionará el proyecto.

## Construir y desplegar

Para llevar la aplicación a un entorno de producción, lo primero que se tiene que hacer es escribir la siguiente depdendencia dentro del `pachage.json`:

### `homepage": URL_DE_LA_PÁGINA,`

Por ejemplo:

```json
{
    "name": "sincronia-frontend",
     "version": "0.1.0",
     "homepage": "http://prueba.me", 
}
```

Lo siguiente es ejecutar el siquiente comando para preparar los archivos del proyecto:

### `npm build`

Al terminar de ejecutarse la instrucción anterior se creará los archivos de instalación dentro del directorio `/build`, en la raiz del proyecto:.

## Subir al servidor

Lo único que se tiene que hacer es subir los archivos que se encuentran en la carperta `/build`, dentro del directorio de tu sitio web.

Y listo, está completamente desplegada la app.

### Servidores Apache

En el caos de usar servidores Apache, para que funcione correctamente se debe configurar dentro del archivo `.htaccess` lo siguiente:

```html
   RewriteEngine On 
   RewriteBase / 
   RewriteRule ^index.html$ - [L] 
   RewriteCond %{REQUEST_FILENAME} !-f 
   RewriteCond %{REQUEST_FILENAME} !-d 
   RewriteCond %{REQUEST_FILENAME} !-l 
   RewriteRule . /index.html [L]
```

## Versiones

***v0.2***: La app ya cuenta con validaciones de error y elección de canales.
