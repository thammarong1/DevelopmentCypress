// npx cypress open

/// <reference types = "Cypress"/>

describe('Fixtures', function () {
    beforeEach(function(){
        cy.fixture('LoginData').as('data');

    })

    it('Login - Valid', function () {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder = "Email"]').type(this.data.validEmail)
        cy.get('input[placeholder="Password"]').type(this.data.validPassword)
        cy.get('button[type="submit"]').click()
        cy.get('a[href="#settings"]').click()
        cy.get('.btn.btn-outline-danger').click()
    })

    it('Login - InValid', function () {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder = "Email"]').type(this.data.invalidEmail)
        cy.get('input[placeholder="Password"]').type(this.data.invalidPassword)
        cy.get('button[type="submit"]').click()
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})