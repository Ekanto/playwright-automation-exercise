const { expect } = require("@playwright/test");
import Locators from "../Locators/Locators";
import mock_data from "../Resources/mock_data.json";

class PageObjects05 {
  constructor(page) {
    this.pageobjects = new Locators(page);
  }

  async clickSignUP() {
    await this.pageobjects.loginLink.click();
  }

  async verifyNewUserSignUpHeading() {
    await expect(
      this.pageobjects.newUserSignUpHeading,
      "Verify New User Signup Heading"
    ).toBeVisible();
  }

  async submitNewUserSignUpName() {
    await this.pageobjects.newUserSignUpName.fill("test");
  }

  async submitNewUserSignUpEmail() {
    await this.pageobjects.newUserSignUpEmail.fill(mock_data[0].email);
  }

  async submitNewUserSignUpButton() {
    await this.pageobjects.newUserSignUpButton.click();
  }

  async verifyTheMessage() {
    await expect(
      this.pageobjects.existingEmailText,
      "Verify User already exist"
    ).toBeVisible();
  }
}

module.exports = PageObjects05;
