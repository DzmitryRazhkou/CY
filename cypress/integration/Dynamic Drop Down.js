describe('Practise Checkboxes', () => {
    it('Lets Try!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#autocomplete').type('Uk')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'Ukraine') {
                $el.click()
            }
        })

        cy.get('#autocomplete').should('have.value','Ukraine')


    })
  })