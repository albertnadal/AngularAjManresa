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
