let user = {
    firstName: 'Anna',
    lastName: 'Gotovkina',
    password: 12345,
    address: '28 Wall St',
    city: 'New York',
    state: 'New York',
    postalCode: 10005,
    mobilePhone: '+1122334455',
    addressAlias: 'jsAutomation@test.com',
};

Feature('store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage, myAccountPage}) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.fillEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    createAccountPage.submitNewUserFields(); 
    myAccountPage.verifyPage();

});
