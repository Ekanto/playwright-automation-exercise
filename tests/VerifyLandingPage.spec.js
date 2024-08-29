const { test, expect } = require("@playwright/test");
const { PlayWrightHooks } = require("../Hooks/AllHooks");
const { before } = require("node:test");

test.beforeEach(async ({ page }) => {
  const hooks = new PlayWrightHooks(page);
  await hooks.launchURL();
});

test("Verify the Home page visible successfully", async ({ page }) => {
  await expect(page).toHaveTitle("Automation Exercise");
  await expect(page).toHaveURL("https://automationexercise.com/");
});

test("Verify new user sign up is available", async ({ page }) => {
  const hooks = new PlayWrightHooks(page);
  await hooks.clickSignUP();
});
