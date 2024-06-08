import BasePage from "../BasePages/basePage"
class HomePage extends BasePage{

    getYourFeed() {
        return 'Your Feed'
    }
    
    getGlobalFeed(){
        return 'Global Feed'
    }

    getHome(){
        return 'Home'
    }

    getNewPost(){
        return 'New Post'
    }

    getSettings(){
        return 'Settings'
    }

    checkYourFeedIsvasible(){
        this.isElementVisible(this.getYourFeed(),true);
        //return this;
    }

    clickSittingButton(){
        this.clickElement(this.getSettings(),true);
    }
}
const homePage = new HomePage();
export default homePage