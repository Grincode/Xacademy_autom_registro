describe("Registro negativo", () => {
  beforeEach(() => {
    cy.visit("https://ticketazo.com.ar/auth/registerUser");
  });

  it("Debería mostrar error si los emails no coinciden", () => {
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
      "juanmanuefangio@gmail.com",
    );
    cy.get('[data-cy="input-password"]').type("C123456a+");
    cy.get('[data-cy="input-repetir-password"]').type("C123456a+");
    //cy.contains("Los correos electrónicos no coinciden").should("be.visible");
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.get('[data-cy="error-message"]').should("be.visible");
  });

  it("Debería mostrar error si los las contraseñas no coinciden", () => {
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
    cy.get('[data-cy="input-repetir-password"]').type("C654321b+");
    //cy.contains("Los correos electrónicos no coinciden").should("be.visible");
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.get('[data-cy="error-message"]').should("be.visible");
  });

  it("Debería mostrar error si la fecha de nacimiento supera la fecha actual", () => {
    cy.get('[data-cy="input-nombres"]').type("Juan Manuel");
    cy.get('[data-cy="input-apellido"]').type("Fangio");
    cy.get('[data-cy="input-telefono"]').type("3511234567");
    cy.get('[data-cy="input-dni"]').type(11222333);
    cy.get('[data-cy="select-provincia"]').type("Córdoba{enter}");
    cy.get('[data-cy="select-localidad"]').type("Dean Funes{enter}");
    cy.contains("dd").type("01");
    cy.contains("mm").type("12");
    cy.contains("aaaa").type("2027");
    cy.get('[data-cy="input-email"]').type("juanmanuelfangio@gmail.com");
    cy.get('[data-cy="input-confirmar-email"]').type(
      "juanmanuelfangio@gmail.com",
    );
    cy.get('[data-cy="input-password"]').type("C123456a+");
    cy.get('[data-cy="input-repetir-password"]').type("C123456a+");
    //cy.contains("Los correos electrónicos no coinciden").should("be.visible");
    cy.get('[data-cy="btn-registrarse"]').click();
  });
  it("Debería mostrar error si el email no es válido", () => {
    cy.get('[data-cy="input-nombres"]').type("Juan Manuel");
    cy.get('[data-cy="input-apellido"]').type("Fangio");
    cy.get('[data-cy="input-telefono"]').type("3511234567");
    cy.get('[data-cy="input-dni"]').type(11222333);
    cy.get('[data-cy="select-provincia"]').type("Córdoba{enter}");
    cy.get('[data-cy="select-localidad"]').type("Dean Funes{enter}");
    cy.contains("dd").type("01");
    cy.contains("mm").type("12");
    cy.contains("aaaa").type("2019");
    cy.get('[data-cy="input-email"]').type("juanmanuelfangio@gmail");
    cy.get('[data-cy="input-confirmar-email"]').type("juanmanuelfangio@gmail");
    cy.get('[data-cy="input-password"]').type("C123456a+");
    cy.get('[data-cy="input-repetir-password"]').type("C123456a+");
    //cy.contains("Los correos electrónicos no coinciden").should("be.visible");
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.get('[data-cy="error-message"]').should("be.visible");
  });

  it("Debería mostrar error si el telefono son letras", () => {
    cy.get('[data-cy="input-nombres"]').type("Juan Manuel");
    cy.get('[data-cy="input-apellido"]').type("Fangio");
    cy.get('[data-cy="input-telefono"]').type("adcdfghijk");
    cy.get('[data-cy="input-dni"]').type(11222333);
    cy.get('[data-cy="select-provincia"]').type("Córdoba{enter}");
    cy.get('[data-cy="select-localidad"]').type("Dean Funes{enter}");
    cy.contains("dd").type("01");
    cy.contains("mm").type("12");
    cy.contains("aaaa").type("2019");
    cy.get('[data-cy="input-email"]').type("juanmanuelfangio@gmail.com");
    cy.get('[data-cy="input-confirmar-email"]').type(
      "juanmanuelfangio@gmail.com",
    );
    cy.get('[data-cy="input-password"]').type("C123456a+");
    cy.get('[data-cy="input-repetir-password"]').type("C123456a+");
    //cy.contains("Los correos electrónicos no coinciden").should("be.visible");
    cy.get('[data-cy="btn-registrarse"]').click();
  });

  it("Debería mostrar error si el DNI son letras", () => {
    cy.get('[data-cy="input-nombres"]').type("Juan Manuel");
    cy.get('[data-cy="input-apellido"]').type("Fangio");
    cy.get('[data-cy="input-telefono"]').type("3511234567");
    cy.get('[data-cy="input-dni"]').type("asdasdasd");
    cy.get('[data-cy="select-provincia"]').type("Córdoba{enter}");
    cy.get('[data-cy="select-localidad"]').type("Dean Funes{enter}");
    cy.contains("dd").type("01");
    cy.contains("mm").type("12");
    cy.contains("aaaa").type("2019");
    cy.get('[data-cy="input-email"]').type("juanmanuelfangio@gmail.com");
    cy.get('[data-cy="input-confirmar-email"]').type(
      "juanmanuelfangio@gmail.com",
    );
    cy.get('[data-cy="input-password"]').type("C123456a+");
    cy.get('[data-cy="input-repetir-password"]').type("C123456a+");
    //cy.contains("Los correos electrónicos no coinciden").should("be.visible");
    cy.get('[data-cy="btn-registrarse"]').click();
  });
});
