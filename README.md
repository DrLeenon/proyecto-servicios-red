# Sitio srv-web

Sitio web del proyecto de implementación de servicios de red (Sistemas Operativos, UTP).

Se sirve con Apache2 en Ubuntu Server 24.04 desde `/var/www/proyecto` y se accede como `www.proyecto.local` desde los clientes de la red 192.168.10.0/24.

Versión en línea: https://proyecto-servicios-red.vercel.app

## Archivos

- `index.html` - página principal
- `privado/index.html` - área restringida (protegida con autenticación básica en Apache)
- `css/` - hojas de estilo
- `js/main.js` - muestra el host con el que se accedió al sitio

## Instalación en el servidor

Copiar el contenido de la carpeta a `/var/www/proyecto` en srv-web.