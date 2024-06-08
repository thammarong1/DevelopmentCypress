import BasePage from "../BasePages/basePage";
class SettingsPage extends BasePage {

    getLogoutButton(){
        return 'Or click here to logout.'
    }

    clickLogoutButton(){
        cy.contains(this.getLogoutButton()).click()
        this.clickElement(this.getLogoutButton(),true)
    }
}
const settingsPage = new SettingsPage();
export default settingsPage