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
    })
})