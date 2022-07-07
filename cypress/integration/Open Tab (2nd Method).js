describe('Practise Checkboxes', () => {
    it('Lets Try!', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function(ele)
        {
            const url = ele.prop('href')
            cy.log(url)
            cy.visit(url)
        })

    })
  })