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
        this.newUserSignUpButton = page.locator('[data-qa="signup-button"]');
        this.genderSelectMale = page.getByLabel('Mr.')
        this.emailField = page.locator('[data-qa="email"]');
        this.passwordField = page.locator('[data-qa="password"]');
        this.Days = page.locator('[data-qa="days"]');
        this.Months = page.locator('[data-qa="months"]')
        this.Year  = page.locator('[data-qa="years"]')
        this.NewsLetter = page.locator('id=newsletter')
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
    async clickNewUserSignUpButton(){
        await this.newUserSignUpButton.click();
    }

    async selectGender(){
        await this.genderSelectMale.check();
    }

    async verifyEmailFieldIsDisabled(){
        await expect(this.emailField).toBeDisabled();
    }
    async enterNewUserSignupPassword(){
        await this.passwordField.fill('123456');    
    }
    async selectDays(){
        await this.Days.selectOption('5');
    }
    async selectMonths(){
        await this.Months.selectOption('9');
    }
    async selectYear(){
        await this.Year.selectOption('1994');
    }
    async selectNewsLetter(){
        await this.NewsLetter.check();
    }

    
}
