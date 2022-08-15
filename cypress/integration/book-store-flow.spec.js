describe("book store flow", () => {
  it("add new book", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=addBook]").click();

    cy.get("[data-cy=isbnInput]").type("17811794058039");
    cy.wait(100);

    cy.get("[data-cy=titleInput]").type("Codul lui Da Vinci");
    cy.wait(100);

    cy.get("[data-cy=authorInput]").type("Dan Brown");
    cy.wait(100);

    cy.get("[data-cy=quantityInput]").type("1");
    cy.wait(100);

    cy.get("[data-cy=priceInput]").type("12.33");
    cy.wait(100);

    cy.get("[data-cy=coverInput]").type(
      "https://www.raobooks.com/wp-content/uploads/2016/04/dan-brown-codul-lui-da-vinci-ilustrat.jpg"
    );
    cy.wait(100);

    cy.get("[data-cy=okButton]").click();
    cy.wait(100);
  });

  it("rent a book", () => {
    cy.get("[data-cy=rentBook0]").click();
    cy.wait(1000);

    cy.get("[data-cy=nameInput]").type("Bianca Zaharia");
    cy.wait(500);

    cy.get("[data-cy=okButton]").click();
    cy.wait(1000);

    cy.get("[data-cy=checkInfo0]").click();
    cy.wait(1000);

    cy.get("[data-cy=closeModal]").click();
    cy.wait(100);
  });

  it("check disable rent button", () => {
    cy.get("[data-cy=rentBook0]").should("be.disabled");
    cy.wait(100);
  });

  it("see more books", () => {
    cy.get("[data-cy=seeMore]").click();
    cy.get("[data-cy=seeMore]").scrollIntoView();
    cy.wait(100);
  });

  it("get book back", () => {
    cy.get("[data-cy=checkInfo5]").click();
    cy.get("[data-cy=logo]").scrollIntoView();
    cy.wait(3000);
    cy.get("[data-cy=bookBack3]").click();
    cy.get("[data-cy=logo]").scrollIntoView();
    cy.wait(1000);
  });
});
