/// <reference types='Cypress' />
/// <reference types='cypress-iframe' />
import 'cypress-iframe'

describe('Frames Test', function(){
    it('Frames', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href='lifetime-access']").eq(0).click({force: true})
        cy.iframe().find('tr th h6').should('not.have.length', 3)
    })
    
})