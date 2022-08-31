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

Scenario('create Account', async ({I, homePage, authPage, createAccountPage, myAccountPage}) => {
    homePage.clickSignIn();
    //authPage.fillEmail(Date.now() + '@test.com');
    authPage.fillEmail(await I.getRandomEmail());
    console.log(await I.getRandomEmail());
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    createAccountPage.submitNewUserFields(); 
    myAccountPage.verifyPage();
});

Scenario('registration', ({homePage, authPage, myAccountPage}) => {
    homePage.clickSignIn();
    authPage.login('A12345@test.com', 12345);
    myAccountPage.verifyPage();
});

Scenario('buy product', async ({I, homePage, authPage, myAccountPage, productPage}) => {
    homePage.clickSignIn();
    authPage.login('A12345@test.com', 12345);
    myAccountPage.verifyPage();
    I.amOnPage('http://automationpractice.com/index.php?id_product=3&controller=product');
    productPage.clickAddToCart();
    productPage.clickProceedToCheckout();
    let productPrice = await I.getNumericPrice(await productPage.getProductPrice());
    console.log(productPrice);
    let productShipping = await I.getNumericPrice(await productPage.getProductShipping());
    console.log(productShipping);
    let productTotalPrice = await productPage.getProductTotalPrice();
    console.log(productTotalPrice);
    let totalPrice = parseFloat(productTotalPrice.replace(/\$|,/g, ''));
    console.log(totalPrice);
    I.assertEqual(totalPrice, (productPrice + productShipping), 'Prices do not match');
    productPage.completePurchase();
    
    /*let str = await productPage.getOrderReference();
    console.log(str.substr(47, 9));*/
});