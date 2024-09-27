const { test, expect } = require("@playwright/test");
const { PlayWrightHooks } = require("../Hooks/AllHooks");
import PageObjects05 from "../Pageobjects/PO_TC_05";

test("Verify that user can't register with existing email", async ({ page }) => {
  const url = new PlayWrightHooks(page);
  const locators = new PageObjects05(page);
  await url.launchURL();
  await expect(page, "Verify we are on home page").toHaveTitle("Automation Exercise");
  await expect(page, "Verify we are pointing to home page URL").toHaveURL("https://automationexercise.com/");
  await locators.clickSignUP();
  await locators.verifyNewUserSignUpHeading();
  await locators.submitNewUserSignUpName();
  await locators.submitNewUserSignUpEmail();
  await locators.submitNewUserSignUpButton();
  await locators.verifyTheMessage();

  
});
