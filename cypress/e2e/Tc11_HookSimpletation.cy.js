// npx cypress open

/// <reference types = "Cypress"/>

describe('Hook', function () {

    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
    })

    it('Search in Admin Tab with Username', function () {
        cy.contains('Admin').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]').type('Admin')
        cy.get('button[type="submit"]').click()
    })

    it('Search in Admin Tab with User Role',function(){
        cy.contains('Admin').click()
        cy.xpath('(//i[contains(@class,"oxd-select-text--arrow")])[1]').click()
        cy.get('div[role="listbox"]').contains('Admin').click()
        cy.get('button[type="submit"]').click()
    })

    it('Search Employees', () => {
        cy.contains('Admin').click()
        cy.xpath('//input[@placeholder="Type for hints..."]').type('Qwerty Qwerty LName')
        cy.get('button[type="submit"]').click()
    });


    afterEach(function (){
        cy.get('.oxd-userdropdown-name').click()
        cy.contains('Logout').click()
    })
})