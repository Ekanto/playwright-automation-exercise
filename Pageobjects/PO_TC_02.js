const { test, expect } = require("@playwright/test");

import Locators from "../Locators/Locators";

class PageObjects02 {
  constructor(page) {
    this.pageobjects = new Locators(page);
  }

  async clickSignUP() {
    await this.pageobjects.loginLink.click();
  }

  async verifyLogintextVisible() {
    await expect(this.pageobjects.logintext).toBeVisible();
  }

  async enterLoginEmail(){
    await this.pageobjects.loginEmail.fill('testof@test.com')
  }
  async enterLoginPassword(){
    await this.pageobjects.loginPassword.fill('testof')
  }
  async clickLoginSubmit(){
    await this.pageobjects.loginSubmit.click()
  }
  async verifyAccountCreationConfirmation() {
    await expect(this.pageobjects.checkLoggedIn).toBeVisible();
  }
  async deleteAccount(){
    await this.pageobjects.deleteAccountButton.click()
  }
  async verifyAccountDeleted() {
    await expect(this.pageobjects.accountDeteleConfirmation).toBeVisible();
  } 
}

export default PageObjects02;
