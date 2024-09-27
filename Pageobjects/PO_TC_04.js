const { test, expect } = require("@playwright/test");

import Locators from "../Locators/Locators";
import mock_data from "../Resources/mock_data.json";


class PageObjects04 {
  constructor(page) {
    this.pageobjects = new Locators(page);
  }

  async clickSignUP() {
    await this.pageobjects.loginLink.click();
  }
  async verifyLogintextVisible() {
    await expect(
      this.pageobjects.logintext,
      "This is the Login Page"
    ).toBeVisible();
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
  async verifyLoggedIn() {
    await expect(this.pageobjects.checkLoggedIn).toBeVisible();
  }

  async clickLogOut(){
    await this.pageobjects.logout.click();
  }

  async verifyLogintextVisible() {
    await expect(
      this.pageobjects.logintext,
      "User redirected to login page"
    ).toBeVisible();
  }
  


}

module.exports = PageObjects04;