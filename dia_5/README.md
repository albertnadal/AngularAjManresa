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
