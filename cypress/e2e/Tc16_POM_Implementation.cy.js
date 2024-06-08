/// <reference types="Cypress" />

import landingPage from "./pages/landingPage";
import loginPage from "./pages/loginPage";
import homePage from "./pages/homePage";
import settingsPage from "./pages/settingPage";


describe('Page option model (POM)',function(){

    beforeEach(function(){
        cy.fixture('LoginData').as('data')
    })

    it('condition - valid credentials ', function() {
        cy.visit('/')
        landingPage.clickSinginButton()
        loginPage.enterEmail(this.data.validEmail)
        loginPage.enterPassword(this.data.validPassword)
        loginPage.clickLoginButton()
        homePage.checkYourFeedIsvasible()
        homePage.clickSittingButton()
        settingsPage.clickLogoutButton()
    });




})