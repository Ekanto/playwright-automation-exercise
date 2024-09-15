const { test, expect } = require("@playwright/test");
import mock_data from "../Resources/mock_data.json";

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

  async enterLoginEmail() {
    await this.pageobjects.loginEmail.fill(mock_data[0].email);
  }
  async enterLoginPassword() {
    await this.pageobjects.loginPassword.fill(mock_data[0].password);
  }
  async clickLoginSubmit() {
    await this.pageobjects.loginSubmit.click();
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
  async clickContinue(){
    await this.pageobjects.continueButton.click()
  }
}

export default PageObjects02;
