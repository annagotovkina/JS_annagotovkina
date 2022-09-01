let products = new DataTable(['productLink']);
products.add(['http://automationpractice.com/index.php?id_product=1&controller=product']);
products.add(['http://automationpractice.com/index.php?id_product=4&controller=product']);
products.add(['http://automationpractice.com/index.php?id_product=7&controller=product']);
products.add(['http://automationpractice.com/index.php?controller=contact']);

//const FileReader = require('C:/Users/Anna/Desktop/JS Atomation Courses/JS_annagotovkina/helpers/fileReader.js');
//let productLinks = FileReader.readContectFromFile('C:/Users/Anna/Desktop/JS Atomation Courses/JS_annagotovkina/input/productLinks.txt');
const FileReader = require('./../helpers/fileReader.js');
let productLinks = FileReader.readContectFromFile('./input/productLinks.txt');
let productLinksArray = productLinks.split('\r\n');
let arrayOfObjects = FileReader.getArrayOfProductLinkObjects(productLinksArray);

Feature('buy product');

Before(({ I, homePage, authPage, myAccountPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authPage.login('A12345@test.com', 12345);
    myAccountPage.verifyPage();
});

Data(products).Scenario('buy products', async ({I, productPage, current, tryToHelper}) => {
    I.amOnPage(current.productLink);
    const result = await tryToHelper.checkElementIsVisible({ id: 'add_to_cart' });
    console.log(result);
    if (result) {
        productPage.clickAddToCart();
    } else {
        console.error('Add to cart is not available');
        I.amOnPage('http://automationpractice.com/index.php?id_product=1&controller=product');
        productPage.clickAddToCart();
    };
    productPage.clickProceedToCheckout();
    let productPrice = await I.getNumericPrice(await productPage.getProductPrice());
    console.log(productPrice);
    let productShipping = await I.getNumericPrice(await productPage.getProductShipping());
    console.log(productShipping);
    let productTotalPrice = await I.getNumericPrice(await productPage.getProductTotalPrice());
    console.log(productTotalPrice);
    I.assertEqual(productTotalPrice, (productPrice + productShipping), 'Prices do not match');
    productPage.completePurchase();

    let array = await productPage.getOrderReference();
    console.log(array[0]); 
});

Data(arrayOfObjects).Scenario('buy product', async ({ I, current }) => {
    console.log(current.productLink);
});