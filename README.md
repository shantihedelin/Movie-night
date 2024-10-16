# Filmkväll

Filmkväll på uppdrag av Hemmakväll - Hemmakvälls filmbibliotek

En filmapplikation för att visa filmer från TMDB api och tillåter användare att läsa filmdetaljer och lägga till filmer i sin favoritlista. Det går även att söka efter filmer. Skapad i Vite. 

Projektet finns publicerat på Vercel och hittas via denna [länk](https://movie-night-taupe.vercel.app/). 

## Funktioner:
- Visa en lista över populära filmer och högst rankade filmer från TMDB.
- Se detaljer om varje film
- Lägg till och ta bort filmer från din favoritlista
- Sök efter filmer med en sökfunktion

## Komponenter: 
 - AddToFavsBtn: tillåter användare att lägga till i sin favoritlista och ta bort.
 - Searchbar: tillåter användare att söka efter filmer
 - Slidebar
 - Moviecard
 - Footer
 - Navbar

## Sidor:
- Startsida(/) - här visas alla filmer
- Favorites - visning av favoritfilmer
- MovieDetails - visning av film detaljer för en specifik film

## Tekniker & sånt som har använts för att uppfylla kritierierna:
- Redux Toolkit - hantera state för film och favoritlista.
- Local Storage för att spara favoritlistan.
- Api hantering - TMDB.
- SEO optimering med sitemap, robots.txt, metatags, Google Tag Manager(GTM) och Google Analytics(GA)
- Responsiv design för mobil, surfplatta, dator.
- Cypress e2e tester.
- Git commits & branching - main branch & development branch.
- React Hooks: useEffect & useState

## SEO:
- GA och GTM är implementerat och även en tag för att spåra när filmer läggs till och tas bort från favoritlistan har lagts till. Metatags som title, description och og-tags för delning via sociala medier har lagts till.

## Installation och körning av applikationen:

1. git glone https://github.com/shantihedelin/movie-night
2. cd movie-app
3. npm install / yarn install
4. npm run dev / yarn dev


## Testning med Cypress:

1. npm install cypress --save-dev / yarn add cypress --dev
2. npm run cypress:open / yarn cypress:open


### Senaste testningarna gjordes 15/10:
- **Test för startisdan**  
Testar att startsidan laddas och att populära filmer visas.
- **Test för filmens detaljer**  
Testar att användaren kan navigera till en films detaljer och att rätt information visas.
- **Test för rendering**  
Loggar hela sidans HTML-innehåll för att säkerställa att allt renderas korrekt. 

Alla tester gick igenom under den senaste körningen och visade att applikationen fungerar som förväntat.

## Licens
Det här projektet är licensierat under MIT-licensen.
