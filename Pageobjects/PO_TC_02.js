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
}

export default PageObjects02;
