describe("add book", () => {
  it("add new book", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=addBook]").click();

    cy.get("[data-cy=isbnInput]").type("9781119580249");
    cy.wait(100);

    cy.get("[data-cy=titleInput]").type("Amintiri din Copilarie");
    cy.wait(100);

    cy.get("[data-cy=authorInput]").type("Ion Creanga");
    cy.wait(100);

    cy.get("[data-cy=quantityInput]").type("10");
    cy.wait(100);

    cy.get("[data-cy=priceInput]").type("7.85");
    cy.wait(100);

    cy.get("[data-cy=coverInput]").type(
      "https://www.libris.ro/img/pozeprod/59/1012/F2/324198.jpg"
    );
    cy.wait(100);

    cy.get("[data-cy=okButton]").click();
  });
});
