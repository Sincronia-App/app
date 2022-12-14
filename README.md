# 馃摙 SINCRONIA APP - V0.2

(ES) Sincron铆a es una aplicaci贸n que te permite reproducir audios de manera as铆ncrona, todo a trav茅s de salas.

En cuanto a su funcionamiento, est谩 desarrollada con tecnolog铆as web y m贸viles como React y React Native.

[Aplicaci贸n de ejemplo](https://sincronia.carlosaraiza.me/)

## Instalaci贸n

Para instalar la aplicaci贸n, primero tienes que descargar el proyecto y luego ejecutar el comando:

### `npm start`

Despu茅s de instalar todas las dependencias con el comando anterior, ya puedes ejecutar y comprobar el correcto funcionamiento de la app a trav茅s del [localhost:30000](http://localhost:3000).

## Configuraci贸n 

Dentro del archivo `.env` en el directorio raiz del proyecto, agrega las licencias y las configuraciones necesarias para que funcione la aplicaci贸n:

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

Recuerda que es importante agregar las credenciales, ya que sin estas no funcionar谩 el proyecto.

## Construir y desplegar

Para llevar la aplicaci贸n a un entorno de producci贸n, lo primero que se tiene que hacer es escribir la siguiente depdendencia dentro del `pachage.json`:

### `homepage": URL_DE_LA_P脕GINA,`

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

Al terminar de ejecutarse la instrucci贸n anterior se crear谩 los archivos de instalaci贸n dentro del directorio `/build`, en la raiz del proyecto:.

## Subir al servidor

Lo 煤nico que se tiene que hacer es subir los archivos que se encuentran en la carperta `/build`, dentro del directorio de tu sitio web.

Y listo, est谩 completamente desplegada la app.

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

***v0.2***: La app ya cuenta con validaciones de error y elecci贸n de canales.
