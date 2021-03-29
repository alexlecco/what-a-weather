# What a Weather

Este proyecto fué desarrollado con [Create React App](https://github.com/facebook/create-react-app).

se usaron las siguientes librerias:

- [Public IP lib](https://www.npmjs.com/package/public-ip)
- [All the Cities lib](https://www.npmjs.com/package/all-the-cities)
- [Ant Design UI](https://ant.design/)
- [Node Sass](https://www.npmjs.com/package/node-sass)
- [Axios](https://github.com/axios/axios)

y se consultó a las siguientes APIs
[IP API](https://ip-api.com/)
[Open Weather Map API](https://openweathermap.org/api)

## Instalación

```
$ git clone https://github.com/alexlecco/what-a-weather.git
```

```
$ cd what-a-weather
```

```
$ npm install
```

ó

```
$ yarn
```

## Scripts Disponibles

en este proyecto puedes correr los siguientes scripts:

### `yarn start`

Para levantar el proyecto en modo de desarrollo.\
una vez ejecutado el comando, ingresar a [http://localhost:3000](http://localhost:3000) para usar la aplicación.

### `yarn test`

Ejecuta los siguientes tests unitarios:

- "get loading state before fetch data"
- "get current location info - city"
- "get current location info - country"
- "get current location temp"
- "get current location next 5 days forecast"

### DEMO

La aplicación se encuentra desplegada en [Netlify](https://www.netlify.com/)

Link: [What a Weather](https://what-a-weather.netlify.com)
