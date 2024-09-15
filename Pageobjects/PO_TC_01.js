const { test, expect } = require("@playwright/test");

import Locators from "../Locators/Locators";
const fs = require("fs");
const mockData = require("../Resources/mock_data.json");

class PageObjects01 {
  constructor(page) {
    this.pageobjects = new Locators(page);
  }

  async verifySignUpVisible() {
    await expect(this.pageobjects.loginLink).click();
  }

  async clickSignUP() {
    await this.pageobjects.loginLink.click();
  }

  async enterNewUserSignUpName() {
    await this.pageobjects.newUserSignUpName.fill('umar');
  }

  async enterNewUserSignUpEmail() {
    await this.pageobjects.newUserSignUpEmail.fill(this.pageobjects.credGen + "@test.com");
  }
  async clickNewUserSignUpButton() {
    await this.pageobjects.newUserSignUpButton.click();
  }

  async selectGender() {
    await this.pageobjects.genderSelectMale.check();
  }

  async verifyEmailFieldIsDisabled() {
    await expect(this.pageobjects.emailField).toBeDisabled();
  }
  async enterNewUserSignupPassword() {
    await this.pageobjects.passwordField.fill(this.pageobjects.credGen);
  }
  async selectDays() {
    await this.pageobjects.Days.selectOption("5");
  }
  async selectMonths() {
    await this.pageobjects.Months.selectOption("9");
  }
  async selectYear() {
    await this.pageobjects.Year.selectOption("1994");
  }
  async selectNewsLetter() {
    await this.pageobjects.NewsLetter.check();
  }
  async selectSpecialOffers() {
    await this.pageobjects.specialOffers.check();
  }
  async enterFirstName() {
    await this.pageobjects.firstName.fill("Umar");
  }
  async enterLastName() {
    await this.pageobjects.lastName.fill("Ekanto");
  }
  async enterCompany() {
    await this.pageobjects.company.fill("TestCompany");
  }
  async enterAddress1() {
    await this.pageobjects.address1.fill("Deovog");
  }
  async enterAddress2() {
    await this.pageobjects.address2.fill("Narayanganj");
  }
  async selectCountry() {
    await this.pageobjects.country.selectOption("Australia");
  }
  async selectState() {
    await this.pageobjects.state.fill("New South Wales");
  }
  async enterCity() {
    await this.pageobjects.city.fill("Sydney");
  }
  async enterZipCode() {
    await this.pageobjects.zipCode.fill("2000");
  }
  async enterMobileNumber() {
    await this.pageobjects.mobileNumber.fill("1234567890");
  }
  async clickSubmit() {
    await this.pageobjects.submit.click();
  }
  async verifyAccountCreationConfirmation() {
    await expect(this.pageobjects.accountCreationConfirmation).toBeVisible();
  }
  async clickContinue() {
    await this.pageobjects.continueButton.click();
  }
  async clickLogOut(){
    await this.pageobjects.logout.click();
  }
  async verifyLoggedIn() {
    await expect(this.pageobjects.checkLoggedIn).toBeVisible();
  }
  async deleteAccount() {
    await this.pageobjects.deleteAccountButton.click();
  }
  async verifyAccountDeleted() {
    await expect(this.pageobjects.accountDeteleConfirmation).toBeVisible();
  }
}

export default PageObjects01;
