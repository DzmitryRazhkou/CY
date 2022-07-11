describe('JWT Session', () => {
    it('It is log in thru local storage', () => {

        cy.request({
            method: 'POST',
            url: 'https://rahulshettyacademy.com/api/ecom/auth/login',
            body: {"userEmail": "dimagadjilla@gmail.com", "userPassword": "3036057Dr"},
            failOnStatus: false,

        }).then(function(response){
            expect(response.body).to.have.property('message', 'Login Successfully')
            expect(response.status).to.eq(200)
            Cypress.env('token', response.body.token);
        })

        cy.visit('https://rahulshettyacademy.com/client',
        {
            onBeforeLoad: function(window)
            {
                window.localStorage.setItem('token', Cypress.env('token'))
            }
        })
})
})