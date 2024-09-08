const { expect } = require("@playwright/test");
import CredGenerator from "../Resources/CredentialGenerator";
class Locators {
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
    this.checkLoggedIn = page.getByText("Logged in as ", +this.credGen);
    this.deleteAccountButton = page.getByRole("link", {
      name: "Delete Account",
    });
    this.accountDeteleConfirmation = page.getByText("Account Deleted!");

    this.logintext = page.locator("h2", { hasText: "Login to your account" });
    this.loginEmail = page.locator('[data-qa="login-email"]');
  }
}

export default Locators;
