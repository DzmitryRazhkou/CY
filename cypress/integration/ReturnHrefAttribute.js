/*

it('Some Test', () => {
  //Some Other code
  cy.findByTitle(/created/i)
    .parent()
    .parent()
    .invoke('attr', 'href')
    .then((text) => {
      cy.wrap((text.split('/'))[2]).as('hrefValue')
    })
  //Some Other code
  cy.get('@hrefValue').then((hrefValue) => {
    cy.log(hrefValue) //prints the href value
  })
})

*/
