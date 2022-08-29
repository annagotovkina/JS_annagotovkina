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

Before(({ I }) => { // or Background
    I.openStore();
});

Scenario('create Account', ({ I, homePage, authPage, createAccountPage, myAccountPage}) => {
    homePage.clickSignIn();
    authPage.fillEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    createAccountPage.submitNewUserFields(); 
    myAccountPage.verifyPage();

});

Scenario('registration', ({ I, homePage, authPage, myAccountPage}) => {
    homePage.clickSignIn();
    authPage.login('A12345@test.com', 12345);
    myAccountPage.verifyPage();

});

Scenario('buy product', async ({ I, homePage, authPage, myAccountPage, productPage}) => {
    homePage.clickSignIn();
    authPage.login('A12345@test.com', 12345);
    myAccountPage.verifyPage();
    I.openProduct();
    let productPrice = await productPage.getProductPrice();
    console.log(productPrice);
    let price = parseFloat(productPrice.replace(/\$|,/g, ''));
    console.log(price);
    productPage.clickAddToCart();
    productPage.clickProceedToCheckout();
    let productShipping = await productPage.getProductShipping();
    console.log(productShipping);
    let shipping = parseFloat(productShipping.replace(/\$|,/g, ''));
    console.log(shipping);
    let productTotalPrice = await productPage.getProductTotalPrice();
    console.log(productTotalPrice);
    let totalPrice = parseFloat(productTotalPrice.replace(/\$|,/g, ''));
    console.log(totalPrice);
    I.assertEqual(totalPrice, (price + shipping), 'Prices do not match');
    productPage.clickProceedToCheckout2();
    productPage.clickProceedToCheckout3();
    productPage.checkSelectCheker();
    productPage.clickProceedToCheckout4();
    productPage.clickPayByBankWire();
    productPage.clickConfirmButton();
    productPage.verifyPage();
    /*let str = await productPage.getOrderReference();
    console.log(str.substr(47, 9));*/

});