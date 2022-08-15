describe("search book", () => {
  it("search for a book", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get("[data-cy=searchTitle]").type("word");
    cy.wait(1000);

    cy.get("[data-cy=checkInfo0]").click();
    cy.wait(2000);

    cy.get("[data-cy=closeModal]").click();
  });
});
