# Filmkväll

Filmkväll på uppdrag av Hemmakväll - Hemmakvälls filmbibliotek

En filmapplikation för att visa filmer från TMDB api och tillåter användare att läsa filmdetaljer och lägga till filmer i sin favoritlista. Det går även att söka efter filmer. 

Projektet finns publicerat på Vercel och hittas via denna [länk](https://movie-night-taupe.vercel.app/). 

## Funktioner:
- Visa en lista över populära filmer och högst rankade filmer från TMDB.
- Se detaljer om varje film
- Lägg till och ta bort filmer från din favoritlista
- Sök efter filmer med en sökfunktion

## Installation och körning av applikationen:

1. git glone https://github.com/shantihedelin/movie-night
2. cd movie-app
3. npm install / yarn install
4. npm run dev / yarn dev


## Testning med Cypress:

1. npm install cypress --save-dev / yarn add cypress --dev
2. npm run cypress:open / yarn cypress:open


### Senaste testningarna gjordes 15/10:
- Test för startisdan
Testar att startsidan laddas och att populära filmer visas.
- Test för filmens detaljer
Testar att användaren kan navigera till en films detaljer och att rätt information visas.
- Test för rendering
Loggar hela sidans HTML-innehåll för att säkerställa att allt renderas korrekt. 

Alla tester gick igenom under den senaste körningen och visade att applikationen fungerar som förväntat.

## Licens
Det här projektet är licensierat under MIT-licensen.
