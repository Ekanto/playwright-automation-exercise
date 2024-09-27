const { test, expect } = require("@playwright/test");

const { PlayWrightHooks } = require("../Hooks/AllHooks");

import PageObjects04 from "../Pageobjects/PO_TC_04";

test("Verify that user is able to log out", async ({ page }) => {
  const url = new PlayWrightHooks(page);
  const locators = new PageObjects04(page);
  await url.launchURL();
  await expect(page, "Verify we are on home page").toHaveTitle(
    "Automation Exercise"
  );
  await expect(page, "Verify we are pointing to home page URL").toHaveURL(
    "https://automationexercise.com/"
  );
  await locators.clickSignUP();
  await locators.verifyLogintextVisible();
  await locators.enterLoginEmail();
  await locators.enterLoginPassword();
  await locators.clickLoginSubmit();
  await locators.verifyLoggedIn();
  await locators.clickLogOut();
  await locators.verifyLogintextVisible();
});
