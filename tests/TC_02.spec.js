const { test, expect } = require("@playwright/test");
const { PlayWrightHooks } = require("../Hooks/AllHooks");
import PageObjects02 from "../Pageobjects/PO_TC_02";

test("Verify Login with valid credentials is successful", async ({ page }) => {
  const url = new PlayWrightHooks(page);
  const locators = new PageObjects02(page);
  await url.launchURL();
  await expect(page).toHaveTitle("Automation Exercise");
  await expect(page).toHaveURL("https://automationexercise.com/");
  await locators.clickSignUP();
  await locators.verifyLogintextVisible();
  await locators.enterLoginEmail();
  await locators.enterLoginPassword();
  await locators.clickLoginSubmit();
  await locators.verifyAccountCreationConfirmation();
  // await locators.deleteAccount();
  // await locators.verifyAccountDeleted();

});
