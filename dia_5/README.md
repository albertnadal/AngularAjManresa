## Curs d'Angular dia 5

### Aplicació amb un únic mòdul

Per a aplicacions web molt petites pot resultar suficient que tots els components estigui en un únic mòdul. Tanmateix les aplicacions creixen en el temps, s'incorporen nous desenvolupadors en el projecte i finalment cal desacoplar bona part del codi. Si l'aplicació ha de crèixer és necessari desenvolupar-la en mòduls independents.

### Aplicació amb estructura modular

Desacoplar l'aplicació en mòduls separats permet, entre altres coses, implementar els enrutaments i la navegació d'una manera molt més eficient. Podrem fer lazy-loading dels mòduls en temps d'execució assignant rutes específiques per a cada mòdul.

```
ng generate module users --route users --module app.module
ng generate module news --route news --module app.module
ng generate module page-not-found --route ** --module app.module
```

### Compilació Just-in-Time (JiT) i Ahead-of-Time (AoT)

Per defecte Angular genera els bundles emprant la compilació Just-in-Time (JiT). La compilació Just-in-Time genera uns bundles amb tamany molt petit per a cada un del mòduls, en detriment del tamany dels bundle del compilador que és molt més gran. Els mòduls de la nostra aplicació es compilen en temps d'execució al navegador web.

![JiT](https://raw.githubusercontent.com/albertnadal/AngularAjManresa/master/dia_5/sample_jit.jpg)

Per a generar els bundles emprant la compilació Ahead-of-Time (AoT) cal fer-ho de la següent manera. La compilació Ahead-of-Time genera uns bundles amb uns tamanys molt més grans per a cada un dels mòduls, però en canvi el temany del bundle del compilador és molt més petit. Els mòduls de la nostra aplicació és compilen al fer el build i, per tant, el navegador web només ha d'executar els fitxers ja compilats.

```
ng build --aot --output-path build/ --base-href /
```

![AoT](https://raw.githubusercontent.com/albertnadal/AngularAjManresa/master/dia_5/sample_aot.jpg)

### Server-side Rendering (Angular Universal)

Angular Universal permet que la nostra aplicació es renderitzi completament al servidor. Això redueix notablement els temps de càrrega el primer cop que s'hi accedeix i per tant millora l'experiència de l'usuari i afavorerix el SEO de la web. Un cop la web ja s'ha carregat inicialment al navegador la renderització es realitza sempre al navegador web, per tant, la renderització o composició de l'html del site només es fa al servidor quan s'accedeix manualment a qualsevol url de la nostra aplicació.

Per fer possible això Angular Universal compila i executa en temps d'execució l'aplicació al servidor tal i com ho faria en un navegador. Qualsevol crida a un API que faci l'aplicació es fa des de el servidor. Un cop generat el codi html, el servidor l'envia al navegador web de l'usuari per a que el visualitzi immediatament.

En dispositius mòbils o en connexions a internet molt lentes el la millora es notable. Per defecte Angular Universal empra un servidor web de Node.js amb Express.js. Per habilitar Angular Universal al nostre projecte només cal executar la següent comanda.

```
ng add @nguniversal/express-engine --clientProject ajmanresa
```

A continuació cal fer el build i servir el site de la següent manera.

```
npm run build:ssr && npm run serve:ssr
```

Tot i que la renderització del site al servidor funcioni bé notarem que l'aplicació fa coses extranyes en el navegador web, com per exemple, que alguns components es re-renderitzen o que les crides asíncrones a apis externes es fan dos cops. Això es deu a que l'estat dels components que s'han renderitzat al servidor no s'ha traslladat al navegador web i, per tant, al fer el bootstraping al navegador web (al carregar i executar els javascripts) l'estat dels components no ha estat inicialitzat. Per resoldre aquest problema Angular Universal implementa els mòduls TransferHttpCacheModule i ServerTransferStateModule que permeten transferir els estats dels components renderitzats al servidor al respectius components carregats al navegador web.

```
npm install @nguniversal/common --save
```

Cal importar el mòdul `TransferHttpCacheModule` al mòdul principal de la nostra aplicació.

```ts
import {TransferHttpCacheModule} from '@nguniversal/common';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    TransferHttpCacheModule,
  ],
  bootstrap: [MyApp]
})
export class AppBrowserModule() {}
```

Després cal importar el mòdul `ServerTransferStateModule` al ServerModule de la nostra aplicació.

```ts
import { NgModule } from "@angular/core";
import {
  ServerModule,
  ServerTransferStateModule
} from "@angular/platform-server";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}

```

I finalment al `main.ts` cal canviar això...

```ts
...

platformBrowserDynamic().bootstrapModule(AppBrowserModule);
```

...per això: 

```ts
...

document.addEventListener("DOMContentLoaded", () => {
  platformBrowserDynamic()
    .bootstrapModule(AppBrowserModule)
    .catch(err => console.log(err));
});
```

Fem el build i reiniciem el servidor.

```
npm run build:ssr && npm run serve:ssr
```



