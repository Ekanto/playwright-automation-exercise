const { test, expect } = require("@playwright/test");
const { PlayWrightHooks } = require("../Hooks/AllHooks");
const { Locators } = require("../Locators/Locators");

test("Verify Login with valid credentials is successful", async ({ page }) => {
  const url = new PlayWrightHooks(page);
  const locators = new Locators(page);
  await url.launchURL();
  await expect(page).toHaveTitle("Automation Exercise");
  await expect(page).toHaveURL("https://automationexercise.com/");
  await locators.clickSignUP()


});
