const { test, expect } = require("@playwright/test");

import Locators from "../Locators/Locators";

class PageObjects03 {
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
    await this.pageobjects.loginEmail.fill("incorrect@test.com");
  }
  async enterLoginPassword() {
    await this.pageobjects.loginPassword.fill("incorrectpassword");
  }
    async clickLoginSubmit() {
        await this.pageobjects.loginSubmit.click();
    }
    async verifyWrongCredentialsSubmitted(){
        await expect(this.pageobjects.incorrectLoginCredText, "Login attempt with incorrect crednetials").toBeVisible();
    }
}


export default PageObjects03;
