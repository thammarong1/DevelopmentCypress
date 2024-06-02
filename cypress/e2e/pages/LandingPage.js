class LandingPage {

    getSignin() { 
        return 'Sign in'
    }

    clickSinginButton() {
        cy.contains(this.getSignin()).click()
    }
}
export default LandingPage