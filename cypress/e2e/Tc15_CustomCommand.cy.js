// npx cypress open

/// <reference types = "Cypress"/>

describe('Fixtures', function () {
    beforeEach(function () {
        cy.fixture('LoginData').as('data');

    }) 

// Custom Commands 
// setting : Support >> commands.js
    it('Login - Valid', function () {
        // ConduitLogin is name commands Login
        cy.ConduitLogin(this.data.validEmail, this.data.validPassword)
        cy.get('a[href="#settings"]').click()
        cy.get('.btn.btn-outline-danger').click()
    })

    it('Login - InValid', function () {
        // ConduitLogin is name commands Login
        cy.ConduitLogin(this.data.invalidEmail, this.data.invalidPassword)
        cy.get('.error-messages').should('contain', 'email or password is invalid')
    })
})