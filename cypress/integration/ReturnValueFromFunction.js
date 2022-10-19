/* We can't return synchronous value from asynchronous code.
Once part of your method is async, then method return value is async
and must be treated as such.
*/

/*

Class page:

getValue() {  
  // returns a wrapped version of the text
  return cy.get("section[class^='Hero'] > div")
    .invoke('text')
}

Test page:

page1.getValue().then((divTitle) => {  // wrapped text must be accessed with .then()
  page2.processValue(divTitle);
})


OR ====>>>>>>

Page:

getValue() {  
  // no return value, but sets a Cypress alias (asynchronously)

  cy.get("section[class^='Hero'] div")
    .invoke('text')
    .as('divTitle')
}

Test:

page1.getValue()
cy.then(() => {    // cy.then() waits for the alias value to be set
  page2.processValue(this.divTitle);
})

*/

/*

const faker = require('faker')
    import User from '../../support/User';

    describe('Toggle button for description offer', () => {
      const user = new User({
        first_name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        email: `QA_${faker.internet.email()}`,
        password: 'xxx'
      })
      let offer = null

      before(async () => {
        await user.createOnServer()
        offer = await user.createOffer()
        await offer.publish()
      })

      beforeEach(() => {
        user.login()
        cy.visit(`/offers/${offer.details.id}`)
        cy.get('.offer-description__content button').as('showMoreButton')
      })

      it('XXX', function () {
        ...some test
      })
    })

*/
