class HomePage {

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
        cy.contains(this.getYourFeed()).should('be.visible')
    }

    clickSittingButton(){
        cy.contains(this.getSettings()).click()
    }
}
export default HomePage