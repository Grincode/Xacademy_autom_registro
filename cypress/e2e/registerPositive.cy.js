describe("Registro positivo", () => {
  beforeEach(() => {
    cy.visit("https://ticketazo.com.ar/auth/registerUser");
  });
  it("Happy Path", () => {
    cy.get('[data-cy="input-nombres"]').type("Juan Manuel");
    cy.get('[data-cy="input-apellido"]').type("Fangio");
    cy.get('[data-cy="input-telefono"]').type("3511234567");
    cy.get('[data-cy="input-dni"]').type(11222333);
    cy.get('[data-cy="select-provincia"]').type("Córdoba{enter}");
    cy.get('[data-cy="select-localidad"]').type("Dean Funes{enter}");
    cy.contains("dd").type("01");
    cy.contains("mm").type("12");
    cy.contains("aaaa").type("2000");
    cy.get('[data-cy="input-email"]').type("juanmanuelfangio@gmail.com");
    cy.get('[data-cy="input-confirmar-email"]').type(
      "juanmanuelfangio@gmail.com",
    );
    cy.get('[data-cy="input-password"]').type("C123456a+");
    cy.get('[data-cy="input-repetir-password"]').type("C123456a+");

    cy.get('[data-cy="btn-registrarse"]').click();
  });
});
