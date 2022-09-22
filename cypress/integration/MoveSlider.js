cy.get(".slider")
  .last()
  .invoke("attr", "style", "left: 80%;")
  .invoke("attr", "aria-valuenow", "80");

cy.get(".slide")
  .invoke("val", "90")
  .trigger("change")
  .click({ force: true, multiple: true });
