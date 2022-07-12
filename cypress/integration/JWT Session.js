describe('JWT Session', () => {
    it('It is log in thru local storage', () => {
        cy.LoginAPI().then(function()
        {
            cy.visit('https://rahulshettyacademy.com/client',
            {
                onBeforeLoad: function(window)
                {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })

        cy.get('div.card-body button:last-of-type').eq(2).click()
        cy.get("[routerlink='/dashboard/cart']").click()
        cy.contains('Checkout').click()
        cy.get('.form-group > .input').type('Uk')
        // cy.get('.ta-results list-group ng-star-inserted').each(($el, index, $list) => {
        //     if($el.text === 'Ukraine'){

        //         cy.wrap($el).click()
        //     }
        // })
        cy.get('.btnn').click()
    })
})