describe('Practise Checkboxes', () => {
    it('Lets Try!', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('.pull-right').within(() => {
            cy.get('#name').type('Ukr')
            cy.get('#name').should('have.value', 'Ukr')
        })

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Jenkins'))

            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const priceText = price.text()
                expect(priceText).to.equal('20')
            })
        })

    })
  })