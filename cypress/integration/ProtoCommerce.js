import HomePage from '../integration/pageObjects/HomePage'

describe('TestFramework', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Test', function() {

        const homePage = new HomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getEditBox.type(this.data.name)
        homePage.getGender.select(this.data.gender)
        homePage.getTwoWayDate.should('have.value', this.data.name)
        homePage.getEditBox.should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur.should('be.disabled')
        homePage.getShopTab.click()

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