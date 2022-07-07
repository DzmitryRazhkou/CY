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