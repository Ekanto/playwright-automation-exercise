const { test, expect } = require("@playwright/test");
const { PlayWrightHooks } = require("../Hooks/AllHooks");
const {Locators} = require("../PageObjects/Locators");
const { before } = require("node:test");



test("Verify the Home page visible successfully", async ({ page }) => {
  const url = new PlayWrightHooks(page);
  await url.launchURL();
  await expect(page).toHaveTitle("Automation Exercise");
  await expect(page).toHaveURL("https://automationexercise.com/");
});

test("Verify new user sign up is available", async ({ page }) => {
  const url = new PlayWrightHooks(page);
  await url.launchURL();
  const locators = new Locators(page);
  await locators.verifySignUpVisible();
});

test('Verify sign up', async ({page}) =>{
  const url = new PlayWrightHooks(page);
  await url.launchURL();
  const locators = new Locators(page);
  await locators.clickSignUP();
  await locators.enterNewUserSignUpName();
  await locators.enterNewUserSignUpEmail();
  await page.waitForTimeout(10000);
  
})
