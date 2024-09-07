const { test, expect } = require("@playwright/test");
const { PlayWrightHooks } = require("../Hooks/AllHooks");
const {Locators} = require("../Locators/Locators");
import PageObjects from "../Pageobjects/PO_TC_01";
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
  const locators = new PageObjects(page);
  await locators.clickSignUP();
});

test('Verify sign up', async ({page}) =>{
  const url = new PlayWrightHooks(page);    
  await url.launchURL();
  const locators = new PageObjects(page);
  await locators.clickSignUP();
  await locators.enterNewUserSignUpName();
  await locators.enterNewUserSignUpEmail();
  await locators.clickNewUserSignUpButton();
  await locators.selectGender();
  await locators.verifyEmailFieldIsDisabled();
  await locators.enterNewUserSignupPassword();
  await locators.selectDays();
  await locators.selectMonths();
  await locators.selectYear();
  await locators.selectNewsLetter();
  await locators.selectSpecialOffers();
  await locators.enterFirstName();
  await locators.enterLastName();
  await locators.enterCompany();
  await locators.enterAddress1();
  await locators.enterAddress2();
  await locators.selectCountry();
  await locators.selectState();
  await locators.enterCity();
  await locators.enterZipCode();
  await locators.enterMobileNumber();
  await locators.clickSubmit()
  await locators.verifyAccountCreationConfirmation();
  await locators.clickContinue()
  await locators.verifyLoggedIn()
  await locators.deleteAccount()
  await locators.verifyAccountDeleted()
  await locators.clickContinue()
  
  
})
