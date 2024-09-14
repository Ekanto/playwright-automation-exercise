const {test,expect} = require("@playwright/test");

const {PlayWrightHooks} = require("../Hooks/AllHooks");

import PageObjects03 from "../Pageobjects/PO_TC_03";

test("Verify login user with incorrect email and password", async ({page}) =>{
    const url = new PlayWrightHooks(page);
    const locators = new PageObjects03(page);
    await url.launchURL();
    await expect(page, 'Verify we are on home page').toHaveTitle("Automation Exercise");
    await expect(page, 'Verify we are pointing to home page URL').toHaveURL("https://automationexercise.com/");
    await locators.clickSignUP();
    await locators.verifyLogintextVisible();
    await locators.enterLoginEmail();
    await locators.enterLoginPassword();
    await locators.clickLoginSubmit();
    await locators.verifyWrongCredentialsSubmitted();   


})




