import BasePage from './BasePage';

export default class GettingStartedPage extends BasePage {

    constructor() {
        //private variables

        super()

        this.gettingStartedPageTitle = 'Getting Started · WebdriverIO';

        this.gsSearch = '#search_input_react';

        this.nodejsLink = '/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/p[4]/a[1]';

        this.gsfindElementTitle = '#findelement';
    }

    // public variables 


    
    get gsSearchField() {
        return browser.$(this.gsSearch);
    }
    
    get homepageNodeJSLink() {
        return browser.$(this.nodejsLink);
    }

    get findElementTitle() {
        return browser.$(this.gsfindElementTitle);
    }

    // public functions

    


}


