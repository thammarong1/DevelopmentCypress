// npx cypress open
///<reference types="Cypress" />


describe('Add iFrames',function(){
    it('Iframe', function() {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(($iframe) =>{
            const frame = $iframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type('hello Iframe')
        })
    });
})