// TEST FÖR STARTSIDAN - POPULÄRA FILMER
describe("Homepage Test", () => {
  it("should load the homepage and display popular movies", () => {
    cy.visit("https://movie-night-taupe.vercel.app/"); // Besök startsidan
    cy.contains("Popular movies now", { timeout: 10000 }); // Kolla att denna titel finns
    cy.get('[data-test="moviecard"]').should("have.length.greaterThan", 0); // Kolla att det finns filmer i listan
  });
});

// TEST FÖR FILMDETALJER
describe("Movie Details Page", () => {
  it("should navigate to a movie details page and display movie information", () => {
    cy.visit("https://movie-night-taupe.vercel.app/"); // Besök startsidan
    cy.get('[data-test="moviecard"]').first().click(); // Klicka på första filmen
    cy.url().should("include", "/movies"); // Kolla så url:en är rätt
    cy.contains("Release date:"); // Kolla så detaljerna visas
    cy.get("img").should("have.attr", "src"); // Kolla så en bild visas
  });
});

// TEST
describe("See what is rendered", () => {
  it("should render what is rendered", () => {
    cy.visit("https://movie-night-taupe.vercel.app/");
    cy.get("body").then(($body) => {
      cy.log($body.html()); // Skriver ut hela HTML-innehållet på sidan
    });
  });
});
