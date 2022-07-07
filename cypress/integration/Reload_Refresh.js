describe('Practise Checkboxes', () => {
    it('Lets Try!', () => {
        cy.visit("https://www.freshworks.com/")

        cy.contains('Support').click()

        cy.reload()

        cy.contains('Support').should('be.visible')

        cy.reload(true, {timeout: 5000}).contains('Support').should('be.visible')



    })
  })