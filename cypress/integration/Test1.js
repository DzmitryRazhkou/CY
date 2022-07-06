describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('CA')
        // Selenium get hit url in browser, cypress get acts like find element of selenium
        cy.get('.product:visible').should('have.length', 4)
        // Parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    })
  })