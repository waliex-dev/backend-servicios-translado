# Backend Sitio Oficial Waliex

Backend oficial de WALIEX con ORM Sequelize, incluye las tecnologias especificaciones y otros para el buen funcionamiento.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo,  pruebas y mostrará los servicios disponibles._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
1. Nodejs 14.0+
2. Instalar XAMPP
3. Crear Base de datos: waliex_Oficial09
4. Importar el script llamado "Base_De_Datos_Mysql" en la base de datos
```

### Instalación 🔧

_Se debe instalar todas las dependencias de l rpoyecto para poder utilziar todas las funcionalidades implementadas en él_

_Se debe Ejecutar:_

```
1. npm i
```
_Para generar los modelos usando MYSQL y Sequelize se debe instalar:_
```
1. npm install -g sequelize mysql2
2. npm install -g sequelize-auto
```
_Ahora generar los modelos en directorio "utils/models:_
```
$ sequelize-auto -o "./utils/models" -d nombre_DB -h localhost -u root -p 3306 -e mysql
```

_En caso que no se instalen todos los packetes de NodeJs, Vuelve a ejecutar_

```
npm i
```

_Debes crear un archivo .env con las siguientes variables globales para ejecutar el proyecto_

```
HOST=localhost
DATABASE_NAME=waliex_oficial09
DATABASE_USER_NAME=root
DATABASE_PASSWORD=
PORT=3000
PREFIJO=/backend-waliex
EMAIL_HOST=mail.waliex.com
EMAIL_PUERTO=465
EMAIL_FROM=Waliex Oficial <no-reply@waliex.com>
EMAIL_ACCOUNT=no-reply@waliex.com
EMAIL_PASS_ACCOUNT=interno/waliex93
WEB_PAGE=www.waliex.cl
CANTIDAD_ITEM_PAGINA = 15
JWT_SEED= seedGenericComida2k21
```

<!-- ## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
``` -->

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 😊
