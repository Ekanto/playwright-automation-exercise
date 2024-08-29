const {expect} = require('@playwright/test');
exports.PlayWrightHooks = class PlayWrightHooks{

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page;
        this.url = 'https://automationexercise.com/';
        this.loginLink =  page.locator('a[href="/login"]');
    }

    async launchURL(){
        await this.page.goto(this.url);
    }

    async clickSignUP(){
        await expect(this.loginLink).toBeVisible();
    }
}
