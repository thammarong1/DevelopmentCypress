/// <reference types="Cypress" />

import LandingPage from "./pages/LandingPage"
import LoginPages from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import SettingPage from "./pages/SettingPage"


describe('Page option model Test',function(){

    const landingPage = new LandingPage()
    const loginpage = new LoginPages()
    const homepage = new HomePage()
    const settingpage = new SettingPage()

    beforeEach(function(){
        cy.fixture('LoginData').as('data')
    })

    it('condition - valid credentials ', function() {
        cy.visit('https://react-redux.realworld.io/')
        landingPage.clickSinginButton()
        loginpage.enterEmail(this.data.validEmail)
        loginpage.enterPassword(this.data.validPassword)
        loginpage.clickLoginButton()
        homepage.checkYourFeedIsvasible()
        homepage.clickSittingButton()
        settingpage.clickLogoutButton()
    });

})