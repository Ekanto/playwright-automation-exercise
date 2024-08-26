const {expect} = require('@playwright/test');
exports.PlayWrightHooks = class PlayWrightHooks{

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page;
        this.url = 'https://automationexercise.com/';
    }

    async beforeAll(){
        await this.page.goto(this.url);
    }
}
