import BasePage from "../BasePages/basePage";

class LoginPages extends BasePage {

    getEmail() {
        return 'input[type = "email"]'
    }
    getPassword() {
        return 'input[type = "password"]'
    }
    getLoginButton() {
        return 'button[type="submit"]'
    }

    enterEmail(email){
        this.fillText(this.getEmail(),email);
        //return this;
    }

    enterPassword(password){
        this.fillText(this.getPassword(),password);
        //return this;
    }

    clickLoginButton(){
        cy.get(this.getLoginButton()).click()
        this.fillText(this.getLoginButton().true);
    }


}
const loginPage = new LoginPages();
export default loginPage