describe("rent book", () => {
  it("rent a book", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=rentBook2]").click();
    cy.wait(1000);

    cy.get("[data-cy=nameInput]").type("Bianca Zaharia");
    cy.wait(500);

    cy.get("[data-cy=okButton]").click();
    cy.wait(1000);

    cy.get("[data-cy=checkInfo2]").click();
  });
});
