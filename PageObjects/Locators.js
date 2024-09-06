const { expect } = require("@playwright/test");
import CredGenerator from "../Resources/CredentialGenerator";
exports.Locators = class Locators {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.credGen = CredGenerator.generate();
    this.page = page;
    this.loginLink = page.locator('a[href="/login"]');
    this.newUserSignUpName = page.locator('[data-qa="signup-name"]');
    this.newUserSignUpEmail = page.locator('[data-qa="signup-email"]');
    this.newUserSignUpButton = page.locator('[data-qa="signup-button"]');
    this.genderSelectMale = page.getByLabel("Mr.");
    this.emailField = page.locator('[data-qa="email"]');
    this.passwordField = page.locator('[data-qa="password"]');
    this.Days = page.locator('[data-qa="days"]');
    this.Months = page.locator('[data-qa="months"]');
    this.Year = page.locator('[data-qa="years"]');
    this.NewsLetter = page.locator("id=newsletter");
    this.specialOffers = page.locator("id=optin");
    this.firstName = page.locator('[data-qa="first_name"]');
    this.lastName = page.locator('[data-qa="last_name"]');
    this.company = page.locator('[data-qa="company"]');
    this.address1 = page.locator('[data-qa="address"]');
    this.address2 = page.locator('[data-qa="address2"]');
    this.country = page.locator('[data-qa="country"]');
    this.state = page.locator('[data-qa="state"]');
    this.city = page.locator('[data-qa="city"]');
    this.zipCode = page.locator('[data-qa="zipcode"]');
    this.mobileNumber = page.locator('[data-qa="mobile_number"]');
    this.submit = page.locator('[data-qa="create-account"]');
    this.accountCreationConfirmation = page.locator(
      '[data-qa="account-created"]'
    );
    this.continueButton = page.locator('[data-qa="continue-button"]');
    this.checkLoggedIn = page.getByText('Logged in as ',+this.credGen);
    this.deleteAccountButton = page.getByRole('link', { name: 'Delete Account' })
    this.accountDeteleConfirmation = page.getByText('Account Deleted!')
  }

  async verifySignUpVisible() {
    await expect(this.loginLink).toBeVisible();
  }

  async clickSignUP() {
    await this.loginLink.click();
  }

  async enterNewUserSignUpName() {
    await this.newUserSignUpName.fill(this.credGen);
  }

  async enterNewUserSignUpEmail() {
    await this.newUserSignUpEmail.fill(this.credGen + "@gmail.com");
  }
  async clickNewUserSignUpButton() {
    await this.newUserSignUpButton.click();
  }

  async selectGender() {
    await this.genderSelectMale.check();
  }

  async verifyEmailFieldIsDisabled() {
    await expect(this.emailField).toBeDisabled();
  }
  async enterNewUserSignupPassword() {
    await this.passwordField.fill("123456");
  }
  async selectDays() {
    await this.Days.selectOption("5");
  }
  async selectMonths() {
    await this.Months.selectOption("9");
  }
  async selectYear() {
    await this.Year.selectOption("1994");
  }
  async selectNewsLetter() {
    await this.NewsLetter.check();
  }
  async selectSpecialOffers() {
    await this.specialOffers.check();
  }
  async enterFirstName() {
    await this.firstName.fill("Umar");
  }
  async enterLastName() {
    await this.lastName.fill("Ekanto");
  }
  async enterCompany() {
    await this.company.fill("TestCompany");
  }
  async enterAddress1() {
    await this.address1.fill("Deovog");
  }
  async enterAddress2() {
    await this.address2.fill("Narayanganj");
  }
  async selectCountry() {
    await this.country.selectOption("Australia");
  }
  async selectState() {
    await this.state.fill("New South Wales");
  }
  async enterCity() {
    await this.city.fill("Sydney");
  }
  async enterZipCode() {
    await this.zipCode.fill("2000");
  }
  async enterMobileNumber() {
    await this.mobileNumber.fill("1234567890");
  }
  async clickSubmit() {
    await this.submit.click();
  }
  async verifyAccountCreationConfirmation() {
    await expect(this.accountCreationConfirmation).toBeVisible();
  }
  async clickContinue() {
    await this.continueButton.click();
  }
  async verifyLoggedIn() {
    await expect(this.checkLoggedIn).toBeVisible();
  }
    async deleteAccount() {
        await this.deleteAccountButton.click();
    }
    async verifyAccountDeleted() {
        await expect(this.accountDeteleConfirmation).toBeVisible();
    }
};
