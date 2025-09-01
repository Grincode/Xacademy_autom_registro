describe("Registro positivo", () => {
  it("Registro ok", () => {
    cy.visit("https://ticketazo.com.ar/auth/registerUser");
    cy.get('[data-cy="input-nombres"]').type("Juan Manuel");
    cy.get('[data-cy="input-apellido"]').type("Fangio");
    cy.get('[data-cy="input-telefono"]').type(3511234567);
  });
});

