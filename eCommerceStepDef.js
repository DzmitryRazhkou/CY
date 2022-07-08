import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../pageObjects/HomePage'
import ProductPage from '../../pageObjects/ProductPage'


const homePage = new HomePage()
const productPage = new ProductPage()

Given('I open ECommerce Page', function()
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

When('I add items to cart', () =>
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
    // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')

    // If you need to validate partial text!!!

    cy.get('.alert').then(function(ele){
        const actText = ele.text()
        expect(actText.includes('Success')).to.be.true
    })
})

