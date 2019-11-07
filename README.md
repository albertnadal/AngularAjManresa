# Curs d'Angular - Ajuntament de Manresa

L'objectiu d'aquest curs és entendre i adquirir els coneixements bàsics necessaris per poder desenvolupar aplicacions web emprant el framework Angular.

Aquest curs consisteix de 5 sessions de dues hores cada una. La primera sessió és teòrica i la resta són completament pràctiques. A cada sessió pràctica es continua el desenvolupament de l’anterior sessió, de manera que a cada sessió es treballa emprant una tecnologia o eina en concret d’Angular. L’objectiu del curs es desenvolupar una aplicació completament funcional, cobrint tot l’stack tecnològic necessari: backend (Nodejs), frontend (Angular), base de dades (Mongo) i desplegament (Docker).

Durant les sessions pràctiques s’intenta assolir un objectiu proposat, ja sigui, per exemple, integrar Material o una API Rest al programa. El codi font a desenvolupar de cada sessió ja està previament disponible a Github, de manera que els alumnes poden provar de desenvolupar el codi seguint el ritme del tutor o simplement seguir el desenvolupament que fa el tutor i lliurement fer preguntes o proposar suggerències durant el transcurs del desenvolupament.

![Aplicació](https://raw.githubusercontent.com/albertnadal/AngularAjManresa/master/sample.png)

## Dia 1: Introducció a Angular

El primer dia d'aquest curs d'Angular vam explicar de forma molt teòrica els fonaments d'Angular: angular-cli, mòduls, components, typescript, template syntax, services, routing, etc.

[(Veure diapositives)](https://github.com/albertnadal/AngularAjManresa/blob/master/Angular%20-%20Core%20Concepts%20-%20Ajuntament%20Manresa.pdf)

## [Dia 2: Angular-cli, mòduls, components i Template Syntax](https://github.com/albertnadal/AngularAjManresa/tree/master/dia_2)

Aquest segon dia del curs és completament pràctic i en el transcurs d'aquest s'implementaran dos components que es comunicaran entre si emprant el two-way data binding d'Angular. Un component implementarà un llistat vertical d'usuaris que ha de permetre llistar els usuaris d'un array, eliminar i afegir nous usuaris. Un segon component secundari permetrà mostrar la fitxa detallada de l'usuari seleccionat del llistat.

## [Dia 3: Model de dades, Two-way Data Binding i Material](https://github.com/albertnadal/AngularAjManresa/tree/master/dia_3)

Aquest tercer dia del curs també serà pràctic i en el transcurs d'aquest es canviaran els components de formulari tradicionals d'HTML emprats el darrer dia per les seves respectives implementacions en components de Material. S'extendrà el formulari del component que mostra la fitxa detallada de l'usuari seleccionat amb nous camps addicinals de Material: calendari, radio buttons, checkboxes, textbox, etc. S'emprarà l'atribut ngModel dels components de Material per a llegir i escriure les dades directament del model de dades de forma automàtica.

## [Dia 4: Docker, Rest-API, Dependency Injection i Services](https://github.com/albertnadal/AngularAjManresa/tree/master/dia_4)

Aquest quart dia del curs començarà amb una primera part pràctica que consistirà en crear una imatge de Docker de l'aplicació que estem desenvolupant i executar-la posteriorment en un contenidor. Durant la segona part farem us d'una API Rest implementada en Nodejs que ens servirà de canal per fer la persistència de les dades de l'aplicació en una base de dades Mongo. S'implementarà un service d'Angular per poder utilitzar els diferents endpoints de l'API Rest.

Mitjançant l'ús de Dependency Injection el service serà accessible per als components implementats durant les sessions anteriors del curs. Els components empraran el service per a realitzar les corresponents operacions de llistar, actualitzar, eliminar i crear usuaris, de manera que totes les dades que es mostrin a l'aplicació coincideixin amb les dades emmagatzemades a la base de dades.

## [Dia 5: Routing/Navigation, Lazy Loading, AOT/JIT i Server-side Rendering](https://github.com/albertnadal/AngularAjManresa/tree/master/dia_5)

TODO:
- Routing & Navigation
- Lazy Loading
- Server-side Rendering (SSR): An intro to Angular Universal
- Ahead-of-Time (AOT) compiler Vs. Just-in-Time (JIT) compiler
