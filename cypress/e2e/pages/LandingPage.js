import BasePage from "../BasePages/basePage";
class LandingPage extends BasePage {

    getSignin() { 
        return 'Sign in'
    }

    clickSinginButton() {
        this.clickElement(this.getSignin(),true);
    }
}
const landingPage = new LandingPage();
export default landingPage