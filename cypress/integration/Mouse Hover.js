describe('Practise Checkboxes', () => {
    it('Lets Try!', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')

    })

        it('Mouse over content', () => {
    
            cy.visit("https://www.amazon.com/")
    
            // cy.get('div.mouse-hover-content').invoke('show')
            cy.get('#nav-tools:nth-child(2) a:nth-of-type(2)').trigger('mouse over')
            cy.contains('Order').click()
    
        })

        it('Add to cart test', () => {
    
            cy.visit("http://automationpractice.com/index.php?")
    
            // cy.get('div.mouse-hover-content').invoke('show')
            cy.get('.ajax_add_to_cart_button').first().click()
            cy.get('.cross').click()
            cy.wait(3000)

            cy.get('.cart_block').should('be.hidden').invoke('show')
            cy.get('#button_order_cart').click()
            cy.url().should('include', 'controller=order')
    
        })


  })