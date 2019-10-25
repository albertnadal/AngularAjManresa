## Curs Angular dia 4

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
