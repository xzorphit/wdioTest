

export default class BasePage {

    constructor() {
        //private variables

        this.url = 'https://webdriver.io/';
       
        this.expectTitle = 'WebdriverIO · Next-gen WebDriver test framework for Node.js';
        
        this.headBtns = '/html/body/div[1]/div/header/div/nav/ul/li';

        this.guideBtn = '/html/body/div[1]/div/header/div/nav/ul/li[1]/a';

        this.mainH2 = '/html/body/div[2]/div/div[1]/div/div/div[2]/header/h2';

        this.easyTestImg = '/html/body/div[2]/div/div[2]/div[2]/div/div/div/div[2]/img';
 
    }

    // public variables

    get headerButtons() {
        return browser.$$(this.headBtns).length;
    }

    get homepageGuideBtn() {
        return browser.$(this.guideBtn);
    }

    get mainHeader2() {
        return browser.$(this.mainH2);
    }

    get easyTestSetup() {
        return browser.$(this.easyTestImg);
    }




    // public functions

    verifyTitle(expectedTitle) {
        $('body').waitForVisible();
        const actualTitle = browser.getTitle();
        return actualTitle.should.equal(expectedTitle);
    }

    verifyUrl(url) {
        $('body').waitForVisible();
        const getUrl = browser.getUrl();
        return getUrl.should.include(url);
    }






}
