import BasePage from '../../../pages/BasePage';
import GettingStartedPage from '../../../pages/GettingStartedPage';
import NodeJSHomePage from '../../../pages/NodeJSHomePage';
// var assert = require('assert');



describe('Given: As a user on webdriver.io page', function () {

    const base = new BasePage();
    const gettingStarted = new GettingStartedPage();
    const nodejs = new NodeJSHomePage();

    
    before('setup', () => {
        browser.url('/');
        base.expectTitle.should.equal(base.getTitle());
    });

    
    it('When I click on the Guide button', function () {

        base.homepageGuideBtn.waitForExist();
        base.homepageGuideBtn.click();

        gettingStarted.gettingStartedPageTitle.should.equal(gettingStarted.getTitle());


    });

    it('And I click on the Node Js Link', () => {
        gettingStarted.homepageNodeJSLink.waitForExist();
        gettingStarted.homepageNodeJSLink.click();
    });

    it('Then I verify that the Node JS page loaded', () => {
        nodejs.nodeJSPageTitle.should.equal(nodejs.getTitle());
    });

});


