import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../pageObjects/HomePage'
import ProductPage from '../../pageObjects/ProductPage'

// Create new objects of pages:
const homePage = new HomePage()
const productPage = new ProductPage()

// E-Commerce products delivery

Given('I open ECommerce Page', ()=>
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

When('I add items to cart', function()
{
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
})

And('Validate the total prices', function()
{
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
})

Then('Select the country submit and verify', function()
{
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type(this.data.country)
    cy.get('.suggestions > ul > li > a').click()
    cy.get('input#checkbox2').check({force: true})
    cy.get('.ng-untouched > .btn').click()

    cy.get('.alert').then(function(ele){
        const actText = ele.text()
        expect(actText.includes('Success')).to.be.true
    })
})

// Filling the form to shop

When('I fill the form details', function(dataTable)
{
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the forms behavior', function()
{
    homePage.getTwoWayDate().should('have.value', name)
    homePage.getTwoWayDate().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneaur().should('be.disabled')
})

And('Select the shop page', function()
{
    homePage.getShopTab().click()
})