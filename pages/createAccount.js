const { I } = inject();

module.exports = {
  firstNameInput: { css: '#customer_firstname' },
  lastNameInput: { css: '#customer_lastname' },
  passwordInput: { css: '#passwd' },
  addressdInput: { css: '#address1' },
  cityInput: { css: '#city' },
  stateDropDown: { css: '#id_state' },
  postalCodeInput: { css: '#postcode' },
  mobilePhoneInput: { css: '#phone_mobile' },
  addressAliasInput: { css: '#alias' },
  registerButton: { css: '#submitAccount' },

  fillNewAccountFields(user) {
    I.waitForVisible(this.firstNameInput);
    I.fillField(this.firstNameInput, user.firstName);
    I.waitForVisible(this.lastNameInput);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.passwordInput, user.password);
    I.fillField(this.addressdInput, user.address);
    I.waitForVisible(this.cityInput);
    I.fillField(this.cityInput, user.city);
    I.click(this.stateDropDown);
    I.selectOption(this.stateDropDown, user.state);
    I.fillField(this.postalCodeInput, user.postalCode);
    I.fillField(this.mobilePhoneInput, user.mobilePhone);
    I.fillField(this.addressAliasInput, user.addressAlias);
  },

  submitNewUserFields() {
    I.click(this.registerButton);
  }
}
