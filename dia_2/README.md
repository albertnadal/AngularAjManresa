## Curs d'Angular dia 2

El primer dia d'aquest curs d'Angular vam explicar de forma molt teòrica els fonaments d'Angular: angular-cli, mòduls, components, typescript, template syntax, services, routing, etc. Aquest segon dia del curs és completament pràctic i en el transcurs d'aquest s'implementaran dos components que es comunicaran entre si emprant el two-way data binding d'Angular. Un component implementarà un llistat vertical d'usuaris que ha de permetre llistar els usuaris d'un array, eliminar i afegir nous usuaris. Un segon component secundari permetrà mostrar la fitxa detallada de l'usuari seleccionat del llistat.

A continuació es llisten algunes de les commandes i operacions que s'utilitzaran durant la part pràctica.

### Instal·lar NodeJS (>=10.9) i NPM

```
brew install node
```

### Comprovar que s'ha instal·lat bé

```
node --version
npm --version
```

### Instal·lar [AngularCLI](https://cli.angular.io/)

```
npm install -g @angular/cli
```

### Comprovar que s'ha instal·lat bé

```
ng help
```

### Crear el projecte `ajmanresa`

```
ng new ajmanresa
cd ajmanresa
```

### Servir el site a localhost

```
ng serve
```

[http://localhost:4200](http://localhost:4200)

### Fer el build

```
ng build --prod
cd dist/ajmanresa
```

### Crear el nou component `users`

```
ng generate component users
```
