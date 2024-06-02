// npx cypress open
/// <reference types="Cypress" />
 
const neatCsv = require('neat-csv')
 
describe('Csv test',function(){
 
    var table;
 
    beforeEach(function(){
        cy.fixture('DataCSV.csv')
        .then(neatCsv)
        .then(data=>{
            table = data
        })
    })

    it('Login - Valid', function () {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder = "Email"]').type(table[0].username)
        cy.get('input[placeholder="Password"]').type(table[0].password)
        cy.get('button[type="submit"]').click()
        cy.get('a[href="#settings"]').click()
        cy.get('.btn.btn-outline-danger').click()
    })

    it('Login - InValid', function () {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder = "Email"]').type(table[1].username)
        cy.get('input[placeholder="Password"]').type(table[1].password)
        cy.get('button[type="submit"]').click()
        cy.get('.error-messages').should('contain', 'email or password is invalid')
    })
})