import GettingStartedPage from '../../../pages/GettingStartedPage';

describe('Given: As a user on the Getting Started Page, check that the search function works', () => {
    
    const gs = new GettingStartedPage();
    
    before('setup', () => {
        browser.url('/docs/gettingstarted.html');
        gs.verifyTitle(gs.gettingStartedPageTitle);
        gs.verifyUrl('gettingstarted');
    });
    
    it('When I search for a protocol', () => {
        gs.gsSearchField.waitForExist();
        gs.gsSearchField.clearElement();
        gs.gsSearchField.setValue('findElement');
    });

    it('And I click on the searched protocol', () => {
       gs.gsSearchField.keys('Tab');
    });

    it('Then I validate that the searched protocol exist', () => {
        gs.findElementTitle.should.exist;
    });
});