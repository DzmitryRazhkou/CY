describe('TestFramework', function(){
    before(function(){
        cy.log(' =====> Before test <===== ')
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Test', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('div.form-group:nth-child(1)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        cy.get(':nth-child(1) > .form-control').should('have.value', this.data.name)
        // Assertion attribute:
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
        // Assert radio button:
        cy.get('#inlineRadio3').should('be.disabled')

        cy.pause()

        // Proceed to home button:
        cy.get(':nth-child(2) > .nav-link').click()

        // Iterate all products: we will move and create a custom command (support/commands.js)

        // this.data.productName.forEach(function(element){
                    // cy.selectProduct('iphone X')
        // })


        this.data.productName.forEach(function(ele){
            cy.get('h4.card-title').each(($el, index, $list) => {
                if($el.text().includes(ele))
                {
                    cy.get('button.btn.btn-info').eq(index).click()
                }
            })
        })

    })
})