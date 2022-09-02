const { I } = inject();

module.exports = {
  productPrice: { css: '#total_product' },
  productShipping: { css: '#total_shipping' },
  productTotalPrice: { css: '#total_price' },
  addToCartButton: { css: '#add_to_cart' },
  proceedToCheckoutButton: { xpath: '//a[@title="Proceed to checkout"]'},
  proceedToCheckoutButton3: { xpath: '//button[@name="processAddress"]'},
  selectCheker: { css: '#cgv'},
  proceedToCheckoutButton4: { xpath: '//button[@name="processCarrier"]'},
  //totalPrice: { css: '#total_price' },
  payByBankWireButton: { xpath: '//a[@class="bankwire"]'},
  confirmButton: { xpath: '//*[@id="cart_navigation"]/button'},
  orderReference: { xpath: '//div[@class="box"]'},

  clickAddToCart() {
    I.click(this.addToCartButton);
  },

  clickProceedToCheckout() {
    I.waitForVisible(this.proceedToCheckoutButton);
    I.click(this.proceedToCheckoutButton);
  },

  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
  },

  async getProductShipping() {
    return await I.grabTextFrom(this.productShipping);
  },

  async getProductTotalPrice() {
    return await I.grabTextFrom(this.productTotalPrice);
  },

  clickProceedToCheckout2() {
    I.waitForText('Proceed to checkout');
    I.click(this.proceedToCheckoutButton);
  },

  clickProceedToCheckout3() {
    I.waitForVisible(this.proceedToCheckoutButton3);
    I.click(this.proceedToCheckoutButton3);
  },

  selectTermsCheckbox() {
    I.waitForVisible(this.selectCheker);
    I.checkOption(this.selectCheker);
  },

  clickProceedToCheckout4() {
    I.waitForVisible(this.proceedToCheckoutButton4);
    I.click(this.proceedToCheckoutButton4);
  },

  clickPayByBankWire() {
    I.waitForVisible(this.payByBankWireButton);
    I.click(this.payByBankWireButton);
  },

  clickConfirmButton() {
    I.waitForVisible(this.confirmButton);
    I.click(this.confirmButton);
  },

  verifyPage(){
    I.waitForText('Your order on My Store is complete.');
    I.see('Your order on My Store is complete.');
},

completePurchase(){
  this.clickProceedToCheckout2();
  this.clickProceedToCheckout3();
  this.selectTermsCheckbox();
  this.clickProceedToCheckout4();
  this.clickPayByBankWire();
  this.clickConfirmButton();
  this.verifyPage();
},

async getOrderReference() {
  return await I.grabTextFromAll(this.orderReference);
},

}
