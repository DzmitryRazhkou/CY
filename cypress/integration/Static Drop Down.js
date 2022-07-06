describe('Practise Checkboxes', () => {
    it('Lets Try!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')



    })
  })