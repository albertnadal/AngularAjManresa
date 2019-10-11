## Curs Angular dia 2

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
