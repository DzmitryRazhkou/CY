class HomePage
{
    getEditBox(){
        return cy.get('div.form-group:nth-child(1)')
    }

    getTwoWayDate(){
        return cy.get(':nth-child(1) > .form-control')
    }

    getGender(){
        return cy.get('select')
    }

    getEntrepreneaur(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;


// There are two way to create a POM:

// static getFirstName(firstName){
//     cy.get('#firstnamr').type(firstName, {delay: 30}).should('have.value', firstName)
// }


// Confirm pop up text after registration:

// static submitForm(){
//     cy.get("input[type='button']").click().wait(4000)
//     cy.get('.nf-response-msg').invoke('text').then((text1) => {
//         expect(text1).to.include('Thank You')
//     })
// }
