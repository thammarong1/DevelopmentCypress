class LoginPages {

    getEmail() {
        return 'input[type = "email"]'
    }
    getPassword() {
        return 'input[type = "password"]'
    }
    getLoginButton() {
        return 'button[type="submit"]'
    }

    enterEmail(emailValue){
        cy.get(this.getEmail()).type(emailValue)
    }
    enterPassword(passwordValue){
        cy.get(this.getPassword()).type(passwordValue)
    }
    clickLoginButton(){
        cy.get(this.getLoginButton()).click()
    }


}
export default LoginPages