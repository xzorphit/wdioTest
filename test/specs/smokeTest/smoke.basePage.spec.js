import BasePage from '../../pages/BasePage';

describe('Smoke Test: Given as a user, on the Base Page, the website should load.', () => {
    
    const bp = new BasePage();
    
    before('setup', () => {
        browser.url('/');
        bp.verifyUrl(bp.url);
        bp.verifyTitle(bp.expectTitle);
    });
    
    it('Then the header links should be visible.', () => {
        bp.headerButtons.should.equal(6);
    });

    it('Then the H2 should be visible', () => {
        bp.mainHeader2.should.exist;
    });

    it('Then the easy test setup image should be visbile', () => {
        bp.easyTestSetup.should.exist;
    });
});