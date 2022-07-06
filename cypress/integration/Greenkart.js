describe('Greekart', () => {
    it('End to End', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('CA')
        // Selenium get hit url in browser, cypress get acts like find element of selenium
        cy.get('.product:visible').should('have.length', 4)
        // Parent child chaining

        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').should('have.length', 4)
        // cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) => 
        {
          const textVeg = $el.find('h4.product-name').text()
          if(textVeg.includes('Cashews'))
          {
            cy.wrap($el).find('button').click()
          }
        })

        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.brand').then(function(logo)
        {
          cy.log(logo.text())
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()

        // cy.get('select').select()



    })
  })