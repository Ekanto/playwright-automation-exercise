const {expect} = require('@playwright/test');
exports.Locators = class Locators{

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page;
        this.loginLink =  page.locator('a[href="/login"]');
        this.newUserSignUpName = page.locator('[data-qa="signup-name"]');
        this.newUserSignUpEmail = page.locator('[data-qa="signup-email"]');
    }

    async verifySignUpVisible(){
        await expect(this.loginLink).toBeVisible();
    }

    async clickSignUP(){
        await this.loginLink.click();
    }

    async enterNewUserSignUpName(){
        await this.newUserSignUpName.fill('umar');
    }

    async enterNewUserSignUpEmail(){
        await this.newUserSignUpEmail.fill('umarekanto@gmail.com');
    }
}
