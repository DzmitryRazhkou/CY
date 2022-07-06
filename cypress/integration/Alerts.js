describe('Practise Checkboxes', () => {
    it('Lets Try!', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Alerts:
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // Window:alert
        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // Remove invoke:

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'academy.com')

        cy.wait(1000)

        cy.go('back')

    })
  })