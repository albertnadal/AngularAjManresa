## Curs Angular dia 4

Aquest quart dia del curs començarà amb una primera part pràctica que consistirà en crear una imatge de Docker de l'aplicació que estem desenvolupant i executar-la posteriorment en un contenidor. Durant la segona part farem us d'una API Rest implementada en Nodejs que ens servirà de canal per fer la persistència de les dades de l'aplicació en una base de dades Mongo. S'implementarà un service d'Angular per poder utilitzar els diferents endpoints de l'API Rest. Mitjançant l'ús de Dependency Injection el service serà accessible per als components implementats durant les sessions anteriors del curs. Els components empraran el service per a realitzar les corresponents operacions de llistar, actualitzar, eliminar i crear usuaris, de manera que totes les dades que es mostrin a l'aplicació coincideixin amb les dades emmagatzemades a la base de dades.

A continuació es llisten algunes de les commandes i operacions que s'utilitzaran durant la part pràctica.

### Fer el build del site

```
ng build --output-path build/ --base-href /
```

### Comprovar que funciona bé servint el site a [localhost:4200](localhost:4200)

```
cd build
python -m SimpleHTTPServer 4200
/usr/bin/open -a "/Applications/Google Chrome.app" "http://localhost:4200"
```

### Crear la imatge de Docker

```
docker build -t ajmanresa_angular_image .
```

### Arrencar un contenidor amb la imatge creada

```
docker run -d -p 4200:80 --name ajmanresa_angular ajmanresa_angular_image:latest
```

### Comprovar que el site carrega bé a [localhost:4200](localhost:4200)

```
/usr/bin/open -a "/Applications/Google Chrome.app" "http://localhost:4200"
```
