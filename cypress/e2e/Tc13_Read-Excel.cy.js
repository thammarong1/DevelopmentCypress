// npx cypress open
/// <reference types = "Cypress"/>


var data;

describe('Read file Excel', function () {
    beforeEach(function () {
        // If you want to refer to Sheet1 then you dont need to pass it deliberately
        // If you want to pass other sheet names then use it like below
        // data = cy.task('readXlsx',{file:'cypress/fixtures/ConduitExcelData.xlsx',sheet:'Sheet2'})
        data = cy.task('readXlsx',{file:'cypress/fixtures/DataExcel.xlsx'})
        .then((rows)=>{
            data = rows
        })
    })

    it('Login - Valid', function () {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder = "Email"]').type(data[0].username)
        cy.get('input[placeholder="Password"]').type(data[0].password)
        cy.get('button[type="submit"]').click()
        cy.get('a[href="#settings"]').click()
        cy.get('.btn.btn-outline-danger').click()
    })

    it('Login - InValid', function () {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder = "Email"]').type(data[1].username)
        cy.get('input[placeholder="Password"]').type(data[1].password)
        cy.get('button[type="submit"]').click()
        cy.get('.error-messages').should('contain', 'email or password is invalid')
    })
})