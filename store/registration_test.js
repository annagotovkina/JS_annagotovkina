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

Before(({ I }) => { 
    I.openStore();
});

Scenario('create Account', async ({I, homePage, authPage, createAccountPage, myAccountPage}) => {
    homePage.clickSignIn();
    authPage.fillEmail(await I.getRandomEmail());
    console.log(await I.getRandomEmail());
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    createAccountPage.submitNewUserFields(); 
    myAccountPage.verifyPage();
});