import HomePage from '../integration/pageObjects/HomePage'
import ProductPage from '../integration/pageObjects/ProductPage'

describe('TestFramework', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Test', function() {
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url'))

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDate().should('have.value', this.data.name)
        homePage.getTwoWayDate().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()

        this.data.productName.forEach(function(ele){
            cy.get('h4.card-title').each(($el, index, $list) => {
                if($el.text().includes(ele))
                {
                    cy.get('button.btn.btn-info').eq(index).click()
                }
            })
        })

        productPage.getCheckOut().click()
        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        }).then(function()
        {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element)
        {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()

            expect(Number(total)).to.be.equal(sum)
        })


        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type(this.data.country)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('input#checkbox2').check({force: true})
        cy.get('.ng-untouched > .btn').click()
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')

        // If you need to validate partial text!!!

        cy.get('.alert').then(function(ele){
            const actText = ele.text()
            expect(actText.includes('Success')).to.be.true
        })

    })
})