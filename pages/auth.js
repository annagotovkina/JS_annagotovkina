const { I } = inject();

module.exports = {
  emailInput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },
  registeredEmailInput: { css: '#email' },
  registeredPasswordInput: { css: '#passwd' },
  signInButton: { css: '#SubmitLogin'},

  _waitforPageLoad() {
    I.waitForVisible(this.emailInput);
  },

  fillEmail(email) {
    this._waitforPageLoad();
    I.fillField(this.emailInput, email);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  fillRegisteredEmail(email) {
    I.fillField(this.registeredEmailInput, email);
  },

  fillRegisteredPassword(password) {
    I.fillField(this.registeredPasswordInput, password);
  },

  clickSignIn() {
    I.click(this.signInButton);
  },

  login(email, password) {
    this._waitforPageLoad();
    this.fillRegisteredEmail(email);
    this.fillRegisteredPassword(password);
    this.clickSignIn();
  },

  // insert your locators and methods here
}